import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import LegalModal from './LegalModal';

const Footer = () => {
  const [legalContent, setLegalContent] = useState(null);

  const openLegal = (type) => {
    setLegalContent(siteConfig.legal[type]);
  };

  const getIcon = (iconName) => {
    const icons = {
      instagram: Instagram,
      linkedin: Linkedin,
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <>
      <footer
        style={{
          backgroundColor: theme.colors.text.dark,
          color: theme.colors.cream,
          padding: 'clamp(48px, 8vw, 80px) 20px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '48px',
              marginBottom: '48px',
            }}
          >
            {/* Brand */}
            <div>
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: '24px',
                  marginBottom: '12px',
                }}
              >
                {siteConfig.brand.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  opacity: 0.8,
                  lineHeight: '1.6',
                }}
              >
                {siteConfig.brand.description}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                }}
              >
                Get in touch
              </h4>
              <a
                href={`mailto:${siteConfig.footer.email}`}
                style={{
                  color: theme.colors.cream,
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
              >
                {siteConfig.footer.email}
              </a>
            </div>

            {/* Social */}
            <div>
              <h4
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                }}
              >
                Follow us
              </h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                {siteConfig.footer.social.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: theme.colors.cream,
                      transition: 'opacity 0.2s ease',
                      opacity: 0.8,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
                    aria-label={social.platform}
                  >
                    {getIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
              paddingTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
                fontSize: '14px',
              }}
            >
              {siteConfig.footer.legal.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => openLegal(item.slug)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: theme.colors.cream,
                    cursor: 'pointer',
                    opacity: 0.7,
                    transition: 'opacity 0.2s ease',
                    padding: 0,
                    fontFamily: theme.fonts.body,
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <p
              style={{
                fontSize: '13px',
                opacity: 0.6,
                margin: 0,
              }}
            >
              {siteConfig.footer.copyright.replace('{{year}}', new Date().getFullYear())}
            </p>
          </div>
        </div>
      </footer>

      <LegalModal
        isOpen={legalContent !== null}
        onClose={() => setLegalContent(null)}
        content={legalContent}
      />
    </>
  );
};

export default Footer;
