import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement>;
  customVariants?: Variants;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TimelineContent({
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants,
  children,
  className,
  ...props
}: TimelineContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [timelineRef]);

  const defaultVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  // Create motion component based on the 'as' prop
  const createMotionComponent = () => {
    const baseProps = {
      ref: elementRef as any,
      custom: animationNum,
      initial: "hidden" as const,
      animate: isVisible ? "visible" : "hidden",
      variants,
      className: cn(className),
      ...props,
    };

    switch (Component) {
      case "span":
        return <motion.span {...baseProps}>{children}</motion.span>;
      case "a":
        return <motion.a {...baseProps}>{children}</motion.a>;
      case "button":
        return <motion.button {...baseProps}>{children}</motion.button>;
      case "figure":
        return <motion.figure {...baseProps}>{children}</motion.figure>;
      case "div":
      default:
        return <motion.div {...baseProps}>{children}</motion.div>;
    }
  };

  return createMotionComponent();
}

