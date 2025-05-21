import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/personalInfo';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (id: string) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some projects I've worked on. Each project represents different skills and technologies I've learned along my journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleProjectClick(project.id)}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-sm font-medium"
                  >
                    {activeProject === project.id ? 'Less Details' : 'More Details'}
                  </button>
                  
                  <div className="flex space-x-3">
                    {project.id === "syth-ai" ? (
                      <Link 
                        to="/projects/syth-ai"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`View ${project.title} project details`}
                      >
                        <ExternalLink size={20} />
                      </Link>
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        aria-label={`View ${project.title} project`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {activeProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-down">
                    <p className="text-gray-600 text-sm">{project.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;