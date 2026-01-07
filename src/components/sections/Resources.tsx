import { Brain, ScanText, Zap, Sparkles } from "lucide-react";
import BlurText from "@/components/BlurText";
import CircularTestimonials, { type CircularTestimonial } from "@/components/ui/circular-testimonials";
import { GridPattern } from "@/components/ui/grid-pattern";

const carouselItems: CircularTestimonial[] = [
  {
    name: "Resume.ai",
    designation: "The AI Lab · Resume Intelligence",
    quote:
      "We’re building the AI that decodes the hidden criteria of the modern enterprise — ending the era of professional guesswork.",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=60",
    highlights: [
      "ATS-ready structure + keyword alignment",
      "Impact-first bullet rewriting with metrics",
      "Role clarity → faster callbacks",
    ],
    href: "/#contact",
    ctaText: "Request a demo",
  },
  {
    name: "Precision",
    designation: "Beats ATS at its own game",
    quote:
      "Analyzes job descriptions in real-time and aligns your resume to keywords and requirements with competitive benchmarking.",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=60",
    highlights: [
      "JD-to-resume keyword mapping",
      "Clean formatting recruiters scan fast",
      "Market-tested resume patterns",
    ],
    href: "/services/corporate-hiring",
    ctaText: "See resume service",
  },
  {
    name: "Speed",
    designation: "Tailored in seconds",
    quote:
      "Go from a generic draft to a role-aligned application fast — without losing clarity or structure.",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60",
    highlights: [
      "One resume per role type (not one for all)",
      "Weekly tracking + follow-up system",
      "10–15 high-quality applications/week",
    ],
    href: "/services/job-referrals",
    ctaText: "Explore applications",
  },
  {
    name: "Insights",
    designation: "Instant feedback",
    quote:
      "Get instant feedback on impact, readability, and alignment — designed for modern recruiting realities.",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=60",
    highlights: [
      "What to fix first (highest ROI)",
      "Interview readiness checkpoints",
      "Referral strategy that converts",
    ],
    href: "/services/consultant-network",
    ctaText: "Meet consultants",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <GridPattern
          squares={[
            [4, 4],
            [6, 2],
            [8, 6],
            [12, 4],
            [14, 8],
            [18, 10],
          ]}
          className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 [mask-image:radial-gradient(520px_circle_at_center,white,transparent)]"
        />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          {/* Header */}
          <div className="max-w-xl space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Product · The AI Lab
            </span>
            <BlurText
              text="Resume.ai: The Future of Career Tech"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            />
            <p className="text-lg text-muted-foreground">
              A sophisticated engine using NLP and predictive analytics to decode modern hiring criteria — providing real-time competitive benchmarking for candidates.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <ScanText className="h-6 w-6" />
              </div>
              <p className="font-heading font-semibold text-foreground">Precision</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Align to keywords and requirements in real-time — without turning your resume into noise.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <Zap className="h-6 w-6" />
              </div>
              <p className="font-heading font-semibold text-foreground">Speed</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Go from a generic draft to a tailored application in seconds.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <Brain className="h-6 w-6" />
              </div>
              <p className="font-heading font-semibold text-foreground">Insights</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Instant feedback on impact, clarity, and readability — built for modern recruiting.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="font-heading font-semibold text-foreground">Mission</p>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Building LLM-powered tools that reduce professional guesswork and raise signal quality.
            </p>
          </div>
        </div>

        {/* Resources carousel (image + side text) */}
        <div className="mt-20 flex justify-center">
          <CircularTestimonials testimonials={carouselItems} autoplay showControls={false} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Resources;
