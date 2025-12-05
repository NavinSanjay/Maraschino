import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import { initializeAnalytics } from '../utils/analytics';
import Button from './Button';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const consentData = JSON.parse(consent);
      if (consentData.analytics) {
        initializeAnalytics(siteConfig.analytics);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    initializeAnalytics(siteConfig.analytics);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consent = { essential: true, analytics: analyticsEnabled };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    if (analyticsEnabled) {
      initializeAnalytics(siteConfig.analytics);
    }
    setShowBanner(false);
    setShowManage(false);
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.text.dark,
        color: theme.colors.cream,
        padding: '24px',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.15)',
        zIndex: 10000,
        fontFamily: theme.fonts.body,
      }}
    >
      {!showManage ? (
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.5' }}>
            {siteConfig.cookieConsent.message}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={handleAcceptAll} variant="primary" size="small">
              {siteConfig.cookieConsent.acceptText}
            </Button>
            <Button onClick={() => setShowManage(true)} variant="secondary" size="small">
              {siteConfig.cookieConsent.manageText}
            </Button>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
            <h3 style={{ margin: 0, fontFamily: theme.fonts.heading, fontSize: '20px' }}>Cookie Preferences</h3>
            <button
              onClick={() => setShowManage(false)}
              style={{ background: 'none', border: 'none', color: theme.colors.cream, cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
              <input type="checkbox" checked disabled style={{ marginTop: '4px' }} />
              <div>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{siteConfig.cookieConsent.essentialLabel}</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{siteConfig.cookieConsent.essentialDescription}</div>
              </div>
            </label>
            
            <label style={{ display: 'flex', alignItems: 'start', gap: '12px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                style={{ marginTop: '4px' }}
              />
              <div>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{siteConfig.cookieConsent.analyticsLabel}</div>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>{siteConfig.cookieConsent.analyticsDescription}</div>
              </div>
            </label>
          </div>
          
          <Button onClick={handleSavePreferences} variant="primary" size="small">
            Save preferences
          </Button>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
