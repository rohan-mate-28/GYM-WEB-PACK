import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This gym changed my life! Trainers are very professional, and the atmosphere is super motivating.",
  },
  {
    name: "Priya Desai",
    role: "Yoga & Wellness",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The best gym experience I’ve ever had. The equipment is modern and the community is welcoming.",
  },
  {
    name: "Amit Verma",
    role: "Athlete",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    review:
      "Perfect balance of workouts and guidance. My strength and stamina improved tremendously here!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">
            Real stories from our members who transformed their fitness journey
          </p>
        </motion.div>

        {/* Animated Carousel */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="min-w-[300px] md:min-w-[350px] snap-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-4 animate-bounce" />
              <motion.img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-2 border-yellow-400 mb-4"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.p
                className="text-gray-300 italic mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                "{t.review}"
              </motion.p>
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t.name}
              </motion.h3>
              <span className="text-yellow-400 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
