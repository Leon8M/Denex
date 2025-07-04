import { motion } from 'framer-motion';

const PricingCard = ({ plan }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className={`relative w-full max-w-md p-4 mx-auto mb-8 lg:mb-0 lg:w-1/3 ${plan.popular ? 'z-10' : 'z-0'}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`relative flex flex-col items-center justify-between w-full h-full p-8 rounded-xl shadow-lg ${plan.popular ? 'bg-white border-4 border-[#007BFF]' : 'bg-gray-50 border border-gray-200'}`}>
        {plan.popular && (
          <div className="absolute -top-4 w-auto px-4 py-1 text-sm font-bold text-center text-white uppercase bg-[#007BFF] rounded-full shadow-md">
            Most Popular
          </div>
        )}

        <div className={`w-full text-center ${plan.popular ? 'mt-8' : 'mt-4'}`}>
          <h3 className="text-2xl font-extrabold text-gray-900">{plan.name}</h3>
          <h4 className="flex items-center justify-center py-4 text-5xl font-extrabold text-gray-900">
            {plan.price}
          </h4>
          <p className="text-gray-600">{plan.description}</p>
        </div>

        <div className="w-full mt-6">
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full mt-8 text-center">
          <a
            href="/contact"
            className={`block w-full px-6 py-3 text-lg font-bold text-center rounded-lg transition-all duration-300 transform
              ${plan.popular ? 'bg-[#007BFF] text-white hover:bg-[#0056B3] shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            {plan.cta}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;