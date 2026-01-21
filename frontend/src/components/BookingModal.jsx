import React from 'react';
import { X } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import Button from './Button';

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const email = siteConfig.footer.email;

  const handleClose = () => {
    onClose();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('Email copied to clipboard');
    } catch (e) {
      alert('Could not copy email, please copy it manually.');
    }
  };

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
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: '8px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
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
              marginBottom: '16px',
              color: theme.colors.primary,
            }}
          >
            Email to book a consultation
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: theme.colors.text.subtle,
              marginBottom: '24px',
            }}
          >
            For now, bookings are handled directly by email. Copy the address
            below and tell us about your brand, what you&apos;d like help with,
            and your ideal timing.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '16px',
              flexWrap: 'wrap',
            }}
          >
            <code
              style={{
                backgroundColor: theme.colors.cream,
                padding: '10px 14px',
                borderRadius: '4px',
                border: `1px solid ${theme.colors.accent}`,
                fontSize: '15px',
              }}
            >
              {email}
            </code>
            <Button onClick={handleCopy} type="button">
              Copy email
            </Button>
          </div>

          <a
            href={`mailto:${email}?subject=Consultation%20request`}
            style={{
              display: 'inline-block',
              fontSize: '15px',
              color: theme.colors.primary,
              textDecoration: 'underline',
              marginBottom: '32px',
            }}
          >
            Or click here to open your email app
          </a>

          <div style={{ marginTop: '16px' }}>
            <Button variant="ghost" type="button" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
