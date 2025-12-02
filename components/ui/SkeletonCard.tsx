'use client';

import React from 'react';

interface SkeletonCardProps {
  // variant prop removed as it was unused
}

export const SkeletonCard: React.FC<SkeletonCardProps> = () => {
  return (
    <div className="glass-card rounded-xl p-6 skeleton-card">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="skeleton skeleton-text w-16 h-16 rounded-lg mb-4"></div>
        </div>
        <div className="skeleton skeleton-text w-3/4 h-6 mb-3"></div>
        <div className="space-y-2 flex-grow">
          <div className="skeleton skeleton-text w-full h-4"></div>
          <div className="skeleton skeleton-text w-5/6 h-4"></div>
          <div className="skeleton skeleton-text w-4/6 h-4"></div>
        </div>
        <div className="mt-auto">
          <div className="skeleton skeleton-text w-1/3 h-4"></div>
        </div>
      </div>
    </div>
  );
};