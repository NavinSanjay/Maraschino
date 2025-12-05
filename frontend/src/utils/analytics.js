// Analytics abstraction layer
import { trackEvent as mockTrackEvent } from '../mock';

let consentGiven = false;

// Initialize analytics (will be called after consent)
export const initializeAnalytics = (config) => {
  if (!config.enabled) return;
  
  consentGiven = true;
  
  // Load Google Analytics if ID is provided
  if (config.providers?.googleAnalytics?.measurementId) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.providers.googleAnalytics.measurementId}`;
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', config.providers.googleAnalytics.measurementId);
  }
  
  window.analyticsEnabled = true;
};

// Track page views
export const trackPageView = (path) => {
  if (!consentGiven) return;
  mockTrackEvent('page_view', { page_path: path });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  if (!consentGiven) return;
  mockTrackEvent('scroll_depth', { depth });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  if (!consentGiven) return;
  mockTrackEvent('button_click', { button_name: buttonName, location });
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  if (!consentGiven) return;
  mockTrackEvent('form_submission', { form_name: formName });
};

// Track booking flow
export const trackBookingStep = (step) => {
  if (!consentGiven) return;
  mockTrackEvent('booking_step', { step });
};

export default {
  initializeAnalytics,
  trackPageView,
  trackScrollDepth,
  trackButtonClick,
  trackFormSubmission,
  trackBookingStep,
};
