import { MapPin, Globe2 } from "lucide-react";
import BlurText from "@/components/BlurText";
import { GridPattern } from "@/components/ui/grid-pattern";
import AnimatedList from "@/components/ui/animated-list";
import { CountAnimation } from "@/components/ui/count-animation";
import { useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const regions = [
  { name: "North America", countries: "USA, Canada", positions: 120 },
  { name: "Europe", countries: "UK, Germany, Netherlands", positions: 200 },
  { name: "Asia Pacific", countries: "Singapore, Australia", positions: 180 },
  { name: "Middle East", countries: "UAE, Saudi Arabia", positions: 90 },
  { name: "South Asia", countries: "India (Major Hub)", positions: 500 },
];

const GlobalPresence = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  // Start counting only when the user actually reaches this section.
  // `margin` shrinks the observer viewport from the bottom so it doesn't trigger "early" on tall screens.
  // Use a more forgiving threshold so it reliably triggers on mobile, while still requiring the user to reach the section.
  const isInView = useInView(sectionRef, { once: false, amount: 0.3, margin: "0px 0px -20% 0px" });
  const [animationCycle, setAnimationCycle] = useState(0);
  const prevInViewRef = useRef(false);

  const items = useMemo(() => regions.map((r) => r.name), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRegion = regions[activeIndex] ?? regions[0];

  // Re-run the count animation each time the user re-enters the section.
  useEffect(() => {
    const wasInView = prevInViewRef.current;
    if (!wasInView && isInView) {
      setAnimationCycle((c) => c + 1);
    }
    prevInViewRef.current = isInView;
  }, [isInView]);

  return (
    <section ref={sectionRef} id="global" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Professional grid background */}
      <div className="pointer-events-none absolute inset-0">
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
          ]}
          className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        />
        <div className="absolute inset-0 bg-gradient-subtle opacity-60" />
      </div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Global Reach
              </span>
              <BlurText
                text="Connecting Talent Across 10+ Countries"
                delay={150}
                animateBy="words"
                direction="top"
                repeat
                className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl"
              />
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              With a strong presence in India and expanding networks across North America, 
              Europe, and Asia-Pacific, SSG bridges the gap between ambitious professionals 
              and world-class opportunities.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md">
                <p className="flex items-baseline justify-start font-heading text-3xl font-bold text-foreground">
                  {isInView ? <CountAnimation key={`countries-${animationCycle}`} number={10} /> : <span>10</span>}
                  <span>+</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Countries Covered</p>
              </div>
              <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md">
                <p className="flex items-baseline justify-start font-heading text-3xl font-bold text-foreground">
                  {isInView ? <CountAnimation key={`opps-${animationCycle}`} number={1000} /> : <span>1000</span>}
                  <span>+</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Active Opportunities</p>
              </div>
            </div>

            {/* Selected region detail */}
            <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-muted text-accent">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-heading text-lg font-semibold text-foreground">{activeRegion.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{activeRegion.countries}</p>
                </div>
                <div className="text-right">
                  <p className="flex items-baseline justify-end font-heading text-xl font-bold text-accent">
                    {isInView ? (
                      <CountAnimation key={`positions-${animationCycle}-${activeRegion.name}`} number={activeRegion.positions} />
                    ) : (
                      <span>{activeRegion.positions}</span>
                    )}
                    <span>+</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Positions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Region List (Animated) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-muted text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-foreground">Regions</p>
                <p className="text-sm text-muted-foreground">Use mouse or arrow keys to browse</p>
              </div>
            </div>

            <AnimatedList
              items={items}
              initialSelectedIndex={0}
              onItemSelect={(_, idx) => setActiveIndex(idx)}
              showGradients={true}
              enableArrowNavigation={true}
              displayScrollbar={true}
              className="max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
