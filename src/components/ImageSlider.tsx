import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
];

const ImageSlider: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`University Campus ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3">
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <h2 className="text-4xl font-bold text-white">Welcome to Our University</h2>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;