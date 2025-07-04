import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: "Denex Software",
        from_email: formData.email,
        to_email: 'info@denexsoftware.co.ke',
        message: formData.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

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
      className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex flex-col items-center h-full max-w-6xl mx-auto">
        <motion.h2
          className="my-5 text-lg font-semibold tracking-tight text-[#007BFF] uppercase"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.h3
          className="w-full max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0"
          variants={itemVariants}
        >
          Let's Build Something Great
        </motion.h3>

        <div className="w-full max-w-4xl mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              className="p-8 bg-gray-50 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
              <p className="mt-4 text-gray-600">Fill out the form or reach out directly:</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#007BFF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">info@denexsoftware.co.ke</span>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#007BFF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+254 100321690</span>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 text-[#007BFF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Nairobi, Kenya</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-lg shadow-md"
              variants={itemVariants}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>

              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 mb-6 text-green-800 bg-green-100 rounded-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 mb-6 text-red-800 bg-red-100 rounded-md"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  Failed to send message. Please try again or contact us directly.
                </motion.div>
              )}

              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] transition-all duration-200"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] transition-all duration-200"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-[#007BFF] focus:border-[#007BFF] transition-all duration-200"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 text-lg font-bold text-white bg-[#007BFF] rounded-md hover:bg-[#0056B3] transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'shadow-md hover:shadow-lg'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;