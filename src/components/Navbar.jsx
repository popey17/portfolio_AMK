import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">
          <a href="#home" className="logo">Dev<span>Portfolio</span></a>
        </div>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Work Process</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="nav-contact-btn" onClick={() => setIsOpen(false)}>Let's Talk</a>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
