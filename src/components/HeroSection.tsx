import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />
  };

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAMS43OSA0IDQgNCA0LTEuNzkgNC00em0yNCAwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Hello, I'm <span className="text-blue-400">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-blue-200 animate-fade-in-delay">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg animate-fade-in-delay-2">
              {personalInfo.bio}
            </p>
            
            <div className="flex space-x-4 mb-8 animate-fade-in-delay-3">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon]}
                </a>
              ))}
            </div>
            
            <div className="flex space-x-4 animate-fade-in-delay-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-900 rounded-full transition-all duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 relative">
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
              <img
                src={personalInfo.headshot}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg animate-fade-in"
              />
              <div className="absolute -inset-1 rounded-full border-2 border-blue-300 opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
          >
            <ArrowDown size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;