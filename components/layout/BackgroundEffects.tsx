'use client';

import React, { useMemo } from 'react';

const BackgroundEffects: React.FC = () => {
  // Generate stable particle configurations once per mount
  const particles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Animated Grid Pattern Layer */}
      <div className="absolute inset-0 animate-grid"></div>

      {/* Animated Gradient Overlay Layer */}
      <div className="absolute inset-0 animate-gradient"></div>

      {/* Subtle Floating Particles (Optional) */}
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundEffects;