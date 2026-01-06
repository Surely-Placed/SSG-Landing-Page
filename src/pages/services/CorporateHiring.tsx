import ServicePageTemplate from "./ServicePageTemplate";
import { BadgeCheck, Briefcase, Building2, Clock, Globe, Users } from "lucide-react";
import corporateHero from "@/assets/services/corporate-hiring-hero.svg";

export default function CorporateHiring() {
  return (
    <ServicePageTemplate
      eyebrow="CORPORATE HIRING"
      title={
        <>
          Hire globally with{" "}
          <span className="text-primary">speed</span>,{" "}
          <span className="text-primary">signal</span>, and{" "}
          <span className="text-primary">confidence</span>
        </>
      }
      subtitle="We help teams source, screen, and shortlist high-quality candidates — with consultant-led evaluation and market-aware hiring guidance."
      backgroundImage={corporateHero}
      heroCtaText="TALK TO OUR TEAM"
      stats={[
        { icon: <Building2 className="h-5 w-5" />, value: 500, suffix: "+", label: "Partner Companies" },
        { icon: <Clock className="h-5 w-5" />, value: 30, suffix: "d", label: "Time-to-Hire Target" },
        { icon: <BadgeCheck className="h-5 w-5" />, value: 92, suffix: "%", label: "Offer Acceptance" },
        { icon: <Globe className="h-5 w-5" />, value: 10, suffix: "+", label: "Countries" },
      ]}
      values={[
        {
          icon: <Users className="h-6 w-6" />,
          title: "Curated shortlists",
          description:
            "We deliver quality over volume — candidates screened for role fit, capability, and communication.",
        },
        {
          icon: <BadgeCheck className="h-6 w-6" />,
          title: "Signal-based screening",
          description:
            "Structured evaluation rubrics so you get consistent, defensible hiring decisions across interviewers.",
        },
        {
          icon: <Globe className="h-6 w-6" />,
          title: "Global hiring nuance",
          description:
            "We align compensation bands, expectations, and process norms for each region to reduce drop-offs.",
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "Faster hiring loops",
          description:
            "Tighter feedback cycles, better calibration, and reduced back-and-forth — without lowering standards.",
        },
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Role design support",
          description:
            "Define role scope and must-have signals so you attract the right candidates and avoid mis-hires.",
        },
        {
          icon: <Building2 className="h-6 w-6" />,
          title: "Employer brand storytelling",
          description:
            "We help craft messaging that resonates with senior talent — the difference between interest and pass.",
        },
      ]}
      steps={[
        {
          title: "Intake & calibration",
          description:
            "We align on role scope, must-have signals, compensation, and geography — then set the hiring plan.",
        },
        {
          title: "Sourcing & screening",
          description:
            "We source from our network and beyond, screen candidates using structured rubrics, and capture clean notes.",
        },
        {
          title: "Shortlist delivery",
          description:
            "You receive a curated shortlist with high-signal summaries, strengths/risks, and recommended interview focus areas.",
        },
        {
          title: "Offer & closing support",
          description:
            "We help close: expectation management, negotiation guidance, and drop-off prevention for strong acceptance rates.",
        },
      ]}
      faqs={[
        {
          q: "What roles do you hire for?",
          a: "We support a wide range: product, engineering, data, finance, operations, sales, and leadership. We’ll confirm fit during intake.",
        },
        {
          q: "Do you replace internal recruiting?",
          a: "No — we complement it. We add consultant-led screening and market nuance, and we can plug into your existing process.",
        },
        {
          q: "Can you hire internationally/remotely?",
          a: "Yes. We support global pipelines and can advise on region-specific expectations and process design.",
        },
        {
          q: "How fast can we start?",
          a: "Typically within days. We begin with intake/calibration, then kick off sourcing and screening immediately after alignment.",
        },
      ]}
      related={[
        {
          title: "Consultant Network",
          description: "Tap specialists for calibration, screening rubrics, and interview design.",
          href: "/services/consultant-network",
        },
        {
          title: "Career Mentorship",
          description: "For candidates: upgrade readiness, narrative, and interview performance.",
          href: "/services/career-mentorship",
        },
        {
          title: "Job Referrals",
          description: "For candidates: structured targeting + outreach systems to increase interviews.",
          href: "/services/job-referrals",
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


