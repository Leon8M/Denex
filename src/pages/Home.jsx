import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Stagger animations for children
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative items-center justify-center w-full overflow-hidden lg:pt-20 lg:pb-20 xl:pt-24 xl:pb-24 bg-gradient-to-br from-white to-[#E0F2FE]" // Reduced top padding slightly
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0"> {/* Removed -mt-32 here */}
          <motion.div
            className="z-30 flex flex-col items-center w-full max-w-xl pt-32 text-center lg:items-start lg:w-1/2 lg:pt-0 xl:pt-0 lg:text-left" // Adjusted pt for mobile, removed for lg+
            variants={textVariants}
          >
            <motion.h1
              className="relative mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl xl:mb-8"
              variants={textVariants}
            >
              Affordable, Fast Software Solutions
            </motion.h1>
            <motion.p
              className="pr-0 mb-8 text-lg text-gray-700 sm:text-xl xl:text-2xl lg:pr-20"
              variants={textVariants}
            >
              We build websites and apps quickly and affordably without compromising on quality.
            </motion.p>
            <motion.div className="flex space-x-4 mt-4" variants={textVariants}>
              <motion.a
                href="/pricing"
                className="relative self-start inline-block w-auto px-8 py-4 mx-auto text-lg font-bold text-white bg-[#007BFF] rounded-md shadow-lg fold-bold lg:mx-0 hover:bg-[#0056B3] transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Pricing
              </motion.a>
              <motion.a
                href="/projects"
                className="relative self-start inline-block w-auto px-8 py-4 mx-auto text-lg font-bold text-[#007BFF] bg-white border-2 border-[#007BFF] rounded-md shadow-lg fold-bold lg:mx-0 hover:bg-[#E0F2FE] transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                What we have done
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 lg:mt-0 xl:mt-0" // Removed ms:pl-10, adjusted mt
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Reverted some sizing here, relying on lg:w-1/2 of parent and image w-full */}
            <div className="container relative w-full lg:max-w-none"> {/* Removed left-0, xl:max-w-6xl, lg:w-screen and custom widths */}
              <img
                src='/web.jpg'
                className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-0 lg:mb-0 lg:h-full lg:ml-0 object-contain" // Adjusted margins, removed negative ml for lg, added object-contain
                alt="Denex Software showcasing website and app development"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="w-full px-8 py-16 bg-white border-t border-gray-200 md:py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto">
          <motion.h2
            className="mb-12 text-3xl font-bold text-center text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Website Development */}
            <motion.div
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-[#007BFF] rounded-full shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Website Development</h3>
              <p className="text-gray-600">
                Professional portfolio and company websites that showcase your brand with responsive design and modern aesthetics.
              </p>
            </motion.div>

            {/* Web App Development */}
            <motion.div
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-[#007BFF] rounded-full shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Web App Development</h3>
              <p className="text-gray-600">
                Custom web applications with interactive features, user authentication, and seamless functionality tailored to your needs.
              </p>
            </motion.div>

            {/* Software Development */}
            <motion.div
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-[#007BFF] rounded-full shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Software Development</h3>
              <p className="text-gray-600">
                Business solutions like customer management systems, inventory tracking, and custom enterprise software to streamline your operations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;