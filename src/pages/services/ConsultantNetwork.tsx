import ServicePageTemplate from "./ServicePageTemplate";
import { Globe, Layers, Sparkles, Users, Wand2, Workflow } from "lucide-react";
import networkHero from "@/assets/services/consultant-network-hero.svg";

export default function ConsultantNetwork() {
  return (
    <ServicePageTemplate
      eyebrow="CONSULTANT NETWORK"
      title={
        <>
          Get matched with experts who know your{" "}
          <span className="text-primary">industry</span> and{" "}
          <span className="text-primary">market</span>
        </>
      }
      subtitle="Our consultant network brings specialized hiring insight across geographies and domains — so your strategy fits the reality of how decisions get made."
      backgroundImage={networkHero}
      heroCtaText="MEET THE NETWORK"
      stats={[
        { icon: <Users className="h-5 w-5" />, value: 200, suffix: "+", label: "Consultants" },
        { icon: <Layers className="h-5 w-5" />, value: 15, suffix: "+", label: "Industries" },
        { icon: <Globe className="h-5 w-5" />, value: 10, suffix: "+", label: "Geographies" },
        { icon: <Workflow className="h-5 w-5" />, value: 24, suffix: "h", label: "Matching Target" },
      ]}
      values={[
        {
          icon: <Sparkles className="h-6 w-6" />,
          title: "Specialized guidance",
          description:
            "Work with consultants who understand your domain: product, engineering, data, finance, operations, and more.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Market-specific nuance",
          description:
            "Different regions hire differently. We align your approach to local expectations and decision-making patterns.",
        },
        {
          icon: <Workflow className="h-6 w-6" />,
          title: "Fast matching",
          description:
            "We pair you with the right consultant based on role, seniority, industry, and timeline — not random availability.",
        },
        {
          icon: <Wand2 className="h-6 w-6" />,
          title: "Signal-based feedback",
          description:
            "Resume and interview feedback anchored in real hiring signals: scope, metrics, leadership, and tradeoffs.",
        },
        {
          icon: <Layers className="h-6 w-6" />,
          title: "Multi-angle review",
          description:
            "Get a second opinion where it matters: positioning, tech depth, strategy, and communication clarity.",
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Confidence & accountability",
          description:
            "You’ll always know the next best action — and you’ll have someone pushing you to execute consistently.",
        },
      ]}
      steps={[
        {
          title: "Intake + matching",
          description:
            "We capture your goals, constraints, and target roles — then match you with the best-fit consultant.",
        },
        {
          title: "Deep-dive session",
          description:
            "We align on direction, narrative, and market expectations. You’ll leave with a prioritized action plan.",
        },
        {
          title: "Artifacts & interview prep",
          description:
            "We iterate on resume/LinkedIn/portfolio framing and run targeted mocks with high-signal feedback.",
        },
        {
          title: "Iteration & execution",
          description:
            "We review progress weekly and refine based on outcomes: callbacks, interviews, and offer signals.",
        },
      ]}
      faqs={[
        {
          q: "How do you choose the right consultant?",
          a: "We match by industry + role + seniority + geography. If the fit isn’t perfect after the first session, we’ll re-match quickly.",
        },
        {
          q: "Can I work with multiple consultants?",
          a: "Yes. Many clients do a primary consultant for strategy and a specialist for interview loops (e.g., system design or leadership).",
        },
        {
          q: "Is this only for international moves?",
          a: "No. The network supports domestic growth, leadership transitions, and cross-industry shifts too.",
        },
        {
          q: "Do consultants help with referrals?",
          a: "They can guide outreach strategy and messaging, and sometimes suggest pathways — but referrals are never guaranteed.",
        },
      ]}
      related={[
        {
          title: "Career Mentorship",
          description: "Structured 1:1 mentorship and weekly execution systems for consistent progress.",
          href: "/services/career-mentorship",
        },
        {
          title: "Job Referrals",
          description: "Targeted applications + outreach systems designed to increase interview volume.",
          href: "/services/job-referrals",
        },
        {
          title: "Corporate Hiring",
          description: "For employers: consultant-led screening and curated global shortlists.",
          href: "/services/corporate-hiring",
        },
        {
          title: "Back to Landing",
          description: "Explore our global presence, success stories, and full service suite.",
          href: "/",
        },
      ]}
    />
  );
}


