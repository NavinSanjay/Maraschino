import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.secondary,
        padding: 'clamp(60px, 10vw, 120px) 20px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: theme.colors.primary,
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          {siteConfig.faq.title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {siteConfig.faq.items.map((item, index) => (
            <div
              key={item.id}
              style={{
                backgroundColor: theme.colors.white,
                borderRadius: '8px',
                overflow: 'hidden',
                border: `1px solid ${openIndex === index ? theme.colors.accent : '#e5e7eb'}`,
                transition: 'border-color 0.3s ease',
              }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: theme.fonts.body,
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: theme.colors.primary,
                  }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  color={theme.colors.accent}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                    marginLeft: '16px',
                  }}
                />
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, padding 0.4s ease',
                  padding: openIndex === index ? '0 24px 20px 24px' : '0 24px',
                }}
              >
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: theme.colors.text.subtle,
                    margin: 0,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
