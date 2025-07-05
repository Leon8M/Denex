import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaCogs } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
    }),
  };

  const iconPulse = {
    animate: {
      scale: [1, 1.08, 1],
      opacity: [1, 0.85, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div className="bg-[#111] text-[#EAEAEA] min-h-screen w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-6 lg:px-20 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl tracking-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Digital Craftsmanship Meets Affordability
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl max-w-xl text-[#BBBBBB]"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          We design and build stunning websites, apps, and software tailored to your goals — without breaking the bank.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <Link
            to="/pricing"
            className="bg-[#00F5A0] text-[#111] px-6 py-3 rounded-md font-semibold hover:brightness-110 transition"
          >
            View Pricing
          </Link>
          <Link
            to="/projects"
            className="border border-[#00F5A0] text-[#00F5A0] px-6 py-3 rounded-md font-semibold hover:bg-[#00F5A0] hover:text-[#111] transition"
          >
            What We’ve Done
          </Link>
        </motion.div>

        {/* Animated Icons */}
        <div className="flex gap-10 mt-16">
          {[FaCode, FaLaptopCode, FaCogs].map((Icon, i) => (
            <motion.div
              key={i}
              className="text-[#00F5A0] text-5xl"
              variants={iconPulse}
              animate="animate"
            >
              <Icon />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-20 border-t border-[#222]">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaCode />,
              title: 'Website Development',
              description: 'Responsive, beautifully designed websites that establish your online presence with confidence.',
            },
            {
              icon: <FaLaptopCode />,
              title: 'Web App Development',
              description: 'Interactive, performant, and scalable web applications built to solve your real-world problems.',
            },
            {
              icon: <FaCogs />,
              title: 'Custom Software',
              description: 'Tailor-made internal tools, systems, and platforms to enhance and automate your operations.',
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2b2b2b] hover:border-[#00F5A0]/50 hover:shadow-xl hover:-translate-y-2 transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <div className="text-[#00F5A0] text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
