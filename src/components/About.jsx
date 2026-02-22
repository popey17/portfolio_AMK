import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I specialize in crafting websites to align with your brand identity while captivating and engaging your audience. 
              My goal is to create digital experiences that are both meaningful and memorable, ensuring a lasting impression on every visitor.
            </p>
            <p>
              In addition to front-end development, I also have knowledge in back-end technologies and cloud services.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-item">Frontend / React / GSAP</div>
            <div className="skill-item">Backend / Node / SQL</div>
            <div className="skill-item">UI/UX / Styling</div>
            <div className="skill-item">Performance / WebGL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
