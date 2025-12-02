'use client';

import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { useScrollAnimation } from '@/components/utils';

export const HowItWorks: React.FC = () => {
  // Scroll animations for title and steps
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const stepRefs = [
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
  ];

  return (
    <Section id="how-it-works">
      <Container>
        <div ref={titleRef} className="text-center mb-12 animate-on-scroll fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300">Our proven process for turning ideas into working systems</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Step 1: Clarify */}
          <div ref={stepRefs[0]} className="glass-panel rounded-xl p-6 relative animate-on-scroll scale-in delay-200">
            <div className="text-4xl mb-4">🔍</div>
            <div className="text-teal text-sm font-medium mb-2">Step 1</div>
            <h3 className="text-2xl font-bold text-white mb-3">Clarify</h3>
            <p className="text-gray-300">Deep-dive call to define goals, constraints, and assets</p>
            <div className="step-arrow hidden md:block"></div>
          </div>

          {/* Step 2: Architect */}
          <div ref={stepRefs[1]} className="glass-panel rounded-xl p-6 relative animate-on-scroll scale-in delay-400">
            <div className="text-4xl mb-4">🏗️</div>
            <div className="text-teal text-sm font-medium mb-2">Step 2</div>
            <h3 className="text-2xl font-bold text-white mb-3">Architect</h3>
            <p className="text-gray-300">Design the system: dashboards, workflows, prompts, or product specs</p>
            <div className="step-arrow hidden md:block"></div>
          </div>

          {/* Step 3: Activate */}
          <div ref={stepRefs[2]} className="glass-panel rounded-xl p-6 relative animate-on-scroll scale-in delay-600">
            <div className="text-4xl mb-4">🚀</div>
            <div className="text-teal text-sm font-medium mb-2">Step 3</div>
            <h3 className="text-2xl font-bold text-white mb-3">Activate</h3>
            <p className="text-gray-300">Implement quickly with live working sessions, iteration, and handoff docs</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};