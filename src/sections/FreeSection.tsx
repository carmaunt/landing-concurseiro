import React from 'react';
import { CTAButton } from '@/components/CTAButton';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FreeSection: React.FC = () => {
  return (
    <section className="py-20 bg-accent/40">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-8">
            <CheckCircle className="w-10 h-10 text-green" strokeWidth={2.5} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-6">
            Estude sem assinatura
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            O Concurseiro é <strong className="text-foreground">100% gratuito</strong>. Baixe o aplicativo e comece a resolver questões sem mensalidade, sem pegadinhas e sem limites de acesso.
          </p>

          <CTAButton 
            ctaId="cta_free" 
            ctaLocation="free_section" 
            size="lg"
            showIcon
          >
            Baixar na Play Store
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};
