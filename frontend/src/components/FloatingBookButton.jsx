import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { theme } from '../config/theme';
import { trackButtonClick } from '../utils/analytics';

const FloatingBookButton = ({ onClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approximately 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackButtonClick('floating_book_button', 'floating');
    onClick();
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="floating-book-button"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        backgroundColor: theme.colors.cream,
        color: theme.colors.primary,
        border: 'none',
        borderRadius: '50px',
        padding: '16px 28px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: theme.fonts.body,
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 1000,
        transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
        animation: 'slideInUp 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
      }}
    >
      <Calendar size={20} />
      <span>Book consultation</span>
    </button>
  );
};

export default FloatingBookButton;
