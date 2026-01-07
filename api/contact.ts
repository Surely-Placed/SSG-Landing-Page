import nodemailer from "nodemailer";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  // Honeypot field (bots fill it)
  company?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 min
const RATE_LIMIT_MAX = 5; // per IP per window

// Very small in-memory rate limit (best-effort; serverless cold starts reset it).
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true as const };
  }
  if (entry.count >= RATE_LIMIT_MAX) return { ok: false as const, retryAfterMs: entry.resetAt - now };
  entry.count += 1;
  return { ok: true as const };
}

function getEnv(name: string) {
  const v = process.env[name];
  return v?.trim() || "";
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });

    const ip =
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown";

    const rl = rateLimit(ip);
    if (!rl.ok) {
      res.setHeader("Retry-After", Math.ceil(rl.retryAfterMs / 1000));
      return res.status(429).json({ ok: false, error: "Too many requests. Please try again shortly." });
    }

    const body = (req.body ?? {}) as Body;

    // Honeypot: if present, pretend success (avoid giving bots signals).
    if (body.company && body.company.trim().length > 0) return res.status(200).json({ ok: true });

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (name.length < 2) return res.status(400).json({ ok: false, error: "Invalid name" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok: false, error: "Invalid email" });
    if (subject.length < 2) return res.status(400).json({ ok: false, error: "Invalid subject" });
    if (message.length < 10) return res.status(400).json({ ok: false, error: "Invalid message" });

    const to = getEnv("CONTACT_EMAIL_TO");
    const user = getEnv("CONTACT_EMAIL_USER");
    const pass = getEnv("CONTACT_EMAIL_PASS");
    const fromName = process.env.CONTACT_EMAIL_FROM_NAME || "SSG Job Consultants";

    if (!to || !user || !pass) {
      return res.status(500).json({
        ok: false,
        error: "Email service is not configured. Please set CONTACT_EMAIL_TO/USER/PASS in your environment.",
      });
    }

    // Gmail app-password SMTP (works on Vercel). For best deliverability, keep FROM = authenticated mailbox.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

  const safeSubject = `[SSG Website] ${subject}`.slice(0, 180);
  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
    "",
    `Time: ${new Date().toISOString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  // Clean, readable HTML (avoid spammy marketing patterns)
  const html = `
    <div style="background:#f6f7fb;padding:24px;">
      <div style="max-width:720px;margin:0 auto;font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; color:#111827;">
        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
          <div style="padding:18px 20px;border-bottom:1px solid #e5e7eb;background:linear-gradient(90deg, rgba(20,184,166,0.10), rgba(59,130,246,0.06), rgba(255,255,255,0));">
            <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#0f766e;font-weight:700;">SSG Job Consultants</div>
            <h2 style="margin:8px 0 0;font-size:22px;line-height:1.2;">New contact form submission</h2>
          </div>

          <div style="padding:18px 20px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;width:120px;">Name</td>
                <td style="padding:8px 0;font-weight:600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;">Email</td>
                <td style="padding:8px 0;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${phone ? `
                <tr>
                  <td style="padding:8px 0;color:#6b7280;">Phone</td>
                  <td style="padding:8px 0;">${escapeHtml(phone)}</td>
                </tr>
              ` : ""}
              <tr>
                <td style="padding:8px 0;color:#6b7280;">Subject</td>
                <td style="padding:8px 0;">${escapeHtml(subject)}</td>
              </tr>
            </table>

            <div style="margin-top:14px;">
              <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;font-weight:700;">Message</div>
              <div style="margin-top:8px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;padding:14px;white-space:pre-wrap;line-height:1.6;">
                ${escapeHtml(message)}
              </div>
            </div>

            <div style="margin-top:16px;font-size:12px;color:#6b7280;">
              Received: ${new Date().toISOString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    await transporter.sendMail({
      to,
      from: `${fromName} <${user}>`,
      replyTo: email, // lets you reply to the sender while keeping From aligned for deliverability
      subject: safeSubject,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Email send failed:", err);
    return res.status(500).json({ ok: false, error: "Failed to send message" });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


