import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/scss/Hero.scss';
import '../assets/scss/Navbar.scss';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);
  const infoRef = useRef(null);
  const splineRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Initial reveal animations
    gsap.fromTo(headlineRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.2 }
    );
    
    gsap.fromTo(infoRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, delay: 0.8 }
    );

    // UNIFIED SECTION PARALLAX
    // The entire hero content moves slower than the scroll speed
    gsap.to(contentRef.current, {
      y: 200, // Moves down as you scroll, creating a "lagging" effect
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>

      <div className="hero-content-wrapper" ref={contentRef}>
        <div className="hero-header" ref={headlineRef}>
          <h1>EXPERT DIGITAL<br />PRODUCTION</h1>
        </div>

        <div className="hero-info" ref={infoRef}>
          <p>Award-winning motion, design and interactive experiences that connect culture, technology, and contemporary aesthetics.</p>
        </div>

            {/* Consolidated Navbar */}
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

      {/* Menu Overlay */}
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

        <div className="hero-canvas-container">
          <div className="spline-container" ref={splineRef}>
            <iframe src="https://my.spline.design/xperts-HoePGo24hUBkuuaYU3EasXpD/" frameBorder="0" width="100%" height="100%"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
