import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const BookingPackages = ({ onBookClick }) => {
  const handleBookClick = () => {
    trackButtonClick('packages_book_button', 'packages');
    onBookClick();
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(80px, 12vw, 140px) 20px',
      }}
    >
      <div
        style={{
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        {/* Section heading */}
        <div style={{ textAlign: 'left', marginBottom: '48px' }}>
          <div
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.24em',
              fontSize: '11px',
              color: theme.colors.accent,
              marginBottom: '12px',
            }}
          >
            How we work
          </div>

          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(32px, 5vw, 46px)',
              color: theme.colors.accent,
              marginBottom: '16px',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            {siteConfig.packages.title}
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              color: theme.colors.cream,
              lineHeight: 1.8,
              maxWidth: '52rem',
            }}
          >
            {siteConfig.packages.intro}
          </p>
        </div>

        {/* Fine divider */}
        <div
          style={{
            height: '1px',
            width: '80px',
            backgroundColor: theme.colors.accent,
            opacity: 0.6,
            marginBottom: '32px',
          }}
        />

        {/* Free consultation highlight */}
        <div
          style={{
            marginBottom: '56px',
          }}
        >
          <h3
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(22px, 3.5vw, 28px)',
              color: theme.colors.accent,
              marginBottom: '12px',
              fontWeight: 500,
            }}
          >
            {siteConfig.packages.freeConsultation.headline}
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: theme.colors.cream,
              lineHeight: 1.8,
              marginBottom: '8px',
            }}
          >
            {siteConfig.packages.freeConsultation.description}
          </p>
          <p
            style={{
              fontSize: '13px',
              color: theme.colors.cream,
              fontStyle: 'italic',
            }}
          >
            {siteConfig.packages.freeConsultation.pricing}
          </p>
        </div>

        {/* Packages as text rows */}
        <div style={{ display: 'grid', gap: '40px' }}>
          {siteConfig.packages.items.map((pkg, index) => (
            <article
              key={pkg.id}
              style={{
                paddingBottom:
                  index < siteConfig.packages.items.length - 1 ? '32px' : '0',
                borderBottom:
                  index < siteConfig.packages.items.length - 1
                    ? '1px solid rgba(246, 239, 229, 0.25)'
                    : 'none',
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(22px, 3.5vw, 28px)',
                  color: theme.colors.accent,
                  marginBottom: '8px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                {pkg.name}
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: theme.colors.cream,
                  marginBottom: '10px',
                }}
              >
                {pkg.shortDescription}
              </p>

              <p
                style={{
                  fontSize: '14px',
                  color: theme.colors.cream,
                  fontWeight: 500,
                  fontStyle: 'italic',
                  marginBottom: pkg.typicalInclusions?.length ? '10px' : '0',
                }}
              >
                {pkg.whoItIsFor}
              </p>

              {pkg.typicalInclusions && pkg.typicalInclusions.length > 0 && (
                <p
                  style={{
                    fontSize: '14px',
                    color: theme.colors.cream,
                    lineHeight: 1.8,
                  }}
                >
                  {pkg.typicalInclusions.slice(0, 4).join(' · ')}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '64px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: theme.colors.cream,
              marginBottom: '20px',
              fontStyle: 'italic',
            }}
          >
            Let&apos;s discuss which approach feels right for your brand.
          </p>
          <Button onClick={handleBookClick} variant="primary" size="large">
            Book consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingPackages;
