import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png"; // Updated logo path

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-[#111] border-b border-[#222]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Denex Software" className="w-10 h-10" />
          <span className="text-[#EAEAEA] font-bold text-xl">Denex</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#EAEAEA] font-medium text-sm">
          <Link to="/" className="hover:text-[#00F5A0] transition">Home</Link>
          <Link to="/projects" className="hover:text-[#00F5A0] transition">Projects</Link>
          <Link to="/pricing" className="hover:text-[#00F5A0] transition">Pricing</Link>
          <Link to="/contact" className="hover:text-[#00F5A0] transition">Contact</Link>
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="bg-[#00F5A0] text-[#111] px-5 py-2 rounded-md font-semibold text-sm hover:brightness-110 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-[#EAEAEA]"></span>
            <span className="block w-6 h-0.5 bg-[#EAEAEA]"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden flex flex-col px-6 pb-6 bg-[#111] text-[#EAEAEA] space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
