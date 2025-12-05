import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const FounderLetter = () => {
  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(60px, 10vw, 120px) 20px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: theme.colors.cream,
            borderRadius: '8px',
            padding: 'clamp(32px, 6vw, 64px)',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: theme.colors.accent,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '8px',
                fontWeight: '600',
              }}
            >
              {siteConfig.founderLetter.title}
            </h2>
            <h3
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: theme.colors.primary,
                marginBottom: '8px',
              }}
            >
              {siteConfig.founderLetter.heading}
            </h3>
            <p
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: theme.colors.text.subtle,
                fontStyle: 'italic',
                marginBottom: '24px',
              }}
            >
              {siteConfig.founderLetter.subheading}
            </p>
          </div>

          {siteConfig.founderLetter.body.map((paragraph, idx) => (
            <p
              key={idx}
              style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: theme.colors.text.dark,
                marginBottom: '20px',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderLetter;
