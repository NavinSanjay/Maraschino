import React, { useState } from 'react';
import { theme } from '../config/theme';
import siteConfig from '../config/siteConfig';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        style={{
          backgroundColor: theme.colors.secondary,
          padding: 'clamp(60px, 10vw, 120px) 20px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: 'clamp(32px, 5vw, 48px)',
                color: theme.colors.primary,
                marginBottom: '16px',
              }}
            >
              {siteConfig.projects.title}
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: theme.colors.text.subtle,
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
            >
              {siteConfig.projects.subtitle}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {siteConfig.projects.items.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{
                  backgroundColor: theme.colors.white,
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
              >
                {/* Cherry visual */}
                <div
                  style={{
                    backgroundColor: theme.colors.primary,
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <circle cx="50" cy="60" r="30" fill={theme.colors.secondary} />
                    <circle cx="65" cy="55" r="10" fill="rgba(255, 255, 255, 0.3)" />
                    <path
                      d="M50 30 Q 45 20, 50 10"
                      stroke={theme.colors.accent}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Project details */}
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: theme.colors.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    {project.sector}
                  </div>
                  <h3
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontSize: '24px',
                      color: theme.colors.primary,
                      marginBottom: '8px',
                    }}
                  >
                    {project.brandName}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: theme.colors.text.subtle,
                      lineHeight: '1.5',
                      marginBottom: '12px',
                    }}
                  >
                    {project.shortTagline}
                  </p>
                  {project.highlight && (
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: theme.colors.primary,
                        backgroundColor: theme.colors.secondary,
                        padding: '6px 12px',
                        borderRadius: '4px',
                        display: 'inline-block',
                      }}
                    >
                      {project.highlight}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
