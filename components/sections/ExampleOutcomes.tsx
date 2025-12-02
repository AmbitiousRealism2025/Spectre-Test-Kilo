'use client';

import React, { useState, useEffect } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { OutcomeCard } from '@/components/ui/OutcomeCard';
import { SkeletonSection } from '@/components/ui/SkeletonSection';
import { useScrollAnimation } from '@/components/utils';

export const ExampleOutcomes: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll animations for title and cards
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const cardRefs = [
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
  ];

  if (isLoading) {
    return (
      <SkeletonSection
        title="Example Outcomes"
        cardCount={5}
        id="examples"
      />
    );
  }

  return (
    <Section id="examples">
      <Container>
        <div ref={titleRef} className="text-center mb-12 animate-on-scroll fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Example Outcomes</h2>
          <p className="text-xl text-gray-300">Real-world systems we've architected for ambitious builders</p>
        </div>

        <div className="grid-responsive">
          <div ref={cardRefs[0]} className="animate-on-scroll fade-in-up delay-200">
            <OutcomeCard
              title="Investor-Ready HydroTech Dashboard for Pitch Meetings"
              problem="Scattered data across spreadsheets made investor updates time-consuming and unclear"
              solution="Single-page interactive dashboard with real-time metrics, charts, and narrative flow"
            />
          </div>

          <div ref={cardRefs[1]} className="animate-on-scroll fade-in-up delay-400">
            <OutcomeCard
              title="AI-Powered Learning System for Internal Training"
              problem="New team members took weeks to onboard due to fragmented documentation"
              solution="AI-driven knowledge hub with searchable flashcards, learning paths, and instant answers"
            />
          </div>

          <div ref={cardRefs[2]} className="animate-on-scroll fade-in-up delay-600">
            <OutcomeCard
              title="Founder Control Center: Tasks, Metrics, and Idea Pipeline"
              problem="Juggling multiple tools led to lost ideas and unclear priorities"
              solution="Unified command center integrating tasks, KPIs, and idea capture in one view"
            />
          </div>

          <div ref={cardRefs[3]} className="animate-on-scroll fade-in-up delay-800">
            <OutcomeCard
              title="Gigging Musician Command Hub (SoundCheck-style)"
              problem="Managing gigs, setlists, and gear across platforms was chaotic"
              solution="Custom dashboard for bookings, repertoire, and equipment tracking with mobile access"
            />
          </div>

          <div ref={cardRefs[4]} className="animate-on-scroll fade-in-up delay-1000">
            <OutcomeCard
              title="Obsidian Knowledge Hub with AI-Driven Retrieval"
              problem="Valuable notes buried in folders, hard to surface when needed"
              solution="AI-enhanced Obsidian setup with smart tagging, retrieval, and cross-linking"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};