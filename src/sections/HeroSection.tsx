import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { PhoneFrame } from '@/components/PhoneFrame';
import screen3 from '@/assets/screenshort3_1783209053707.png';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-accent/50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green mr-2"></span>
              Aplicativo Android • 100% gratuito
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6">
              Treine questões de concurso <span className="text-primary">com mais foco</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Filtre por banca, disciplina, assunto, ano, órgão e cargo. Resolva questões todos os dias e transforme seus erros em revisão.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <CTAButton 
                ctaId="cta_hero" 
                ctaLocation="hero" 
                size="lg" 
                showIcon 
                className="w-full sm:w-auto"
              >
                Baixar gratuitamente na Play Store
              </CTAButton>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 font-medium">
              Grátis para Android • Comece agora
            </p>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] -rotate-6 scale-105" />
            <PhoneFrame 
              src={screen3} 
              alt="Tela de questões do Concurseiro com opções Certo e Errado" 
              className="rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
