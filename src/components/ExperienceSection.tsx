import React from 'react';
import { experience } from '../data/personalInfo';
import { Briefcase, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career path.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row ${
                index !== experience.length - 1 ? 'mb-12' : ''
              }`}
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="bg-blue-100 inline-flex items-center justify-center p-3 rounded-lg text-blue-600 mb-3">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                <div className="text-blue-600 font-medium mb-1">{job.company}</div>
                <div className="text-gray-500 text-sm">{job.period}</div>
              </div>
              
              <div className="md:w-2/3 md:pl-10 relative">
                {index !== experience.length - 1 && (
                  <div className="absolute top-0 left-0 h-full w-px bg-blue-200 hidden md:block"></div>
                )}
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-600">
                        <CheckCircle size={18} className="text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;