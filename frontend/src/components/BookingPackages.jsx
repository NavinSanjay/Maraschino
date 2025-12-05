import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const BookingPackages = ({ onBookClick }) => {
  const handlePackageClick = (packageId) => {
    trackButtonClick(`package_${packageId}`, 'packages');
    onBookClick();
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.cream,
        padding: 'clamp(60px, 10vw, 120px) 20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: theme.colors.primary,
              marginBottom: '16px',
            }}
          >
            {siteConfig.packages.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              color: theme.colors.text.subtle,
              maxWidth: '800px',
              margin: '0 auto 32px',
              lineHeight: '1.6',
            }}
          >
            {siteConfig.packages.intro}
          </p>

          {/* Free consultation highlight */}
          <div
            style={{
              backgroundColor: theme.colors.secondary,
              padding: '24px',
              borderRadius: '8px',
              maxWidth: '600px',
              margin: '0 auto',
              border: `2px solid ${theme.colors.accent}`,
            }}
          >
            <h3
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: '22px',
                color: theme.colors.primary,
                marginBottom: '8px',
              }}
            >
              {siteConfig.packages.freeConsultation.headline}
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: theme.colors.text.dark,
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              {siteConfig.packages.freeConsultation.description}
            </p>
            <p
              style={{
                fontSize: '13px',
                color: theme.colors.text.subtle,
                fontStyle: 'italic',
              }}
            >
              {siteConfig.packages.freeConsultation.pricing}
            </p>
          </div>
        </div>

        {/* Package cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {siteConfig.packages.items.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                backgroundColor: theme.colors.white,
                padding: '32px',
                borderRadius: '8px',
                border: `1px solid #e5e7eb`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: '24px',
                  color: theme.colors.primary,
                  marginBottom: '12px',
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: theme.colors.text.subtle,
                  marginBottom: '16px',
                }}
              >
                {pkg.shortDescription}
              </p>
              <div
                style={{
                  fontSize: '14px',
                  color: theme.colors.text.dark,
                  fontWeight: '600',
                  marginBottom: '12px',
                }}
              >
                {pkg.whoItIsFor}
              </div>
              {pkg.typicalInclusions && pkg.typicalInclusions.length > 0 && (
                <>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: theme.colors.text.subtle,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '12px',
                    }}
                  >
                    Typically includes:
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 24px 0',
                    }}
                  >
                    {pkg.typicalInclusions.map((inclusion, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '14px',
                          color: theme.colors.text.subtle,
                          marginBottom: '8px',
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
                          ✓
                        </span>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <Button
                onClick={() => handlePackageClick(pkg.id)}
                variant="primary"
                size="small"
              >
                Book consultation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingPackages;
