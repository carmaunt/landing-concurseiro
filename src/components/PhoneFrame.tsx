import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt, className, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn(
        "relative mx-auto rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-black/10",
        "w-[260px] h-[550px] sm:w-[300px] sm:h-[620px]",
        className
      )}
    >
      {/* Notch simulation */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-xl w-32 mx-auto" />
      
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover rounded-[1.8rem] bg-gray-100"
        loading="lazy"
      />
    </motion.div>
  );
};
