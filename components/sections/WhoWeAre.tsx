'use client';

import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { useScrollAnimation } from '@/components/utils';

export const WhoWeAre: React.FC = () => {
  // Scroll animations for text and founder card
  const textRef = useScrollAnimation({ threshold: 0.2 });
  const founderRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6 animate-on-scroll fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              What is <span className="hero-gradient-text">Ambitious Realism</span>?
            </h2>

            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <span className="hero-gradient-text">Ambitious Realism</span> is the philosophy that drives everything we build. It's the perfect blend of bold vision and practical execution.
              </p>

              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We're not just dreamers - we're builders who understand that great ideas need solid foundations. Our approach combines AI consultancy, creative studio thinking, and hands-on development to create solutions that are both innovative and achievable.
              </p>

              <p>
                Think of us as your AI-native partners who can bridge the gap between &#34;what if&#34; and &#34;how to&#34; - turning ambitious concepts into realistic, working systems.
              </p>
            </div>
          </div>

          <div ref={founderRef} className="glass-card rounded-2xl p-8 text-center animate-on-scroll fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Ambrea L. Smith</h3>
            <p className="text-teal-400 font-medium mb-4">Founder & AI-Native Builder</p>

            <div className="space-y-3 text-gray-300">
              <p>
                Solo founder positioned like a focused, high-leverage studio. Building at the intersection of AI strategy and practical implementation.
              </p>

              <p>
                With a background in both creative design and technical development, I bring a unique perspective to AI-powered solutions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};