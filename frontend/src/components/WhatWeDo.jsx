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
        padding: 'clamp(80px, 12vw, 140px) 20px',
        position: 'relative',
      }}
    >
      {/* Subtle decorative element */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.colors.secondary}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(36px, 6vw, 56px)',
              color: theme.colors.cream,
              marginBottom: '20px',
              fontWeight: '400',
              letterSpacing: '-0.02em',
            }}
          >
            {siteConfig.services.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(17px, 2.5vw, 21px)',
              color: theme.colors.cream,
              opacity: 0.85,
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '300',
            }}
          >
            {siteConfig.services.intro}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {siteConfig.services.items.map((service, index) => (
            <div
              key={service.id}
              style={{
                backgroundColor: theme.colors.cream,
                padding: '36px',
                borderRadius: '12px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                animation: `fadeInUp 0.6s ease ${index * 0.1}s backwards`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: '24px',
                  color: theme.colors.primary,
                  marginBottom: '14px',
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
                  marginBottom: '20px',
                  fontWeight: '400',
                }}
              >
                {service.shortDescription}
              </p>
              {service.bullets && service.bullets.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 24px 0',
                  }}
                >
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '14px',
                        color: theme.colors.text.subtle,
                        marginBottom: '8px',
                        paddingLeft: '24px',
                        position: 'relative',
                        lineHeight: '1.6',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: theme.colors.accent,
                          fontSize: '18px',
                          lineHeight: '1',
                        }}
                      >
                        ✦
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
                {service.microCtaText} →
              </Button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
