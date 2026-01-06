import React from "react";
import { cn } from "@/lib/utils";

type CardT = {
  image: string;
  name: string;
  handle: string;
  quote?: string;
};

const VerifyIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 48 48"
    className={cn("inline-block", className)}
    aria-hidden="true"
  >
    <polygon
      fill="currentColor"
      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
    />
    <polygon
      fill="hsl(var(--background))"
      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
    />
  </svg>
);

const Card = ({ card }: { card: CardT }) => (
  <div className="mx-4 w-80 shrink-0 rounded-2xl border border-border bg-card/90 p-6 shadow-soft backdrop-blur-md transition-shadow duration-200 hover:shadow-card">
    <div className="flex items-center gap-3">
      <img className="h-11 w-11 rounded-full object-cover" src={card.image} alt={card.name} />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="font-heading font-semibold text-foreground">{card.name}</p>
          <span className="text-accent">
            <VerifyIcon />
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{card.handle}</span>
      </div>
    </div>

    <p className="pt-4 text-sm leading-relaxed text-foreground/80">
      {card.quote ?? "Radiant made undercutting all of our competitors an absolute breeze."}
    </p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 28,
  className,
}: {
  data: CardT[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);
  return (
    <div className={cn("relative mx-auto w-full max-w-6xl overflow-hidden", className)}>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div
        className={cn("flex min-w-[200%] transform-gpu", reverse ? "py-4" : "py-4")}
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((c, i) => (
          <Card key={`${c.handle}-${i}`} card={c} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

export default function Marquee({
  row1,
  row2,
  speed = 28,
}: {
  row1: CardT[];
  row2: CardT[];
  speed?: number;
}) {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-marquee-row="true"] { animation: none !important; transform: translateX(0%) !important; }
        }
      `}</style>
      <div className="flex flex-col gap-6">
        <div data-marquee-row="true">
          <MarqueeRow data={row1} reverse={false} speed={speed} />
        </div>
        <div data-marquee-row="true">
          <MarqueeRow data={row2} reverse={true} speed={speed + 6} />
        </div>
      </div>
    </>
  );
}


