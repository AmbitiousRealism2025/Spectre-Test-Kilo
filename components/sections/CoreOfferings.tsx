'use client';

import React, { useState, useEffect } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { useScrollAnimation } from '@/components/utils';

export const CoreOfferings: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll animation for section title
  const titleRef = useScrollAnimation({ threshold: 0.2 });

  // Scroll animations for feature cards with staggered delays
  const cardRefs = [
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
  ];

  if (isLoading) {
    return (
      <SkeletonSection
        title="What We Build"
        cardCount={4}
        id="services"
      />
    );
  }

  return (
    <Section id="services" aria-labelledby="services-heading">
      <Container>
        <div ref={titleRef} className="text-center mb-12 animate-on-scroll fade-in-up">
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We Build
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            AI-powered solutions that bridge strategy and execution
          </p>
        </div>

        <div className="grid-responsive">
          <div ref={cardRefs[0]} className="animate-on-scroll fade-in-up delay-200">
            <FeatureCard
              icon="🎯"
              headline="AI Strategy & Systems Design"
              description="Clarify goals, map workflows, choose the right tools (ChatGPT, Claude, Gemini, etc.). Turn scattered ideas into concrete plans and roadmaps."
              microMetric="From fuzzy idea to clear plan in 7 days"
            />
          </div>

          <div ref={cardRefs[1]} className="animate-on-scroll fade-in-up delay-400">
            <FeatureCard
              icon="📊"
              headline="Vibe-Coded Dashboards & Interfaces"
              description="Single-page dashboards and control centers for founders, teams, or investors. Custom, visually engaging HTML dashboards, Notion/Obsidian views, or web apps."
              microMetric="Beautiful, functional dashboards in days, not weeks"
            />
          </div>

          <div ref={cardRefs[2]} className="animate-on-scroll fade-in-up delay-600">
            <FeatureCard
              icon="🔧"
              headline="Product & Workflow Prototyping"
              description="Help scope and prototype AI-powered products (MVPs, internal tools, automations). Actionable specs, wireframes, and 'coding plans' for developers."
              microMetric="Ship-ready prototypes with clear implementation paths"
            />
          </div>

          <div ref={cardRefs[3]} className="animate-on-scroll fade-in-up delay-800">
            <FeatureCard
              icon="📚"
              headline="Content & Education Systems"
              description="Flashcard systems, learning paths, summaries, and internal documentation powered by AI. For teams that want to 'bottle' their knowledge."
              microMetric="Turn tribal knowledge into searchable systems"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};