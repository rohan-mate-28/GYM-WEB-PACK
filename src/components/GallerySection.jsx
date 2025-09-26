import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const galleryImages = [
  "https://th.bing.com/th/id/OIP.k34D6fpFZSU4RLhcc-gI5QHaF4?w=204&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800",
  "https://th.bing.com/th?q=Nobu+Hotel+Manila+Fitness+Gym&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section
      id="gallery"
      className="w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Explore Our <span className="text-red-400">Gallery</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          A glimpse of our modern facilities, vibrant community, and inspiring
          training environment.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-lg font-semibold text-white">View More</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
              onClick={() => setSelectedImg(null)}
            >
              <HiX />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImg}
              src={selectedImg}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
