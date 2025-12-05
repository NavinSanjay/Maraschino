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
          backgroundColor: theme.colors.primary,
          padding: 'clamp(80px, 12vw, 140px) 20px',
          position: 'relative',
        }}
      >
        {/* Cream panel container */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', borderRadius: '50px', overflow: 'hidden' }}>
          <div
            style={{
              backgroundColor: theme.colors.cream,
              padding: 'clamp(60px, 8vw, 100px) clamp(40px, 6vw, 80px)',
            }}
          >
            {/* Section header */}
            <div style={{ textAlign: 'center', marginBottom: '72px' }}>
              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(36px, 6vw, 56px)',
                  color: theme.colors.primary,
                  marginBottom: '20px',
                  fontWeight: '400',
                  letterSpacing: '-0.02em',
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
                  lineHeight: '1.7',
                  fontWeight: '300',
                }}
              >
                {siteConfig.projects.subtitle}
              </p>
            </div>

            {/* Projects as editorial rows */}
            <div>
              {siteConfig.projects.items.map((project, index) => {
                const isImageLeft = index % 2 === 0;
                
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                      gap: 'clamp(32px, 6vw, 64px)',
                      marginBottom: index < siteConfig.projects.items.length - 1 ? '80px' : '0',
                      paddingBottom: index < siteConfig.projects.items.length - 1 ? '80px' : '0',
                      borderBottom: index < siteConfig.projects.items.length - 1 ? `1px solid ${theme.colors.accent}30` : 'none',
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
                    {/* Visual side */}
                    <div
                      style={{
                        order: isImageLeft ? 0 : window.innerWidth > 768 ? 1 : 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: theme.colors.primary,
                        padding: '60px',
                        minHeight: '300px',
                        maxHeight: '400px',
                      }}
                    >
                    <img
                      src={project.thumbnailImage}      // e.g. "/images/embreis.png"
                      alt={project.brandName}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '600px',
                        objectFit: 'cover',
                        borderRadius: '0px',
                        boxShadow: '0 18px 40px rgba(0,0,0,0.25)',
                      }}
                    />
                    </div>

                    {/* Story side */}
                    <div
                      style={{
                        order: isImageLeft ? 1 : 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: '600',
                          color: theme.colors.accent,
                          textTransform: 'uppercase',
                          letterSpacing: '2px',
                          marginBottom: '12px',
                        }}
                      >
                        {project.sector}
                      </div>
                      <h3
                        style={{
                          fontFamily: theme.fonts.heading,
                          fontSize: 'clamp(28px, 4vw, 40px)',
                          color: theme.colors.primary,
                          marginBottom: '20px',
                          fontWeight: '500',
                          letterSpacing: '-0.01em',
                          lineHeight: '1.2',
                        }}
                      >
                        {project.brandName}
                      </h3>
                      <p
                        style={{
                          fontSize: 'clamp(15px, 2vw, 17px)',
                          color: theme.colors.text.subtle,
                          lineHeight: '1.8',
                          marginBottom: '16px',
                          fontWeight: '400',
                        }}
                      >
                        {project.shortTagline}
                      </p>
                      {project.highlight && (
                        <p
                          style={{
                            fontSize: '14px',
                            fontWeight: '400',
                            color: theme.colors.primary,
                            fontStyle: 'italic',
                            marginBottom: '24px',
                          }}
                        >
                          {project.highlight}
                        </p>
                      )}
                      <div
                        style={{
                          fontSize: '14px',
                          color: theme.colors.primary,
                          fontWeight: '500',
                          textDecoration: 'underline',
                          textUnderlineOffset: '4px',
                        }}
                      >
                        Read the story →
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
