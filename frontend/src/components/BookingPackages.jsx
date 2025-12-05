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
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Luxury menu panel */}
        <div
          style={{
            backgroundColor: theme.colors.cream,
            padding: 'clamp(60px, 8vw, 100px) clamp(40px, 6vw, 80px)',
          }}
        >
          {/* Section title */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 'clamp(36px, 6vw, 56px)',
                color: theme.colors.primary,
                marginBottom: '20px',
                fontWeight: '400',
                letterSpacing: '-0.02em',
              }}
            >
              {siteConfig.packages.title}
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 2.5vw, 19px)',
                color: theme.colors.text.subtle,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '300',
              }}
            >
              {siteConfig.packages.intro}
            </p>
          </div>

          {/* Free consultation invitation */}
          <div
            style={{
              textAlign: 'center',
              padding: '40px 32px',
              marginBottom: '64px',
              borderTop: `1px solid ${theme.colors.accent}40`,
              borderBottom: `1px solid ${theme.colors.accent}40`,
            }}
          >
            <h3
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 'clamp(24px, 4vw, 32px)',
                color: theme.colors.primary,
                marginBottom: '16px',
                fontWeight: '500',
              }}
            >
              {siteConfig.packages.freeConsultation.headline}
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: theme.colors.text.dark,
                lineHeight: '1.7',
                marginBottom: '12px',
                maxWidth: '700px',
                margin: '0 auto 12px',
              }}
            >
              {siteConfig.packages.freeConsultation.description}
            </p>
            <p
              style={{
                fontSize: '14px',
                color: theme.colors.text.subtle,
                fontStyle: 'italic',
              }}
            >
              {siteConfig.packages.freeConsultation.pricing}
            </p>
          </div>

          {/* Packages as stacked rows */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {siteConfig.packages.items.map((pkg, index) => (
              <div
                key={pkg.id}
                style={{
                  marginBottom: index < siteConfig.packages.items.length - 1 ? '56px' : '0',
                  paddingBottom: index < siteConfig.packages.items.length - 1 ? '56px' : '0',
                  borderBottom: index < siteConfig.packages.items.length - 1 ? `1px solid ${theme.colors.accent}30` : 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: theme.fonts.heading,
                    fontSize: 'clamp(26px, 4vw, 34px)',
                    color: theme.colors.primary,
                    marginBottom: '12px',
                    fontWeight: '500',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: theme.colors.text.subtle,
                    marginBottom: '16px',
                  }}
                >
                  {pkg.shortDescription}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: theme.colors.text.dark,
                    fontWeight: '500',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                  }}
                >
                  {pkg.whoItIsFor}
                </p>
                {pkg.typicalInclusions && pkg.typicalInclusions.length > 0 && (
                  <div
                    style={{
                      fontSize: '14px',
                      color: theme.colors.text.subtle,
                      lineHeight: '1.8',
                    }}
                  >
                    {pkg.typicalInclusions.slice(0, 4).join(' · ')}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Single centered CTA */}
          <div
            style={{
              marginTop: '72px',
              textAlign: 'center',
              paddingTop: '48px',
              borderTop: `1px solid ${theme.colors.accent}40`,
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: theme.colors.text.subtle,
                marginBottom: '24px',
                fontStyle: 'italic',
              }}
            >
              Let's discuss which approach feels right for your brand.
            </p>
            <Button onClick={handleBookClick} variant="primary" size="large">
              Book consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPackages;
