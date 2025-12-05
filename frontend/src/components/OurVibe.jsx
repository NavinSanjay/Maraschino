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
        padding: 'clamp(60px, 10vw, 120px) 20px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: theme.colors.cream,
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            {siteConfig.vibe.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              color: theme.colors.cream,
              opacity: 0.9,
              marginBottom: '32px',
              textAlign: 'center',
              lineHeight: '1.6',
            }}
          >
            {siteConfig.vibe.intro}
          </p>

          {/* Vibe qualities */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '64px',
            }}
          >
            {siteConfig.vibe.qualities.map((quality, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '16px 24px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <span
                  style={{
                    fontSize: '15px',
                    color: theme.colors.cream,
                    fontWeight: '500',
                  }}
                >
                  {quality}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email capture */}
        <div
          style={{
            backgroundColor: theme.colors.cream,
            padding: 'clamp(32px, 6vw, 48px)',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: 'clamp(24px, 4vw, 32px)',
              color: theme.colors.primary,
              marginBottom: '12px',
            }}
          >
            {siteConfig.vibe.emailCapture.heading}
          </h3>
          <p
            style={{
              fontSize: '16px',
              color: theme.colors.text.subtle,
              marginBottom: '24px',
              lineHeight: '1.6',
            }}
          >
            {siteConfig.vibe.emailCapture.description}
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxWidth: '500px',
              margin: '0 auto',
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
                padding: '14px 16px',
                fontSize: '15px',
                fontFamily: theme.fonts.body,
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                width: '100%',
              }}
            />
            <Button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              variant="primary"
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
                color: status === 'success' ? theme.colors.accent : '#ef4444',
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
