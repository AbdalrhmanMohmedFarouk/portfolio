import React from 'react';
import { Download, ExternalLink, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="kicker">
            <span className="kicker-dot" />
            <Sparkles size={13} style={{ color: 'var(--flutter-cyan)' }} />
            {personalInfo.title} · {personalInfo.location}
          </div>

          <h1>
            Abdalrhman<br />
            <em style={{ display: 'inline-block', paddingRight: '0.35em', letterSpacing: '0.02em', overflow: 'visible' }}>Mohmed</em>
          </h1>

          <p className="lead">{personalInfo.tagline}</p>

          <div className="cta">
            <a className="btn fill" href="#work">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a
              className="btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile <ExternalLink size={15} />
            </a>
            <a
              className="btn btn-cv"
              href={personalInfo.cvPath}
              download="Abdalrhman_Mohmed_CV.pdf"
              aria-label="Download Abdalrhman Mohmed's CV as PDF"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-profile-card">
          <div className="profile-img-container">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="profile-img"
            />
            <div className="profile-badge-overlay">
              <Code2 size={14} style={{ color: '#40D0FD' }} />
              <span>Flutter Specialist</span>
            </div>
          </div>

          <div className="stats">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <div className="stat-n">{stat.number}</div>
                <div className="stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
