import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageModal({ image, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate) onNavigate(1);
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <span className="lightbox-title">{image.title || 'Screen Preview'}</span>
          <button className="lightbox-close" onClick={onClose} aria-label="Close image">
            <X size={18} /> Close
          </button>
        </div>

        <div className="lightbox-body">
          {image.allScreens && image.allScreens.length > 1 && (
            <button
              className="lightbox-nav-btn prev"
              onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <img
            src={image.src}
            alt={image.alt || 'Screenshot Preview'}
            className="lightbox-img"
          />

          {image.allScreens && image.allScreens.length > 1 && (
            <button
              className="lightbox-nav-btn next"
              onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
