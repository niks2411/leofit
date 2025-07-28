import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    program: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    'CPR Certification',
    'Cervical Health & Posture Sessions',
    'HIIT for Teams',
    'Stress Management Workshops',
    'Nutrition Planning',
    'Fitness Challenges',
    'Custom Program'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'corporate@leofit.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      info: '123 Wellness Street, Health City, HC 12345',
      subtitle: 'Visit us anytime'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Get back to you within 24 hours'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified wellness professionals'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '500+ companies trust us'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        program: ''
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              Get In{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your workplace wellness? Let's start the conversation 
              and create a healthier, more productive work environment for your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send us a message
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 rounded"
                        style={{
                          top: formData.name ? '-0.5rem' : '0.75rem',
                          fontSize: formData.name ? '0.875rem' : '1rem',
                          color: formData.name ? '#8b5cf6' : undefined
                        }}
                      >
                        Full Name *
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 rounded"
                        style={{
                          top: formData.email ? '-0.5rem' : '0.75rem',
                          fontSize: formData.email ? '0.875rem' : '1rem',
                          color: formData.email ? '#8b5cf6' : undefined
                        }}
                      >
                        Email Address *
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="company"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 rounded"
                        style={{
                          top: formData.company ? '-0.5rem' : '0.75rem',
                          fontSize: formData.company ? '0.875rem' : '1rem',
                          color: formData.company ? '#8b5cf6' : undefined
                        }}
                      >
                        Company Name *
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 rounded"
                        style={{
                          top: formData.phone ? '-0.5rem' : '0.75rem',
                          fontSize: formData.phone ? '0.875rem' : '1rem',
                          color: formData.phone ? '#8b5cf6' : undefined
                        }}
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      id="program"
                      value={formData.program}
                      onChange={(e) => handleInputChange('program', e.target.value)}
                      className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:scale-105"
                      required
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer resize-none"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 rounded"
                      style={{
                        top: formData.message ? '-0.5rem' : '0.75rem',
                        fontSize: formData.message ? '0.875rem' : '1rem',
                        color: formData.message ? '#8b5cf6' : undefined
                      }}
                    >
                      Tell us about your needs *
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">
                          {contact.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                          {contact.info}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {contact.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <feature.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Visit Our Office
                </h3>
                <div className="h-64 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
                      <p className="text-gray-500 dark:text-gray-400">
                        Interactive Map Coming Soon
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                        123 Wellness Street, Health City, HC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 