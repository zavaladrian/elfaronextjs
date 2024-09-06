'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from 'next/image';

interface FoodGridProps {
  images: StaticImageData[];
}

const FoodGrid: React.FC<FoodGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden cursor-pointer aspect-h-2 aspect-w-3 rounded-lg lg:aspect-h-6 lg:aspect-w-6"
          whileHover={{ scale: 1.05 }}
          
          onClick={() => handleImageClick(image)}
        >
          <img
            src={image.src} // Access the `src` attribute of the image object
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage.src} // Access the `src` attribute here as well
              alt="Selected Image"
              className="max-w-full max-h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            />
            <div
              className="absolute top-28 right-0 p-4 cursor-pointer"
              onClick={handleCloseModal}
            >
              <span className="text-black text-5xl border-4 border-black p-2 font-bold bg-white font-dosis">X</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodGrid;