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
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const isNarrow =
    typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(80px, 12vw, 140px) 20px',
        position: 'relative',
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${theme.colors.secondary}10 0%, transparent 55%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Label + title */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.24em',
              fontSize: '11px',
              color: theme.colors.cream,
              opacity: 0.7,
              marginBottom: '12px',
            }}
          >
            How we feel to work with
          </div>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(34px, 5.5vw, 52px)',
              color: theme.colors.cream,
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            {siteConfig.vibe.title}
          </h2>
        </div>

        {/* Thin rule */}
        <div
          style={{
            height: '1px',
            width: '80px',
            backgroundColor: theme.colors.cream,
            opacity: 0.4,
            margin: '0 auto 40px',
          }}
        />

        {/* Intro + qualities */}
        <div style={{ marginBottom: '64px' }}>
          <p
            style={{
              fontSize: 'clamp(15px, 2.3vw, 18px)',
              color: theme.colors.cream,
              lineHeight: 1.8,
              textAlign: 'center',
              opacity: 0.9,
              marginBottom: '32px',
            }}
          >
            {siteConfig.vibe.intro}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              justifyItems: 'center',
            }}
          >
            <div>
              {siteConfig.vibe.qualities.map((quality, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '14px',
                    fontSize: 'clamp(18px, 3vw, 24px)',
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.cream,
                    fontWeight: 400,
                    fontStyle: index % 2 === 1 ? 'italic' : 'normal',
                    textAlign: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {quality}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Email capture band */}
        <div
          style={{
            marginTop: '24px',
            padding: 'clamp(32px, 5vw, 52px) clamp(24px, 4vw, 40px)',
            backgroundColor: 'rgba(255, 218, 236, 0.08)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 218, 236, 0.25)',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(22px, 4vw, 30px)',
              color: theme.colors.cream,
              marginBottom: '10px',
              fontWeight: 500,
            }}
          >
            {siteConfig.vibe.emailCapture.heading}
          </h3>
          <p
            style={{
              fontSize: '15px',
              color: theme.colors.cream,
              opacity: 0.85,
              lineHeight: 1.6,
              marginBottom: '22px',
            }}
          >
            {siteConfig.vibe.emailCapture.description}
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: isNarrow ? 'column' : 'row',
              gap: '12px',
              maxWidth: '480px',
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
                padding: '13px 16px',
                fontSize: '15px',
                fontFamily: theme.fonts.body,
                borderRadius: '999px',
                border: '1px solid rgba(246, 239, 229, 0.6)',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
                color:
                  status === 'success' ? theme.colors.cream : '#ef4444',
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
