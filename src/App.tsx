import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/sections/HeroSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { FiltersSection } from '@/sections/FiltersSection';
import { PracticeSection } from '@/sections/PracticeSection';
import { ConsistencySection } from '@/sections/ConsistencySection';
import { FreeSection } from '@/sections/FreeSection';
import { FinalCTASection } from '@/sections/FinalCTASection';
import { Footer } from '@/sections/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { CookieBanner } from '@/components/CookieBanner';
import { initAnalytics } from '@/lib/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics, GTM, Meta Pixel
    initAnalytics();
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <FiltersSection />
        <PracticeSection />
        <ConsistencySection />
        <FreeSection />
        <FinalCTASection />
      </main>

      <Footer />
      
      <MobileStickyBar />
      <CookieBanner />
    </div>
  );
}

export default App;
