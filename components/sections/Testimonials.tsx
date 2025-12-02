'use client';

import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { useScrollAnimation } from '@/components/utils';

export const Testimonials: React.FC = () => {
  // Scroll animations for title, testimonials, and tools
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const testimonialRefs = [
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
  ];
  const toolsRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <Section id="testimonials">
      <Container>
        <div ref={titleRef} className="text-center mb-12 animate-on-scroll fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Builders Say
          </h2>
          <p className="text-xl text-gray-300">
            Real feedback from founders, consultants, and creators
          </p>
        </div>

        <div className="grid-responsive">
          <div ref={testimonialRefs[0]} className="glass-card rounded-xl p-6 animate-on-scroll fade-in-up delay-200">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-gray-300 mb-4 italic">
              {"Ambitious Realism helped me turn a messy Notion doc into a working product roadmap in days. The clarity was game-changing."}
            </p>
            <p className="text-white font-semibold">Sarah Chen</p>
            <p className="text-teal text-sm">SaaS Founder</p>
          </div>

          <div ref={testimonialRefs[1]} className="glass-card rounded-xl p-6 animate-on-scroll fade-in-up delay-400">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-gray-300 mb-4 italic">
              {"Finally, someone who gets that AI strategy isn't just about tools—it's about systems that actually work."}
            </p>
            <p className="text-white font-semibold">Marcus Rodriguez</p>
            <p className="text-teal text-sm">Business Consultant</p>
          </div>

          <div ref={testimonialRefs[2]} className="glass-card rounded-xl p-6 animate-on-scroll fade-in-up delay-600">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-gray-300 mb-4 italic">
              {"The vibe-coded dashboard they built for my music projects is both beautiful and functional. It's exactly what I needed."}
            </p>
            <p className="text-white font-semibold">Jamie Park</p>
            <p className="text-teal text-sm">Independent Musician</p>
          </div>
        </div>

        <div ref={toolsRef} className="mt-16 pt-8 border-t border-gray-700 animate-on-scroll fade-in-up delay-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tools & Platforms We Work With
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="glass-panel px-4 py-2 rounded-lg hover-glow-teal">
              <span className="text-teal text-sm md:text-base font-medium">ChatGPT/OpenAI</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-lg hover-glow-amber">
              <span className="text-amber text-sm md:text-base font-medium">Anthropic Claude</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-lg hover-glow-purple">
              <span className="text-purple text-sm md:text-base font-medium">Google Gemini</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-lg hover-glow-teal">
              <span className="text-white text-sm md:text-base font-medium">Notion</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-lg hover-glow-purple">
              <span className="text-purple-light text-sm md:text-base font-medium">Obsidian</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};