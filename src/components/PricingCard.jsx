import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PricingCard = ({ plan }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  const iconPulse = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.9, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`relative w-full max-w-md mx-auto lg:mx-0 ${plan.popular ? 'z-10' : 'z-0'}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`relative flex flex-col items-center justify-between w-full h-full p-8 rounded-xl transition-all duration-300 border
          ${plan.popular
            ? 'bg-[#1a1a1a] border-[#00F5A0]'
            : 'bg-[#111111] border-[#2a2a2a]'}`}
      >
        {plan.popular && (
          <motion.div
            className="absolute -top-4 px-4 py-1 text-sm font-bold uppercase bg-[#00F5A0] text-[#111] rounded-full shadow"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Most Popular
          </motion.div>
        )}

        <div className="w-full text-center">
          <h3 className="text-2xl font-bold text-[#EAEAEA]">{plan.name}</h3>
          <h4 className="py-4 text-4xl font-extrabold text-[#00F5A0]">{plan.price}</h4>
          <p className="text-white text-base">{plan.description}</p>
        </div>

        <div className="w-full mt-6">
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div variants={iconPulse} animate="animate">
                  <CheckCircle className="text-[#00F5A0]" size={20} />
                </motion.div>
                <span className="text-white text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="w-full mt-10 text-center">
          <motion.a
            href="/contact"
            className={`block w-full px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300
              ${plan.popular
                ? 'bg-[#00F5A0] text-[#111] hover:bg-[#00e58c]'
                : 'bg-[#222] text-[#EAEAEA] hover:bg-[#333]'}`}
            whileTap={{ scale: 0.97 }}
          >
            {plan.cta}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
