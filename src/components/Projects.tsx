import React, { useState } from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  reference?: string;
  github?: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Face Recognition and Attendance Management System',
      date: 'Mar 2024 - May 2024',
      description: 'A system that uses facial recognition technology to automate attendance tracking',
      achievements: [
        'Implemented face detection and recognition using CNN and OpenCV',
        'Created a user-friendly GUI with Tkinter for easy interaction',
        'Email notification reports reduced the paper work by 75%',
        'Achieved 95% accuracy in face recognition'
      ],
      technologies: ['Python', 'OpenCV', 'CNN', 'Tkinter'],
      reference: 'Jetir_paper.com'
    },
    {
      title: 'Student Database Management',
      date: 'Feb 2025 - Mar 2025',
      description: 'A RESTful API for managing student records and academic information',
      achievements: [
        'Developed a Student Database Management RESTful API using Java and Spring Boot',
        'Utilized Spring Data JPA for seamless ORM-based interaction with the database',
        'Simplifying CRUD operations and structured using MVC architecture',
        'The application ensures maintainability and scalability'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'REST API', 'MVC'],
      github: '#'
    },
    {
      title: 'Donation Collection Website',
      date: 'Sep 2022 - Oct 2022',
      description: 'A website for collecting donations to support various social causes',
      achievements: [
        'Designed and implemented a full-featured donation platform',
        'Integrated Razorpay payment gateway for secure transactions',
        'Created a compelling and engaging user interface',
        'Implemented responsive design for all devices'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Razorpay API'],
      link: '#'
    }
  ];

  const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap mb-6">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`px-4 py-2 mr-2 mb-2 rounded-lg transition-colors ${
                  activeProject === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </button>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {projects[activeProject].title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-1" />
                  <span>{projects[activeProject].date}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {projects[activeProject].achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap">
                  {projects[activeProject].technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {projects[activeProject].reference && (
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-medium">Reference:</span> {projects[activeProject].reference}
                </div>
              )}
              
              <div className="flex space-x-4">
                {projects[activeProject].github && (
                  <a 
                    href={projects[activeProject].github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <Github size={20} className="mr-1" />
                    <span>View Code</span>
                  </a>
                )}
                
                {projects[activeProject].link && (
                  <a 
                    href={projects[activeProject].link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;