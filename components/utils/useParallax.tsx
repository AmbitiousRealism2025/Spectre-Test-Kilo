'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';

export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (!elementRef.current) return;

    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Apply parallax effect based on distance from viewport center
      const parallaxOffset = distanceFromCenter * speed;

      setStyle({
        transform: `translateY(${parallaxOffset}px)`,
        transition: 'transform 0.1s ease-out',
      });
    };

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setStyle({
        transform: 'none',
      });
      return;
    }

    // Initial call
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { elementRef, style };
}