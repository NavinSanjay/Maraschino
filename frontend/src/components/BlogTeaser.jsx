import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';

const BlogTeaser = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const [featuredPost, ...otherPosts] = siteConfig.blog.posts;
  const isDesktop =
    typeof window !== 'undefined' && window.innerWidth > 768;

  return (
    <section
      style={{
        backgroundColor: theme.colors.primary,
        padding: 'clamp(80px, 12vw, 140px) 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: theme.colors.cream,
          borderRadius: '24px',
          padding: 'clamp(56px, 8vw, 80px) clamp(32px, 6vw, 64px)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.32)',
        }}
      >
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(36px, 6vw, 56px)',
            color: theme.colors.primary,
            marginBottom: '48px',
            textAlign: 'center',
            fontWeight: '400',
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.blog.title}
        </h2>

        {/* Featured story */}
        {featuredPost && (
          <div
            style={{
              marginBottom: '64px',
              paddingBottom: '48px',
              borderBottom: `1px solid ${theme.colors.accent}30`,
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isDesktop ? '1.2fr 1fr' : '1fr',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'center',
              }}
            >
              {/* Story content */}
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    color: theme.colors.text.subtle,
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {formatDate(featuredPost.date)}
                </div>
                <h3
                  style={{
                    fontFamily: theme.fonts.heading,
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    color: theme.colors.primary,
                    marginBottom: '20px',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {featuredPost.title}
                </h3>
                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: '1.7',
                    color: theme.colors.text.subtle,
                    marginBottom: '24px',
                  }}
                >
                  {featuredPost.excerpt}
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '20px',
                  }}
                >
                  {featuredPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '12px',
                        color: theme.colors.accent,
                        fontWeight: '500',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: theme.colors.primary,
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                >
                  <span>Read story</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Visual placeholder */}
              <div
                style={{
                  minHeight: '260px',
                  background: `linear-gradient(135deg, ${theme.colors.secondary}40 0%, ${theme.colors.primary}10 100%)`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  order: isDesktop ? 1 : -1,
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '60px', height: '60px', opacity: 0.35 }}
                >
                  <rcle cx="50" cy="60" r="25" fill={theme.colors.accent} />
                  <path
                    d="M50 35 Q 45 25, 50 15"
                    stroke={theme.colors.accent}
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Secondary stories list */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: '40px',
          }}
        >
          {otherPosts.map((post) => (
            <div
              key={post.slug}
              style={{
                cursor: 'pointer',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  color: theme.colors.text.subtle,
                  marginBottom: '8px',
                }}
              >
                {formatDate(post.date)}
              </div>
              <h4
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(20px, 3vw, 24px)',
                  color: theme.colors.primary,
                  marginBottom: '12px',
                  fontWeight: '500',
                  lineHeight: '1.3',
                }}
              >
                {post.title}
              </h4>
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: theme.colors.text.subtle,
                  marginBottom: '12px',
                }}
              >
                {post.excerpt}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                }}
              >
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      color: theme.colors.text.subtle,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: theme.colors.primary,
                  fontWeight: '500',
                }}
              >
                Read more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
