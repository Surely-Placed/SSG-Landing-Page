import { GraduationCap, FileCheck, Users, Rocket } from "lucide-react";
import BlurText from "@/components/BlurText";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "Career Preparation & Mentorship",
    description: "Personalized guidance from industry veterans to craft your career trajectory and develop market-ready skills.",
  },
  {
    icon: <FileCheck className="h-7 w-7" />,
    title: "Job Applications & Referrals",
    description: "Strategic application support with direct referrals to decision-makers at top global companies.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Consultant-Led Recruitment",
    description: "Work with our network of expert consultants who understand the nuances of global hiring landscapes.",
  },
  {
    icon: <Rocket className="h-7 w-7" />,
    title: "Offer & Onboarding Support",
    description: "End-to-end assistance from offer negotiation to seamless onboarding at your new role.",
  },
];

const Services = () => {
  const [animationCycle, setAnimationCycle] = useState(0);
  const inViewRef = useRef(false);

  return (
    <motion.section
      id="services"
      className="bg-secondary py-24 lg:py-32"
      viewport={{ once: false, amount: 0.2 }}
      onViewportEnter={() => {
        if (!inViewRef.current) {
          inViewRef.current = true;
          setAnimationCycle((c) => c + 1);
        }
      }}
      onViewportLeave={() => {
        inViewRef.current = false;
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </span>
          <div className="mt-4">
            <BlurText
              text="Comprehensive Career Solutions"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="justify-center font-heading text-3xl font-bold text-foreground sm:text-4xl lg:flex-nowrap lg:whitespace-nowrap lg:text-5xl"
            />
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            From first interview prep to C-suite negotiations, we cover every step of your career journey.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          key={`services-${animationCycle}`}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description,
  delay = 0,
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-card"
    variants={{
      hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
      show: { opacity: 1, y: 0, filter: "blur(0px)" },
    }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {/* Accent line */}
    <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    
    <div className="space-y-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-muted text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        {icon}
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export default Services;
