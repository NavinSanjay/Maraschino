import React from 'react';
import { X } from 'lucide-react';
import { theme } from '../config/theme';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const { fullStory } = project;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: theme.colors.white,
          borderRadius: '8px',
          maxWidth: '900px',
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
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: theme.colors.accent, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {project.sector}
            </div>
            <h2 style={{ fontFamily: theme.fonts.heading, fontSize: '36px', marginBottom: '8px', color: theme.colors.primary }}>
              {project.brandName}
            </h2>
            <p style={{ fontSize: '18px', color: theme.colors.text.subtle, fontStyle: 'italic' }}>
              {project.shortTagline}
            </p>
          </div>

          {fullStory.services && fullStory.services.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: theme.colors.text.dark }}>
                Services delivered
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {fullStory.services.map((service, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: theme.colors.secondary,
                      color: theme.colors.primary,
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '14px',
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {fullStory.narrative && (
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: theme.colors.text.dark }}>
                {fullStory.narrative}
              </p>
            </div>
          )}

          {fullStory.metrics && fullStory.metrics.length > 0 && (
            <div style={{ marginBottom: '32px', backgroundColor: theme.colors.cream, padding: '24px', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: theme.colors.text.dark }}>
                Results
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {fullStory.metrics.map((metric, idx) => (
                  <li key={idx} style={{ fontSize: '15px', marginBottom: '8px', color: theme.colors.text.dark, paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: theme.colors.accent }}>✓</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {fullStory.testimonial && (
            <div style={{ marginBottom: '32px', borderLeft: `4px solid ${theme.colors.accent}`, paddingLeft: '24px' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.6', color: theme.colors.text.dark, marginBottom: '12px' }}>
                "{fullStory.testimonial.quote}"
              </p>
              {fullStory.testimonial.author && (
                <p style={{ fontSize: '14px', color: theme.colors.text.subtle, fontWeight: '600' }}>
                  — {fullStory.testimonial.author}
                </p>
              )}
            </div>
          )}

          {fullStory.pressMentions && fullStory.pressMentions.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: theme.colors.text.dark }}>
                Featured in
              </h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                {fullStory.pressMentions.map((mention, idx) => (
                  <span key={idx} style={{ fontSize: '15px', color: theme.colors.text.subtle, fontWeight: '500' }}>
                    {mention}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
