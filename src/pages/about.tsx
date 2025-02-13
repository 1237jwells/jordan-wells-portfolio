import '../styles/About.css';
import { FaSpotify, FaMusic, FaLanguage } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          Passionate full-stack developer based in Bountiful, Utah, with 4 years of experience crafting enterprise-level web applications.
          Specializing in React, Next.js, and MongoDB, I bring a comprehensive approach to both web and mobile development.
        </p>
      </header>

      <section className="about-section">
        <h2>Summary</h2>
        <p className="professional-summary">
          As a Computer Science graduate from
          <a
            className="uvu-link"
            href="https://www.uvu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Utah Valley University
          </a>,
          I've successfully delivered efficient business solutions that streamline operations and enhance user experiences.
          My expertise spans from developing sophisticated onboarding systems to implementing secure authentication protocols,
          consistently delivering solutions that drive business value.
        </p>
      </section>

      <section className="about-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Full-Stack Development</h3>
            <div className="skills-container">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">React</span>
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Next.js</span>
              </a>
              <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">JavaScript</span>
              </a>
              <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Vue.js</span>
              </a>
              <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Nuxt</span>
              </a>
            </div>
          </div>
          <div className="skill-category">
            <h3>Database & Backend</h3>
            <div className="skills-container">
              <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">MongoDB</span>
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Firebase</span>
              </a>
              <a href="https://www.restapitutorial.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">RESTful APIs</span>
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Firestore</span>
              </a>
            </div>
          </div>
          <div className="skill-category">
            <h3>Mobile Development</h3>
            <div className="skills-container">
              <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Flutter</span>
              </a>
              <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">React Native</span>
              </a>
              <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Dart</span>
              </a>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <div className="skills-container">
              <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Auth0</span>
              </a>
              <a href="https://www.okta.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Okta</span>
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Git</span>
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">Tailwind CSS</span>
              </a>
              <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
                <span className="tech-pill">ShadcnUI</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Professional Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <a href="https://city1st.com/" target="_blank" rel="noopener noreferrer">
              <img src={"src/assets/cityfirst_transparent.jpg"} alt="City 1st Mortgage" className="city1st-logo" />
            </a>
            <div className="timeline-date">January 2021 - Present</div>
            <div className="timeline-title">Web Developer at City 1st Mortgage</div>
            <div className="timeline-description">
              <ul>
                <li>Architected and implemented fast, responsive web applications using Next.js and React</li>
                <li>Developed comprehensive authentication systems using Auth0, implementing SSO and MFA</li>
                <li>Designed and optimized MongoDB database structures for complex data models</li>
                <li>Led development of automated onboarding systems and contract management platforms</li>
              </ul>
            </div>
            <a href="https://home.city1st.app/" target="_blank" rel="noopener noreferrer">
              <img src={"src/assets/at-Home-Logo-trnspt.png"} alt="City 1st Mortgage" className="at-home-logo" />
            </a>
          </div>
          <div className="timeline-item">
            <img src={"src/assets/3x/Asset 8@3x.png"} alt="City 1st Mortgage" className="at-home-logo" />
            <div className="timeline-date">May 2024 - Present</div>
            <div className="timeline-title">Independent App Developer</div>
            <div className="timeline-description">
              <ul>
                <li>Developing sophisticated mobile applications using Flutter and Firebase</li>
                <li>Implementing secure authentication and real-time data synchronization</li>
                <li>Managing complete development lifecycle from design to deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Education & Certifications</h2>
        <div className="education-grid">
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Utah Valley University, Orem, UT (December 2024)</p>
            <div className="link-wrapper">
              <a href="https://www.uvu.edu/" target="_blank" rel="noopener noreferrer" className="hidden-link">
                <img src={"src/assets/Utah-Valley-Wolverines-logo.png"} alt="Utah Valley University" className="uvu-logo" />
              </a>
            </div>
          </div>
          <div className="education-item">
            <h3>Associate of Applied Science in Computer Science</h3>
            <p>Ensign College, Salt Lake City, UT (May 2018)</p>
            <div className="link-wrapper">
              <a href="https://www.ensign.edu/" target="_blank" rel="noopener noreferrer" className="hidden-link">
                <img src={"src/assets/Ensign_College.png"} alt="Ensign College" className="ensign-logo" />
              </a>
            </div>
          </div>
          <div className="certification-item">
            <h3>Google IT Support Certification</h3>
            <p>Coursera (2020)</p>
            <div className="link-wrapper">
              <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="hidden-link">
                <img src={"src/assets/Coursera-Logo.png"} alt="Coursera" className="coursera-logo" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Additional Skills</h2>
        <div className="additional-skills">
          <div className="skill-item creative-pursuits">
            <h3 className="creative-title">
              <FaLanguage className="creative-icon" /> Languages
            </h3>
            <p>English (Native), Spanish (Professional)</p>
          </div>
          <div className="skill-item creative-pursuits">
            <h3 className="creative-title">
              <FaMusic className="creative-icon" /> Music
            </h3>

            <p className="creative-description">Singer Songwriter, Music Producer</p>
            <a
              href="https://open.spotify.com/artist/2VXgxC26AWirTa4rRjJhTg?si=QNj0Y4s_SuGmVniWLjnrbw"
              target="_blank"
              className="spotify-link"
            >
              <FaSpotify /> JMP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;