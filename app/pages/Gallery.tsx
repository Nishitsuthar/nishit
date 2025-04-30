import { useState } from 'react';
import { Image, Filter } from 'lucide-react';

// Sample gallery items - replace with your actual photos
const galleryItems = [
  {
    id: 1,
    title: 'Mountain Landscape',
    category: 'landscape',
    imageUrl: 'https://source.unsplash.com/random/800x600?mountain',
  },
  {
    id: 2,
    title: 'City Streets',
    category: 'street',
    imageUrl: 'https://source.unsplash.com/random/800x600?city',
  },
  {
    id: 3,
    title: 'Portrait Study',
    category: 'portrait',
    imageUrl: 'https://source.unsplash.com/random/800x600?portrait',
  },
  {
    id: 4,
    title: 'Nature Scene',
    category: 'landscape',
    imageUrl: 'https://source.unsplash.com/random/800x600?nature',
  },
  {
    id: 5,
    title: 'Urban Life',
    category: 'street',
    imageUrl: 'https://source.unsplash.com/random/800x600?urban',
  },
  {
    id: 6,
    title: 'Character Portrait',
    category: 'portrait',
    imageUrl: 'https://source.unsplash.com/random/800x600?person',
  },
];

const categories = ['all', 'landscape', 'portrait', 'street'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Photo Gallery
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A collection of my favorite photographs, capturing moments and memories
          through my lens.
        </p>
      </section>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 