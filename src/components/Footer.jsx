import { Github, Linkedin, Twitter, Maximize2 } from 'lucide-react';
import '../assets/scss/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#home" className="logo">Dev<span>Portfolio</span></a>
          <p>Building digital experiences that matter.</p>
        </div>
        
        <div className="footer-links-wrapper">
          <div className="footer-group">
            <h4>Socials</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
