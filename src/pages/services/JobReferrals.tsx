import ServicePageTemplate from "./ServicePageTemplate";
import { Briefcase, FileCheck, Filter, Gauge, MessageSquare, Target } from "lucide-react";
import referralsHero from "@/assets/services/job-referrals-hero.svg";

export default function JobReferrals() {
  return (
    <ServicePageTemplate
      eyebrow="JOB REFERRALS"
      title={
        <>
          Turn applications into{" "}
          <span className="text-primary">interviews</span> — with strategy, not spam
        </>
      }
      subtitle="We optimize your targeting, materials, and outreach — then activate referral paths and recruiter-ready messaging to boost interview volume."
      backgroundImage={referralsHero}
      heroCtaText="SEE HOW WE DO IT"
      stats={[
        { icon: <Briefcase className="h-5 w-5" />, value: 500, suffix: "+", label: "Partner Companies" },
        { icon: <Gauge className="h-5 w-5" />, value: 72, suffix: "h", label: "Fast Review SLA" },
        { icon: <Target className="h-5 w-5" />, value: 3, suffix: "x", label: "Interview Uplift Goal" },
        { icon: <Filter className="h-5 w-5" />, value: 10, suffix: "+", label: "Markets Covered" },
      ]}
      values={[
        {
          icon: <Target className="h-6 w-6" />,
          title: "Precision targeting",
          description:
            "Stop applying everywhere. We build a shortlist based on role-fit, seniority signals, and realistic conversion paths.",
        },
        {
          icon: <FileCheck className="h-6 w-6" />,
          title: "ATS + recruiter alignment",
          description:
            "Sharper keywords, stronger impact statements, and clean formatting that works for both scanners and humans.",
        },
        {
          icon: <MessageSquare className="h-6 w-6" />,
          title: "Outreach scripts that work",
          description:
            "Cold messages, follow-ups, and referral asks that feel natural and professional — not desperate or generic.",
        },
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Referral pathways",
          description:
            "We help you activate warm introductions and structured referral loops where it’s appropriate and ethical.",
        },
        {
          icon: <Filter className="h-6 w-6" />,
          title: "Pipeline management",
          description:
            "Track stages, next actions, and response patterns so you keep momentum and iterate quickly.",
        },
        {
          icon: <Gauge className="h-6 w-6" />,
          title: "Weekly iteration",
          description:
            "We review what’s working and adjust targeting, messaging, and materials every week — compounding conversion.",
        },
      ]}
      steps={[
        {
          title: "Profile + role-fit audit",
          description:
            "We map your experience to market roles, define realistic targets, and identify gaps blocking callbacks.",
        },
        {
          title: "Materials + messaging",
          description:
            "Optimize resume, LinkedIn, and outreach scripts to match the exact roles you’re going for.",
        },
        {
          title: "Referral activation",
          description:
            "Create a repeatable system to ask for referrals and introductions with high-quality context and follow-ups.",
        },
        {
          title: "Pipeline + performance tuning",
          description:
            "Track response rates, improve weak stages, and shift strategy based on evidence — not vibes.",
        },
      ]}
      faqs={[
        {
          q: "Do you guarantee referrals or interviews?",
          a: "No — outcomes depend on market conditions and role fit. We focus on raising your conversion rates through targeting, positioning, and outreach quality.",
        },
        {
          q: "Is it ethical to ask for referrals?",
          a: "Yes, when done professionally. We help you build a respectful process with context, value, and clear consent.",
        },
        {
          q: "Do you apply on my behalf?",
          a: "Typically no. We give you a system, scripts, and a pipeline so you can execute quickly and sustainably (and keep control).",
        },
        {
          q: "Can this work for international job searches?",
          a: "Yes. We tailor targeting and messaging to region-specific recruiting norms and common selection patterns.",
        },
      ]}
      related={[
        {
          title: "Career Mentorship",
          description: "Build a stronger narrative and interview readiness for higher conversion and better offers.",
          href: "/services/career-mentorship",
        },
        {
          title: "Consultant Network",
          description: "Tap into specialists who understand your domain and can guide strategy with nuance.",
          href: "/services/consultant-network",
        },
        {
          title: "Corporate Hiring",
          description: "For companies: hire faster with high-signal screening and curated shortlists.",
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


