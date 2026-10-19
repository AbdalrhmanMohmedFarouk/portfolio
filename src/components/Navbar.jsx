import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('top');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sections = ['top', 'about', 'work', 'skills', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSec(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={mobileOpen ? 'mobile-open' : ''}>
      <div className="wrap">
        <a href="#top" className="logo-wrap" onClick={() => setMobileOpen(false)}>
          <div className="logo-badge">
            <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
              <path d="M 37.8 0 L 0 37.8 L 11.7 49.5 L 61.2 0 Z" fill="#54C5F8"/>
              <path d="M 37.8 23.4 L 14.4 46.8 L 26.1 58.5 L 49.5 35.1 Z" fill="#29B6F6"/>
              <path d="M 26.1 58.5 L 37.8 70.2 L 49.5 58.5 L 37.8 46.8 Z" fill="#01579B"/>
            </svg>
          </div>
          <span className="logo-text">A.M.</span>
        </a>

        <ul className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSec === link.href.substring(1) ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
