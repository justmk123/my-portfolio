import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  
  // Mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // Ring position (for trailing effect)
  const ring = useRef({ x: 0, y: 0 });
  
  // State for hover effect
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Initial position outside viewport to prevent flash
    mouse.current = { x: -100, y: -100 };
    ring.current = { x: -100, y: -100 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Update dot immediately (no lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    // Check for hoverable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target;
      
      // Safety check: Ensure target is an Element before accessing properties like tagName
      if (!(target instanceof Element)) {
        return;
      }
      
      // Check if target is interactive
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    // Animation Loop for Ring
    const animateRing = () => {
      // Linear interpolation (Lerp) for smooth delay
      // Position += (Target - Position) * speed
      const speed = 0.15;
      ring.current.x += (mouse.current.x - ring.current.x) * speed;
      ring.current.y += (mouse.current.y - ring.current.y) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animateRing);
    };

    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Only render on devices that likely support hover (simple check, CSS handles the rest)
  return (
    <>
      {/* Central Dot - Precise */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block will-change-transform"
      >
         <div className={`rounded-full bg-brand-blue -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovering ? 'w-1 h-1 bg-white' : 'w-2 h-2'}`} />
      </div>

      {/* Trailing Ring - Fluid */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block will-change-transform"
      >
        <div 
          className={`border border-brand-blue rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out 
          ${isHovering ? 'w-12 h-12 bg-brand-blue/10 border-brand-blue/50' : 'w-8 h-8 opacity-50'}
          ${isClicked ? 'scale-75' : 'scale-100'}
          `} 
        />
      </div>
    </>
  );
};

export default CustomCursor;