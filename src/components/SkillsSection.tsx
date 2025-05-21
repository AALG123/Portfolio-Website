import React from 'react';
import { skills } from '../data/personalInfo';
import { Code, Layers, Brain, Wrench } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code size={24} />,
    "Web & Mobile Development": <Layers size={24} />,
    "AI & Data Technologies": <Brain size={24} />,
    "Tools & Platforms": <Wrench size={24} />
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-3">
                  {skillIcons[skillCategory.category] || <Code size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{skillCategory.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            I'm always expanding my skillset through self-study, online courses, and personal projects.
            Currently focusing on deepening my knowledge in machine learning and full-stack development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-700 px-4 py-2 rounded-full">Machine Learning</div>
            <div className="bg-blue-700 px-4 py-2 rounded-full">Cloud Architecture</div>
            <div className="bg-blue-700 px-4 py-2 rounded-full">Advanced React</div>
            <div className="bg-blue-700 px-4 py-2 rounded-full">Mobile Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;