'use client';

import React from 'react';
import { Button } from '../ui';
import { Container, Section } from '../layout';
import { DashboardMockup } from './DashboardMockup';
import { useScrollAnimation, useParallax } from '../utils';

export const Hero: React.FC = () => {
  // Scroll animation for text content
  const textRef = useScrollAnimation({ threshold: 0.2 });

  // Parallax effect for dashboard mockup
  const { elementRef: dashboardRef, style: dashboardStyle } = useParallax(0.3);

  return (
    <Section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Container className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content with Scroll Animation */}
          <div
            ref={textRef}
            className="text-center lg:text-left z-10 animate-on-scroll fade-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-headline leading-tight mb-6 text-responsive">
              <span className="hero-gradient-text">
                Turn Wild Ideas into Working Systems
              </span>
              <br />
              <span className="hero-gradient-text">
                with AI-Powered Ambitious Realism
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              A hybrid AI consultancy and creative studio that helps you architect products,
              dashboards, and workflows that actually ship — not just live in your notes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                href="mailto:contact@example.com"
                className="px-8 py-3 text-lg hover-scale-sm w-full sm:w-auto"
                ariaLabel="Book a strategy session via email"
              >
                Book a Strategy Session
              </Button>
              <Button
                variant="secondary"
                href="#examples"
                className="px-8 py-3 text-lg hover-scale-sm w-full sm:w-auto"
                ariaLabel="See example dashboards and systems"
              >
                See Example Dashboards & Systems
              </Button>
            </div>
          </div>

          {/* Dashboard Mockup with Parallax and Responsive Adjustments */}
          <div
            ref={dashboardRef}
            className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] parallax-slow"
            style={dashboardStyle}
          >
            <DashboardMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
};