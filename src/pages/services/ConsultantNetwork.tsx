import ServicePageTemplate from "./ServicePageTemplate";
import { Brain, Briefcase, Layers, Sparkles, Target, Wand2 } from "lucide-react";
import networkHero from "@/assets/services/consultant-network-hero.svg";

export default function ConsultantNetwork() {
  return (
    <ServicePageTemplate
      eyebrow="SPECIALIZED CONSULTANTS"
      title={
        <>
          Expert Guidance{" "}
          <span className="text-primary">On Demand.</span>
        </>
      }
      subtitle='We provide "On-Demand Brainpower" for individuals and organizations navigating non-linear career pivots and organizational scaling. This is not coaching — this is market arbitrage for talent.'
      backgroundImage={networkHero}
      heroCtaText="REQUEST A CONSULT"
      values={[
        {
          icon: <Sparkles className="h-6 w-6" />,
          title: "Tailored solutions",
          description:
            "Deep-dive expertise aligned to your exact context — not generic playbooks.",
        },
        {
          icon: <Brain className="h-6 w-6" />,
          title: "On-demand brainpower",
          description:
            "Strategic support when decisions are high-stakes: pivots, negotiation, role design, and execution tradeoffs.",
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Non-linear pivots",
          description:
            "We help you design the narrative and strategy required to pivot credibly across roles, domains, and industries.",
        },
        {
          icon: <Wand2 className="h-6 w-6" />,
          title: "Workforce planning & transitions",
          description:
            "For organizations and leaders: planning, transition management, and change navigation with strategic clarity.",
        },
        {
          icon: <Layers className="h-6 w-6" />,
          title: "Organizational scaling",
          description:
            "Calibrate hiring, role scope, and growth systems — when the org needs to move faster without breaking.",
        },
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Execution-grade guidance",
          description:
            "Not advice for advice’s sake — we translate strategy into next actions, systems, and measurable outcomes.",
        },
      ]}
      steps={[
        {
          title: "Intake & context mapping",
          description:
            "We capture goals, constraints, and context — then define the real decision you need to make.",
        },
        {
          title: "Deep-dive strategy session",
          description:
            "We unpack tradeoffs, design the narrative, and create a prioritized plan for execution.",
        },
        {
          title: "Tailored solution design",
          description:
            "Career transition, workforce planning, role design, or scaling — shaped to your domain and constraints.",
        },
        {
          title: "Execution & iteration",
          description:
            "We refine based on outcomes and signals — keeping the system adaptable as reality changes.",
        },
      ]}
      faqs={[
        {
          q: "Is this coaching?",
          a: "No. This is specialized consulting — on-demand brainpower for high-stakes decisions and non-linear pivots.",
        },
        {
          q: "Do you work with organizations too?",
          a: "Yes — we support workforce planning, transition management, and scaling strategy.",
        },
        {
          q: "What kind of work do consultants do?",
          a: "Deep dives: positioning, narrative design, role scope, strategy execution systems, and scaling alignment.",
        },
        {
          q: "How fast can we start?",
          a: "As soon as intake is complete — we move asynchronously and prioritize speed with clarity.",
        },
      ]}
      related={[
        {
          title: "Mentorship & Training",
          description: "Agile learning and cognitive gap analysis to remove performance friction.",
          href: "/services/career-mentorship",
        },
        {
          title: "Strategic Job Applications",
          description: "Market arbitrage strategy to bypass gatekeepers and reach decision-makers.",
          href: "/services/job-referrals",
        },
        {
          title: "Professional Resume Building",
          description: "Rebuild your story into a value-centric narrative for recruiter cognition.",
          href: "/services/corporate-hiring",
        },
        {
          title: "Back to Landing",
          description: "Read our mission, services, and the AI Lab vision.",
          href: "/",
        },
      ]}
    />
  );
}


