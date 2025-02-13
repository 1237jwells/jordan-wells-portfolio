import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import "../styles/Projects.css";

interface Technology {
  name: string;
  url?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  category: string[];
  liveUrl?: string;
  highlights?: string[];
  githubUrl?: string;
  role?: string;
  videoUrl?: string;
  galleryImages?: string[];
}

// Sample projects data
const projects: Project[] = [
    {
      id: 1,
      title: "Song World",
      description: "A comprehensive music management platform that allows users to create, edit, perform, and share their own songs while providing a user-friendly experience with features like collaborations, AI-Helpers, friendly song formatting helpers, and more.",
      technologies: [
        { name: "Flutter", url: "https://flutter.dev" },
        { name: "Dart", url: "https://dart.dev" },
        { name: "Firebase", url: "https://firebase.google.com" },
        { name: "Stripe", url: "https://stripe.com" },
        { name: "In-app purchases", url: "https://developer.apple.com/in-app-purchase/" },
        { name: "Google Ads", url: "https://ads.google.com" },
        { name: "Open-AI", url: "https://openai.com" }
      ],
      category: ["Web", "Mobile", "Full Stack"],
      imageUrl: "src/assets/song_world_icon.png",
      liveUrl: "https://songworld.app",
      highlights: ["100k+ monthly active users", "99.9% uptime", "2s average load time"],
      role: "Lead Developer",
      videoUrl: "https://example.com/song-world-video.mp4",
      galleryImages: ["src/assets/song_world_gallery_1.jpg", "src/assets/song_world_gallery_2.jpg"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Next.js, designed to showcase my skills, projects and a method of contact, through an interactive and visually appealing interface.",
      technologies: [
        { name: "React", url: "https://reactjs.org" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "TypeScript", url: "https://www.typescriptlang.org" },
        { name: "Tailwind", url: "https://tailwindcss.com" },
        { name: "Vite", url: "https://vitejs.dev" }
      ],
      category: ["Web", "Full Stack"],
      imageUrl: "src/assets/_DSC7145-2.jpg",
      highlights: [""],
      role: "Frontend Developer, UI/UX Designer, Full Stack Developer",
      videoUrl: "https://example.com/portfolio-website-video.mp4",
      galleryImages: ["src/assets/portfolio_website_gallery_1.jpg", "src/assets/portfolio_website_gallery_2.jpg"]
    },
    {
      id: 3,
      title: "Front-door",
      description: "A comprehensive platform",
      technologies: [
        { name: "React", url: "https://reactjs.org" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Vercel", url: "https://vercel.com" },
        { name: "MongoDB", url: "https://www.mongodb.com" },
        { name: "Tailwind", url: "https://tailwindcss.com" },
        { name: "Shadcn", url: "https://ui.shadcn.com" }
      ],
      category: ["Web", "Frontend"],
      imageUrl: "src/assets/front-Door-Logo-trnspt-600.png",
      githubUrl: "https://github.com/yourusername/cloud-costs",
      highlights: ["30% cost reduction", "Automated reporting", "Multi-account support"],
      role: "Backend Developer",
      videoUrl: "https://example.com/front-door-video.mp4",
      galleryImages: ["src/assets/front-door_gallery_1.jpg", "src/assets/front-door_gallery_2.jpg"]
    },
  ];


const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  
  // Get unique categories from projects
  const categories = ["All", ...new Set(projects.flatMap(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === "All"
    ? projects
    : projects.filter(project => project.category.includes(selectedFilter));

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each project is a unique piece 
          of development that I've carefully crafted.
        </p>
      </div>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
            onClick={() => setSelectedFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode='wait'>
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                role={project.role}
                highlights={project.highlights}
                videoUrl={project.videoUrl}
                galleryImages={project.galleryImages}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.p
          className="no-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No projects found in this category.
        </motion.p>
      )}
    </motion.div>
  );
};

export default Projects;