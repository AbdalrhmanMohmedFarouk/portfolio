import React, { useState } from 'react';
import { ExternalLink, ZoomIn, Smartphone, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Productivity', 'News & Media', 'Entertainment'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">
            <Smartphone size={13} style={{ color: 'var(--flutter-cyan)' }} />
            Featured Mobile Applications
          </div>
          <h2>Selected <span>work</span></h2>
          <p className="lead" style={{ marginTop: '10px', marginBottom: '24px' }}>
            Production-grade mobile apps engineered with Flutter, BLoC, and Clean Architecture.
          </p>

          {/* Category Filter Tabs */}
          <div className="project-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          {filteredProjects.map((proj) => (
            <article className="proj" key={proj.id}>
              <div>
                <div className="proj-meta">
                  <span className="proj-num">{proj.num}</span>
                  <span className="proj-type">{proj.type}</span>
                  <span className="proj-badge">{proj.category}</span>
                </div>

                <h3>{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>

                <ul className="feat-list">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={15} className="feat-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pill-list" style={{ marginBottom: '24px' }}>
                  {proj.tech.map((t, tIdx) => (
                    <span className="pill" key={tIdx}>{t}</span>
                  ))}
                </div>

                <div className="cta">
                  <a
                    className="btn fill"
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Phone Mockup Gallery */}
              <div className="shots">
                {proj.screenshots.map((shot, sIdx) => (
                  <div
                    className="phone-frame"
                    key={sIdx}
                    onClick={() => onSelectImage({
                      src: shot,
                      title: proj.title,
                      alt: `${proj.title} screen ${sIdx + 1}`,
                      allScreens: proj.screenshots,
                      currentIndex: sIdx
                    })}
                  >
                    <div className="phone-screen">
                      <img
                        src={shot}
                        alt={`${proj.title} screen ${sIdx + 1}`}
                      />
                      <div className="shot-overlay">
                        <span className="shot-zoom-badge">
                          <ZoomIn size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                          Preview
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
