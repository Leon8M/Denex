import PricingCard from '../components/PricingCard';
import { motion } from 'framer-motion';
import { Wrench, Mail, PenTool } from 'lucide-react'; // Icons for Add-Ons

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic Website",
      price: "KSH 11,000",
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
      price: "KSH 25,000",
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
      price: "KSH 50,000",
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
      price: "KSH 5,000/month",
      icon: <Wrench size={24} className="text-[#00F5A0]" />
    },
    {
      id: 2,
      name: "Business Email Hosting",
      description: "Create professional emails using your domain",
      price: "KSH 2,500",
      icon: <Mail size={24} className="text-[#00F5A0]" />
    },
    {
      id: 3,
      name: "Content Creation",
      description: "Professional copywriting and visuals",
      price: "KSH 8,000",
      icon: <PenTool size={24} className="text-[#00F5A0]" />
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

  return (
    <motion.div
      className="relative px-8 py-20 bg-[#111111] text-[#EAEAEA] border-t border-neutral-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-sm font-semibold uppercase tracking-wider text-[#00F5A0]"
          variants={itemVariants}
        >
          Pricing
        </motion.h2>
        <motion.h3
          className="mt-2 text-4xl font-black tracking-tight sm:text-6xl"
          variants={itemVariants}
        >
          Premium. Affordable. Transparent.
        </motion.h3>
        <motion.p
          className="mt-6 max-w-xl text-lg text-[#ccc]"
          variants={itemVariants}
        >
          Whether you're starting small or scaling fast, we have a package for you.
        </motion.p>

        <div className="flex flex-col w-full gap-10 mt-16 lg:flex-row">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <motion.div
          className="w-full max-w-5xl mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h4
            className="mb-8 text-2xl font-bold text-[#EAEAEA]"
            variants={itemVariants}
          >
            Add-On Services
          </motion.h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map(addOn => (
              <motion.div
                key={addOn.id}
                className="flex flex-col items-start p-6 bg-[#1a1a1a] rounded-lg border border-[#222] hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">{addOn.icon}</div>
                <h5 className="text-lg font-semibold mb-1 text-[#EAEAEA]">{addOn.name}</h5>
                <p className="text-[#bbb] text-sm">{addOn.description}</p>
                <p className="mt-4 font-bold text-[#00F5A0]">{addOn.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
        >
          <p className="text-md text-[#aaa]">Looking for something custom?</p>
          <a
            href="/contact"
            className="inline-block mt-4 px-8 py-4 bg-[#00F5A0] text-[#111] font-bold text-lg rounded-md hover:bg-[#00e58c] transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;
