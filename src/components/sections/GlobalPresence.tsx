import { MapPin, Globe2 } from "lucide-react";
import BlurText from "@/components/BlurText";
import { GridPattern } from "@/components/ui/grid-pattern";
import AnimatedList from "@/components/ui/animated-list";
import { useMemo, useState } from "react";

const regions = [
  { name: "North America", countries: "USA, Canada" },
  { name: "Europe", countries: "UK, Germany, Netherlands" },
  { name: "Asia Pacific", countries: "Singapore, Australia" },
  { name: "Middle East", countries: "UAE, Saudi Arabia" },
  { name: "South Asia", countries: "India" },
];

const GlobalPresence = () => {
  const items = useMemo(() => regions.map((r) => r.name), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRegion = regions[activeIndex] ?? regions[0];

  return (
    <section id="global" className="relative overflow-hidden bg-background py-24 lg:py-32">
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
                Global Presence
              </span>
              <BlurText
                text="Career Architecture Across Markets"
                delay={150}
                animateBy="words"
                direction="top"
                repeat
                className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl"
              />
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              We operate across key regions to support global career moves, market-aware positioning, and execution strategies that match local hiring realities.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md">
                <p className="font-heading text-lg font-semibold text-foreground">Region-aware strategy</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Positioning and execution adapted to local norms and decision patterns.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-md">
                <p className="font-heading text-lg font-semibold text-foreground">Global network</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Support for cross-border moves, pivots, and non-linear career transitions.
                </p>
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
