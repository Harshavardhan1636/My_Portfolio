'use client';

import { useState, useEffect } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-glow-effect"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isMounted ? 1 : 0,
      }}
    />
  );
}
