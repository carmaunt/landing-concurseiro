export const siteConfig = {
  name: 'Concurseiro',
  slogan: 'Sua aprovação começa aqui.',
  description: 'Treine questões de concurso com mais foco. Filtre por banca, disciplina, assunto, ano, órgão e cargo. Resolva questões todos os dias e transforme seus erros em revisão.',
  urls: {
    playStore: import.meta.env.VITE_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=br.com.mauricio.oconcurseiro',
    instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/appconcurseiro/',
  },
  analytics: {
    gaId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    gtmId: import.meta.env.VITE_GTM_ID,
    metaPixelId: import.meta.env.VITE_META_PIXEL_ID,
  }
};
