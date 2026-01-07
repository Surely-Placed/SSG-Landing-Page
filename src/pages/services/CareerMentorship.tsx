import ServicePageTemplate from "./ServicePageTemplate";
import { GraduationCap, Target, Zap, ArrowRightLeft, Brain, Workflow } from "lucide-react";
import mentorshipHero from "@/assets/services/career-mentorship-hero.svg";

export default function CareerMentorship() {
  return (
    <ServicePageTemplate
      eyebrow="MENTORSHIP & TRAINING"
      title={
        <>
          Unlock Your{" "}
          <span className="text-primary">Potential.</span>
        </>
      }
      subtitle="The professional world moves fast. Our training wing is built on Agile Learning Methodologies. We don’t just coach — we perform Cognitive Gap Analysis to identify and rectify professional friction points."
      backgroundImage={mentorshipHero}
      heroCtaText="TALK TO US"
      values={[
        {
          icon: <GraduationCap className="h-6 w-6" />,
          title: "Agile learning methodology",
          description:
            "Learning that adapts to your feedback loop — fast iteration, real application, and measurable improvement.",
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Cognitive gap analysis",
          description:
            "Identify and fix the exact friction points stopping your growth — not generic “tips”.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Knowledge transfers",
          description:
            "High-impact frameworks that translate into performance — aligned to your role and market reality.",
        },
        {
          icon: <Workflow className="h-6 w-6" />,
          title: "Friction removal systems",
          description:
            "We remove blockers in planning, execution, and communication so you can move from plateau to promotion.",
        },
        {
          icon: <Brain className="h-6 w-6" />,
          title: "Strategic intervention",
          description:
            "Structured mentorship that changes decision quality — not just surface-level output.",
        },
        {
          icon: <ArrowRightLeft className="h-6 w-6" />,
          title: "Career architecture",
          description:
            "Build a long-term path with compounding leverage — skills, narrative, and execution aligned to intent.",
        },
      ]}
      steps={[
        {
          title: "Baseline & gap diagnosis",
          description:
            "We map your current state and identify cognitive and execution gaps creating professional friction.",
        },
        {
          title: "Agile learning sprints",
          description:
            "Short cycles of learning → practice → feedback, customized to your role and growth targets.",
        },
        {
          title: "Skill-to-signal conversion",
          description:
            "Convert skills into credible signals — storytelling, clarity, leadership communication, and execution quality.",
        },
        {
          title: "Plateau → promotion plan",
          description:
            "A practical roadmap for compounding progress — with accountability and iteration built in.",
        },
      ]}
      faqs={[
        {
          q: "Is this coaching or training?",
          a: "It’s training built on agile learning and cognitive gap analysis — designed to remove friction and create measurable performance gains.",
        },
        {
          q: "What’s the mission of this program?",
          a: "Delivering high-impact knowledge transfers that move candidates from plateau to promotion.",
        },
        {
          q: "Do you work with professionals who are already experienced?",
          a: "Yes — this is especially effective for non-linear pivots, senior growth, and sharpening high-signal communication.",
        },
        {
          q: "Is it personalized?",
          a: "Yes. We tailor the learning sprints and feedback loops to your intent, domain, and constraints.",
        },
      ]}
      related={[
        {
          title: "Strategic Job Applications",
          description: "Apply smarter, not harder — positioning and execution that bypasses gatekeepers.",
          href: "/services/job-referrals",
        },
        {
          title: "Specialized Consultants",
          description: "On-demand brainpower for deep-dive expertise and non-linear pivots.",
          href: "/services/consultant-network",
        },
        {
          title: "Professional Resume Building",
          description: "A high-conversion narrative — engineered for the 6-second recruiter window.",
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


