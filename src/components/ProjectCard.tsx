import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/ProjectCard.css';

interface Technology {
  name: string;
  url?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  highlights?: string[];
  videoUrl?: string;
  galleryImages?: string[];
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  githubUrl,
  role,
  highlights,
  videoUrl,
  galleryImages
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="project-card"
        whileHover={{
          scale: 1.02,
          y: -8,
          transition: { duration: 0.2 }
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="project-image-container">
          <img src={imageUrl} alt={title} className="project-image" />
          <div className="project-overlay">
            <span className="project-overlay-text">View Project</span>
          </div>
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description.substring(0, 100)}...</p>
          <div className="project-technologies">
            {technologies.slice(0, 3).map((tech, index) => (
              <a href={tech.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <span key={index} className="tech-pill">
                  {tech.name}
                </span>
              </a>

            ))}
            {technologies.length > 3 && (
              <span className="tech-pill">+{technologies.length - 3}</span>
            )}
          </div>
        </div>
      </motion.div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth={false}
        className="project-dialog"
      >
        <div className="dialog-wrapper">
          <IconButton
            onClick={() => setIsOpen(false)}
            className="close-button"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <div className="dialog-content">
            <div className="dialog-header">
              <h2>{title}</h2>
              {role && <div className="project-role">{role}</div>}
              <div className="project-technologies-full">
                {technologies.map((tech, index) => (
                  <a href={tech.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <span key={index} className="tech-pill">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="dialog-media-section">
              <div className="main-media">
                <img src={imageUrl} alt={title} className="dialog-main-image" />
                {videoUrl && (
                  <video
                    controls
                    src={videoUrl}
                    className="dialog-video"
                  />
                )}
              </div>

              {galleryImages && galleryImages.length > 0 && (
                <div className="image-gallery">
                  {galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${title} gallery ${index + 1}`}
                      className="gallery-image"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="dialog-info-section">
              <div className="project-description">
                <h3>About the Project</h3>
                <p>{description}</p>
              </div>

              {highlights && highlights.length > 0 && (
                <div className="project-highlights">
                  <h3>Key Features</h3>
                  <ul>
                    {highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-links">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                  >
                    <FiExternalLink /> View Live
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <FiGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectCard; 