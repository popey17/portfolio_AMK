import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.scss';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current.children;
    gsap.fromTo(items,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  const experiences = [
    {
      year: '2023 - Present',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      description: 'Leading frontend architecture and building scalable Node.js microservices.'
    },
    {
      year: '2020 - 2023',
      role: 'Frontend Engineer',
      company: 'Creative Studio',
      description: 'Developing high-performance, animation-heavy web applications for premium clients.'
    },
    {
      year: '2018 - 2020',
      role: 'Web Developer',
      company: 'Digital Solutions',
      description: 'Built responsive corporate websites and CMS themes.'
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline" ref={listRef}>
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{exp.year}</div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
