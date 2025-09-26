import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", mobile: "", type: "Enquiry" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      // Allow only digits, max 10 characters
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, mobile: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Show popup
    setShowPopup(true);

    // Reset form
    setFormData({ name: "", mobile: "", type: "Enquiry" });

    // Auto-close popup after 2.5 seconds
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch 💪
        </motion.h2>
        <motion.p
          className="mb-10 sm:mb-12 text-base sm:text-lg md:text-xl text-gray-300 px-2 sm:px-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Have questions or want to join our gym? Fill out the form below!
        </motion.p>

        <motion.form
          className="grid gap-4 sm:gap-6 bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            placeholder="Mobile Number"
            onChange={handleChange}
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Enquiry</option>
            <option>Join Gym</option>
            <option>Personal Training</option>
            <option>Other</option>
          </select>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 sm:py-4 rounded-lg transition-transform"
          >
            Submit
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-8 text-gray-400 space-y-1 sm:space-y-2 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p>📞 +91 74851 9590</p>
          <p>📧 contact@gymfit.com</p>
          <p>📍 Pune, India</p>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-purple-600 text-white px-6 py-4 rounded-xl shadow-lg max-w-sm w-full text-center"
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              Thank you! We will contact you soon. 💪
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
