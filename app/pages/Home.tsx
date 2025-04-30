import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-primary">Nishit Suthar</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome to my personal portfolio. I'm passionate about technology, photography, and creating meaningful experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Photography
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore my photography portfolio featuring landscapes, portraits, and street photography.
          </p>
          <Link
            to="/gallery"
            className="text-primary hover:text-primary/90 transition-colors inline-flex items-center"
          >
            View Gallery
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>

        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn about my technical skills, professional experience, and areas of expertise.
          </p>
          <Link
            to="/about"
            className="text-primary hover:text-primary/90 transition-colors inline-flex items-center"
          >
            Read More
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
} 