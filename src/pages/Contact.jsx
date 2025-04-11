const Contact = () => {
    return (
      <div className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
        <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Get in Touch</h2>
          <h3 className="w-full max-w-2xl px-5 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
            Let's Build Something Great
          </h3>
  
          <div className="w-full max-w-4xl mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                <p className="mt-4 text-gray-600">Fill out the form or reach out directly:</p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">info@denexsoftware.co.ke</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+254 718135935</span>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
                <form className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;