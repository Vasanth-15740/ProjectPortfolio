import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  achievements?: string[];
  reference?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Web Development Intern',
      company: 'The Sparks Foundation',
      date: 'Sep 2022 - Oct 2022',
      location: 'Remote',
      description: [
        'Developed a donation collection website to support the mission of aiding the poor and handling emergency situations.',
        'Designed the page with a compelling description and integrated Razorpay payment gateway for seamless donation processing.',
      ],
      achievements: [
        'Implemented a visually engaging homepage.'
      ]
    },
    {
      title: 'Salesforce Developer Virtual Intern',
      company: 'Smart Internz',
      date: 'Nov 2023 - Jan 2024',
      location: 'Remote',
      description: [
        'Completed Salesforce Trailhead modules including Salesforce Fundamentals, Organizational Setup, Relationship & Process Automation.',
        'Achieved Super Badges in Apex Specialist, Process Automation Specialist, and Developer Super Set.',
      ],
      reference: 'Certificate ID: SISFVIPAD2024-93131'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 ml-4 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-12 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300">{desc}</p>
                    ))}
                  </div>
                  
                  {exp.achievements && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.reference && (
                    <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Reference:</span> {exp.reference}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;