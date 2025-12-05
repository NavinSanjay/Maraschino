import React, { useState } from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import { subscribeToNewsletter } from '../mock';
import { trackFormSubmission } from '../utils/analytics';
import Button from './Button';

const OurVibe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setStatus('success');
        setMessage(siteConfig.vibe.emailCapture.successMessage);
        setEmail('');
        trackFormSubmission('newsletter_signup');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(80px, 12vw, 140px) 20px',
        position: 'relative',
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 50%, ${theme.colors.secondary}08 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Section title */}
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(36px, 6vw, 56px)',
            color: theme.colors.cream,
            marginBottom: '56px',
            textAlign: 'center',
            fontWeight: '400',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.vibe.title}
        </h2>

        {/* Two-column mood layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1.5fr' : '1fr',
            gap: 'clamp(48px, 8vw, 80px)',
            marginBottom: '80px',
          }}
        >
          {/* Left - intro paragraph */}
          <div>
            <p
              style={{
                fontSize: 'clamp(16px, 2.5vw, 19px)',
                color: theme.colors.cream,
                lineHeight: '1.8',
                fontWeight: '300',
                opacity: 0.9,
              }}
            >
              {siteConfig.vibe.intro}
            </p>
          </div>

          {/* Right - poetic list of qualities */}
          <div>
            {siteConfig.vibe.qualities.map((quality, index) => {
              const isLong = quality.length > 20;
              return (
                <div
                  key={index}
                  style={{
                    marginBottom: '20px',
                    fontSize: isLong ? 'clamp(18px, 3vw, 24px)' : 'clamp(20px, 3.5vw, 28px)',
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.cream,
                    fontWeight: '400',
                    fontStyle: index % 3 === 1 ? 'italic' : 'normal',
                    opacity: 0.95,
                    lineHeight: '1.4',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {quality}
                </div>
              );
            })}
          </div>
        </div>

        {/* Email capture band */}
        <div
          style={{
            backgroundColor: `${theme.colors.secondary}15`,
            padding: 'clamp(40px, 6vw, 60px) clamp(32px, 5vw, 48px)',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(24px, 4vw, 32px)',
              color: theme.colors.cream,
              marginBottom: '12px',
              fontWeight: '500',
            }}
          >
            {siteConfig.vibe.emailCapture.heading}
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: theme.colors.cream,
              marginBottom: '28px',
              opacity: 0.85,
              lineHeight: '1.6',
            }}
          >
            {siteConfig.vibe.emailCapture.description}
          </p>

          {/* Inline form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: window.innerWidth > 600 ? 'row' : 'column',
              gap: '12px',
              maxWidth: '500px',
              margin: '0 auto',
              alignItems: 'stretch',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={siteConfig.vibe.emailCapture.placeholder}
              required
              disabled={status === 'loading' || status === 'success'}
              style={{
                flex: 1,
                padding: '14px 18px',
                fontSize: '15px',
                fontFamily: theme.fonts.body,
                border: `1px solid ${theme.colors.cream}40`,
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: theme.colors.cream,
                outline: 'none',
              }}
            />
            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              variant="primary"
              size="medium"
            >
              {status === 'loading'
                ? 'Joining...'
                : status === 'success'
                ? 'Joined!'
                : siteConfig.vibe.emailCapture.buttonText}
            </Button>
          </form>

          {message && (
            <p
              style={{
                marginTop: '16px',
                fontSize: '14px',
                color: status === 'success' ? theme.colors.cream : '#ef4444',
                fontStyle: 'italic',
              }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurVibe;
