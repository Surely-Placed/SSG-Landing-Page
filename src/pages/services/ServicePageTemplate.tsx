import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/hero-section-2";
import BlurText from "@/components/BlurText";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export type ServiceValue = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceStat = {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
};

export type RelatedService = {
  title: string;
  description: string;
  href: string;
};

type ServicePageTemplateProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  backgroundImage: string;
  heroCtaText: string;
  heroCtaHref?: string;
  stats?: ServiceStat[];
  values: ServiceValue[];
  steps: ServiceStep[];
  faqs: ServiceFaq[];
  related: RelatedService[];
};

const sectionVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function ServicePageTemplate(props: ServicePageTemplateProps) {
  const {
    eyebrow,
    title,
    subtitle,
    backgroundImage,
    heroCtaText,
    heroCtaHref = "#overview",
    stats,
    values,
    steps,
    faqs,
    related,
  } = props;

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection
          logo={{
            url: "",
            alt: "SSG Consultant Logo",
            text: "SSG Consultant",
          }}
          slogan={eyebrow}
          title={title}
          subtitle={subtitle}
          callToAction={{
            text: heroCtaText,
            href: heroCtaHref,
          }}
          backgroundImage={backgroundImage}
          contactInfo={{
            website: "www.ssg-consultant.com",
            phone: "+91 99878 15794",
            address: "Gandhinagar, Gujarat, India",
          }}
          stats={stats}
        />

        {/* Overview */}
        <section id="overview" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
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
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                What you get
              </span>
              <div className="mt-4">
                <BlurText
                  text="High-impact support, built for real-world outcomes"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  repeat
                  className="justify-center font-heading text-3xl font-bold text-foreground sm:text-4xl lg:flex-nowrap lg:whitespace-nowrap lg:text-5xl"
                />
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Structured, repeatable systems — paired with human expertise — so you move faster with confidence.
              </p>
            </div>

            <motion.div
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {values.map((v) => (
                <motion.div key={v.title} variants={sectionVariants} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                  <Card className="h-full overflow-hidden rounded-2xl shadow-soft transition-all hover:shadow-card">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                          {v.icon}
                        </div>
                        <CardTitle className="font-heading text-xl">{v.title}</CardTitle>
                      </div>
                      <div className="h-1 w-12 bg-accent/70" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                How it works
              </span>
              <div className="mt-4">
                <BlurText
                  text="A simple process that compounds results"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  repeat
                  className="justify-center font-heading text-3xl font-bold text-foreground sm:text-4xl lg:flex-nowrap lg:whitespace-nowrap lg:text-5xl"
                />
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                We move from clarity → execution → outcomes, with tight feedback loops every step of the way.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-2">
                {steps.map((s, idx) => (
                  <motion.div
                    key={s.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={sectionVariants}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  >
                    <Card className="h-full rounded-2xl border-border bg-card shadow-soft">
                      <CardHeader className="flex flex-row items-start justify-between gap-4">
                        <div className="space-y-2">
                          <CardTitle className="font-heading text-xl">{s.title}</CardTitle>
                          <div className="h-1 w-10 bg-accent/70" />
                        </div>
                        <Badge variant="secondary" className="rounded-full px-3 py-1">
                          Step {idx + 1}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                FAQ
              </span>
              <div className="mt-4">
                <BlurText
                  text="Answers, upfront"
                  delay={110}
                  animateBy="words"
                  direction="top"
                  repeat
                  className="justify-center font-heading text-3xl font-bold text-foreground sm:text-4xl lg:flex-nowrap lg:whitespace-nowrap lg:text-5xl"
                />
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Clear expectations lead to better outcomes.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <Card className="rounded-2xl shadow-soft">
                <CardContent className="p-2 sm:p-4">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                      <AccordionItem key={f.q} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <Card className="overflow-hidden rounded-3xl border-border shadow-card">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/10 to-transparent" />
                  <div className="relative grid gap-8 p-10 lg:grid-cols-2 lg:p-14">
                    <div className="space-y-4">
                      <Badge className="w-fit rounded-full px-3 py-1" variant="secondary">
                        Next step
                      </Badge>
                      <h3 className="font-heading text-3xl font-bold text-foreground">
                        Ready to move faster than the market?
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Tell us your goal — we’ll recommend the fastest path and the right support package for you.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                      <Button asChild size="lg" className="rounded-full">
                        <Link to="/#contact">Book a free strategy call</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="rounded-full">
                        <a href="/#services">Explore all services</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Related services
              </span>
              <p className="mt-4 text-lg text-muted-foreground">
                Combine services for a stronger end-to-end outcome.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.href} to={r.href} className="block">
                  <Card className="h-full rounded-2xl bg-card shadow-soft transition-all hover:shadow-card">
                    <CardHeader className="space-y-2">
                      <CardTitle className="font-heading text-xl">{r.title}</CardTitle>
                      <div className="h-1 w-12 bg-accent/70" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{r.description}</p>
                      <div className="mt-4 text-sm font-semibold text-accent">View service →</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


