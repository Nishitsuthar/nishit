import { Code, Camera, Globe, Award } from 'lucide-react';

const skills = [
  {
    name: 'Web Development',
    icon: Code,
    description: 'Proficient in modern web technologies including React, TypeScript, and Node.js.',
  },
  {
    name: 'Photography',
    icon: Camera,
    description: 'Passionate about capturing moments through landscape and street photography.',
  },
  {
    name: 'Digital Marketing',
    icon: Globe,
    description: 'Experience in SEO, content strategy, and social media management.',
  },
  {
    name: 'Project Management',
    icon: Award,
    description: 'Skilled in agile methodologies and team leadership.',
  },
];

export default function About() {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm a passionate developer and photographer based in Mannheim, Germany. 
          With a strong foundation in technology and a creative eye for photography, 
          I strive to create meaningful digital experiences.
        </p>
      </section>

      {/* Skills Grid */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-start space-x-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <skill.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Software Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Developed and maintained web applications using modern technologies.
              Collaborated with cross-functional teams to deliver high-quality solutions.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              2020 - Present
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Photography Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Captured and edited photographs for various projects and personal portfolio.
              Specialized in landscape and street photography.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              2018 - Present
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 