import React, { useEffect, useState } from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const Hero = ({ onBookClick, hasScrolled, onFirstScroll }) => {
  const [cherryVisible, setCherryVisible] = useState(false);
  const [heroLocked, setHeroLocked] = useState(true); // intercept first scroll

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth <= 768;

  useEffect(() => {
    const timer = setTimeout(() => setCherryVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Intercept the FIRST scroll at top: reveal text, don't move page
  useEffect(() => {
    const handleWheel = (e) => {
      if (!heroLocked || hasScrolled) return;
      if (window.scrollY <= 0 && e.deltaY > 0) {
        e.preventDefault();
        if (onFirstScroll) onFirstScroll();
        setHeroLocked(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [heroLocked, hasScrolled, onFirstScroll]);

  const handleBookClick = () => {
    trackButtonClick('hero_book_button', 'hero');
    onBookClick();
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: theme.colors.primary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Moody vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top, rgba(0,0,0,0.18) 0%, transparent 55%),' +
            'radial-gradient(circle at bottom, rgba(0,0,0,0.25) 0%, transparent 55%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Brand name + cherry row */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '12px' : 'clamp(16px, 3vw, 32px)',
          marginBottom: hasScrolled ? '48px' : '20px',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: isMobile
              ? 'clamp(52px, 6vw, 28px)'
              : 'clamp(52px, 4vw, 64px)',
            color: theme.colors.cream,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
            opacity: hasScrolled ? 0 : 1,
            transition: 'opacity 0.7s ease',
          }}
        >
          Maraschino
        </span>

        <div
          style={{
            width: hasScrolled ? '220px' : isMobile ? '220px' : 'min(45vw, 340px)',
            height: hasScrolled ? '220px' : isMobile ? '220px' : 'min(45vw, 340px)',
            animation: cherryVisible
              ? 'cherryDrop 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              : 'none',
            opacity: cherryVisible ? 1 : 0,
            transition:
              'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <img
            src="/images/cherry.png"
            alt="Maraschino cherry"
            style={{
              width: '100%',
              height: '140%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.35))',
            }}
          />
        </div>

        <span
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: isMobile
              ? 'clamp(52px, 6vw, 28px)'
              : 'clamp(52px, 4vw, 64px)',
            color: theme.colors.cream,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
            opacity: hasScrolled ? 0 : 1,
            transition: 'opacity 0.7s ease',
          }}
        >
          Publicity
        </span>
      </div>

      {/* Hero Text - appears after scroll, cherry stays above */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          opacity: hasScrolled ? 1 : 0,
          transform: hasScrolled ? 'translateY(0)' : 'translateY(30px)',
          transition:
            'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          pointerEvents: hasScrolled ? 'auto' : 'none',
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(32px, 6vw, 64px)',
            lineHeight: 1.2,
            color: theme.colors.cream,
            marginBottom: '24px',
            fontWeight: 400,
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.hero.mainLine}
        </h1>
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: theme.colors.accent,
            opacity: 0.9,
            marginBottom: '40px',
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          {siteConfig.hero.subLine}
        </p>
        <Button onClick={handleBookClick} variant="primary" size="large">
          {siteConfig.hero.ctaText}
        </Button>
      </div>

      {/* Scroll indicator - Only visible before scroll */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          opacity: hasScrolled ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: '24px',
            height: '40px',
            border: `2px solid ${theme.colors.cream}`,
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
            opacity: 0.6,
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: theme.colors.cream,
              borderRadius: '2px',
              animation: 'scrollIndicator 2s infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes cherryDrop {
          0% {
            transform: translateY(-600px) rotate(-45deg) scale(0.8);
            opacity: 0;
          }
          60% {
            transform: translateY(30px) rotate(5deg) scale(1.05);
            opacity: 1;
          }
          75% {
            transform: translateY(-15px) rotate(-2deg) scale(0.98);
          }
          85% {
            transform: translateY(8px) rotate(1deg) scale(1.02);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes scrollIndicator {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
