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
const ATTRIBUTION_STORAGE_KEY = 'concurseiro-attribution';
const SESSION_STORAGE_KEY = 'concurseiro-session-id';

type AttributionData = {
  landing_session_id: string;
  first_seen_at: string;
  landing_page: string;
  landing_referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  gclid: string;
  device_type: 'mobile' | 'desktop';
};

const TRACKED_QUERY_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
] as const;

function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }
  return sessionId;
}

function getDeviceType(): AttributionData['device_type'] {
  return /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
}

function inferSource(params: URLSearchParams) {
  if (params.get('utm_source')) return params.get('utm_source') || '';
  if (params.get('fbclid')) return 'meta';
  if (params.get('gclid')) return 'google';
  if (/instagram\.com/i.test(document.referrer)) return 'instagram';
  if (/facebook\.com|fb\.com/i.test(document.referrer)) return 'facebook';
  return document.referrer ? 'referral' : 'direct';
}

function inferMedium(params: URLSearchParams) {
  if (params.get('utm_medium')) return params.get('utm_medium') || '';
  if (params.get('fbclid') || params.get('gclid')) return 'paid_social';
  if (/instagram\.com|facebook\.com|fb\.com/i.test(document.referrer)) return 'organic_social';
  return document.referrer ? 'referral' : 'none';
}

export function captureAttribution(): AttributionData {
  const params = new URLSearchParams(window.location.search);
  const saved = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  const hasCampaignParams = TRACKED_QUERY_PARAMS.some((key) => params.has(key));

  if (saved && !hasCampaignParams) {
    return JSON.parse(saved) as AttributionData;
  }

  const attribution: AttributionData = {
    landing_session_id: getSessionId(),
    first_seen_at: new Date().toISOString(),
    landing_page: window.location.href,
    landing_referrer: document.referrer,
    utm_source: inferSource(params),
    utm_medium: inferMedium(params),
    utm_campaign: params.get('utm_campaign') || 'landing_concurseiro',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    fbclid: params.get('fbclid') || '',
    gclid: params.get('gclid') || '',
    device_type: getDeviceType(),
  };

  localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  return attribution;
}

export function getAttribution() {
  return captureAttribution();
}

function getBaseEventData(extra: Record<string, string> = {}) {
  const attribution = getAttribution();
  return {
    ...attribution,
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
    ...extra,
  };
}

export function initAnalytics() {
  if (isInitialized) return;
  isInitialized = true;
  const attribution = captureAttribution();

  const { gaId, gtmId, metaPixelId } = siteConfig.analytics;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'landing_attribution',
    ...attribution,
  });

  // Google Tag Manager
  if (gtmId) {
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
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      campaign_source: attribution.utm_source,
      campaign_medium: attribution.utm_medium,
      campaign_name: attribution.utm_campaign,
      campaign_content: attribution.utm_content,
      campaign_term: attribution.utm_term,
    });

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
    window.fbq('track', 'ViewContent', {
      content_name: 'Concurseiro Landing Page',
      content_category: 'Android app landing page',
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
    });
  }

  trackLandingEvent('landing_page_view');
}

export function trackLandingEvent(eventName: string, extra: Record<string, string> = {}) {
  const eventData = getBaseEventData(extra);

  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
}

export function buildPlayStoreUrl(ctaId: string) {
  const attribution = getAttribution();
  const url = new URL(siteConfig.urls.playStore);
  const utmSource = attribution.utm_source || 'direct';
  const utmMedium = attribution.utm_medium || 'none';
  const utmCampaign = attribution.utm_campaign || 'landing_concurseiro';

  url.searchParams.set('utm_source', utmSource);
  url.searchParams.set('utm_medium', utmMedium);
  url.searchParams.set('utm_campaign', utmCampaign);
  url.searchParams.set('utm_content', attribution.utm_content || ctaId);

  const installReferrer = new URLSearchParams({
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: attribution.utm_content || ctaId,
    cta_id: ctaId,
    landing_session_id: attribution.landing_session_id,
  });

  if (attribution.utm_term) installReferrer.set('utm_term', attribution.utm_term);
  if (attribution.fbclid) installReferrer.set('fbclid', attribution.fbclid);
  if (attribution.gclid) installReferrer.set('gclid', attribution.gclid);

  url.searchParams.set('referrer', installReferrer.toString());
  return url.toString();
}

export function trackClick(ctaId: string, ctaLocation: string) {
  const eventData = getBaseEventData({
    cta_id: ctaId,
    cta_location: ctaLocation,
  });

  if (window.gtag) {
    window.gtag('event', 'play_store_click', eventData);
    window.gtag('event', 'generate_lead', {
      ...eventData,
      method: 'play_store_click',
    });
  }
  
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'play_store_click',
      ...eventData
    });
  }

  if (window.fbq) {
    window.fbq('trackCustom', 'PlayStoreClick', eventData);
    window.fbq('track', 'Lead', {
      content_name: 'Play Store click',
      content_category: 'Android app download',
      ...eventData,
    });
  }
}
