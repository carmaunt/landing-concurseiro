import { siteConfig } from '@/config/site';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized) return;
  isInitialized = true;

  const { gaId, gtmId, metaPixelId } = siteConfig.analytics;

  // Google Tag Manager
  if (gtmId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);
  }

  // Google Analytics 4
  if (gaId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);
  }

  // Meta Pixel
  if (metaPixelId) {
    (function(f:any,b:any,e:any,v:any,n?:any,t?:any,s?:any){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', metaPixelId);
    window.fbq('track', 'PageView');
  }
}

export function trackClick(ctaId: string, ctaLocation: string) {
  const eventData = {
    cta_id: ctaId,
    cta_location: ctaLocation,
    page_path: window.location.pathname,
    utm_source: 'meta',
    utm_medium: 'paid_social',
    utm_campaign: 'landing_concurseiro',
    utm_content: ctaId,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString()
  };

  if (window.gtag) {
    window.gtag('event', 'play_store_click', eventData);
  }
  
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'play_store_click',
      ...eventData
    });
  }

  if (window.fbq) {
    window.fbq('trackCustom', 'PlayStoreClick', eventData);
  }
}
