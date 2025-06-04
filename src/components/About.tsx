import React from 'react';
import { GraduationCap, BookOpen, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 text-center leading-relaxed">
            Aiming to advance my career in forward-thinking and efficiently managed organization. 
            Enthusiastic about adopting new technologies, with effective communication skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Education</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                B.Tech in Information Technology at K.S.R. College of Engineering with 7.7 CGPA.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Learning</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Constantly learning new technologies through courses in Java, Spring Boot, and IoT.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">Development</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Focused on Java and Spring Boot development with experience in web and backend technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;