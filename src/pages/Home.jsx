const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-20 xl:pt-40 xl:pb-24">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-5xl xl:mb-8">
              Affordable, Fast Software Solutions
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              We build websites and apps quickly and affordably without compromising on quality.
            </p>
            <div className="flex space-x-4">
              <a href="/pricing" className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">
                View Pricing
              </a>
              <a href="/projects" className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">
                What we have done
              </a>
            </div>
          </div>
          
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img src='/web.jpg'
                className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12" 
                alt="Denex Software" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-8 py-16 bg-white border-t border-gray-200 md:py-24 lg:py-32">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Website Development */}
            <div className="p-6 transition-all duration-300 bg-gray-50 rounded-lg hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Website Development</h3>
              <p className="text-gray-600">
                Professional portfolio and company websites that showcase your brand with responsive design and modern aesthetics.
              </p>
            </div>

            {/* Web App Development */}
            <div className="p-6 transition-all duration-300 bg-gray-50 rounded-lg hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Web App Development</h3>
              <p className="text-gray-600">
                Custom web applications with interactive features, user authentication, and seamless functionality tailored to your needs.
              </p>
            </div>

            {/* Software Development */}
            <div className="p-6 transition-all duration-300 bg-gray-50 rounded-lg hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Software Development</h3>
              <p className="text-gray-600">
                Business solutions like customer management systems, inventory tracking, and custom enterprise software to streamline your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;