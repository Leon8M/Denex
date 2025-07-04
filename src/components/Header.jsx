import { useState, useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoFull from '/denex.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // New state to track desktop view

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Effect to check screen size and update isDesktop state
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind's 'md' breakpoint is 768px
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount


  return (
    <motion.header
      className="relative z-50 w-full h-24 bg-white shadow-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between h-full max-w-6xl px-8 mx-auto xl:px-0">
        <Link to="/" className="relative flex items-center h-full font-black leading-none">
          <img src={logoFull} alt="Denex Software Logo" className="h-10 w-auto object-contain" />
        </Link>

        <motion.nav
          id="nav"
          className={`absolute top-0 left-0 z-50 flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200
          md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:relative md:flex
          ${mobileMenuOpen ? 'flex' : 'hidden'} md:!flex`}
          variants={menuVariants}
          // Conditional animate prop
          animate={mobileMenuOpen || isDesktop ? "visible" : "hidden"} // Animate to visible if menu is open OR if it's desktop
          exit="exit" // exit prop remains for when the component unmounts (e.g., navigating away, though unlikely for a header)
        >
          <Link
            to="/"
            className="ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-colors hover:text-[#007BFF]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="mr-0 font-semibold duration-100 md:mr-3 lg:mr-8 transition-colors hover:text-[#007BFF]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/pricing"
            className="mr-0 font-semibold duration-100 md:mr-3 lg:mr-8 transition-colors hover:text-[#007BFF]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="font-semibold duration-100 transition-colors hover:text-[#007BFF]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </motion.nav>

        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all duration-300 bg-[#007BFF] rounded-md shadow-md hover:bg-[#0056B3] hover:shadow-xl"
          >
            Get Started
          </Link>
        </motion.div>

        <button
          id="nav-mobile-btn"
          className={`relative z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10 ${mobileMenuOpen ? 'close' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
          <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;