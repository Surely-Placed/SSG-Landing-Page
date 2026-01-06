import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CircularTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  href?: string;
}

interface CircularTestimonialsProps {
  testimonials: CircularTestimonial[];
  autoplay?: boolean;
  className?: string;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export default function CircularTestimonials({
  testimonials,
  autoplay = true,
  className,
}: CircularTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<number | null>(null);

  const len = useMemo(() => testimonials.length, [testimonials]);
  const active = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  useEffect(() => {
    const handleResize = () => {
      if (imageContainerRef.current) setContainerWidth(imageContainerRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) window.clearInterval(autoplayIntervalRef.current);
    autoplayIntervalRef.current = null;
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % len);
  }, [len]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + len) % len);
  }, [len]);

  useEffect(() => {
    if (!autoplay || len <= 1) return;
    autoplayIntervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % len);
    }, 5000);
    return () => stopAutoplay();
  }, [autoplay, len, stopAutoplay]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  const getImageStyle = useCallback(
    (index: number): React.CSSProperties => {
      const gap = calculateGap(containerWidth);
      const maxStickUp = gap * 0.8;
      const isActive = index === activeIndex;
      const isLeft = (activeIndex - 1 + len) % len === index;
      const isRight = (activeIndex + 1) % len === index;

      if (isActive) {
        return {
          zIndex: 3,
          opacity: 1,
          pointerEvents: "auto",
          transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      if (isLeft) {
        return {
          zIndex: 2,
          opacity: 1,
          pointerEvents: "auto",
          transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.86) rotateY(15deg)`,
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      if (isRight) {
        return {
          zIndex: 2,
          opacity: 1,
          pointerEvents: "auto",
          transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.86) rotateY(-15deg)`,
          transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
        };
      }
      return {
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    },
    [activeIndex, containerWidth, len],
  );

  const quoteVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
  };

  if (!testimonials?.length) return null;

  return (
    <div className={cn("w-full max-w-6xl", className)}>
      <div className="relative isolate grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Images */}
        <div
          className="relative z-0 h-[22rem] w-full rounded-3xl"
          ref={imageContainerRef}
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((t, index) => (
            <img
              key={`${t.src}-${index}`}
              src={t.src}
              alt={t.name}
              className="absolute inset-0 h-full w-full cursor-pointer rounded-3xl object-cover shadow-elevated"
              style={getImageStyle(index)}
              onClick={() => {
                const left = (activeIndex - 1 + len) % len;
                const right = (activeIndex + 1) % len;
                if (index === left) handlePrev();
                else if (index === right) handleNext();
              }}
              onPointerDown={(e) => {
                // helps on touch devices where click can be delayed/cancelled
                e.preventDefault();
                const left = (activeIndex - 1 + len) % len;
                const right = (activeIndex + 1) % len;
                if (index === left) handlePrev();
                else if (index === right) handleNext();
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground">{active.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{active.designation}</p>

              <motion.p className="mt-6 text-base leading-relaxed text-foreground/80">
                {active.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 6 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: "easeInOut", delay: 0.02 * i }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="relative z-20 mt-8 flex flex-wrap items-center gap-3 md:mt-0 md:pt-10">
            <button
              type="button"
              onClick={handlePrev}
              onPointerDown={(e) => {
                e.preventDefault();
                handlePrev();
              }}
              aria-label="Previous"
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-soft backdrop-blur-md transition-colors hover:bg-muted"
              style={{ touchAction: "manipulation" }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              onPointerDown={(e) => {
                e.preventDefault();
                handleNext();
              }}
              aria-label="Next"
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground shadow-soft backdrop-blur-md transition-colors hover:bg-muted"
              style={{ touchAction: "manipulation" }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


