import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, Server, Palette, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description: "Node.js, Express, Python, Django"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database",
    description: "MongoDB, PostgreSQL, MySQL"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "DevOps",
    description: "Docker, AWS, CI/CD, Git"
  }
];

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animateText = () => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (displayText !== currentText) {
          const nextChar = currentText.slice(0, displayText.length + 1);
          setDisplayText(nextChar);
          timeout = setTimeout(animateText, 100);
        } else {
          // Finished typing, wait before deleting
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText) {
          const nextChar = currentText.slice(0, displayText.length - 1);
          setDisplayText(nextChar);
          timeout = setTimeout(animateText, 50);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          timeout = setTimeout(animateText, 500);
        }
      }
    };

    timeout = setTimeout(animateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <div className="relative h-[40px] flex items-center justify-center">
      <div className="relative text-center">
        <span className="inline-block font-light tracking-wide min-w-[20px]">
          {displayText}
        </span>
        <span 
          className="absolute right-[-12px] top-0 h-full w-[2px] bg-gray-400"
          style={{
            animation: 'blink 1s step-end infinite'
          }}
        ></span>
      </div>
    </div>
  );
};

const Home = () => {
  const typingTexts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#020817]">
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue accent lights */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300"
          >
            Nishit Suthar
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-400 font-light"
          >
            <TypewriterText texts={typingTexts} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <a
              href="https://github.com/Nishitsuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700/50"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/nishit-suthar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700/50"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700/50"
            >
              <Mail className="w-6 h-6 text-gray-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              beautiful, functional web applications. With expertise in both frontend and backend
              technologies, I strive to build seamless user experiences that make a difference.
            </p>
            <a
              href="/about"
              className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

const styles = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet); 