import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Group FAQs (for now, show all in one group)
  const clusters = [
    {
      name: 'Working together',
      items: siteConfig.faq.items.slice(0, 3),
    },
    {
      name: 'Results & coverage',
      items: siteConfig.faq.items.slice(3, 5),
    },
    {
      name: 'Logistics',
      items: siteConfig.faq.items.slice(5),
    },
  ];

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(80px, 12vw, 140px) 20px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(36px, 6vw, 56px)',
            color: theme.colors.cream,
            marginBottom: '16px',
            textAlign: 'center',
            fontWeight: '400',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.faq.title}
        </h2>
        <p
          style={{
            fontSize: '17px',
            color: theme.colors.cream,
            opacity: 0.85,
            textAlign: 'center',
            marginBottom: '64px',
            fontWeight: '300',
            lineHeight: '1.7',
          }}
        >
          A few things founders usually ask before adding the cherry.
        </p>

        {/* Q&A clusters */}
        <div>
          {clusters.map((cluster, clusterIndex) => (
            <div
              key={clusterIndex}
              style={{
                marginBottom: clusterIndex < clusters.length - 1 ? '56px' : '0',
              }}
            >
              {/* Cluster heading */}
              <h3
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: theme.colors.accent,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '24px',
                }}
              >
                {cluster.name}
              </h3>

              {/* Questions in cluster */}
              <div>
                {cluster.items.map((item, itemIndex) => {
                  const globalIndex = clusterIndex * 3 + itemIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={item.id}
                      style={{
                        marginBottom: '20px',
                        paddingBottom: '20px',
                        borderBottom: `1px solid ${theme.colors.cream}15`,
                      }}
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'start',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          padding: 0,
                          fontFamily: theme.fonts.heading,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 'clamp(18px, 3vw, 22px)',
                            color: theme.colors.cream,
                            fontWeight: '500',
                            flex: 1,
                            lineHeight: '1.4',
                            paddingRight: '16px',
                          }}
                        >
                          {item.question}
                        </span>
                        <span
                          style={{
                            color: theme.colors.accent,
                            flexShrink: 0,
                            transition: 'transform 0.3s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>

                      <div
                        style={{
                          maxHeight: isOpen ? '500px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <p
                          style={{
                            fontSize: '15px',
                            lineHeight: '1.8',
                            color: theme.colors.cream,
                            opacity: 0.8,
                            marginTop: '16px',
                            fontWeight: '300',
                          }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
