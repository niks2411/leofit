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
      info: '+91 91662 45953',
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
      info: '5N/44A, Bk Chowk, Block N, NIT 5, Near Btw, BK Chowk-121001',
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
    
    // Log form data to console in JSON format
    console.log('Form Submission:', JSON.stringify(formData, null, 2));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
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
    <div className="min-h-screen pt-24 bg-gray-900">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your workplace wellness? Let's start the conversation 
              and create a healthier, more productive work environment for your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-700/50 p-8 rounded-2xl shadow-lg"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Send us a message
                </h2>
                <p className="text-gray-300">
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
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-gray-700 border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 transition-all duration-300 text-gray-400 bg-gray-700 px-2 rounded"
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
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-gray-700 border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 transition-all duration-300 text-gray-400 bg-gray-700 px-2 rounded"
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
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-gray-700 border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="company"
                        className="absolute left-4 transition-all duration-300 text-gray-400 bg-gray-700 px-2 rounded"
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-gray-700 border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 transition-all duration-300 text-gray-400 bg-gray-700 px-2 rounded"
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
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-gray-700 border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      required
                    >
                      <option value="">Select a program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                    <label
                      htmlFor="program"
                      className="absolute left-4 -top-2 transition-all duration-300 text-sm text-purple-600 bg-gray-700 px-2 rounded"
                    >
                      Program Interest *
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-gray-700 border-2 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 transition-all duration-300 text-gray-400 bg-gray-700 px-2 rounded"
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

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="bg-gray-700/50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-600/50 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-white">
                          {contact.title}
                        </h4>
                        <p className="text-gray-300 mb-1">
                          {contact.info}
                        </p>
                        <p className="text-sm text-gray-400">
                          {contact.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div variants={itemVariants} className="bg-gray-700/50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-600/50 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg">
                        <feature.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
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