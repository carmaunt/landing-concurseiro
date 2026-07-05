import React from 'react';
import { motion } from 'framer-motion';

export const ConsistencySection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-6">
            Poucas questões por dia podem transformar sua preparação
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            O segredo dos aprovados não é estudar 12 horas em um dia, mas manter a consistência diária. O Concurseiro permite que você estude no ônibus, na fila do banco ou nos intervalos do trabalho.
          </p>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-navy rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Accent lines */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-primary opacity-20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-green opacity-20 rounded-full blur-2xl" />
            
            <p className="text-xl md:text-2xl text-accent font-medium mb-4">
              Pequenos hábitos geram grandes volumes:
            </p>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              10 questões por dia =<br className="hidden sm:block" /> 300 questões em um mês
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
