import React from 'react';
import { PhoneFrame } from '@/components/PhoneFrame';
import screen1 from '@/assets/screenshort1_1783209053707.png';
import screen2 from '@/assets/screenshort2_1783209053707.png';
import { motion } from 'framer-motion';

export const PracticeSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
              Resolva, confira e continue avançando
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Acompanhe seu desempenho em tempo real. Veja instantaneamente as respostas corretas após responder cada questão de múltipla escolha.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O painel de desempenho mostra seu histórico para você saber exatamente em quais disciplinas focar e em quais já está dominando.
            </p>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end h-[650px] sm:h-[700px]">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-white rounded-full blur-3xl opacity-70" />
            
            {/* Back phone */}
            <div className="absolute left-0 sm:left-12 lg:left-0 top-0 scale-90 sm:scale-95 opacity-80 blur-[1px]">
              <PhoneFrame src={screen2} alt="Dashboard de desempenho" delay={0.2} />
            </div>
            
            {/* Front phone */}
            <div className="absolute right-0 sm:right-12 lg:-right-4 top-24 sm:top-20 z-10">
              <PhoneFrame src={screen1} alt="Questão de múltipla escolha respondida" delay={0} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
