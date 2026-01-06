import { Star, Quote } from "lucide-react";
import BlurText from "@/components/BlurText";
import { CountAnimation } from "@/components/ui/count-animation";
import Marquee from "@/components/ui/cards";
import { useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "SSG transformed my job search into a strategic career move. Within 3 months, I landed a senior role at a Fortune 500 company in Singapore.",
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Tech Giant, Singapore",
    country: "India → Singapore",
  },
  {
    quote: "The consultant guidance was exceptional. They understood the European market nuances and helped me negotiate a 40% salary increase.",
    name: "Rahul Verma",
    role: "Engineering Lead",
    company: "Fintech Startup, Germany",
    country: "India → Germany",
  },
  {
    quote: "From resume building to final interview prep, SSG was there at every step. Now I'm leading a team of 20 in Dubai.",
    name: "Ananya Patel",
    role: "Operations Director",
    company: "Consulting Firm, UAE",
    country: "India → UAE",
  },
];

const metrics = [
  { value: 3000, suffix: "+", label: "Success Stories" },
  { value: 92, suffix: "%", label: "Placement Rate" },
  { value: 45, suffix: "%", label: "Avg. Salary Increase" },
  // keep rating as static (not a clean integer count animation)
  { valueText: "4.9/5", label: "Client Rating" },
] as const;

const SuccessStories = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement | null>(null);
  // More forgiving trigger for mobile while still requiring reaching the section.
  const isInView = useInView(sectionRef, { once: false, amount: 0.3, margin: "0px 0px -20% 0px" });
  const [animationCycle, setAnimationCycle] = useState(0);
  const prevInViewRef = useRef(false);

  useEffect(() => {
    const was = prevInViewRef.current;
    if (!was && isInView) setAnimationCycle((c) => c + 1);
    prevInViewRef.current = isInView;
  }, [isInView]);

  return (
    <section ref={sectionRef} id="success" className="bg-background py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Success Stories
          </span>
          <div className="mt-4">
            <BlurText
              text="Real Results, Real Careers"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            />
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of professionals who've transformed their careers with SSG.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div 
              key={metric.label}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <p className="font-heading text-3xl font-bold text-accent lg:text-4xl">
                {"valueText" in metric ? (
                  metric.valueText
                ) : (
                  <>
                    {isInView ? (
                      <CountAnimation key={`${metric.label}-${animationCycle}`} number={metric.value} />
                    ) : (
                      <span>{metric.value}</span>
                    )}
                    {metric.suffix}
                  </>
                )}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <Marquee
            // Smaller value = faster marquee (seconds per loop)
            speed={isMobile ? 10 : 30}
            row1={testimonials.map((t) => ({
              image: `https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200`,
              name: t.name,
              handle: t.role,
              quote: `"${t.quote}"`,
            }))}
            row2={testimonials.map((t) => ({
              image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200`,
              name: t.name,
              handle: t.company,
              quote: `${t.country}`,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
