"use client";

import { BsAmazon, BsApple, BsGoogle, BsMicrosoft } from "react-icons/bs";

const brands = [
  { Icon: BsAmazon, label: "Amazon", color: "#FF9900" },
  { Icon: BsGoogle, label: "Google", color: "#4285F4" },
  { Icon: BsMicrosoft, label: "Microsoft", color: "#5E5E5E" },
  { Icon: BsApple, label: "Apple", color: "#111111" },
] as const;

const BrandRow = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={[
        "group flex max-w-full flex-row overflow-hidden py-2",
        "[--gap:2rem] [gap:var(--gap)] [--duration:40s]",
        "[mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]",
      ].join(" ")}
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className={[
              "flex shrink-0 flex-row justify-around",
              "[gap:var(--gap)]",
              reverse ? "animate-marquee-reverse" : "animate-marquee",
            ].join(" ")}
            key={i}
          >
            {brands.map(({ Icon, label, color }) => (
              <div className="flex w-28 items-center gap-3" key={label}>
                <Icon size={24} color={color} aria-hidden />
                <p className="text-lg font-semibold opacity-80">{label}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export const BrandScroller = () => <BrandRow />;

export const BrandScrollerReverse = () => <BrandRow reverse />;


