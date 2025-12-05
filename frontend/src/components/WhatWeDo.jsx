import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const WhatWeDo = ({ onBookClick }) => {
  const handleBookClick = () => {
    trackButtonClick('services_book_button', 'what_we_do');
    onBookClick();
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(80px, 12vw, 140px) 20px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        {/* Luxury treatment menu panel */}
        <div
          style={{
            backgroundColor: theme.colors.cream,
            padding: 'clamp(60px, 8vw, 100px) clamp(40px, 6vw, 80px)',
            position: 'relative',
          }}
        >
          {/* Two-column editorial layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr',
              gap: 'clamp(48px, 8vw, 80px)',
              alignItems: 'start',
            }}
          >
            {/* Left column - Introduction */}
            <div>
              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  color: theme.colors.primary,
                  marginBottom: '24px',
                  fontWeight: '400',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                }}
              >
                {siteConfig.services.title}
              </h2>
              <p
                style={{
                  fontSize: 'clamp(15px, 2vw, 17px)',
                  color: theme.colors.text.subtle,
                  lineHeight: '1.8',
                  fontWeight: '300',
                }}
              >
                {siteConfig.services.intro}
              </p>
            </div>

            {/* Right column - Services list */}
            <div>
              {siteConfig.services.items.map((service, index) => (
                <div
                  key={service.id}
                  style={{
                    marginBottom: index < siteConfig.services.items.length - 1 ? '48px' : '0',
                    paddingBottom: index < siteConfig.services.items.length - 1 ? '48px' : '0',
                    borderBottom: index < siteConfig.services.items.length - 1 ? `1px solid ${theme.colors.accent}40` : 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  <h3
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontSize: 'clamp(22px, 3vw, 28px)',
                      color: theme.colors.primary,
                      marginBottom: '12px',
                      fontWeight: '500',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: theme.colors.text.subtle,
                      marginBottom: '16px',
                      fontWeight: '400',
                    }}
                  >
                    {service.shortDescription}
                  </p>
                  {service.bullets && service.bullets.length > 0 && (
                    <p
                      style={{
                        fontSize: '14px',
                        color: theme.colors.text.subtle,
                        lineHeight: '1.8',
                        fontWeight: '300',
                        fontStyle: 'italic',
                      }}
                    >
                      {service.bullets.join(' · ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom centered CTA */}
          <div
            style={{
              marginTop: '72px',
              textAlign: 'center',
              paddingTop: '48px',
              borderTop: `1px solid ${theme.colors.accent}40`,
            }}
          >
            <Button onClick={handleBookClick} variant="primary" size="large">
              Book consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
