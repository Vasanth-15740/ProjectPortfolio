import React from 'react';
import { Github as GitHub, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex flex-col items-start space-y-4">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Vasanth Kumar S
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                B.Tech Information Technology Student
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mt-2">
                Aspiring to advance my career in a forward-thinking organization. 
                Enthusiastic about adopting new technologies with effective communication skills.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-700"
                >
                  View Projects
                </a>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://github.com/Vasanth-15740" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <GitHub size={24} />
                </a>
                <a 
                  href="mailto:ceitvasanth25@gmail.com"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="tel:+919342353750"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="vasanthphoto.jpg"
                alt="Vasanth Kumar"
                className="rounded-full object-cover w-full h-full shadow-xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
