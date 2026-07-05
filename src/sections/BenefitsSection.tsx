import React from 'react';
import { Target, Filter, RefreshCw, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Target,
    title: 'Treino direcionado',
    description: 'Escolha exatamente o conteúdo que deseja praticar.',
  },
  {
    icon: Filter,
    title: 'Questões organizadas',
    description: 'Encontre exercícios por banca, disciplina, assunto, ano, órgão e cargo.',
  },
  {
    icon: RefreshCw,
    title: 'Revisão pelos erros',
    description: 'Use cada erro para identificar o próximo conteúdo que precisa revisar.',
  },
  {
    icon: Smartphone,
    title: 'Estudo pelo celular',
    description: 'Treine onde estiver, de forma simples e rápida.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary">
                  <Icon strokeWidth={2.5} size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
