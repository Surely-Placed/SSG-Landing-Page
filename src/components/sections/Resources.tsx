import { Globe2, FileText, Briefcase, Sparkles, Video } from "lucide-react";
import BlurText from "@/components/BlurText";
import CircularTestimonials, { type CircularTestimonial } from "@/components/ui/circular-testimonials";
import { GridPattern } from "@/components/ui/grid-pattern";

const carouselItems: CircularTestimonial[] = [
  {
    name: "Global Job Search Blueprint",
    designation: "Guide · Market + Strategy",
    quote:
      "A region-aware playbook for targeting roles in Europe, APAC, and North America—without wasting months on the wrong approach.",
    // teamwork / hiring
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "Resume That Gets Interviews",
    designation: "Insight · ATS + Hiring Manager",
    quote:
      "Fix structure, impact, and keywords while staying human. Includes a simple scoring checklist you can reuse every time.",
    // resume / laptop
    src: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "FAANG Interview Prep Checklist",
    designation: "Article · Structured Loop Prep",
    quote:
      "A practical checklist that mirrors real hiring loops: behavioral signals, system design expectations, and coding clarity.",
    // desk / planning
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "Recruiter Outreach Pack",
    designation: "Template · Email + LinkedIn",
    quote:
      "Templates that sound human, not spam—plus a follow-up cadence that boosts replies without being pushy.",
    // meeting / networking
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "Relocation Readiness Map",
    designation: "Guide · Visa + Timeline",
    quote:
      "A realistic timeline for documents, approvals, and onboarding—so you can plan your move with confidence.",
    // travel / passport / map
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "Salary Negotiation Scripts",
    designation: "Mini Class · 5 Proven Scripts",
    quote:
      "Negotiation phrases that protect relationships and still raise your offer. Includes counter-offer and deadline handling.",
    // negotiation / handshake
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "Leadership Signals That Convert",
    designation: "Insight · STAR + Metrics",
    quote:
      "Turn vague leadership claims into measurable stories that hiring managers trust—especially for senior roles.",
    // leadership / boardroom
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
  },
  {
    name: "Offer & Onboarding Validation",
    designation: "Checklist · Avoid Surprises",
    quote:
      "Comp, role scope, team, visa support—validate the right things before you sign so your first 90 days are smooth.",
    // contracts / paperwork
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=60",
    href: "#resources",
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
              Resources & Insights
            </span>
            <BlurText
              text="Career Knowledge Hub"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            />
            <p className="text-lg text-muted-foreground">
              Expert insights, guides, and resources to accelerate your career journey.
            </p>
          </div>
        </div>

        {/* Resources carousel (image + side text) */}
        <div className="mt-14 flex justify-center">
          <CircularTestimonials testimonials={carouselItems} autoplay className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Resources;
