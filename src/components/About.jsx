import React from 'react';
import { aboutHighlights } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Background & Philosophy</div>
          <h2>About <span>me</span></h2>
        </div>

        <div className="grid-3">
          {aboutHighlights.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="pill-list">
                {item.tags.map((tag, tIdx) => (
                  <span className="pill" key={tIdx}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
