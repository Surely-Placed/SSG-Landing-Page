import { GraduationCap, FileText, Target, Users } from "lucide-react";
import BlurText from "@/components/BlurText";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "Mentorship & Training",
    description:
      "Agile learning, cognitive gap analysis, and high-impact knowledge transfers designed to move you from plateau to promotion.",
    href: "/services/career-mentorship",
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: "Professional Resume Building",
    description:
      "A high-conversion marketing document — rebuilt via career archaeology, visual hierarchy, and psychological framing for recruiter clarity.",
    href: "/services/corporate-hiring",
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: "Strategic Job Applications",
    description:
      "Apply smarter, not harder — market arbitrage strategies that bypass gatekeepers (ATS) through networking and technical optimization.",
    href: "/services/job-referrals",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Specialized Consultants",
    description:
      "On-demand brainpower for non-linear career pivots and organizational scaling — tailored guidance grounded in strategy and execution.",
    href: "/services/consultant-network",
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
            Strategic intervention + technological synergy — engineered to unlock human potential.
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
  href,
  delay = 0,
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  href: string;
  delay?: number;
}) => {
  const card = (
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
        <div className="pt-2 text-sm font-semibold text-accent">
          Explore details →
        </div>
      </div>
    </motion.div>
  );

  return (
    <Link to={href} className="block">
      {card}
    </Link>
  );
};

export default Services;
