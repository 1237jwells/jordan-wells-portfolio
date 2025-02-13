import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div 
      className="project-detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <div className="project-meta">
          <span className="role">{project.role}</span>
          <div className="tech-stack">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-media">
        <img src={project.imageUrl} alt={project.title} className="main-image" />
        {project.videoUrl && (
          <div className="video-container">
            <video controls src={project.videoUrl} />
          </div>
        )}
      </div>

      <div className="project-content">
        <section className="project-overview">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-highlights">
          <h2>Key Features</h2>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </section>

        {project.challenges && (
          <section className="project-challenges">
            <h2>Challenges & Solutions</h2>
            <p>{project.challenges}</p>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail; 