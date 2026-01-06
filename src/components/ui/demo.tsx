"use client";

import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";

const DemoOne = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <BrandScroller />
      <BrandScrollerReverse />
    </div>
  );
};

export default DemoOne;


