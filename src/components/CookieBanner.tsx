import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 sm:bottom-4 left-0 sm:left-4 right-0 sm:right-auto sm:max-w-[400px] z-50 p-4 bg-white sm:rounded-xl shadow-2xl border border-border pb-safe"
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-foreground text-sm">Privacidade e Cookies</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Utilizamos cookies para analisar o tráfego e melhorar a sua experiência. 
              Ao continuar, você concorda com a nossa política.
            </p>
            <div className="flex gap-2 mt-2">
              <button 
                onClick={acceptNecessary}
                className="flex-1 py-2 px-3 text-xs font-medium text-foreground bg-secondary hover:bg-border rounded-lg transition-colors"
              >
                Apenas Essenciais
              </button>
              <button 
                onClick={acceptAll}
                className="flex-1 py-2 px-3 text-xs font-medium text-primary-foreground bg-primary hover:brightness-110 rounded-lg transition-colors shadow-sm shadow-primary/20"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
