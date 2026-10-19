import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-label">Technical Arsenal</div>
          <h2>What I <span>work with</span></h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-category-card" key={index}>
              <div className="skill-cat-header">
                {category.category}
              </div>
              <div className="pill-list">
                {category.skills.map((skill, sIdx) => (
                  <span className="pill" key={sIdx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
