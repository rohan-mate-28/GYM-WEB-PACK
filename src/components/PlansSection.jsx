import React, { useState } from "react";
import { motion } from "framer-motion";
import JoinNowModal from "./JoinNowModal"; // import modal

const plans = [
  {
    title: "Starter",
    price: "₹999 / month",
    features: ["Gym Access", "Group Classes (2/week)", "Locker Facility"],
    popular: false,
  },
  {
    title: "Pro",
    price: "₹1,999 / month",
    features: ["Unlimited Gym Access", "Unlimited Group Classes", "5 PT Sessions", "Diet Consultation"],
    popular: true,
  },
  {
    title: "Elite",
    price: "₹3,499 / month",
    features: ["24/7 Gym Access", "Personal Trainer (Unlimited)", "Custom Diet & Workout Plan", "Sauna & Spa", "Priority Support"],
    popular: false,
  },
];

export default function PlansSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Starter");

  const handleGetStarted = (planTitle) => {
    setSelectedPlan(planTitle);
    setModalOpen(true);
  };

  return (
    <section id="plans" className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          Choose Your Plan
        </motion.h2>
        <motion.p className="text-gray-300 max-w-2xl mx-auto mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Find the perfect membership that fits your fitness goals.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-2xl p-8 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-500 transition-all ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
            >
              {plan.popular && <span className="absolute top-3 right-3 bg-blue-600 text-xs px-3 py-1 rounded-full">Most Popular</span>}
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">{plan.price}</p>
              <ul className="text-gray-200 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted(plan.title)}
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Now Modal */}
      <JoinNowModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedPlan={selectedPlan} />
    </section>
  );
}
