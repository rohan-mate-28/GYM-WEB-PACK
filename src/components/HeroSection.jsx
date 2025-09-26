import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../assets/fit.jpg"; // replace with your image

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-red-500">I Build</span> Modern,{" "}
            <span className="text-green-400">High-Performing</span> Websites
          </h1>
          <p className="text-lg text-gray-300">
            Freelance Web Developer | MERN Stack | Fitness-Inspired Design
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-black font-semibold flex items-center gap-2 shadow-lg"
            >
              Hire Me <FaArrowRight />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold shadow-lg"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Gym Developer"
            className="w-[400px] md:w-[500px] rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white text-2xl">
          ↓
        </a>
      </div>
    </section>
  );
}
