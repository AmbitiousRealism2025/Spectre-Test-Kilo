import { Navigation, BackgroundEffects, Footer } from '@/components/layout';
import { Hero, WhoWeAre, CoreOfferings, HowItWorks, ExampleOutcomes, Testimonials, Pricing, FAQ, FinalCTA } from '@/components/sections';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <BackgroundEffects />
  
      {/* Main Content Wrapper with higher z-index */}
      <div className="relative z-20">
        {/* Navigation */}
        <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Core Offerings Section */}
      <CoreOfferings />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Examples Section */}
      <ExampleOutcomes />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <FinalCTA />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}