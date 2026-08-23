import React, { useEffect, useRef } from 'react';
import BlurText from './BlurText';

const HeroParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = 45;

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height : canvas.height + 10;
        this.width = Math.random() * 0.8 + 0.6;
        this.length = Math.random() * 8 + 6;
        this.vy = -(Math.random() * 0.35 + 0.15);
        this.vx = (Math.random() - 0.5) * 0.05;
        this.alpha = Math.random() * 0.35 + 0.15;
        this.hue = Math.random() * 10 + 43;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;

        if (this.y < -(this.length + 10)) {
          this.reset(false);
        }
        if (this.x < -10 || this.x > canvas.width + 10) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `hsla(${this.hue}, 90%, 55%, ${this.alpha})`;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.shadowColor = `hsla(${this.hue}, 90%, 55%, 0.4)`;
        ctx.shadowBlur = this.width * 2;
        ctx.stroke();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

const Hero = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
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
  };

  return (
    <section id="home" className="hero">
      <HeroParticles />
      <div className="container">
        <div className="hero-content">
          <div className="hero-subtitle">Video Production Service & Creative Studio</div>
          <div className="hero-title">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <BlurText
                text="OTM"
                delay={200}
                animateBy="words"
                direction="top"
                className=""
              />
              <BlurText
                text="productions"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-smaller"
              />
            </div>
            <BlurText
              text="Creating, Capturing, Connecting"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="hero-title-sub"
            />
          </div>
          <p className="hero-desc">
            Your source for stories that matter.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={(e) => handleScrollTo(e, 'gallery')}>
              Explore Gallery
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px' }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-secondary" onClick={(e) => handleScrollTo(e, 'contact')}>
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
