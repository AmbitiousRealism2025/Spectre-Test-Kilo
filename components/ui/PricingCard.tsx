'use client';

import React from 'react';
import { Button } from './Button';

interface PricingCardProps {
  tier: string;
  description: string;
  idealFor: string;
  ctaText?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  description,
  idealFor,
  ctaText = 'Apply for this engagement',
}) => {
  return (
    <div className="glass-card glass-hover rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover-glow-purple">
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300 hover:text-purple-400">{tier}</h3>
        <p className="text-gray-300 mb-6 transition-colors duration-300 hover:text-white">{description}</p>
        <div className="mb-6">
          <p className="text-sm font-semibold text-purple-400 mb-2">Ideal for:</p>
          <p className="text-gray-300 hover-glow-purple">{idealFor}</p>
        </div>
        <div className="mt-auto">
          <Button variant="primary" className="w-full hover-scale-md">
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};