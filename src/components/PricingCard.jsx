// src/components/PricingCard.jsx
const PricingCard = ({ plan }) => {
    return (
      <div className={`relative w-full max-w-md p-4 mx-auto mb-8 lg:mb-0 lg:w-1/3 ${plan.popular ? 'z-10' : 'z-0'}`}>
        <div className={`relative flex flex-col items-center justify-between w-full h-full p-8 rounded-lg shadow-md ${plan.popular ? 'bg-white border-2 border-indigo-500' : 'bg-gray-50'}`}>
          {plan.popular && (
            <div className="absolute top-0 w-full py-2 text-sm font-bold text-center text-white uppercase bg-indigo-500 rounded-t">
              Most Popular
            </div>
          )}
          
          <div className={`w-full text-center ${plan.popular ? 'mt-8' : 'mt-4'}`}>
            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
            <h4 className="flex items-center justify-center py-4 text-4xl font-bold text-gray-900">
              {plan.price}
            </h4>
            <p className="text-gray-600">{plan.description}</p>
          </div>
          
          <div className="w-full mt-6">
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full mt-8 text-center">
            <a 
              href="/contact" 
              className={`block w-full px-6 py-3 font-bold text-center rounded-md ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              {plan.cta}
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingCard;