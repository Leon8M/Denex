import PricingCard from '../components/PricingCard';

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
      name: "SEO Optimization",
      description: "Advanced search engine optimization",
      price: "10,000 KSH"
    },
    {
      id: 3,
      name: "Content Creation",
      description: "Professional copywriting and images",
      price: "8,000 KSH"
    }
  ];

  return (
    <div className="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Pricing</h2>
        <h3 className="w-full max-w-2xl px-5 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
          Affordable, Fast Software Solutions
        </h3>

        <div className="flex flex-col w-full mt-16 lg:flex-row">
          {pricingPlans.map(plan => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="w-full max-w-4xl mt-20">
          <h3 className="mb-8 text-2xl font-bold text-center text-gray-800">Add-On Services</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {addOns.map(addOn => (
              <div key={addOn.id} className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900">{addOn.name}</h4>
                <p className="mt-2 text-gray-600">{addOn.description}</p>
                <p className="mt-4 font-medium text-indigo-600">{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl mt-20 text-center">
          <p className="text-lg text-gray-600">Need something custom? Contact us to discuss your project requirements.</p>
          <a href="/contact" className="inline-block px-8 py-4 mt-6 text-lg font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;