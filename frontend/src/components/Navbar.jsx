import React from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const Navbar = ({ hasScrolled, onBookClick }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo/Brand */}
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

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {[
            { label: 'Services', id: 'services' },
            { label: 'Work', id: 'projects' },
            { label: 'About', id: 'founder' },
            { label: 'Contact', id: 'footer' },
          ].map((link) => (
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
                display: window.innerWidth < 768 ? 'none' : 'block',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
            >
              {link.label}
            </button>
          ))}

          {/* Book CTA in navbar */}
          <button
            onClick={onBookClick}
            style={{
              backgroundColor: theme.colors.cream,
              color: theme.colors.primary,
              border: 'none',
              borderRadius: '4px',
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
      </div>
    </nav>
  );
};

export default Navbar;
