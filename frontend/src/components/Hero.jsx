import React, { useEffect, useState } from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const Hero = ({ onBookClick, hasScrolled }) => {
  const [cherryVisible, setCherryVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setCherryVisible(true), 100);
  }, []);

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
        {/* Moody vignette / shadow tone */}
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

      {/* Animated Cherry - Always visible, larger when alone */}
      <div
        style={{
          width: hasScrolled ? '200px' : 'min(35vw, 280px)',
          height: hasScrolled ? '200px' : 'min(35vw, 280px)',
          marginBottom: hasScrolled ? '48px' : '0',
          animation: cherryVisible ? 'cherryDrop 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
          opacity: cherryVisible ? 1 : 0,
          transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1), margin-bottom 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))' }}
        >
          {/* Cherry body with gradient */}
          <defs>
            <radialGradient id="cherryGradient" cx="0.3" cy="0.3">
              <stop offset="0%" stopColor={theme.colors.secondary} stopOpacity="1" />
              <stop offset="100%" stopColor="#ffb3d9" stopOpacity="1" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="120" r="60" fill="url(#cherryGradient)" />
          <circle cx="130" cy="110" r="20" fill="rgba(255, 255, 255, 0.4)" />
          <circle cx="125" cy="105" r="8" fill="rgba(255, 255, 255, 0.6)" />
          {/* Stem */}
          <path
            d="M100 60 Q 90 40, 100 20"
            stroke={theme.colors.accent}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Small leaf */}
          <path
            d="M95 35 Q 85 30, 88 25 Q 90 28, 95 35"
            fill={theme.colors.accent}
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Hero Text - Only visible after scroll */}
      <div 
        style={{ 
          textAlign: 'center', 
          maxWidth: '900px', 
          margin: '0 auto',
          opacity: hasScrolled ? 1 : 0,
          transform: hasScrolled ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
          pointerEvents: hasScrolled ? 'auto' : 'none',
        }}
      >
        <h1
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(32px, 6vw, 64px)',
            lineHeight: '1.2',
            color: theme.colors.cream,
            marginBottom: '24px',
            fontWeight: '400',
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
            lineHeight: '1.6',
            fontWeight: '300',
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

        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
