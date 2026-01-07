import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlurText from "@/components/BlurText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const HR_EMAIL = "hr@ssggetjob.com";
const PHONE = "+91 99878 15794";
const LOCATION = "Gandhinagar, Gujarat, India";

type Role = {
  title: string;
  slug: string;
  summary: string;
};

const roles: Role[] = [
  {
    title: "SDE (Software Development Engineer)",
    slug: "sde",
    summary:
      "Build and ship product features with strong engineering fundamentals, clean architecture, and performance-first thinking.",
  },
  {
    title: "Tech Writer",
    slug: "tech-writer",
    summary:
      "Translate complex ideas into crisp documentation, product narratives, and content that drives clarity and adoption.",
  },
  {
    title: "Strategist",
    slug: "strategist",
    summary:
      "Design high-leverage strategies across hiring, career architecture, and AI-driven workflows — with ruthless prioritization.",
  },
  {
    title: "Talent Deployment Specialist",
    slug: "talent-deployment-specialist",
    summary:
      "Match talent to outcomes by designing pipelines, improving execution systems, and ensuring high-signal delivery across roles.",
  },
];

function roleMailto(roleTitle: string) {
  const subject = `Application: ${roleTitle}`;
  const body = [
    `Hi SSG Consultant Team,`,
    "",
    `I’d like to apply for: ${roleTitle}`,
    "",
    "Name:",
    "Phone:",
    "LinkedIn:",
    "Portfolio/GitHub (if applicable):",
    "",
    "Short note (optional):",
    "",
    "Please find my resume attached.",
  ].join("\n");

  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary py-16 lg:py-20">
          <GridPattern
            className="opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,white,transparent_65%)]"
            squares={[
              [4, 4],
              [7, 2],
              [12, 6],
              [16, 3],
              [19, 7],
              [23, 4],
            ]}
          />
          <div className="container relative">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Careers
              </Badge>
              <div className="mt-4">
                <BlurText
                  text="Force Multipliers Wanted"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  repeat
                  className="justify-center font-heading text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
                />
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                If you thrive in Radical Candor, Asynchronous Excellence, and Hyper-Growth — your next chapter starts here.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs */}
        <section id="jobs" className="bg-background py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Jobs</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Open roles
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose a role and apply via email. No broken links — just a direct line to HR.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
              {roles.map((role) => (
                <Card key={role.slug} className="rounded-2xl shadow-soft transition-all hover:shadow-card">
                  <CardHeader className="space-y-2">
                    <CardTitle className="font-heading text-xl">{role.title}</CardTitle>
                    <div className="h-1 w-12 bg-accent/70" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{role.summary}</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button asChild className="rounded-full">
                        <a href={roleMailto(role.title)}>
                          Apply via Email <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={`mailto:${HR_EMAIL}?subject=${encodeURIComponent(`Question about ${role.title}`)}`}>
                          Ask a question
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reach us */}
        <section id="reach-us" className="bg-secondary py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">How to reach us</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Contact
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Prefer a direct route? Reach us through email or phone.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a className="text-muted-foreground hover:text-accent transition-colors" href={`mailto:${HR_EMAIL}`}>
                    {HR_EMAIL}
                  </a>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a className="text-muted-foreground hover:text-accent transition-colors" href={`tel:${PHONE.replace(/\s+/g, "")}`}>
                    {PHONE}
                  </a>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{LOCATION}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


