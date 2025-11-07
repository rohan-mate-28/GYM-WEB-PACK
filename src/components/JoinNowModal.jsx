import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinNowModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    plan: selectedPlan || "Starter",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, mobile: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Telegram Bot Info
    const BOT_TOKEN = "8275897754:AAG7e4W-T2_FZF6AczY1MGUjlUJzNJL0kbs";
    const CHAT_ID = "6930237636";
    const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    // Message Format
    const text = `
📩 *New Gym Plan Enquiry!*
🏋️ Plan: ${formData.plan}
👤 Name: ${formData.name}
📞 Mobile: ${formData.mobile}
  `;

    try {
      await fetch(TELEGRAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      // Show popup
      setShowPopup(true);

      // Reset form
      setFormData({ name: "", mobile: "", plan: selectedPlan });

      // Auto-close popup
      setTimeout(() => {
        setShowPopup(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong! Try again.");
    }
  };


  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="bg-gray-900 text-white rounded-xl shadow-lg max-w-md w-full p-6 sm:p-8 relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                Join {selectedPlan} Plan 💪
              </h2>
              <p className="mb-6 text-gray-300 text-center">
                Fill your details to start your fitness journey!
              </p>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option>Starter</option>
                  <option>Pro</option>
                  <option>Elite</option>
                </select>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-transform"
                >
                  Join Now
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="bg-purple-600 text-white px-6 py-4 rounded-xl shadow-lg max-w-sm w-full text-center z-50"
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              Thank you! Welcome to our gym 💪
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
