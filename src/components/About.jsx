import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaUserShield, FaHeartbeat } from "react-icons/fa";
import aboutImg from "../assets/fit.jpg"; // replace with your gym image

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About our gym"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-400">
            About <span className="text-white">FitNova</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-red-400 font-semibold">FitNova</span>, we
            believe fitness is more than lifting weights — it’s about building a
            stronger, healthier, and more confident version of yourself. With
            certified trainers, world-class equipment, and personalized
            programs, we help you achieve results that last.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl shadow-lg"
            >
              <FaUserShield className="text-emerald-400 text-3xl" />
              <span className="font-medium text-white">
                Certified Trainers
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl shadow-lg"
            >
              <FaDumbbell className="text-red-400 text-3xl" />
              <span className="font-medium text-white">
                Modern Equipment
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl shadow-lg sm:col-span-2"
            >
              <FaHeartbeat className="text-pink-400 text-3xl" />
              <span className="font-medium text-white">
                Personalized Training Plans
              </span>
            </motion.div>
          </div>

          {/* Button */}
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px #ef4444" }}
            className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg"
          >
            Discover Our Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
