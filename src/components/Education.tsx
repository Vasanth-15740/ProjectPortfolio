import React from 'react';
import { Calendar, Award } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  date: string;
  grade: string;
}

const Education: React.FC = () => {
  const educations: Education[] = [
    {
      institution: 'K.S.R. College of Engineering',
      degree: 'B.Tech - Information Technology',
      date: '2021 - 2025',
      grade: 'CGPA - 7.7'
    },
    {
      institution: 'Swamy Vivekanandha Matric Hr Sec School',
      degree: 'Higher Secondary School',
      date: '2019 - 2021',
      grade: 'Percentage - 88.3%'
    },
    {
      institution: "St. Anne's Matric High School",
      degree: 'High School',
      date: '2018 - 2019',
      grade: 'Percentage - 83.8%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educations.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600 dark:border-blue-400"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Award size={16} className="mr-1" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;