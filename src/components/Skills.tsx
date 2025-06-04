import React from 'react';

interface Skill {
  name: string;
  level: number; // 1-5
  category: 'technical' | 'soft';
}

const Skills: React.FC = () => {
  const technicalSkills: Skill[] = [
    { name: 'Java', level: 4, category: 'technical' },
    { name: 'Spring', level: 3, category: 'technical' },
    { name: 'Spring Boot', level: 3, category: 'technical' },
    { name: 'VS Code', level: 4, category: 'technical' },
    { name: 'IntelliJ', level: 4, category: 'technical' },
    { name: 'Postman', level: 3, category: 'technical' },
    { name: 'Word', level: 4, category: 'technical' },
  ];
  
  const softSkills: Skill[] = [
    { name: 'Quick Learner', level: 5, category: 'soft' },
    { name: 'Team Player', level: 4, category: 'soft' },
    { name: 'Communication', level: 4, category: 'soft' },
    { name: 'Problem Solving', level: 4, category: 'soft' },
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {skill.level * 20}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-4 h-4 rounded-full mr-1 ${
                          i < skill.level 
                            ? 'bg-blue-600 dark:bg-blue-500' 
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Courses Completed
              </h3>
              <ul className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-3 list-disc list-inside">
                <li className="text-gray-700 dark:text-gray-300">Java Programming in Mindluster</li>
                <li className="text-gray-700 dark:text-gray-300">Spring Boot in Scaler</li>
                <li className="text-gray-700 dark:text-gray-300">Internet of Things in NPTEL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;