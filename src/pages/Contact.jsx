import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    .then(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      setSubmitStatus('error');
    })
    .finally(() => setIsSubmitting(false));
  };

  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const successVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="relative w-full px-6 py-20 md:py-32 bg-[#111111] text-[#EAEAEA]"
      initial="hidden"
      animate="visible"
    >
      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/254718135935?text=Hello%20Denex%2C%20I%27m%20interested%20in%20building%20a%20website%20or%20app."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00F5A0] text-black font-bold px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        WhatsApp Us 💬
      </a>

      <AnimatePresence>
        {submitStatus === 'success' ? (
          <motion.div
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            variants={successVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="success-screen"
          >
            <CheckCircle size={72} className="text-[#00F5A0] mb-4" />
            <h2 className="text-3xl font-bold text-white">Message Sent!</h2>
            <p className="mt-2 text-gray-400">We'll get back to you shortly. Thank you!</p>
          </motion.div>
        ) : (
          <>
            <motion.h2 className="text-[#00F5A0] uppercase text-lg tracking-widest font-semibold text-center mb-3">
              Contact
            </motion.h2>
            <motion.h3 className="text-center text-4xl md:text-6xl font-extrabold mb-12 text-[#EAEAEA]">
              Let’s Build Something Great
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT: CONTACT INFO */}
              <motion.div className="bg-[#1a1a1a] rounded-xl p-8 shadow-xl space-y-6">
                <h4 className="text-2xl font-bold text-[#EAEAEA]">Talk to Us</h4>
                <p className="text-gray-400">Reach out via email or phone, or use the form to send us a direct message.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#00F5A0]" />
                    <span>info@denexsoftware.co.ke</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-[#00F5A0]" />
                    <div>
                      <div>+254 100 321 690</div>
                      <div>+254 718 135 935</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#00F5A0]" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: CONTACT FORM */}
              <motion.div className="bg-[#1a1a1a] rounded-xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold mb-6 text-[#EAEAEA]">Send a Message</h4>

                {submitStatus === 'error' && (
                  <motion.div className="p-4 mb-6 text-red-400 bg-red-900/20 rounded-md">
                    Failed to send. Please try again or contact us directly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00F5A0] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00F5A0] text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00F5A0] text-white"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 text-lg font-bold text-black bg-[#00F5A0] rounded-md hover:bg-opacity-90 transition-all duration-300 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
