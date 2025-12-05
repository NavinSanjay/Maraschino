import React from 'react';
import { X } from 'lucide-react';
import { theme } from '../config/theme';

const LegalModal = ({ isOpen, onClose, content }) => {
  if (!isOpen || !content) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: '8px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: theme.colors.text.dark,
            zIndex: 1,
          }}
        >
          <X size={24} />
        </button>

        <div style={{ padding: '40px' }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: '32px',
              color: theme.colors.primary,
              marginBottom: '8px',
            }}
          >
            {content.title}
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: theme.colors.text.subtle,
              marginBottom: '24px',
            }}
          >
            Last updated: {content.lastUpdated}
          </p>
          <div
            style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: theme.colors.text.dark,
              whiteSpace: 'pre-line',
            }}
          >
            {content.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
