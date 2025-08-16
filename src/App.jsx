import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Users, TrendingUp, Shield, Zap, Award, X, Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Admin from './pages/admin';

// Create a context to share package selection across components
export const PackageContext = React.createContext();

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [customSelections, setCustomSelections] = useState(null);
  
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('hasSeenPopup', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: 'Improved Health',
      description: 'Boost employee wellness and reduce healthcare costs'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Strengthen relationships through group fitness activities'
    },
    {
      icon: TrendingUp,
      title: 'Productivity',
      description: 'Increase focus and energy levels in the workplace'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'CPR and health certifications for workplace safety'
    },
    {
      icon: Zap,
      title: 'Energy Boost',
      description: 'HIIT sessions to revitalize your team'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Monthly challenges and achievement celebrations'
    }
  ];

  const stats = [
    { number: '500+', label: 'Companies Served' },
    { number: '50K+', label: 'Employees Trained' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];
 
  const packages = [
    {
      id: 1,
      title: 'Bronze',
      description: 'Basic wellness package for companies starting their wellness journey',
      features: [
        'Instant posture correction report',
        '15 min pain relief session by expert physiotherapist',
        'Basic nutrition tips and generic exercise plans',
        'Access to online yoga and exercise videos',
        'Parent wellness support from day 1'
      ],
      icon: Award,
      mostPopular: false
    },
    {
      id: 2,
      title: 'Silver',
      description: 'Enhanced wellness package with more personalized services',
      features: [
        'All Bronze services',
        'Customized diet chart and exercise plans',
        'Mental health screening and stress management webinars',
        'Unlimited online consultation support for employees and parents'
      ],
      icon: Award,
      mostPopular: true
    },
    {
      id: 3,
      title: 'Gold',
      description: 'Premium wellness package with priority access and advanced features',
      features: [
        'All Silver services',
        'Priority support',
        'Priority access to expert-led workshops and webinars',
        'Advanced reporting/dashboard for HR teams'
      ],
      icon: Award,
      mostPopular: false
    }
  ];

  const addOnServices = [
    {
      id: 1,
      title: 'Extended physiotherapy sessions',
      description: 'Additional physio for chronic pain management',
      icon: Heart
    },
    {
      id: 2,
      title: 'Mental health therapy',
      description: '1-on-1 therapy with licensed therapist',
      icon: Users
    },
    {
      id: 3,
      title: 'Customized wellness workshops',
      description: 'Virtual/on-premise workshops (nutrition, fitness, work-life)',
      icon: TrendingUp
    },
    {
      id: 4,
      title: 'Women\'s health diagnostics/retreats',
      description: 'Women\'s health lab checks, retreats & personalized care',
      icon: Shield
    },
    {
      id: 5,
      title: 'Advanced blood tests & diagnostics',
      description: 'Full diagnostic health check-up',
      icon: Zap
    }
  ];

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

  const packageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAddOn = (addOnId) => {
    if (selectedAddOns.includes(addOnId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addOnId));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    }
  };

  const resetCustomization = () => {
    setSelectedAddOns([]);
  };

  const handleStartCustomization = (pkg) => {
    setSelectedPackage(pkg);
    setShowCustomizeModal(true);
    resetCustomization();
  };

  const saveCustomSelections = () => {
    const selectedAddOnDetails = selectedAddOns.map(id => {
      const addOn = addOnServices.find(a => a.id === id);
      return addOn;
    });

    setCustomSelections({
      package: selectedPackage,
      addOns: selectedAddOnDetails
    });

    setShowCustomizeModal(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/location', label: 'Location' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <PackageContext.Provider value={{ customSelections, setCustomSelections }}>
      <Router>
        <div className="min-h-screen bg-gray-900 flex flex-col">
          <ScrollToTop />
          <Navbar navItems={navItems} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  {/* Hero Section */}
                  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
                    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                      <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                      >
                        Empower Your Workforce with{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Corporate Wellness
                        </span>
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                      >
                        Transform your workplace culture with our wellness packages designed for modern teams
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                      >
                        <motion.button
                          onClick={scrollToPackages}
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl transition-all duration-500"
                        >
                          <span className="relative z-10 flex items-center">
                            View Packages
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </motion.button>
                        
                        <Link to="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-lg font-semibold text-blue-500 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                          >
                            Get Started
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </section>

                  {/* Packages Section */}
                  <section id="packages-section" className="py-20 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                          Corporate Wellness <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Packages</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                          Choose the perfect wellness package for your organization's needs
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                          <motion.div 
                            key={pkg.id}
                            initial="hidden"
                            animate="visible"
                            variants={packageVariants}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                          >
                            {pkg.mostPopular && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
                                MOST POPULAR
                              </div>
                            )}
                            <div className={`h-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${pkg.mostPopular ? 'ring-2 ring-purple-500' : ''}`}>
                              <div className="p-8 h-full flex flex-col">
                                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                                  <pkg.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">
                                  {pkg.title}
                                </h3>
                                <p className="text-gray-300 mb-6">
                                  {pkg.description}
                                </p>
                                
                                <div className="mb-8 flex-grow">
                                  <h4 className="text-lg font-semibold text-white mb-3">Includes:</h4>
                                  <ul className="space-y-2">
                                    {pkg.features.map((feature, i) => (
                                      <li key={i} className="flex items-start">
                                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-300">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <button
                                  onClick={() => handleStartCustomization(pkg)}
                                  className={`mt-auto w-full py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center ${pkg.mostPopular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/25' : 'bg-gray-700 hover:bg-gray-600'}`}
                                >
                                  Customize Package
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Benefits Section */}
                  <section className="py-20 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                      >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                          Benefits of{' '}
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Corporate Wellness
                          </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                          Discover how our wellness packages can transform your workplace culture and boost employee satisfaction
                        </p>
                      </motion.div>

                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      >
                        {benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group p-8 rounded-2xl bg-gray-800 hover:shadow-xl transition-all duration-500"
                          >
                            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                              <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-300">
                              {benefit.description}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </section>

                  {/* Stats Section */}
                  <section className="py-16 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6"
                          >
                            <p className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</p>
                            <p className="text-lg text-gray-300">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>
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
                          Ready to Transform Your Workplace?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                          Join hundreds of companies that have already improved their workplace culture with our wellness packages
                        </p>
                        <Link to="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-lg font-semibold text-purple-600 bg-white rounded-full hover:shadow-2xl transition-all duration-500"
                          >
                            Start Your Journey Today
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>
                  </section>
                </>
              } />
              
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/location" element={<Location />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <Footer />

          {/* Package Customization Modal */}
          <AnimatePresence>
            {showCustomizeModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setShowCustomizeModal(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  className="relative bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setShowCustomizeModal(false)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>

                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-6">
                      Customize Your Wellness Package
                    </h2>
                    
                    {!selectedPackage && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Select a Base Package:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {packages.map(pkg => (
                            <motion.div
                              key={pkg.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="bg-gray-700 p-4 rounded-lg cursor-pointer border-2 border-gray-600 hover:border-purple-500 transition-colors"
                              onClick={() => handleStartCustomization(pkg)}
                            >
                              <h4 className="text-lg font-bold text-white">{pkg.title}</h4>
                              <p className="text-gray-300 text-sm mt-2">{pkg.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedPackage && (
                      <>
                        <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-xl font-bold text-white">Selected Package:</h3>
                              <p className="text-purple-400 font-semibold">
                                {selectedPackage.title}
                              </p>
                            </div>
                            <button 
                              onClick={() => {
                                setSelectedPackage(null);
                                resetCustomization();
                              }}
                              className="text-sm text-gray-400 hover:text-white"
                            >
                              Change Package
                            </button>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-xl font-semibold text-white mb-4">Add-On Services:</h3>
                          <div className="space-y-4">
                            {addOnServices.map(addOn => (
                              <div 
                                key={addOn.id}
                                className={`p-4 rounded-lg border-2 transition-colors ${selectedAddOns.includes(addOn.id) ? 'border-purple-500 bg-gray-700' : 'border-gray-700 hover:border-gray-600'}`}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex items-start space-x-3">
                                    <button
                                      onClick={() => toggleAddOn(addOn.id)}
                                      className={`w-5 h-5 rounded flex items-center justify-center mt-1 flex-shrink-0 ${selectedAddOns.includes(addOn.id) ? 'bg-purple-600' : 'border border-gray-500'}`}
                                    >
                                      {selectedAddOns.includes(addOn.id) && <Check className="w-3 h-3 text-white" />}
                                    </button>
                                    <div>
                                      <h4 className="font-semibold text-white">{addOn.title}</h4>
                                      <p className="text-gray-300 text-sm">{addOn.description}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link
                            to="/contact"
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex-1 text-center"
                            onClick={() => {
                              saveCustomSelections();
                            }}
                          >
                            Get Quote
                          </Link>
                          <button 
                            onClick={() => setShowCustomizeModal(false)}
                            className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 flex-1"
                          >
                            Continue Browsing
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trainer Popup */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="fixed bottom-6 right-6 z-50"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs md:max-w-sm border border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                        R
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Rahul, Your Trainer
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Hi there! I'm Rahul, your corporate wellness trainer. Let me help you create a healthier workplace!!!
                      </p>
                      <div className="mt-3">
                        <button
                          onClick={() => setShowPopup(false)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none"
                        >
                          Got it!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </PackageContext.Provider>
  );
}

export default App;