import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import StaggeredMenu from './StaggeredMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

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
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 50, position: 'relative' }}>
          <Logo size={24} />
        </a>

        <StaggeredMenu 
          isFixed={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          accentColor="#d4af37"
          items={[
            { label: 'Home', link: '#home', id: 'home' },
            { label: 'Gallery', link: '#gallery', id: 'gallery' },
            { label: 'About', link: '#about', id: 'about' },
            { label: 'Contact', link: '#contact', id: 'contact' }
          ]}
          socialItems={[
            { label: 'Instagram', link: 'https://www.instagram.com/otm__productions_' },
            { label: 'WhatsApp', link: 'https://wa.me/917994271815' }
          ]}
          onItemClick={(e, item) => handleLinkClick(e, item.id)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
