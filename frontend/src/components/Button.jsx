import React from 'react';
import { theme } from '../config/theme';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = {
    fontFamily: theme.fonts.body,
    fontWeight: '500',
    borderRadius: '6px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: disabled ? 0.5 : 1,
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: '0.02em',
  };

  const variants = {
    primary: {
      backgroundColor: theme.colors.cream,
      color: theme.colors.primary,
      padding: size === 'large' ? '18px 48px' : size === 'small' ? '10px 24px' : '14px 36px',
      fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.cream,
      border: `2px solid ${theme.colors.cream}`,
      padding: size === 'large' ? '16px 46px' : size === 'small' ? '8px 22px' : '12px 34px',
      fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.cream,
      padding: size === 'large' ? '18px 48px' : size === 'small' ? '10px 24px' : '14px 36px',
      fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
      textDecoration: 'underline',
      textDecorationThickness: '1px',
      textUnderlineOffset: '4px',
    },
  };

  const variantStyle = variants[variant] || variants.primary;

  const handleMouseEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-3px)';
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = theme.colors.accent;
      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.textDecorationThickness = '2px';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = theme.colors.cream;
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'transparent';
    } else if (variant === 'ghost') {
      e.currentTarget.style.textDecorationThickness = '1px';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{ ...baseStyles, ...variantStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
