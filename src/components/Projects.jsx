import React from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectImage }) {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Featured Applications</div>
          <h2>Selected <span>work</span></h2>
        </div>

        <div>
          {projects.map((proj) => (
            <article className="proj" key={proj.id}>
              <div>
                <div className="proj-meta">
                  <span className="proj-num">{proj.num}</span>
                  <span className="proj-type">{proj.type}</span>
                </div>

                <h3>{proj.title}</h3>
                <p className="proj-desc">{proj.desc}</p>

                <ul className="feat-list">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className="feat-arrow">→</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pill-list" style={{ marginBottom: '22px' }}>
                  {proj.tech.map((t, tIdx) => (
                    <span className="pill" key={tIdx}>{t}</span>
                  ))}
                </div>

                <div className="cta">
                  <a
                    className="btn"
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="shots">
                {proj.screenshots.map((shot, sIdx) => (
                  <div
                    className="shot-wrap"
                    key={sIdx}
                    onClick={() => onSelectImage({ src: shot, alt: `${proj.title} screen ${sIdx + 1}` })}
                  >
                    <img
                      src={shot}
                      alt={`${proj.title} screen ${sIdx + 1}`}
                      loading="lazy"
                    />
                    <div className="shot-overlay">
                      <span className="shot-zoom-badge">
                        <ZoomIn size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                        Preview
                      </span>
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
