import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setActiveSection('about');
        return;
      }
      if (hash === '#contact') {
        setActiveSection('contact');
        return;
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'gallery'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setActiveSection('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#contact') {
        setActiveSection('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        handleScroll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileActive(false);

    if (targetId === 'about') {
      window.location.hash = 'about';
      return;
    }
    if (targetId === 'contact') {
      window.location.hash = 'contact';
      return;
    }

    const currentHash = window.location.hash;
    if (currentHash === '#about' || currentHash === '#contact') {
      window.location.hash = targetId === 'home' ? '' : `#${targetId}`;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Logo size={42} />
          ONETAKE<span>.</span>
        </a>

        <ul className={`nav-links ${isMobileActive ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className={activeSection === 'gallery' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'gallery')}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMobileActive(!isMobileActive)}
          aria-label="Toggle navigation menu"
        >
          {isMobileActive ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
