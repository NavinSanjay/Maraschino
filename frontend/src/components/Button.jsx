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
    borderRadius: '4px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease',
    opacity: disabled ? 0.5 : 1,
  };

  const variants = {
    primary: {
      backgroundColor: theme.colors.cream,
      color: theme.colors.primary,
      padding: size === 'large' ? '16px 40px' : size === 'small' ? '10px 24px' : '14px 32px',
      fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.cream,
      border: `2px solid ${theme.colors.cream}`,
      padding: size === 'large' ? '14px 38px' : size === 'small' ? '8px 22px' : '12px 30px',
      fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.colors.cream,
      padding: size === 'large' ? '16px 40px' : size === 'small' ? '10px 24px' : '14px 32px',
      fontSize: size === 'large' ? '18px' : size === 'small' ? '14px' : '16px',
    },
  };

  const variantStyle = variants[variant] || variants.primary;

  const handleMouseEnter = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = theme.colors.accent;
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = theme.colors.cream;
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
