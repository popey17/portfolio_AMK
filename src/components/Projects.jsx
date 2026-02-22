import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/scss/Projects.scss';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'A full-stack headless e-commerce solution with Next.js, Stripe, and Sanity CMS.',
      tech: ['Next.js', 'React', 'Tailwind', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Real-time Dashboard',
      desc: 'Interactive data visualization dashboard with WebSocket integration.',
      tech: ['React', 'D3.js', 'Node.js', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      desc: 'Kanban-style project management tool with drag-and-drop features.',
      tech: ['React', 'Redux', 'Express', 'MongoDB'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
