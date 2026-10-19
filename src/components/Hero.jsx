import React from 'react';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="kicker">
            <span className="kicker-dot" />
            {personalInfo.title} · {personalInfo.location}
          </div>

          <h1>
            Abdalrhman<br />
            <em>Mohmed</em>
          </h1>

          <p className="lead">{personalInfo.tagline}</p>

          <div className="cta">
            <a className="btn fill" href="#work">
              See my work <ArrowRight size={16} />
            </a>
            <a
              className="btn"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ExternalLink size={15} />
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
              src="images/profile.jpg"
              alt={personalInfo.name}
              className="profile-img"
              loading="eager"
            />
          </div>

          <div className="stats">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx}>
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
