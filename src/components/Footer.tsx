import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <section className="about-section connect-section">
        <h2>Let's Connect</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jordan-wells-204791117/" className="linkedin-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/1237jwells" className="github-link">
            <FaGithub /> GitHub
          </a>
        </div>
        
      </section>
      <div className="footer-divider"></div> {/* Use a simple div for the divider */}

      <div className="footer-content">
        <div>
          <h3>Jordan Wells</h3>
          <p>Full Stack Developer & Software Engineer</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Jordan Wells. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;