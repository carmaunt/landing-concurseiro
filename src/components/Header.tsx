import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CTAButton } from './CTAButton';
import appIcon from '@/assets/ic_launcher_round_1783209746152.webp';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-3">
          <img 
            src={appIcon} 
            alt="Concurseiro App Icon" 
            className="w-10 h-10 rounded-lg shadow-sm"
          />
          <span className="font-bold text-xl text-foreground tracking-tight">
            Concurseiro
          </span>
        </div>
        
        <CTAButton
          ctaId="cta_header"
          ctaLocation="header"
          size="sm"
          className="hidden sm:flex"
        >
          Baixar grátis
        </CTAButton>
      </div>
    </header>
  );
};
