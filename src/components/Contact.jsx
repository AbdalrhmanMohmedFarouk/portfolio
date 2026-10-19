import React from 'react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div className="sec-label">Ready to Collaborate?</div>
          <h2>Let's build <span>something</span></h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Open to full-time Flutter roles, mobile engineering contracts, and ambitious projects.
          </p>

          <ul className="contact-links">
            <li>
              <a href={`mailto:${personalInfo.email}`}>
                <Mail size={16} /> Email
              </a>
            </li>
            <li>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>
                <Phone size={16} /> {personalInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} /> GitHub
              </a>
            </li>
          </ul>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      </div>
    </section>
  );
}
