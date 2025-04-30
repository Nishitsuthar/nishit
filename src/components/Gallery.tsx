import { useState } from 'react';
import { motion } from 'framer-motion';

interface Image {
  src: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  {
    src: '/images/mountain-lake-1.jpg',
    alt: 'Mountain Lake Reflection Scene 1',
    category: 'nature'
  },
  {
    src: '/images/mountain-lake-2.jpg',
    alt: 'Mountain Lake Reflection Scene 2',
    category: 'nature'
  },
  {
    src: '/images/nyc-street.jpg',
    alt: 'New York City Street View',
    category: 'urban'
  },
  {
    src: '/images/portrait-color.jpg',
    alt: 'Digital Color Portrait',
    category: 'portrait'
  },
  {
    src: '/images/portrait-bw.jpg',
    alt: 'Black and White Portrait Sketch',
    category: 'portrait'
  },
  {
    src: '/images/waterfall.jpg',
    alt: 'Mossy Waterfall Nature Scene',
    category: 'nature'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(images.map(img => img.category))];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full capitalize transition-colors
              ${selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 