import React from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaAppleAlt, FaUsers, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaDumbbell className="text-red-400 text-4xl" />,
      title: "Personal Training",
      desc: "One-on-one training with certified coaches tailored to your fitness level and goals.",
    },
    {
      icon: <FaAppleAlt className="text-emerald-400 text-4xl" />,
      title: "Nutrition Guidance",
      desc: "Custom diet plans to complement your workouts and maximize your results.",
    },
    {
      icon: <FaUsers className="text-pink-400 text-4xl" />,
      title: "Group Classes",
      desc: "Fun, high-energy classes like Zumba, HIIT, and yoga to keep you motivated.",
    },
    {
      icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
      title: "Online Coaching",
      desc: "Train from anywhere with our virtual sessions and progress tracking.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-400">
            Our <span className="text-white">Services</span>
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Explore the range of fitness solutions we offer to help you achieve
            your dream physique and lifestyle.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-red-400 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
