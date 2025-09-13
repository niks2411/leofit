import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// Import your images
import leg from '../images/leg.avif';
import treadmil from '../images/treadmil.jpg';
import leofitt from '../images/leofitt-360-bk-chowk-faridabad-fitness-centres-tbeccx5k6q.jpg';
import mainpic from '../images/mainpic.jpg';

const Location = () => {
  const [current, setCurrent] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const images = [mainpic, leofitt, treadmil, leg];

  // Memoize the next slide function
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Memoize the previous slide function
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    let interval;
    if (autoScroll) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, nextSlide]);

  const goTo = (idx) => {
    setCurrent(idx);
    // When manually navigating, pause auto-scroll briefly
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000); // Resume after 10 seconds
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-900">
      {/* Hero Carousel Section */}
      <section className="relative py-16 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[500px] w-full">
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={image}
                  alt={`Leofitt Location ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
              </motion.div>
            ))}
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10 transition-all duration-300"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10 transition-all duration-300"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Experience Leofitt Global</h1>
                <p className="text-xl text-gray-300 mb-6">
                  Our state-of-the-art facility designed for your corporate wellness needs
                </p>
              </motion.div>
            </div>
            
            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-gradient-to-r from-red-600 to-red-500 w-8' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you with all your corporate wellness needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Phone</h3>
              <p className="text-2xl text-center text-white mb-2">+91 91662 45953</p>
              <p className="text-gray-400 text-center">Mon-Fri 9AM-6PM</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Email</h3>
              <p className="text-xl text-center text-white mb-2">info@leofittglobal.com</p>
              <p className="text-gray-400 text-center">We reply within 24 hours</p>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Office</h3>
              <p className="text-lg text-center text-white mb-2">
                5N/44A, Bk Chowk, Block N, NIT 5, Near Btw, BK Chowk-121001
              </p>
              <p className="text-gray-400 text-center">Visit us anytime</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Location</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find us easily with the map below
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: '500px' }}
          >
            <iframe
              title="Leofitt Global Location"
              src="https://www.google.com/maps?q=5N/44A,+Bk+Chowk,+Block+N,+NIT+5,+Near+Btw,+BK+Chowk-121001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our corporate partners say about our wellness programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                company: 'TechCorp Solutions',
                logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
                text: "LeoFit transformed our workplace wellness. Employee satisfaction increased by 85% and we've seen a significant reduction in sick days.",
                author: 'Sarah Johnson',
                role: 'HR Director',
                rating: 5,
                industry: 'Technology'
              },
              {
                id: 2,
                company: 'Global Dynamics',
                logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop',
                text: 'The HIIT sessions boosted our team energy and morale. Productivity and team collaboration are at all-time highs.',
                author: 'Michael Chen',
                role: 'Operations Manager',
                rating: 5,
                industry: 'Consulting'
              },
              {
                id: 3,
                company: 'Innovation Labs',
                logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop',
                text: 'The stress management workshops have been a game-changer for our team. The positive impact on our work environment is remarkable.',
                author: 'Emma Rodriguez',
                role: 'Team Lead',
                rating: 5,
                industry: 'Research & Development'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-red-600"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.company}</h3>
                    <p className="text-purple-400">{testimonial.industry}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-300 italic mb-6 flex-grow">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="mt-auto">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;