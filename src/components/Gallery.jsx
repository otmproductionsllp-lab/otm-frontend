import React, { useState } from 'react';

const Gallery = ({ items, isLoading }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = items;

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">
          Selected <span>Works</span>
        </h2>

        {/* Gallery Grid */}
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <p>Loading the creative portfolio...</p>
          </div>
        ) : (
          <div className="gallery-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div 
                  key={item._id} 
                  className="gallery-card"
                  onClick={() => {
                    if (item.videoUrl) {
                      setSelectedVideo(item.videoUrl);
                    } else {
                      setSelectedImage(item.thumbnailUrl);
                    }
                  }}
                  title={item.videoUrl ? `Play "${item.title}"` : `View "${item.title}"`}
                >
                  {/* Badge for Video items */}
                  {item.category === 'videography' && (
                    <div className="video-badge">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Video
                    </div>
                  )}

                  <div className="card-img-wrapper">
                    {item.videoUrl ? (
                      <video 
                        src={item.videoUrl} 
                        preload="metadata"
                        muted
                        playsInline
                      />
                    ) : (
                      <img 
                        src={item.thumbnailUrl} 
                        alt={item.title} 
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="card-overlay">
                    {item.category !== 'videography' && (
                      <>
                        <span className="card-tag">{item.category}</span>
                        <h3 className="card-title">{item.title}</h3>
                      </>
                    )}
                    <div className="media-action">
                      <span>{item.videoUrl ? 'Watch Video' : 'View Photo'}</span>
                      {item.videoUrl ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="gallery-empty">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '1rem', opacity: 0.5 }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <p>No gallery items found in this collection.</p>
              </div>
            )}
          </div>
        )}

        {/* Watch More Link */}
        {!isLoading && filteredItems.length > 0 && (
          <div className="gallery-more-link">
            <span>Watch more at</span>
            <a 
              href="https://www.instagram.com/otm__productions_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram Profile"
              className="instagram-link-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Cinematic Media Modal Overlay */}
      {(selectedVideo || selectedImage) && (
        <div className="video-modal-overlay" onClick={() => { setSelectedVideo(null); setSelectedImage(null); }}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => { setSelectedVideo(null); setSelectedImage(null); }} aria-label="Close media player">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {selectedVideo ? (
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                playsInline 
                className="video-modal-player"
              />
            ) : (
              <img 
                src={selectedImage} 
                alt="Enlarged view"
                className="video-modal-player"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
