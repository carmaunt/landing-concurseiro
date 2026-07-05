import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-in fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-xl z-50 flex flex-col animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
            <Dialog.Title className="text-lg sm:text-xl font-bold text-foreground">
              Política de Privacidade
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-2 text-muted-foreground hover:bg-secondary rounded-full transition-colors" aria-label="Fechar">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          
          <div className="p-4 sm:p-6 overflow-y-auto text-sm sm:text-base text-foreground/80 space-y-6 prose prose-blue max-w-none">
            <p>
              O aplicativo <strong>Concurseiro</strong> respeita a sua privacidade e não coleta dados pessoais sensíveis sem o seu consentimento. Esta política descreve como as informações são tratadas.
            </p>
            
            <div>
              <h3 className="text-foreground font-semibold text-base mb-2">1. Dados coletados</h3>
              <p>
                O aplicativo e este site utilizam ferramentas de análise (Google Analytics 4, Google Tag Manager e Meta Pixel) exclusivamente para entender métricas de acesso, cliques e interações (ex: clique no botão de download). Nenhum dado pessoal identificável é cruzado ou armazenado por nós com essas ferramentas além das estatísticas de navegação.
              </p>
            </div>
            
            <div>
              <h3 className="text-foreground font-semibold text-base mb-2">2. Conta e progresso</h3>
              <p>
                O progresso do usuário no aplicativo é armazenado localmente em seu dispositivo ou através de identificadores anônimos, para garantir que você possa acompanhar seu desempenho nas questões. 
              </p>
            </div>
            
            <div>
              <h3 className="text-foreground font-semibold text-base mb-2">3. Compartilhamento</h3>
              <p>
                Não vendemos, alugamos ou compartilhamos qualquer informação pessoal com terceiros.
              </p>
            </div>
            
            <div>
              <h3 className="text-foreground font-semibold text-base mb-2">4. Atualizações</h3>
              <p>
                Esta política pode ser atualizada periodicamente para refletir mudanças no aplicativo ou requisitos legais. A versão mais recente sempre estará disponível neste endereço.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              Última atualização: {new Date().getFullYear()}
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
