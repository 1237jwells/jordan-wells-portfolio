import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'
import myPhoto from '../assets/portfolio_jordan_wells_480x640.jpg';
import '../styles/Home.css';

const Home = () => {

  return (
    <div className="home-container">
      <motion.div className="hero-section">
        <div>
          <img src={myPhoto} alt="Jordan Wells" className="profile-photo" />
          <h1 className="animate-title">Jordan Wells</h1>
          <p className="animate-tagline">Full Stack Developer & App Developer</p>
          <p className="hero-description">
            Passionate developer with 4+ years of experience crafting enterprise web applications 
            in the mortgage industry. Completed Computer Science degree from  
            <a 
              className="uvu-link" 
              href="https://www.uvu.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Utah Valley University
            </a>. Currently expanding into mobile development with Flutter and Firebase.
          </p>
          <motion.div 
            className="tech-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <span className="tech-pill">React</span>
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              <span className="tech-pill">Next.js</span>
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              <span className="tech-pill">MongoDB</span>
            </a>
            <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
              <span className="tech-pill">Flutter</span>
            </a>
            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
              <span className="tech-pill">Firebase</span>
            </a>
            <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
              <span className="tech-pill">Auth0</span>
            </a>
          </motion.div>
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/projects" className="cta-button primary">View Projects</Link>
            
            <a href="https://songworld.app/" target="_blank" rel="noopener noreferrer" className="songworld-link">
              <img src="src/assets/icon_phone.png" alt="Song World Icon" className="songworld-icon" />
              Song World
            </a>
          </motion.div>

        </div>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="stat-item" onClick={() => window.open('https://home.city1st.app/', '_blank')}>
            <span className="stat-number">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2024</span>
            <span className="stat-label">CS Graduate</span>
          </div>
        </motion.div>
      </motion.div>

    </div>

  )
}

export default Home