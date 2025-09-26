import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const CustomSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Why Choose <span className="text-red-500">Our Gym?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Counter 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black bg-opacity-40 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-4xl font-bold text-red-500">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="mt-2">Happy Members</p>
          </motion.div>

          {/* Counter 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black bg-opacity-40 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-4xl font-bold text-red-500">
              <CountUp end={20} duration={3} />+
            </h3>
            <p className="mt-2">Professional Trainers</p>
          </motion.div>

          {/* Counter 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black bg-opacity-40 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-4xl font-bold text-red-500">
              <CountUp end={1000} duration={3} />+
            </h3>
            <p className="mt-2">Sq. Ft. Space</p>
          </motion.div>

          {/* Counter 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-black bg-opacity-40 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-4xl font-bold text-red-500">
              <CountUp end={24} duration={3} />
              /7
            </h3>
            <p className="mt-2">Gym Access</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
