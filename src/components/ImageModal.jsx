import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close image">
          <X size={18} /> Close
        </button>
        <img src={image.src} alt={image.alt || 'Screenshot Preview'} className="lightbox-img" />
      </div>
    </div>
  );
}
