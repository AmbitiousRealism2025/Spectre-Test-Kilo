'use client';

import React, { useState, useEffect } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { PricingCard } from '@/components/ui/PricingCard';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { useScrollAnimation } from '@/components/utils';

export const Pricing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll animations for title and pricing cards
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const cardRefs = [
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
  ];

  if (isLoading) {
    return (
      <SkeletonSection
        title="Simple, Transparent Engagement Models"
        cardCount={3}
        id="pricing"
      />
    );
  }

  return (
    <Section id="pricing" aria-labelledby="pricing-heading">
      <Container>
        <div ref={titleRef} className="text-center mb-12 animate-on-scroll fade-in-up">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple, Transparent Engagement Models
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Choose the level of partnership that fits your needs
          </p>
        </div>

        <div className="grid-responsive">
          <div ref={cardRefs[0]} className="animate-on-scroll scale-in delay-200">
            <PricingCard
              tier="Starter Session"
              description="One deep-dive strategy call + follow-up summary & roadmap. Perfect for clarifying your next steps."
              idealFor="Founders with a clear project idea who need expert guidance to get started"
            />
          </div>

          <div ref={cardRefs[1]} className="animate-on-scroll scale-in delay-400">
            <PricingCard
              tier="System Blueprint"
              description="Full system design including dashboards, workflows, prompts, and specs. Everything you need to build or hand off to developers."
              idealFor="Teams ready to implement AI-powered products, dashboards, or internal tools"
            />
          </div>

          <div ref={cardRefs[2]} className="animate-on-scroll scale-in delay-600">
            <PricingCard
              tier="Ongoing Partner"
              description="Retainer-style arrangement for continuous iteration, new builds, and strategic support as your needs evolve."
              idealFor="Growing companies that want a dedicated AI strategy and execution partner"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};