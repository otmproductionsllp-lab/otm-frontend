import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-split">
          
          {/* Left Column: Heading Info */}
          <div className="contact-info-panel">
            <span className="contact-label">Get In Touch</span>
            <h2 className="contact-title">
              Let's Create <span>Something Timeless</span>
            </h2>
            <p className="contact-description">
              ONETAKE MEDIA is open to brand collaborations, corporate campaigns, cinematic films, and visual projects worldwide. Reach out through any of our channels—our team is ready to bring your vision to life.
            </p>
            <div className="contact-footer-brand">
              <span className="brand-dot"></span>
              <span>ONETAKE MEDIA STUDIO</span>
            </div>
          </div>

          {/* Right Column: Stacking Connect Cards */}
          <div className="contact-links-panel">
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/919947222321" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="connect-row whatsapp-row"
            >
              <div className="row-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.017 14.077.99 11.478.99c-5.447 0-9.873 4.372-9.877 9.802-.001 1.77.478 3.5 1.388 5.006l-1.012 3.693 3.79-.988c1.5.82 3.178 1.25 4.88 1.253zM16.57 14.57c-.27-.135-1.595-.788-1.843-.878-.248-.09-.43-.135-.61.135-.18.27-.697.878-.855 1.058-.158.18-.315.2-.585.065-2.28-1.127-3.784-2.88-4.46-4.047-.18-.31-.019-.478.116-.612.122-.12.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.022-.473-.068-.135-.61-1.474-.836-2.014-.22-.53-.44-.457-.61-.466-.157-.008-.337-.01-.518-.01s-.473.068-.72.338c-.248.27-.945.923-.945 2.253s.968 2.613 1.103 2.793c.135.18 1.905 2.91 4.615 4.08.645.278 1.148.444 1.54.568.647.206 1.237.177 1.702.107.518-.078 1.595-.653 1.82-1.283.226-.63.226-1.17.158-1.283-.068-.11-.248-.18-.518-.315z"/>
                </svg>
              </div>
              <div className="row-details">
                <h3>WhatsApp Chat</h3>
                <p>Connect instantly for rapid bookings, pricing packages, and quick discussions.</p>
              </div>
              <div className="row-action-arrow">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/otm__productions_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="connect-row instagram-row"
            >
              <div className="row-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div className="row-details">
                <h3>Instagram Direct</h3>
                <p>Explore our daily visual stories, behind-the-scenes updates, and direct message us.</p>
              </div>
              <div className="row-action-arrow">
                <span>Follow Profile</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:otmproductionsllp@gmail.com" 
              className="connect-row email-row"
            >
              <div className="row-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="row-details">
                <h3>Direct Email</h3>
                <p>For production briefs, proposals, collaborations, and career inquiries.</p>
              </div>
              <div className="row-action-arrow">
                <span>Send Email</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
