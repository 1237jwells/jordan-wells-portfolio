import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { useTheme } from './context/ThemeContext';
import { BsSun, BsMoon, BsList } from 'react-icons/bs';
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Router>
        <div className="app">
          <nav className="navbar">
            <NavLink to="/" className="nav-brand">JW</NavLink>
            {!isMenuOpen && (
              <div className="nav-links">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/projects" className="nav-link">Projects</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </div>
            )}
            {isMenuOpen && (
              <div className="nav-links-popup">
                <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              </div>
            )}
            <div className="nav-controls">
              <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <BsList />
              </button>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <BsMoon /> : <BsSun />}
              </button>
            </div>
          </nav>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;