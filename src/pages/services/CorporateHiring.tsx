import ServicePageTemplate from "./ServicePageTemplate";
import { FileText, Target, ScanText, Sparkles, Eye, Layers } from "lucide-react";
import corporateHero from "@/assets/services/corporate-hiring-hero.svg";

export default function CorporateHiring() {
  return (
    <ServicePageTemplate
      eyebrow="PROFESSIONAL RESUME BUILDING"
      title={
        <>
          Let them know you,{" "}
          <span className="text-primary">but, better.</span>
        </>
      }
      subtitle="A great resume is a high-conversion marketing document, not a biography. We perform Career Archeology to extract high-leverage data points and rebuild them into a value-centric narrative — engineered for the recruiter’s 6-second cognitive window."
      backgroundImage={corporateHero}
      heroCtaText="UPGRADE MY RESUME"
      values={[
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Value-centric narrative",
          description:
            "We don’t list history — we rebuild your story around impact, leverage, and decision-maker clarity.",
        },
        {
          icon: <Eye className="h-6 w-6" />,
          title: "Visual hierarchy",
          description:
            "Designed to win the 6-second scan: structure, spacing, emphasis, and readability that guides attention.",
        },
        {
          icon: <Sparkles className="h-6 w-6" />,
          title: "Psychological framing",
          description:
            "We frame your experience using language and sequencing that makes your value feel obvious.",
        },
        {
          icon: <ScanText className="h-6 w-6" />,
          title: "Recruiter cognition-first",
          description:
            "Built to be skimmed fast — without losing nuance when the hiring manager reads deeper.",
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Role alignment",
          description:
            "We tailor your narrative to the target role so your experience maps instantly to what they’re hiring for.",
        },
        {
          icon: <Layers className="h-6 w-6" />,
          title: "Career archaeology",
          description:
            "We extract high-leverage data points and rebuild them into a clean, credible, high-signal document.",
        },
      ]}
      steps={[
        {
          title: "Career archaeology",
          description:
            "We mine your experience for leverage points, metrics, and real signals that recruiters trust.",
        },
        {
          title: "Narrative rebuild",
          description:
            "We restructure content into a value-centric narrative using visual hierarchy and psychological framing.",
        },
        {
          title: "Role-targeted refinement",
          description:
            "We align keywords and signals to the role — without turning your resume into an ATS keyword dump.",
        },
        {
          title: "Final polish",
          description:
            "Clean formatting, clarity, and a final read for flow — engineered for scan + deep read.",
        },
      ]}
      faqs={[
        {
          q: "Do you just rewrite my resume?",
          a: "We rebuild it. The goal is a high-conversion marketing document with strong signal design — not a prettier biography.",
        },
        {
          q: "Do you tailor it to a specific role?",
          a: "Yes. We align your story to the target role’s signal expectations while keeping it truthful and credible.",
        },
        {
          q: "Is this ATS-friendly?",
          a: "Yes — but we prioritize human readability and recruiter cognition so you win both layers.",
        },
        {
          q: "What’s the mission of this service?",
          a: "Manipulating the 6-second cognitive window of top-tier recruiters using advanced visual hierarchy and psychological framing.",
        },
      ]}
      related={[
        {
          title: "Specialized Consultants",
          description: "On-demand brainpower for deep dives, pivots, and scaling decisions.",
          href: "/services/consultant-network",
        },
        {
          title: "Mentorship & Training",
          description: "Agile learning + cognitive gap analysis to remove performance friction.",
          href: "/services/career-mentorship",
        },
        {
          title: "Strategic Job Applications",
          description: "Market arbitrage strategy to bypass gatekeepers and reach decision-makers.",
          href: "/services/job-referrals",
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


