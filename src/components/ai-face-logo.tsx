
'use client';

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from 'react';

export function AIFaceLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [logoOffset, setLogoOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  // Mouse-tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const maxEyeOffsetX = 2;
        const maxEyeOffsetY = 1;
        const maxLogoOffsetX = 6;
        const maxLogoOffsetY = 3;

        const eyeOffsetX = (deltaX / (window.innerWidth / 2)) * maxEyeOffsetX;
        const eyeOffsetY = (deltaY / (window.innerHeight / 2)) * maxEyeOffsetY;
        setEyeOffset({ x: eyeOffsetX, y: eyeOffsetY });

        const logoOffsetX = (deltaX / (window.innerWidth / 2)) * maxLogoOffsetX;
        const logoOffsetY = (deltaY / (window.innerHeight / 2)) * maxLogoOffsetY;
        setLogoOffset({ x: logoOffsetX, y: logoOffsetY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Blinking effect
  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;

    const scheduleBlink = () => {
      const blinkInterval = Math.random() * 4000 + 1000; // Blink every 1-5 seconds
      blinkTimeout = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink(); // Schedule the next blink
        }, 150); // Blink duration
      }, blinkInterval);
    };

    scheduleBlink();

    return () => {
      clearTimeout(blinkTimeout);
    };
  }, []);

  const handleLogoClick = () => {
    if (!isShaking) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Duration of the shake animation
    }
  };

  return (
    <div 
      ref={logoRef} 
      className={cn(
        "relative h-24 w-24 md:h-32 md:w-32 cursor-pointer transition-transform duration-300 ease-out group",
        isShaking && "animate-shake",
        className
      )}
      style={{ transform: `translate(${logoOffset.x}px, ${logoOffset.y}px)` }}
      onClick={handleLogoClick}
      {...props}
    >
      <div 
        className="absolute -inset-0.5 rounded-full bg-primary/20 blur-xl transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110"
      ></div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary relative z-10 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Head and Antenna */}
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        
        {/* Side Details */}
        <path d="M2 14h2" />
        <path d="M20 14h2" />

        {/* Eyes - with transform for movement */}
        <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
          {isBlinking ? (
            <>
              <path d="M8 14h2" />
              <path d="M14 14h2" />
            </>
          ) : (
            <>
              <path d="M9 13v2" />
              <path d="M15 13v2" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
