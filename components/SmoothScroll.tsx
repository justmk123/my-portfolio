import React, { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      // Initialize Lenis for momentum scrolling
      // Minimal, safe configuration for v1
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      rafId = requestAnimationFrame(raf);
    } catch (error) {
      console.error("Lenis Smooth Scroll failed to initialize:", error);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;