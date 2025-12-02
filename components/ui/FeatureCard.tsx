'use client';

import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  headline: string;
  description: string;
  microMetric: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  headline,
  description,
  microMetric,
}) => {
  return (
    <div className="glass-card glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover-glow-teal">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-110">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 hover:text-teal-400">{headline}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          <p className="text-teal-400 text-sm font-medium hover-glow-teal">{microMetric}</p>
        </div>
      </div>
    </div>
  );
};