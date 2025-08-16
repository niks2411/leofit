import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award, X } from 'lucide-react';
import { serverTimestamp } from 'firebase/firestore';
import { PackageContext } from '../App';

const Contact = () => {
  const { customSelections, setCustomSelections } = useContext(PackageContext);
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

  // const programs = [
  //   'Bronze Package',
  //   'Silver Package',
  //   'Gold Package',
  //   'Custom Package',
  //   'CPR Certification',
  //   'Cervical Health & Posture Sessions',
  //   'HIIT for Teams',
  //   'Stress Management Workshops',
  //   'Nutrition Planning',
  //   'Fitness Challenges',
  //   'Other Program'
  // ];

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
    
    try {
      // Prepare data to save to Firebase
      const contactData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        program: formData.program,
        timestamp: serverTimestamp(),
      };

      // Add package selections if they exist
      if (customSelections) {
        contactData.selectedPackage = customSelections.package.title;
        contactData.selectedAddOns = customSelections.addOns.map(addOn => ({
          title: addOn.title,
          description: addOn.description
        }));
      }

      await addDoc(collection(db, 'contacts'), contactData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving contact form: ", error);
      alert(`Submission failed: ${error.message}`);
    } finally {
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
        setCustomSelections(null); // Clear package selections after submission
      }, 3000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const removePackageSelection = () => {
    setCustomSelections(null);
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
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Send us a message
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </motion.div>

              {/* Selected Package Display */}
              {customSelections && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-gray-700 rounded-lg border border-purple-500 relative"
                >
                  <button
                    onClick={removePackageSelection}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-300" />
                  </button>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    Your Selected Package:
                  </h3>
                  <p className="text-purple-400 font-semibold">
                    {customSelections.package.title}
                  </p>
                  
                  {customSelections.addOns.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Add-On Services:
                      </h4>
                      <ul className="space-y-1">
                        {customSelections.addOns.map((addOn, index) => (
                          <li key={index} className="text-gray-300 text-sm">
                            • {addOn.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-3 pt-2 border-t border-gray-600">
                    <p className="text-sm text-gray-400">
                      We'll provide a custom quote based on your selections and requirements.
                    </p>
                  </div>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-400 bg-gray-700 px-2 rounded"
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
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-400 bg-gray-700 px-2 rounded"
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
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="company"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-400 bg-gray-700 px-2 rounded"
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
                        className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-400 bg-gray-700 px-2 rounded"
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

                 

                  {/* <div className="relative">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 bg-gray-700 border-gray-600 text-white focus:border-purple-500 focus:outline-none focus:scale-105 peer resize-none"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-purple-600 peer-focus:scale-110 text-gray-400 bg-gray-700 px-2 rounded"
                      style={{
                        top: formData.message ? '-0.5rem' : '0.75rem',
                        fontSize: formData.message ? '0.875rem' : '1rem',
                        color: formData.message ? '#8b5cf6' : undefined
                      }}
                    >
                      Select Your needs from Home page
                    </label>
                  </div> */}

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

            {/* Contact Info & Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-8 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
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
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
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