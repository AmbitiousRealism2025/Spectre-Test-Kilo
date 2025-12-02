'use client';

import React from 'react';
import { Section, Container } from '@/components/layout';

interface SkeletonSectionProps {
  title?: string;
  cardCount?: number;
  id?: string;
}

export const SkeletonSection: React.FC<SkeletonSectionProps> = ({
  title = 'Loading Content',
  cardCount = 4,
  id = 'skeleton-section',
}) => {
  return (
    <Section id={id}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 skeleton skeleton-text w-3/4 h-8 mx-auto">{title}</h2>
          <p className="text-xl text-gray-300 skeleton skeleton-text w-1/2 h-6 mx-auto"></p>
        </div>

        <div className="grid-responsive">
          {Array.from({ length: cardCount }).map((_, index) => (
            <div key={index} className="skeleton-card">
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
          ))}
        </div>
      </Container>
    </Section>
  );
};