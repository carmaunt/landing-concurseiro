import React from 'react';
import { PhoneFrame } from '@/components/PhoneFrame';
import screen4 from '@/assets/screenshort4_1783209053707.png';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const filters = [
  "Banca",
  "Disciplina",
  "Assunto",
  "Ano",
  "Órgão",
  "Cargo",
  "Tipo de questão"
];

export const FiltersSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-50 -z-10 w-3/4 h-3/4 m-auto" />
            <PhoneFrame src={screen4} alt="Tela de filtros avançados" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
              Monte um treino de acordo com seu objetivo
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O estudo genérico não aprova. Crie cadernos de questões focados na banca do seu próximo concurso e nas disciplinas que você tem mais dificuldade.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filters.map((filter, index) => (
                <li key={index} className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  {filter}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
