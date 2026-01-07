import ServicePageTemplate from "./ServicePageTemplate";
import { ArrowRightLeft, Brain, Filter, Target, Workflow, Zap } from "lucide-react";
import referralsHero from "@/assets/services/job-referrals-hero.svg";

export default function JobReferrals() {
  return (
    <ServicePageTemplate
      eyebrow="STRATEGIC JOB APPLICATIONS"
      title={
        <>
          Apply Smarter,{" "}
          <span className="text-primary">Not Harder.</span>
        </>
      }
      subtitle="This isn’t just recruitment; it’s Market Arbitrage. We analyze macro trends and industry shifts to position you ahead of the curve — crafting strategies that bypass gatekeepers (ATS) through networking and technical optimization."
      backgroundImage={referralsHero}
      heroCtaText="LET'S START"
      values={[
        {
          icon: <Target className="h-6 w-6" />,
          title: "Opportunity discovery",
          description:
            "Identify hidden opportunities and role clusters where your profile has the strongest leverage.",
        },
        {
          icon: <Filter className="h-6 w-6" />,
          title: "ATS bypass strategy",
          description:
            "Technical optimization plus signal-first storytelling to get past automated filters without losing clarity.",
        },
        {
          icon: <Workflow className="h-6 w-6" />,
          title: "Strategic application frameworks",
          description:
            "Tailored application systems built around market movement — not random submissions.",
        },
        {
          icon: <ArrowRightLeft className="h-6 w-6" />,
          title: "Decision-maker access",
          description:
            "Networking and structured outreach to move your name in front of humans — not just bots.",
        },
        {
          icon: <Brain className="h-6 w-6" />,
          title: "Market arbitrage thinking",
          description:
            "Positioning you ahead of macro shifts with a strategy that adapts as the market moves.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "High-velocity iteration",
          description:
            "Fast feedback loops to refine targeting, messaging, and execution until the system converts.",
        },
      ]}
      steps={[
        {
          title: "Market + profile calibration",
          description:
            "Map your experience to market movement and define the highest-leverage role targets.",
        },
        {
          title: "Application system design",
          description:
            "Create a repeatable framework for targeting, tailoring, and submitting applications with quality and speed.",
        },
        {
          title: "ATS + networking execution",
          description:
            "Run parallel paths: technical optimization for ATS + human pathways through outreach and networking.",
        },
        {
          title: "Iteration & conversion tuning",
          description:
            "Refine the system based on outcomes and signals — continuously improving conversion.",
        },
      ]}
      faqs={[
        {
          q: "Is this just applying to jobs for me?",
          a: "No. This is designing and executing a strategic application framework — built around market arbitrage, ATS realities, and human decision paths.",
        },
        {
          q: "What’s the mission here?",
          a: "Executing strategic application frameworks that bypass traditional gatekeepers (ATS) through networking and technical optimization.",
        },
        {
          q: "Do you tailor applications per role?",
          a: "Yes — we build a system that makes tailoring fast and repeatable without losing quality.",
        },
        {
          q: "Is this for non-linear pivots too?",
          a: "Absolutely. This is designed for pivots where signal design and narrative architecture matter most.",
        },
      ]}
      related={[
        {
          title: "Mentorship & Training",
          description: "Cognitive gap analysis + agile learning to remove friction and accelerate growth.",
          href: "/services/career-mentorship",
        },
        {
          title: "Specialized Consultants",
          description: "On-demand expert guidance for deep dives, pivots, and scaling.",
          href: "/services/consultant-network",
        },
        {
          title: "Professional Resume Building",
          description: "A value-centric narrative engineered for recruiter cognition.",
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


