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
      position: 'relative',                      // <- important
      backgroundColor: theme.colors.primary,
      padding: 'clamp(80px, 12vw, 140px) 20px',
      overflow: 'hidden',
    }}
  >
    {/* Moody overlay only for this section */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at top, rgba(0,0,0,0.18) 0%, transparent 55%),' +
          'radial-gradient(circle at bottom, rgba(0,0,0,0.25) 0%, transparent 55%)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    /> 
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {/* Section label */}
        <div
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.24em',
            fontSize: '11px',
            color: theme.colors.text.subtle,
            marginBottom: '16px',
          }}
        >
          {siteConfig.services.label || 'What we do'}
        </div>

        {/* Heading + intro */}
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(32px, 5vw, 46px)',
            color: theme.colors.accent,
            marginBottom: '20px',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}
        >
          {siteConfig.services.title}
        </h2>

        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 17px)',
            color: theme.colors.cream,
            lineHeight: 1.8,
            maxWidth: '52rem',
            marginBottom: '56px',
          }}
        >
          {siteConfig.services.intro}
        </p>

        {/* Thin divider like a magazine rule */}
        <div
          style={{
            height: '1px',
            width: '72px',
            backgroundColor: theme.colors.accent,
            opacity: 0.5,
            marginBottom: '40px',
          }}
        />

        {/* Services as flowing copy, not cards */}
        <div style={{ display: 'grid', gap: '40px' }}>
          {siteConfig.services.items.map((service, index) => (
            <article
              key={service.id}
              style={{
                paddingBottom: index < siteConfig.services.items.length - 1 ? '32px' : '0',
                borderBottom:
                  index < siteConfig.services.items.length - 1
                    ? `1px solid rgba(246, 239, 229, 0.25)`
                    : 'none',
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(20px, 3vw, 26px)',
                  color: theme.colors.accent,
                  marginBottom: '8px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: theme.colors.cream,
                  marginBottom: service.bullets?.length ? '10px' : '0',
                }}
              >
                {service.shortDescription}
              </p>

              {service.bullets && service.bullets.length > 0 && (
                <p
                  style={{
                    fontSize: '14px',
                    color: theme.colors.cream,
                    fontStyle: 'italic',
                    opacity: 0.9,
                  }}
                >
                  {service.bullets.join(' · ')}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA, still very soft */}
        <div
          style={{
            marginTop: '64px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button onClick={handleBookClick} variant="primary" size="large">
            Book consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
