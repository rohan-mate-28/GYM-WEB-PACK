import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const trainers = [
  {
    name: "Rahul Pawar",
    role: "Strength Coach",
    image: "https://th.bing.com/th/id/OIP._avsb55gbrc6mPeOU4pLOQHaE7?w=286&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Manish Sorte",
    role: "Yoga & Wellness",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600",
  },
  {
    name: "Michael Davis",
    role: "Cardio Expert",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600",
  },
];

export default function TrainersSection() {
  return (
    <section
      id="about"
      className="w-full py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Meet Our <span className="text-red-400">Expert Trainers</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Learn from certified trainers who are passionate about helping you
          achieve your fitness goals with the best techniques and motivation.
        </p>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-800"
            >
              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-gray-300">{trainer.role}</p>
                 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
