import BlurText from "@/components/BlurText";
import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";
import { CountAnimation } from "@/components/ui/count-animation";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Collaborations = () => {
  const calloutRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(calloutRef, { once: false, amount: 0.55, margin: "0px 0px -35% 0px" });
  const [animationCycle, setAnimationCycle] = useState(0);
  const prevInViewRef = useRef(false);

  useEffect(() => {
    const was = prevInViewRef.current;
    if (!was && isInView) setAnimationCycle((c) => c + 1);
    prevInViewRef.current = isInView;
  }, [isInView]);

  return (
    <section className="border-y border-border bg-background py-16 lg:py-20">
      <div className="container">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by professionals placed at
          </p>
        </div>

        {/* Partner logos loop */}
        <div className="mt-10">
          <div className="mx-auto max-w-6xl">
            <BrandScroller />
            <div className="mt-4" />
            <BrandScrollerReverse />
          </div>
        </div>

        {/* Consultant network callout */}
        <div ref={calloutRef} className="mx-auto mt-16 max-w-3xl py-8 text-center lg:py-12">
          <div className="flex justify-center">
            <BlurText
              text="Our Consultant Network"
              delay={150}
              animateBy="words"
              direction="top"
              repeat
              className="w-full justify-center font-heading text-xl font-bold text-foreground lg:text-2xl"
            />
          </div>
          <p className="mt-3 text-muted-foreground">
            SSG's strength lies in our carefully vetted network of 200+ career consultants 
            across industries. Each consultant brings deep domain expertise and genuine 
            commitment to candidate success.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <p className="flex items-center justify-center font-heading text-2xl font-bold text-accent">
                {isInView ? <CountAnimation key={`consultants-${animationCycle}`} number={200} /> : <span>0</span>}
                <span>+</span>
              </p>
              <p className="text-sm text-muted-foreground">Active Consultants</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="flex items-center justify-center font-heading text-2xl font-bold text-accent">
                {isInView ? <CountAnimation key={`industries-${animationCycle}`} number={15} /> : <span>0</span>}
                <span>+</span>
              </p>
              <p className="text-sm text-muted-foreground">Industries Covered</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="flex items-center justify-center font-heading text-2xl font-bold text-accent">
                {isInView ? <CountAnimation key={`years-${animationCycle}`} number={8} /> : <span>0</span>}
                <span>+</span>
              </p>
              <p className="text-sm text-muted-foreground">Years Avg. Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
