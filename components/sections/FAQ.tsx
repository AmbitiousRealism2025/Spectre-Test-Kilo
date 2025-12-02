'use client';

import React, { useState } from 'react';
import { Section, Container } from '@/components/layout';
import { useScrollAnimation } from '@/components/utils';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What kinds of projects are a good fit for Ambitious Realism?",
      answer: "We specialize in AI strategy, dashboard design, workflow automation, and MVP development for founders and teams who want practical AI implementation without the hype. Our sweet spot is helping you clarify your vision and architect systems that actually work."
    },
    {
      question: "Do you build the full product, or just design the system?",
      answer: "Our focus is on architecture, specifications, and prototypes. We can provide implementation support or work with your developers for handoff. Our goal is to give you a clear blueprint and working components so your team can execute with confidence."
    },
    {
      question: "Which AI tools and models do you work with?",
      answer: "We work with leading AI platforms including ChatGPT/OpenAI, Anthropic Claude, and Google Gemini. We also integrate with productivity tools like Notion and Obsidian, and can build custom solutions tailored to your specific needs."
    },
    {
      question: "How long does it take to see something working?",
      answer: "Our Starter Session gets you clarity in about 1 week. A System Blueprint typically takes 2-3 weeks. For Ongoing Partners, we work in continuous iteration cycles so you see progress regularly."
    },
    {
      question: "What if I'm not technical — can this still work for me?",
      answer: "Absolutely. We specialize in making complex AI concepts accessible. We explain everything in plain language, provide visual dashboards, and focus on outcomes you can understand and use — no technical expertise required."
    }
  ];

  // Scroll animations for title and FAQ items
  const titleRef = useScrollAnimation({ threshold: 0.2 });
  const faqRefs = [
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
    useScrollAnimation({ threshold: 0.2, triggerOnce: false }),
  ];

  return (
    <Section id="faq">
      <Container>
        <div ref={titleRef} className="text-center mb-12 animate-on-scroll fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const delayClass = index === 0 ? 'delay-200' :
                              index === 1 ? 'delay-400' :
                              index === 2 ? 'delay-600' :
                              index === 3 ? 'delay-800' : 'delay-1000';
            return (
              <section
                key={index}
                ref={faqRefs[index]}
                className={`glass-panel rounded-xl p-6 accordion-item animate-on-scroll fade-in-left ${delayClass}`}
              >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                tabIndex={0}
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <span className={`chevron-icon text-2xl ${openIndex === index ? 'chevron-rotate' : ''}`}>
                  →
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`accordion-content text-gray-300 ${openIndex === index ? 'accordion-open' : ''}`}
                aria-labelledby={`faq-question-${index}`}
                role="region"
                aria-live="polite"
              >
                <p>{item.answer}</p>
              </div>
            </section>
          )})}
        </div>
      </Container>
    </Section>
  );
};