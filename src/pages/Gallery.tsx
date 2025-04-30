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
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A collection of my work and inspirations
          </p>
        </motion.div>

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
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for when no images are available */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No images available at the moment.
            </p>
          </div>
        )}
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