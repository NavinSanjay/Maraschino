import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const BlogTeaser = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.cream,
        padding: 'clamp(60px, 10vw, 120px) 20px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: theme.colors.primary,
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          {siteConfig.blog.title}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {siteConfig.blog.posts.map((post) => (
            <div
              key={post.slug}
              style={{
                backgroundColor: theme.colors.white,
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Placeholder image area */}
              <div
                style={{
                  backgroundColor: theme.colors.secondary,
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    color: theme.colors.text.subtle,
                    fontStyle: 'italic',
                  }}
                >
                  Blog image placeholder
                </span>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ marginBottom: '12px' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      color: theme.colors.text.subtle,
                    }}
                  >
                    {formatDate(post.date)}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: theme.fonts.heading,
                    fontSize: '20px',
                    color: theme.colors.primary,
                    marginBottom: '12px',
                    lineHeight: '1.3',
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: theme.colors.text.subtle,
                    marginBottom: '16px',
                  }}
                >
                  {post.excerpt}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '12px',
                          color: theme.colors.accent,
                          backgroundColor: theme.colors.secondary,
                          padding: '4px 10px',
                          borderRadius: '12px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: theme.colors.accent,
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  <span>Read more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
