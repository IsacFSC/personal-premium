"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  as?: ElementType;
}

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const animClass =
    direction === "left"
      ? "animate-on-scroll-left"
      : direction === "right"
        ? "animate-on-scroll-right"
        : "animate-on-scroll";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("is-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as ElementType;

  return (
    <Component ref={ref} className={`${animClass} ${className}`}>
      {children}
    </Component>
  );
}
