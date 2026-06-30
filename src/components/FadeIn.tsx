import React, { useRef, useEffect, useState, type ReactNode, type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  /** Content to fade in */
  children: ReactNode;
  /** Delay in seconds before the animation starts. Default: 0 */
  delay?: number;
  /** Duration in seconds. Default: 0.5 */
  duration?: number;
  /** Y-offset to start from (px). Default: 16 */
  yOffset?: number;
  /** Only animate once when scrolled into view. Default: true */
  once?: boolean;
  /** Fraction of element visible before triggering (0–1). Default: 0.15 */
  threshold?: number;
  /** Extra className forwarded to the wrapper */
  className?: string;
  /** Extra inline style forwarded to the wrapper */
  style?: CSSProperties;
  /** HTML tag to render as. Default: 'div' */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * FadeIn — scroll-triggered fade-up wrapper.
 *
 * Usage:
 *   <FadeIn delay={0.1}>
 *     <h2>Section Heading</h2>
 *   </FadeIn>
 *
 * Respects `prefers-reduced-motion`: collapses to an instant show when the
 * system accessibility setting is active.
 */
export default function FadeIn({
  children,
  delay    = 0,
  duration = 0.5,
  yOffset  = 16,
  once     = true,
  threshold = 0.15,
  className,
  style,
  as       = 'div',
}: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const ref          = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  // When reduced-motion is preferred, render children immediately with no animation
  if (shouldReduce) {
    const Tag = as as any;
    return (
      <Tag ref={ref as React.Ref<HTMLElement>} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={style}
      initial={{ opacity: 0, y: yOffset }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
