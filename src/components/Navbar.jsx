import { useState, useEffect } from 'react';
import '../assets/scss/Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Scroll handling could be added here if needed
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={`navbar-v2 ${isOpen ? 'menu-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <a href="#home" className="logo-v2" onClick={() => setIsOpen(false)}>
              DIALECT
            </a>
          </div>
          
          <div className="nav-actions">
            <button className="menu-toggle-btn" onClick={toggleMenu}>
              {isOpen ? '[ CLOSE ]' : '[ MENU ]'}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <nav className="overlay-links">
            <a href="#home" onClick={toggleMenu} data-text="HOME">HOME</a>
            <a href="#about" onClick={toggleMenu} data-text="STUDIO">STUDIO</a>
            <a href="#projects" onClick={toggleMenu} data-text="PROJECTS">PROJECTS</a>
            <a href="#experience" onClick={toggleMenu} data-text="LABS">LABS</a>
            <a href="#contact" onClick={toggleMenu} data-text="CONTACT">CONTACT</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
