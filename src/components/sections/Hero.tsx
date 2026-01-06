import { HeroSection } from "@/components/ui/hero-section-2";
import heroImage from "@/assets/hero-image.jpg";
import { Award, Users, Globe, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <HeroSection
      logo={{
        url: "",
        alt: "SSG Global Logo",
        text: "SSG Global"
      }}
      slogan="ELEVATE YOUR CAREER"
      title={
        <>
          Building Global Careers,{" "}
          <span className="text-primary">One Success Story</span> at a Time
        </>
      }
      subtitle="Partner with SSG's elite network of career consultants to unlock opportunities at top global companies. 3000+ success stories. Your career transformation starts here."
      callToAction={{
        text: "EXPLORE CAREERS",
        href: "#services",
      }}
      backgroundImage={heroImage}
      contactInfo={{
        website: "www.ssg-global.com",
        phone: "+1 (555) 123-4567",
        address: "Global Presence Across 10+ Countries",
      }}
      stats={[
        { icon: <Award className="h-5 w-5" />, value: 3000, suffix: "+", label: "Success Stories" },
        { icon: <Users className="h-5 w-5" />, value: 1000, suffix: "+", label: "Students Mentored" },
        { icon: <Globe className="h-5 w-5" />, value: 10, suffix: "+", label: "Countries" },
        { icon: <Briefcase className="h-5 w-5" />, value: 500, suffix: "+", label: "Partner Companies" },
      ]}
    />
  );
};

export default Hero;
