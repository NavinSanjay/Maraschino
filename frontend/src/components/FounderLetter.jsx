import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const FounderLetter = () => {
  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(100px, 14vw, 180px) 20px',
        position: 'relative',
      }}
    >
      {/* Subtle cherry watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.03,
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '400px', height: '400px' }}
        >
          <circle cx="100" cy="120" r="60" fill={theme.colors.cream} />
          <path
            d="M100 60 Q 90 40, 100 20"
            stroke={theme.colors.cream}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Letter content - engraved on page */}
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            backgroundColor: theme.colors.cream,
            padding: 'clamp(60px, 10vw, 100px) clamp(40px, 8vw, 80px)',
            position: 'relative',
          }}
        >
          {/* Small label */}
          <div
            style={{
              fontSize: '11px',
              fontWeight: '600',
              color: theme.colors.accent,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '32px',
            }}
          >
            {siteConfig.founderLetter.title}
          </div>

          {/* Main title */}
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(36px, 6vw, 52px)',
              color: theme.colors.primary,
              marginBottom: '16px',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
            }}
          >
            {siteConfig.founderLetter.heading}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              color: theme.colors.text.subtle,
              fontStyle: 'italic',
              fontFamily: theme.fonts.heading,
              marginBottom: '48px',
              fontWeight: '400',
            }}
          >
            {siteConfig.founderLetter.subheading}
          </p>

          {/* Body paragraphs */}
          <div style={{ maxWidth: '600px' }}>
            {siteConfig.founderLetter.body.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '16px',
                  lineHeight: '1.9',
                  color: theme.colors.text.dark,
                  marginBottom: '24px',
                  fontWeight: '400',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div
            style={{
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: `1px solid ${theme.colors.accent}30`,
            }}
          >
            <p
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: '20px',
                color: theme.colors.primary,
                fontStyle: 'italic',
              }}
            >
              — Alexandra
            </p>
            <p
              style={{
                fontSize: '13px',
                color: theme.colors.text.subtle,
                marginTop: '4px',
              }}
            >
              Founder, Maraschino Publicity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;
