import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "plans", label: "Plans" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const handleActive = () => {
      const triggerPoint = window.scrollY + window.innerHeight / 3;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (triggerPoint >= top && triggerPoint < bottom) {
          setActive(link.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleActive);
    handleActive();
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-gradient-to-r from-black/70 via-gray-900/60 to-black/70 shadow-xl"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          onClick={() => handleNavClick("home")}
        >
          <motion.div
            className="rounded-full p-2 bg-gradient-to-tr from-red-500 to-pink-500 text-white shadow-md"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <FaDumbbell className="w-5 h-5" />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-wide">FitNova</span>
            <small className="text-gray-300 text-[10px] -mt-1">Modern Gym</small>
          </div>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
              className={`relative text-sm uppercase tracking-wide transition-all px-1 py-1 focus:outline-none focus:ring-2 focus:ring-red-400 rounded ${
                active === link.id
                  ? "text-red-400 font-semibold"
                  : "text-white hover:text-red-300"
              }`}
              whileHover={{ scale: 1.1 }}
              layout
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-red-400 to-pink-400 rounded"
                />
              )}
            </motion.a>
          ))}

          {/* Join Now button */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
            className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-emerald-400 to-lime-400 text-black shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #34d399" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Join Now
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 backdrop-blur-md w-full text-center py-8"
          >
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`text-xl font-medium uppercase transition ${
                    active === link.id ? "text-red-400" : "text-gray-200"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                className="mx-auto mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                  className="inline-block px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-emerald-400 to-lime-400 text-black shadow-lg hover:shadow-[0_0_12px_#34d399]"
                >
                  Join Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
