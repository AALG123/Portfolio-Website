import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SythAIPage from './components/SythAIPage';
import { initSmoothScroll } from './utils/smoothScroll';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Update page title
    document.title = "Assem Alghaithi | Software Engineer";
    
    // Add meta tags for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Assem Alghaithi - Software Engineer & Computer Science Student specializing in full-stack development, machine intelligence, and data processing.';
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Assem Alghaithi, Software Engineer, Computer Science, Web Development, Mobile Development, Java, Kotlin, React, Next.js';
    document.head.appendChild(metaKeywords);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  const HomePage = () => (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/syth-ai" element={<SythAIPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;