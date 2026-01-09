import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlurText from "@/components/BlurText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { HeroSection } from "@/components/ui/hero-section-2";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  FileText,
  GraduationCap,
  Network,
  Workflow,
  Users,
  Sparkles,
  Quote,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

type JourneyPhase = {
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
};

const sectionVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function CeoJourney() {
  const timelineRef = useRef<HTMLElement>(null);
  const [heroBg, setHeroBg] = useState<string>("/ceo/gaurav-1.png");

  // Rotate the hero background on each visit (mount). Falls back to placeholder if missing.
  useEffect(() => {
    const options = ["/ceo/gaurav-1.png", "/ceo/gaurav-2.png", "/ceo/gaurav-3.png"];
    const pick = options[Math.floor(Math.random() * options.length)];
    setHeroBg(pick);
  }, []);

  const phases: JourneyPhase[] = useMemo(
    () => [
      {
        title: "Phase 1: Target Visa‑Friendly Companies",
        icon: <Target className="h-6 w-6" />,
        description:
          "Filter first. Apply to companies that actually sponsor, for roles that are realistically STEM/visa-aligned.",
        bullets: [
          "Build a list of 50–100 companies that sponsor H‑1B",
          "Prioritize Big Tech, Fortune 500, and well‑funded startups",
          "Focus on roles like Software Engineer, Data Scientist, Product Manager",
        ],
      },
      {
        title: "Phase 2: Become Hireable First",
        icon: <FileText className="h-6 w-6" />,
        description:
          "The biggest mistake is applying before you’re ready. Make the resume and proof undeniable.",
        bullets: [
          "Craft a 1‑page US resume with strong metrics",
          "Back it up with 2–4 proof projects / internships / open‑source work",
          "Turn vague bullets into impact: outcome + who benefited + specificity",
        ],
      },
      {
        title: "Phase 3: Use CPT & OPT Strategically",
        icon: <GraduationCap className="h-6 w-6" />,
        description:
          "US experience reduces resistance. One strong OPT role beats hundreds of random applications.",
        bullets: [
          "Use CPT early to get internships and real signal",
          "Aim for a high-quality OPT role that compounds your profile",
          "Treat US experience as a leverage multiplier",
        ],
      },
      {
        title: "Phase 4: Network Like Top 1%",
        icon: <Network className="h-6 w-6" />,
        description:
          "Ask for advice, not jobs. Convert warm conversations into referrals and interviews.",
        bullets: [
          "Message alumni and professionals for 2–3 questions",
          "Turn chats into referrals for 5–10× higher interview odds",
          "Stay consistent — networking is a weekly habit",
        ],
      },
      {
        title: "Phase 5: Apply With a System",
        icon: <Workflow className="h-6 w-6" />,
        description:
          "Volume with precision wins. Track everything. Customize. Practice interviews. Repeat weekly.",
        bullets: [
          "10–15 high‑quality applications per week (not 100 random)",
          "Track applications, referrals, and follow‑ups in a spreadsheet",
          "Practice behavioral interviews and refine feedback loops",
        ],
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero (same system as landing page) */}
        <section className="relative">
          <HeroSection
            logo={{
              url: "",
              alt: "SSG Consultant Logo",
              text: "SSG Consultant",
            }}
            slogan="OUR JOURNEY"
            title={
              <>
                The Journey of{" "}
                <span className="text-primary">Mr. Gaurav Harsh</span>
              </>
            }
            subtitle="From applying into silence to building a system that creates real responses — for international students, at scale."
            callToAction={{
              text: "EXPLORE THE JOURNEY",
              href: "#journey",
            }}
            backgroundImage={heroBg}
            contactInfo={{
              website: "https://sgg-corporation.com",
              phone: "+91 99878 15794",
              address: "Gandhinagar, Gujarat, India",
            }}
            stats={[
              { icon: <Users className="h-4 w-4" />, value: 890, suffix: "+", label: "Students supported" },
              { icon: <Workflow className="h-4 w-4" />, value: 1500, suffix: "+", label: "Applications / month" },
              { icon: <Target className="h-4 w-4" />, value: 475, suffix: "+", label: "Assessments completed" },
              { icon: <Network className="h-4 w-4" />, value: 500, suffix: "+", label: "Interviews scheduled" },
            ]}
          />
        </section>

        {/* Origin */}
        <section id="journey" className="bg-background py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">The origin</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                From silence to signal
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                When Mr. Gaurav Harsh moved from India to the US, the strategy felt obvious: apply everywhere. The
                result was also obvious: no response. That failure became a framework — and later, a company.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">The shift</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Mass applying is noise. Personalization + targeting + proof is signal — and signal gets interviews.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">The mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Help international students stop applying into the void and start getting real responses from real
                    companies — with structure.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-soft">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-lg">The outcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A repeatable process that turns effort into execution — resume, targeting, outreach, referrals, and
                    interview conversion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Phases Timeline */}
        <section className="bg-secondary py-20 lg:py-28" aria-labelledby="phases-title">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">The playbook</span>
              <h2 id="phases-title" className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                5 phases that compound results
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The mindset that wins: <span className="text-foreground font-semibold">one yes</span> — not a hundred
                rejections.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-5xl">
              <div className="grid gap-10 lg:grid-cols-[140px_1fr]">
                {/* Left rail */}
                <div className="hidden lg:block">
                  <Card className="sticky top-28 rounded-2xl shadow-soft">
                    <CardHeader className="space-y-2">
                      <CardTitle className="font-heading text-lg">Quick checklist</CardTitle>
                      <div className="h-1 w-10 bg-accent/70" />
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <p>5 warm outreach messages / week</p>
                      <p>Tracking sheet (apps + referrals)</p>
                      <p>One resume per role type</p>
                      <p>Keyword-rich headline</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline */}
                <section ref={timelineRef} className="relative">
                  <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

                  <div className="space-y-8">
                    {phases.map((phase, idx) => (
                      <TimelineContent
                        key={phase.title}
                        animationNum={idx}
                        timelineRef={timelineRef}
                        className="relative"
                      >
                        <div className="md:pl-10">
                          <div className="absolute left-0 top-6 hidden md:flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-muted text-accent ring-4 ring-secondary">
                              {phase.icon}
                            </div>
                          </div>

                          <Card className="rounded-2xl shadow-soft">
                            <CardHeader className="space-y-2">
                              <CardTitle className="font-heading text-xl">{phase.title}</CardTitle>
                              <div className="h-1 w-12 bg-accent/70" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                              <ul className="space-y-2 text-muted-foreground">
                                {phase.bullets.map((b) => (
                                  <li key={b} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/80" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </TimelineContent>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Proof</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                System beats luck. Every time.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The same framework has helped hundreds of students move from “no responses” to interviews and offers.
              </p>
            </div>

            <motion.div
              className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              {[
                { label: "Students supported", value: "890+", icon: <Users className="h-6 w-6" /> },
                { label: "Applications / month", value: "1,000–1,500", icon: <Workflow className="h-6 w-6" /> },
                { label: "Assessments completed", value: "475+", icon: <Target className="h-6 w-6" /> },
                { label: "Interviews scheduled", value: "500+", icon: <Network className="h-6 w-6" /> },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={sectionVariants}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card className="h-full rounded-2xl shadow-soft transition-all hover:shadow-card">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="mx-auto mt-10 max-w-4xl">
              <Card className="rounded-2xl border-border bg-secondary shadow-soft">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid gap-6 md:grid-cols-2 md:items-center">
                    <div className="space-y-2">
                      <h3 className="font-heading text-2xl font-bold text-foreground">The message</h3>
                      <div className="h-1 w-12 bg-accent/70" />
                      <p className="text-muted-foreground">
                        Competition isn’t the problem for international students — randomness is. Replace randomness
                        with structure, and your odds change.
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Stop applying until your foundation is ready",
                        "Do the boring work first → watch interviews follow",
                        "One yes changes everything",
                      ].map((line) => (
                        <div key={line} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                          <p className="text-muted-foreground">{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Values</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Success means nothing if you’re climbing alone
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The goal isn’t just offers — it’s a community that lifts each other up.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
              {[
                {
                  title: "Lift others",
                  body: "If you see another international student struggling, help them — share what worked.",
                },
                {
                  title: "Build with integrity",
                  body: "No shortcuts. No stepping on others. The journey matters as much as the result.",
                },
                {
                  title: "Choose meaning",
                  body: "Not just what looks impressive on paper — build careers that bring peace and purpose.",
                },
              ].map((v) => (
                <Card key={v.title} className="rounded-2xl shadow-soft">
                  <CardHeader className="space-y-2">
                    <CardTitle className="font-heading text-xl">{v.title}</CardTitle>
                    <div className="h-1 w-12 bg-accent/70" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{v.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container">
            <Card className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-soft">
              <CardContent className="p-0">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="p-8 sm:p-10">
                    <Badge variant="secondary" className="rounded-full px-3 py-1">
                      Next step
                    </Badge>
                    <h2 className="mt-4 font-heading text-3xl font-bold text-foreground">
                      What phase are you stuck on?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                      Tell us where you are, and we’ll help you build the system that gets responses.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="rounded-full">
                        <Link to="/?section=contact">
                          Talk to us <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full">
                        <Link to="/services/career-mentorship">Explore mentorship</Link>
                      </Button>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Prefer comments/DMs? Share your biggest challenge — resume, outreach, referrals, or interviews.
                    </p>
                  </div>

                  <div className="relative bg-secondary p-8 sm:p-10">
                    <GridPattern
                      className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,white,transparent_65%)]"
                      squares={[
                        [3, 3],
                        [7, 2],
                        [11, 5],
                        [15, 3],
                        [18, 6],
                        [22, 4],
                      ]}
                    />
                    <div className="relative space-y-4">
                      <h3 className="font-heading text-xl font-bold text-foreground">One simple rule</h3>
                      <div className="h-1 w-12 bg-accent/70" />
                      <p className="text-muted-foreground leading-relaxed">
                        “Sending 100 applications feels like progress — until you realize effort without structure gets
                        you nowhere.”
                      </p>
                      <div className="mt-6 grid gap-4">
                        {[
                          "Target the right companies first",
                          "Become hireable before you apply",
                          "Network for referrals, not wishful thinking",
                          "Apply weekly with a tracking system",
                        ].map((x) => (
                          <div key={x} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
                            <p className="text-muted-foreground">{x}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


