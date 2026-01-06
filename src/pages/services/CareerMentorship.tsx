import ServicePageTemplate from "./ServicePageTemplate";
import { Award, Compass, GraduationCap, Target, Users, Zap } from "lucide-react";
import mentorshipHero from "@/assets/services/career-mentorship-hero.svg";

export default function CareerMentorship() {
  return (
    <ServicePageTemplate
      eyebrow="CAREER MENTORSHIP"
      title={
        <>
          Your career, engineered with{" "}
          <span className="text-primary">clarity</span> and{" "}
          <span className="text-primary">momentum</span>
        </>
      }
      subtitle="Get a focused roadmap, weekly execution systems, and 1:1 guidance from seasoned professionals — so you stop guessing and start compounding results."
      backgroundImage={mentorshipHero}
      heroCtaText="VIEW THE PROGRAM"
      stats={[
        { icon: <Users className="h-5 w-5" />, value: 1000, suffix: "+", label: "Professionals Mentored" },
        { icon: <Target className="h-5 w-5" />, value: 12, suffix: "wk", label: "Roadmap Framework" },
        { icon: <Award className="h-5 w-5" />, value: 3000, suffix: "+", label: "Success Stories" },
        { icon: <Compass className="h-5 w-5" />, value: 10, suffix: "+", label: "Countries Supported" },
      ]}
      values={[
        {
          icon: <GraduationCap className="h-6 w-6" />,
          title: "Role-fit clarity",
          description:
            "Define your target roles, positioning, and narrative with a practical plan that matches real hiring signals — not generic advice.",
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Interview readiness",
          description:
            "Sharpen storytelling, case/tech performance, and executive presence with feedback loops that mirror real interview panels.",
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Execution systems",
          description:
            "Weekly sprints, scorecards, and checkpoints to keep you moving — even when motivation dips.",
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "1:1 mentor support",
          description:
            "A dedicated mentor to stress-test decisions, keep you accountable, and help you navigate tradeoffs with confidence.",
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Portfolio & credibility",
          description:
            "Make your profile undeniable with targeted artifacts: resume, LinkedIn, project framing, and measurable impact language.",
        },
        {
          icon: <Compass className="h-6 w-6" />,
          title: "Global market insight",
          description:
            "Align your strategy with region-specific expectations (Singapore, UAE, EU, etc.) and reduce avoidable mistakes.",
        },
      ]}
      steps={[
        {
          title: "Strategy & baseline audit",
          description:
            "We assess your current profile, target roles, constraints, and timelines — then set measurable goals and a plan.",
        },
        {
          title: "Positioning & materials",
          description:
            "Refine your narrative and rebuild assets (resume/LinkedIn/portfolio framing) to match hiring signals and keywords.",
        },
        {
          title: "Interview performance",
          description:
            "Run structured mocks with feedback: clarity, depth, tradeoffs, confidence, and leadership communication.",
        },
        {
          title: "Execution sprints",
          description:
            "Weekly action plan: networking targets, applications, follow-ups, and iteration — with accountability built in.",
        },
      ]}
      faqs={[
        {
          q: "Is this only for students or early-career candidates?",
          a: "No. We work across levels — from entry-level to senior leadership — and tailor the roadmap, artifacts, and interview prep accordingly.",
        },
        {
          q: "How long does it take to see results?",
          a: "Most clients see clearer direction and improved response rates within 2–3 weeks once positioning and materials are aligned. Offers depend on market timing and role fit.",
        },
        {
          q: "Do you write my resume for me?",
          a: "We provide a structured rewrite process and hands-on feedback. You’ll leave with a strong, truthful, measurable resume — and the ability to maintain it going forward.",
        },
        {
          q: "Can this work for international roles?",
          a: "Yes. We adapt positioning, keywords, and interview expectations based on geography and industry norms.",
        },
      ]}
      related={[
        {
          title: "Job Referrals",
          description: "Strategic applications + referral pathways to increase interview volume and quality.",
          href: "/services/job-referrals",
        },
        {
          title: "Consultant Network",
          description: "Get matched with specialists who know your domain and hiring landscape.",
          href: "/services/consultant-network",
        },
        {
          title: "Corporate Hiring",
          description: "For companies: hire faster with consultant-led screening and shortlist quality.",
          href: "/services/corporate-hiring",
        },
        {
          title: "Back to Landing",
          description: "See our full story, global presence, and success metrics.",
          href: "/",
        },
      ]}
    />
  );
}


