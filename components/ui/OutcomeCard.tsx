'use client';

import React from 'react';

interface OutcomeCardProps {
  title: string;
  problem: string;
  solution: string;
}

export const OutcomeCard: React.FC<OutcomeCardProps> = ({ title, problem, solution }) => {
  return (
    <div className="glass-card glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-amber/30 hover-glow-amber">
      <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 hover:text-amber-400">{title}</h3>

      <div className="flex flex-col space-y-4">
        <div>
          <span className="text-gray-400 text-sm font-medium mb-2 block transition-colors duration-300 hover:text-amber-300">Challenge:</span>
          <p className="text-gray-300 mb-3 transition-colors duration-300 hover:text-white">{problem}</p>
        </div>

        <div>
          <span className="text-amber-400 text-sm font-medium mb-2 block hover-glow-amber">Solution:</span>
          <p className="text-white transition-colors duration-300 hover:text-amber-200">{solution}</p>
        </div>
      </div>
    </div>
  );
};