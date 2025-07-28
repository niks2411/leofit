import React, { useState, useEffect } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
      text: 'LeoFit transformed our workplace wellness. Employee satisfaction increased by 85% and we\'ve seen a significant reduction in sick days. The CPR certification program potentially saved a life in our office - incredible value!',
      author: 'Sarah Johnson',
      role: 'HR Director',
      rating: 5,
      industry: 'Technology'
    },
    {
      id: 2,
      company: 'Global Dynamics',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop',
      text: 'The HIIT sessions boosted our team energy and morale. Productivity and team collaboration are at all-time highs. Our employees look forward to these sessions every week!',
      author: 'Michael Chen',
      role: 'Operations Manager',
      rating: 5,
      industry: 'Consulting'
    },
    {
      id: 3,
      company: 'Innovation Labs',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop',
      text: 'The stress management workshops have been a game-changer for our team. We\'ve implemented the mindfulness techniques daily, and the positive impact on our work environment is remarkable.',
      author: 'Emma Rodriguez',
      role: 'Team Lead',
      rating: 5,
      industry: 'Research & Development'
    },
    {
      id: 4,
      company: 'Future Systems',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
      text: 'LeoFit\'s nutrition planning program educated our entire team about healthy eating habits. We\'ve seen improved energy levels and better focus throughout the workday.',
      author: 'David Kim',
      role: 'CEO',
      rating: 5,
      industry: 'Healthcare'
    },
    {
      id: 5,
      company: 'Creative Studios',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop',
      text: 'The fitness challenges keep our creative team motivated and engaged. It\'s amazing how these programs have strengthened our team bonds while improving our health.',
      author: 'Lisa Thompson',
      role: 'Creative Director',
      rating: 5,
      industry: 'Design'
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies Served' },
    { number: '50K+', label: 'Employees Trained' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' }
  ];


 const Contact = () => {
   console.log(typeof motion, typeof AnimatePresence); //Temporaryyyyyy
 
   
 }; 
  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by industry leaders for exceptional wellness programs. 
              See how we've transformed workplaces across different industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Company Info */}
                      <div className="text-center lg:text-left">
                        <div className="relative mb-6">
                          <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 p-1">
                            <img
                              src={testimonials[currentTestimonial].logo}
                              alt={testimonials[currentTestimonial].company}
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2">
                            <Quote className="w-6 h-6 text-purple-600" />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {testimonials[currentTestimonial].company}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                          {testimonials[currentTestimonial].industry}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="lg:col-span-2">
                        <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                          "{testimonials[currentTestimonial].text}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {testimonials[currentTestimonial].author}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                              {testimonials[currentTestimonial].role}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              Client since 2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    currentTestimonial === index
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Trusted by Leading{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Companies
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-6 rounded-xl text-center hover:shadow-xl transition-all duration-500 bg-gray-50 dark:bg-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 p-1">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.company}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.industry}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your workplace culture and join hundreds of companies that have already 
              improved their employee wellness with LeoFit Corporate.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-full hover:shadow-2xl transition-all duration-500"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 