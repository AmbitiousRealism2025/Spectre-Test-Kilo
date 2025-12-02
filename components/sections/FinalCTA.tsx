'use client';

import React from 'react';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { useScrollAnimation } from '@/components/utils';

export const FinalCTA: React.FC = () => {
  // Scroll animation for CTA
  const ctaRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="contact">
      <Container>
        <div ref={ctaRef} className="glass-card rounded-2xl p-12 md:p-16 text-center animate-on-scroll scale-in">
          <h2 className="text-4xl lg:text-5xl font-bold hero-gradient-text mb-6">
            Ready to turn your ambitious ideas into realistic, working systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s clarify your vision, architect the solution, and activate your next breakthrough.
          </p>
          <Button
            href="mailto:contact@ambitiousrealism.com"
            className="text-lg px-8 py-4 hover-scale-md"
          >
            Book a Strategy Session
          </Button>
        </div>
      </Container>
    </Section>
  );
};