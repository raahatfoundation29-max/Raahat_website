import { useRef, useEffect, useState } from 'react';

interface CountUpProps {
  /**
   * The target value string — can include a numeric suffix or prefix.
   * Examples: "27+", "100%", "500+", "10+ Years"
   */
  value: string;
  /** Animation duration in ms. Default: 1600 */
  duration?: number;
  /**
   * Fraction of element that must be visible before counting starts.
   * Default: 0.1
   */
  threshold?: number;
  /** Extra className applied to the wrapping <span> */
  className?: string;
}

/**
 * CountUp — counts from 0 to a numeric value with an eased animation,
 * triggered when the element enters the viewport.
 *
 * Usage:
 *   <CountUp value="27+" />         → "0" … "27+"
 *   <CountUp value="100%" />        → "0" … "100%"
 *   <CountUp value="10+ Years" />   → "0+ Years" … "10+ Years"
 *
 * The component preserves any non-numeric characters surrounding the number
 * (prefix and suffix) and only animates the numeric portion.
 *
 * Runs only once — re-entering the viewport does not replay the animation.
 */
export default function CountUp({
  value,
  duration  = 1600,
  threshold = 0.1,
  className,
}: CountUpProps) {
  const [count, setCount]           = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref                         = useRef<HTMLSpanElement>(null);

  // Parse: split leading non-digits, digits, and trailing non-digits
  const match        = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const prefix       = match?.[1] ?? '';
  const numericValue = match ? parseInt(match[2], 10) : 0;
  const suffix       = match?.[3] ?? value; // fallback: show raw value if no digits

  useEffect(() => {
    if (hasAnimated || numericValue === 0) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed  = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out quad: fast start, smooth finish
          const eased    = 1 - Math.pow(1 - progress, 2);
          setCount(Math.floor(eased * numericValue));

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setCount(numericValue);
            setHasAnimated(true);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericValue, duration, threshold, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
