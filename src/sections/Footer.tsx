import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import appIcon from '@/assets/ic_launcher_round_1783209746152.webp';
import { PrivacyModal } from '@/components/PrivacyModal';
import { CTAButton } from '@/components/CTAButton';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border pt-16 pb-24 sm:pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img src={appIcon} alt="Concurseiro" className="w-8 h-8 rounded" />
              <span className="font-bold text-xl text-navy">Concurseiro</span>
            </div>
            <p className="text-muted-foreground font-medium">
              {siteConfig.slogan}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-navy mb-4">Aplicativo</h4>
            <ul className="space-y-3">
              <li>
                <CTAButton
                  ctaId="cta_footer"
                  ctaLocation="footer"
                  variant="outline"
                  size="sm"
                >
                  Baixar na Play Store
                </CTAButton>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-navy mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => setPrivacyOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <a 
                  href={siteConfig.urls.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Concurseiro. Todos os direitos reservados.</p>
        </div>
      </div>

      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </footer>
  );
};
