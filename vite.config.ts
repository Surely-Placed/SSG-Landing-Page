import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import contactHandler from "./api/contact.ts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Ensure server-side code (dev middleware) can read `.env` values.
  // Vite only automatically exposes prefixed vars to the client, so we explicitly load here.
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return ({
  server: {
    // Use IPv4-friendly binding for testing on iOS Safari / devices on LAN.
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    // Improves compatibility for older Safari versions (and other legacy browsers).
    legacy({
      targets: ["defaults", "safari >= 12"],
    }),
    // Local dev middleware so /api/contact works under `vite dev`.
    // On Vercel, the real serverless function handles this route.
    {
      name: "local-api-contact",
      configureServer(server) {
        server.middlewares.use("/api/contact", async (req, res, next) => {
          try {
            // Only handle POST; let other methods fall through.
            if (req.method !== "POST") return next();

            let raw = "";
            req.on("data", (chunk) => {
              raw += chunk;
            });
            req.on("end", async () => {
              try {
                (req as any).body = raw ? JSON.parse(raw) : {};
              } catch {
                (req as any).body = {};
              }

              // minimal VercelResponse-like helpers
              (res as any).status = (code: number) => {
                res.statusCode = code;
                return res;
              };
              (res as any).json = (obj: unknown) => {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(obj));
              };

              await (contactHandler as any)(req, res);
            });
          } catch (e) {
            return next(e as any);
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // SVGs used as hero background images include `url(#id)` references (gradients/filters).
    // When these SVGs are inlined as data URIs, `#` fragments can break parsing and the image
    // can render as blank in production.
    // Fix: never inline just the service hero SVGs; emit them as real files in `dist/assets`.
    assetsInlineLimit: (filePath, content) => {
      const normalized = filePath.split(path.sep).join("/");
      if (normalized.includes("src/assets/services/") && normalized.endsWith(".svg")) return false;
      // Default Vite behavior (4KB)
      return content.byteLength < 4096;
    },
  },
  });
});
