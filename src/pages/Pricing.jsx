import PricingCard from '../components/PricingCard';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Website",
      price: "11,000 KSH",
      description: "Perfect for simple, single-page websites",
      features: [
        "1 Page Website",
        "Basic Design",
        "Mobile Responsive",
        "Contact Form",
        "1 Month Support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      id: 2,
      name: "Business Website",
      price: "25,000 KSH",
      description: "Ideal for small businesses needing multiple pages",
      features: [
        "Up to 5 Pages",
        "Custom Design",
        "Mobile Responsive",
        "Contact Form + Google Maps",
        "Basic SEO Setup",
        "3 Months Support"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      id: 3,
      name: "Fullstack App",
      price: "50,000 KSH",
      description: "Complete web application with backend functionality",
      features: [
        "Custom Pages",
        "User Authentication",
        "Database Integration",
        "Admin Dashboard",
        "Advanced SEO",
        "6 Months Support"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  const addOns = [
    {
      id: 1,
      name: "Website Management",
      description: "Monthly updates, backups and maintenance",
      price: "5,000 KSH/month"
    },
    {
      id: 2,
      name: "Business Email Hosting",
      description: "We create custom email addresses using your business domain",
      price: "2,500 KSH"
    },
    {
      id: 3,
      name: "Content Creation",
      description: "Professional copywriting and images",
      price: "8,000 KSH"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const addOnCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
  };


  return (
    <motion.div
      className="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <motion.h2
          className="my-5 text-lg font-semibold tracking-tight text-[#007BFF] uppercase"
          variants={itemVariants}
        >
          Our Pricing
        </motion.h2>
        <motion.h3
          className="w-full max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0"
          variants={itemVariants}
        >
          Affordable, Fast Software Solutions
        </motion.h3>

        <div className="flex flex-col w-full mt-16 lg:flex-row gap-8"> {/* Added gap-8 */}
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <motion.div
          className="w-full max-w-4xl mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h3
            className="mb-8 text-2xl font-bold text-center text-gray-800"
            variants={itemVariants}
          >
            Add-On Services
          </motion.h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {addOns.map(addOn => (
              <motion.div
                key={addOn.id}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={addOnCardVariants}
                whileHover="hover"
              >
                <h4 className="text-lg font-bold text-gray-900">{addOn.name}</h4>
                <p className="mt-2 text-gray-600">{addOn.description}</p>
                <p className="mt-4 font-medium text-[#007BFF]">{addOn.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-2xl mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-gray-600">Need something custom? Contact us to discuss your project requirements.</p>
          <a href="/contact" className="inline-block px-8 py-4 mt-6 text-lg font-bold text-white bg-[#007BFF] rounded-md hover:bg-[#0056B3] transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;