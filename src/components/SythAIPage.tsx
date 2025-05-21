import React from 'react';
import { ArrowLeft, Code, Database, Sparkles, Brain, BookOpen, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const SythAIPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200">
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="relative h-80 bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white z-10">Syth AI</h1>
            </div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">AI</span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Software Development</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">SaaS</span>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-4 py-1 rounded-full">Mobile</span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-4 py-1 rounded-full">Web</span>
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full">Programming</span>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Syth AI</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Syth is an expert AI assistant and senior software developer with extensive knowledge across numerous programming languages, frameworks, and best practices.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With broad expertise in software development, Syth assists with a wide range of tasks from designing and building applications to debugging and optimizing code, providing comprehensive solutions across multiple platforms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Code size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Code Generation</h3>
                  <p className="text-gray-700">
                    Create clean, efficient code across multiple programming languages and frameworks.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Database size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Application Development</h3>
                  <p className="text-gray-700">
                    Design and build complete applications with detailed instructions and project setup guidance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Guidance</h3>
                  <p className="text-gray-700">
                    Provide comprehensive learning resources for programming concepts and tech stacks.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Server size={24} className="text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Debugging & Optimization</h3>
                  <p className="text-gray-700">
                    Identify and resolve issues in code with performance optimization recommendations.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Expertise</h3>
                  <p className="text-gray-700">
                    Extensive knowledge of programming languages, frameworks, and development best practices.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Solutions</h3>
                  <p className="text-gray-700">
                    Leverage advanced AI to solve complex development challenges and enhance productivity.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Expertise</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Syth has proficiency across a comprehensive technology stack:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Front-End: React, Vue, Angular, Next.js
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Mobile: React Native
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Back-End: Node.js, Python, Java, C#, Go
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Databases: SQL, NoSQL, GraphQL
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Cloud Deployment: Netlify, Vercel
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Development Impact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Syth enhances software development across multiple domains:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5">1</span>
                    <p className="text-gray-700"><strong>Developer Productivity:</strong> Accelerating development workflows through AI-assisted coding and problem-solving.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5">2</span>
                    <p className="text-gray-700"><strong>Code Quality:</strong> Improving software quality by implementing best practices and suggesting optimizations.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-0.5">3</span>
                    <p className="text-gray-700"><strong>Technical Education:</strong> Providing comprehensive learning resources and guidance for developers at all skill levels.</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SythAIPage; 