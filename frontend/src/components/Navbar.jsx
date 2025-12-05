import React, { useState } from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const Navbar = ({ hasScrolled, onBookClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'projects' },
    { label: 'About', id: 'founder' },
    { label: 'Contact', id: 'footer' },
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: hasScrolled ? 'rgba(129, 33, 24, 0.95)' : 'transparent',
          backdropFilter: hasScrolled ? 'blur(12px)' : 'none',
          borderBottom: hasScrolled ? `1px solid rgba(255, 218, 236, 0.1)` : 'none',
          opacity: hasScrolled ? 1 : 0,
          transform: hasScrolled ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: hasScrolled ? 'auto' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: theme.fonts.heading,
              fontSize: '20px',
              color: theme.colors.cream,
              fontWeight: '500',
              letterSpacing: '-0.01em',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.7)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            {siteConfig.brand.name}
          </button>

          {/* Desktop nav + CTA */}
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center',
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: theme.fonts.body,
                    fontSize: '15px',
                    color: theme.colors.cream,
                    fontWeight: '400',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={onBookClick}
                style={{
                  backgroundColor: theme.colors.cream,
                  color: theme.colors.primary,
                  border: 'none',
                  borderRadius: '999px',
                  padding: '10px 24px',
                  fontSize: '15px',
                  fontWeight: '500',
                  fontFamily: theme.fonts.body,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                Book consultation
              </button>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    width: '22px',
                    height: '2px',
                    borderRadius: '2px',
                    backgroundColor: theme.colors.cream,
                    transform:
                      isMenuOpen && i === 0
                        ? 'translateY(7px) rotate(45deg)'
                        : isMenuOpen && i === 2
                        ? 'translateY(-7px) rotate(-45deg)'
                        : 'none',
                    opacity: isMenuOpen && i === 1 ? 0 : 1,
                    transition: 'all 0.25s ease',
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 900,
            backgroundColor: 'rgba(129, 33, 24, 0.98)',
            backdropFilter: 'blur(10px)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: theme.fonts.body,
                fontSize: '16px',
                color: theme.colors.cream,
                textAlign: 'left',
                padding: '4px 0',
              }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              onBookClick();
              setIsMenuOpen(false);
            }}
            style={{
              marginTop: '8px',
              backgroundColor: theme.colors.cream,
              color: theme.colors.primary,
              border: 'none',
              borderRadius: '999px',
              padding: '10px 20px',
              fontSize: '15px',
              fontWeight: '500',
              fontFamily: theme.fonts.body,
              cursor: 'pointer',
            }}
          >
            Book consultation
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
