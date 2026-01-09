import { HeroSection } from "@/components/ui/hero-section-2";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <HeroSection
      logo={{
        url: "",
        alt: "SSG Consultant Logo",
        text: "SSG Consultant"
      }}
      slogan="BRIDGE TALENT × INTENT"
      title={
        <>
          Your Career Evolution,{" "}
          <span className="text-primary">Engineered.</span>
        </>
      }
      subtitle="At SSG Consultant, we optimize human potential through Strategic Intervention and Technological Synergy — a high-performance ecosystem for polymaths at the intersection of data-driven strategy and empathetic mentorship."
      callToAction={{
        text: "LET'S COLLABORATE",
        href: "#contact",
      }}
      backgroundImage={heroImage}
      contactInfo={{
        website: "https://sgg-corporation.com",
        phone: "+91 99878 15794",
        address: "Gandhinagar, Gujarat, India",
      }}
    />
  );
};

export default Hero;
