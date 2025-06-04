import React from 'react';
import { Github, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Vasanth Kumar</h2>
            <p className="text-gray-400 max-w-md">
              B.Tech Information Technology student passionate about software development and eager to contribute to innovative projects.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-wrap gap-4">
              {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-400 hover:text-blue-400 capitalize transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/Vasanth-15740" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:ceitvasanth25@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919342353750"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vasanth Kumar. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;