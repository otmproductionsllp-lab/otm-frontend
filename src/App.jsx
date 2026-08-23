import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Logo from './components/Logo';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [slideUp, setSlideUp] = useState(false);
  const getViewFromHash = () => {
    const hash = window.location.hash;
    if (hash === '#about') return 'about';
    if (hash === '#contact') return 'contact';
    return 'home';
  };

  const [currentView, setCurrentView] = useState(getViewFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getViewFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const fetchGallery = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        setGalleryItems(data);
      } else {
        console.error('Failed to fetch gallery items');
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();

    const slideTimer = setTimeout(() => {
      setSlideUp(true);
    }, 2200);

    const removeTimer = setTimeout(() => {
      setIsIntroActive(false);
    }, 3400);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {isIntroActive && (
        <div className={`intro-overlay ${slideUp ? 'slide-up' : ''}`}>
          <div className="intro-content">
            <div className="intro-logo-wrapper">
              <Logo size={90} />
            </div>
            <div className="intro-welcome-text">WELCOME</div>
            <div className="intro-subtitle-text" style={{ textAlign: 'center' }}>
              <div>OTM</div>
              <div className="text-smaller">productions</div>
            </div>
          </div>
        </div>
      )}

      <Navbar />

      <main>
        {currentView === 'home' && (
          <>
            {/* Hero Area */}
            <Hero />

            {/* Gallery Area */}
            <Gallery items={galleryItems} isLoading={isLoading} />
          </>
        )}

        {currentView === 'about' && (
          <>
            {/* About / Biography Area */}
            <section id="about" className="about-section">
              <div className="container about-content">
                <div className="about-info">
                  <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                    The <span>Studio</span>
                  </h2>
                  <h3>ONETAKE MEDIA</h3>
                  <p style={{ color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: '600' }}>
                    Video Production & Creative Agency
                  </p>
                  <div className="about-text">
                    <p>
                      With over a decade of experience creating stories that matter, ONETAKE MEDIA is an elite creative studio specializing in premium cinematic films, brand documentaries, high-end commercial campaigns, and event coverage.
                    </p>
                    <p>
                      Every project we undertake is handled with unmatched dedication—blending sophisticated cinematography, high-fidelity sound design, and emotional depth to deliver visuals that captivate audiences. We transform visual concepts into cinematic realities.
                    </p>
                  </div>

                  {/* Statistics */}
                  <div className="about-stats">
                    <div className="stat-item">
                      <div className="stat-number">150+</div>
                      <div className="stat-label">Projects Completed</div>
                    </div>

                    <div className="stat-item">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Brand Clients</div>
                    </div>
                  </div>
                </div>

                <div className="about-image-wrapper">
                  <video
                    src="/Video-58318.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </section>

            {/* Meet the Founder Area */}
            <section className="founder-section">
              <div className="container founder-content">
                <div className="founder-image-wrapper">
                  <img src="/founder.png" alt="Khaja Hussain - Founder & CEO" />
                </div>
                <div className="founder-info">
                  <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                    Meet the <span>Founder</span>
                  </h2>
                  <h3>Khaja Hussain</h3>
                  <p className="founder-role">Founder & CEO</p>
                  <div className="founder-text">
                    <p>
                      Khaja Hussain is the visionary founder and CEO of ONETAKE MEDIA. Possessing a deep-seated passion for cinematic storytelling and visual precision, he has directed and produced numerous commercial campaigns, music videos, and premium corporate narratives that captivate audiences.
                    </p>
                    <p>
                      His creative philosophy is centered around authenticity—capturing raw emotion and visual depth to build powerful narratives. Under his leadership, ONETAKE MEDIA has emerged as an elite visual agency known for its artistic integrity and technically sophisticated execution.
                    </p>
                  </div>
                  <div className="founder-socials">
                    <a
                      href="https://www.instagram.com/kh__story/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Khaja Hussain Instagram"
                      className="founder-social-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      <span>@kh__story</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentView === 'contact' && (
          /* Contact Area */
          <Contact />
        )}
      </main>

      {/* Footer Node */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Logo size={42} />
            OTM
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/otm__productions_" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="mailto:otmproductionsllp@gmail.com" className="social-link" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ONETAKE MEDIA. All Rights Reserved. Created for Visual Excellence.
          </p>
        </div>
      </footer>

    </>
  );
}

export default App;
