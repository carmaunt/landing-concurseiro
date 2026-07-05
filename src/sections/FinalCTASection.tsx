import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import appIcon from '@/assets/ic_launcher_round_1783209746152.webp';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Subtle abstract background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl flex flex-col items-center">
        
        <img 
          src={appIcon} 
          alt="Concurseiro App" 
          className="w-24 h-24 rounded-2xl shadow-xl shadow-black/30 mb-8 border border-white/10"
        />

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
          Comece a treinar hoje
        </h2>
        
        <p className="text-xl text-accent/80 mb-10 max-w-2xl leading-relaxed">
          Baixe o Concurseiro gratuitamente e organize sua prática de questões por banca, disciplina e assunto.
        </p>

        <CTAButton 
          ctaId="cta_final" 
          ctaLocation="final_section" 
          variant="white"
          size="lg"
          showIcon
          className="w-full sm:w-auto text-navy font-bold"
        >
          Baixar grátis na Play Store
        </CTAButton>
        
        <p className="text-sm text-accent/60 mt-6 font-medium">
          Disponível exclusivamente para Android
        </p>
      </div>
    </section>
  );
};
