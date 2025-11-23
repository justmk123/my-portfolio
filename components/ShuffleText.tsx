import React, { useState, useEffect, useRef } from 'react';

interface ShuffleTextProps {
  content: string;
  className?: string;
  delay?: number;
}

const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}';

const ShuffleText: React.FC<ShuffleTextProps> = ({ content, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState(content);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const isMounted = useRef(true);

  const startAnimation = () => {
    // If component unmounted, do not start
    if (!isMounted.current) return;

    let iteration = 0;
    
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      // Double check mount status inside interval
      if (!isMounted.current) {
         if (intervalRef.current) window.clearInterval(intervalRef.current);
         return;
      }

      setDisplayText(prev => 
        content
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return content[index];
            }
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join('')
      );

      if (iteration >= content.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        if (isMounted.current) setDisplayText(content); 
      }

      iteration += 1 / 3; // Speed of decoding
    }, 30);
  };

  useEffect(() => {
    isMounted.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            
            // Trigger animation when element enters viewport
            setTimeout(() => {
              if (isMounted.current) startAnimation();
            }, delay);

            // Stop observing once triggered to prevent re-animation on scroll up
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly triggers before bottom of viewport
      } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      isMounted.current = false;
      observer.disconnect();
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [content, delay]);

  return (
    <span 
      ref={containerRef}
      className={className}
      onMouseEnter={startAnimation}
      // Ensure it takes layout space correctly even when changing width slightly
      style={{ display: className.includes('block') ? 'block' : 'inline-block' }} 
    >
      {displayText}
    </span>
  );
};

export default ShuffleText;