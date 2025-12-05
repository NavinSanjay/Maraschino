import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const WhatWeDo = ({ onBookClick }) => {
  const handleServiceClick = (serviceId) => {
    trackButtonClick(`service_${serviceId}`, 'what_we_do');
    onBookClick();
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(60px, 10vw, 120px) 20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: theme.colors.cream,
              marginBottom: '16px',
            }}
          >
            {siteConfig.services.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 20px)',
              color: theme.colors.cream,
              opacity: 0.85,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            {siteConfig.services.intro}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {siteConfig.services.items.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: theme.colors.cream,
                padding: '32px',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: '22px',
                  color: theme.colors.primary,
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: theme.colors.text.subtle,
                  marginBottom: '16px',
                }}
              >
                {service.shortDescription}
              </p>
              {service.bullets && service.bullets.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 20px 0',
                  }}
                >
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '14px',
                        color: theme.colors.text.subtle,
                        marginBottom: '6px',
                        paddingLeft: '20px',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: theme.colors.accent,
                        }}
                      >
                        •
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <Button
                variant="ghost"
                size="small"
                onClick={() => handleServiceClick(service.id)}
              >
                {service.microCtaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
