import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Hero.scss';

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5
    });
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="spline-container">
        <iframe src="https://my.spline.design/xperts-HoePGo24hUBkuuaYU3EasXpD/" frameBorder="0" width="100%" height="100%"></iframe>
      </div>

      <div className="container hero-content" ref={contentRef}>
        <div className="hero-text-block">
          <h1>I'm Aung<br />Myat Kyaw,</h1>
          <div className="hero-action-block">
            <p>Specializing in crafting websites to align with your brand identity while captivating and engaging your audience.</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
