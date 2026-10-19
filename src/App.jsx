import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="portfolio-app">
      <div className="ambient" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onSelectImage={setSelectedImage} />
        <Skills />
        <Contact />
      </main>
      <Footer />

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
