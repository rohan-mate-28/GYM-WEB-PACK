import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/R.jpeg"; // replace with your image

export default function Hero() {
  return (
    <section
  id="home"
  className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden pt-24 md:pt-32"
>
  {/* Text */}
  <motion.div
    className="flex-1 text-center md:text-left max-w-xl"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
      Transform Your <span className="text-red-400">Body</span>. Elevate Your <span className="text-emerald-400">Life</span>.
    </h1>
    <p className="text-gray-300 text-md sm:text-lg md:text-xl mb-6">
      Personalized Training. Modern Gym. Results Guaranteed.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px #34d399" }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400 text-black font-semibold shadow-lg text-lg"
      >
        Join Now
      </motion.a>
      <motion.a
        href="#plans"
        whileHover={{ scale: 1.05 }}
        className="px-8 py-3 rounded-full border-2 border-red-400 text-red-400 font-semibold hover:bg-red-400 hover:text-white transition"
      >
        View Plans
      </motion.a>
    </div>
  </motion.div>

  {/* Hero Image */}
  <motion.div
    className="flex-1 mt-10 md:mt-0 max-w-md md:max-w-lg lg:max-w-xl"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <img
      src={heroImage} // or your uploaded image path
      alt="Gym hero"
      className="w-full h-auto object-contain rounded-lg shadow-2xl"
    />
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
    </svg>
  </motion.div>
</section>

  );
}
