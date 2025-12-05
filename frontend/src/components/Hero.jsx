import React, { useEffect, useState } from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';
import { trackButtonClick } from '../utils/analytics';

const Hero = ({ onBookClick }) => {
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
      {/* Animated Cherry */}
      <div
        style={{
          width: '200px',
          height: '200px',
          marginBottom: '48px',
          animation: cherryVisible ? 'cherryDrop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
          opacity: cherryVisible ? 1 : 0,
        }}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Cherry body */}
          <circle cx="100" cy="120" r="60" fill={theme.colors.secondary} />
          <circle cx="130" cy="110" r="20" fill="rgba(255, 255, 255, 0.3)" />
          {/* Stem */}
          <path
            d="M100 60 Q 90 40, 100 20"
            stroke={theme.colors.accent}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Hero Text */}
      <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(32px, 6vw, 64px)',
            lineHeight: '1.2',
            color: theme.colors.cream,
            marginBottom: '24px',
            fontWeight: '400',
          }}
        >
          {siteConfig.hero.mainLine}
        </h1>
        <p
          style={{
            fontFamily: theme.fonts.body,
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: theme.colors.cream,
            opacity: 0.9,
            marginBottom: '40px',
            lineHeight: '1.5',
          }}
        >
          {siteConfig.hero.subLine}
        </p>
        <Button onClick={handleBookClick} variant="primary" size="large">
          {siteConfig.hero.ctaText}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
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
            transform: translateY(-500px) rotate(-45deg);
            opacity: 0;
          }
          60% {
            transform: translateY(20px) rotate(5deg);
            opacity: 1;
          }
          80% {
            transform: translateY(-10px) rotate(-2deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
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
