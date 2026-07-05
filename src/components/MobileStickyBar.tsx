import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
import appIcon from '@/assets/ic_launcher_round_1783209746152.webp';

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 200px
      const shouldShow = window.scrollY > 200;
      
      // Hide near the bottom where Final CTA is
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 600;
      
      setVisible(shouldShow && !scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden pb-safe"
        >
          <div className="p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img 
                src={appIcon} 
                alt="App Icon" 
                className="w-10 h-10 rounded shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-sm text-foreground truncate">Concurseiro</span>
                <span className="text-xs text-muted-foreground truncate">Grátis para Android</span>
              </div>
            </div>
            <CTAButton
              ctaId="cta_sticky_mobile"
              ctaLocation="sticky_bar"
              size="sm"
              className="flex-shrink-0"
            >
              Baixar
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
