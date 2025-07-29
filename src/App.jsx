import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion as motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart, Users, TrendingUp, Shield, Zap, Award, X, Calendar, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  
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

  const programs = [
    {
      id: 1,
      title: 'CPR Certification',
      description: 'Life-saving skills for your entire team. Comprehensive training in cardiopulmonary resuscitation techniques.',
      icon: Heart,
      duration: '4 hours',
      participants: 'Up to 20',
      price: '$75 per person',
    },
    {
      id: 2,
      title: 'Cervical Health & Posture Sessions',
      description: 'Essential health awareness for women employees. Focus on posture correction and cervical health.',
      icon: Shield,
      duration: '2 hours',
      participants: 'Up to 30',
      price: '$45 per person',
    },
    {
      id: 3,
      title: 'HIIT for Teams',
      description: 'High-intensity workouts to boost team energy. Energizing group fitness sessions.',
      icon: Zap,
      duration: '45 minutes',
      participants: 'Up to 15',
      price: '$35 per person',
    },
    {
      id: 4,
      title: 'Stress Management Workshops',
      description: 'Mindfulness and wellness techniques. Learn effective stress management strategies.',
      icon: Users,
      duration: '1.5 hours',
      participants: 'Up to 25',
      price: '$55 per person',
    },
    {
      id: 5,
      title: 'Nutrition Planning',
      description: 'Corporate meal planning and healthy habits. Expert nutrition guidance for workplace wellness.',
      icon: Calendar,
      duration: '3 hours',
      participants: 'Up to 40',
      price: '$65 per person',
    },
    {
      id: 6,
      title: 'Fitness Challenges',
      description: 'Monthly team challenges and competitions. Engaging fitness competitions for team building.',
      icon: Award,
      duration: 'Ongoing',
      participants: 'Unlimited',
      price: '$25 per person/month',
    },
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

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
                  {/* Hero Content */}
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
                      Transform your workplace culture with expert-led wellness programs designed for modern teams
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                      <motion.button
                        onClick={scrollToPrograms}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl transition-all duration-500"
                      >
                        <span className="relative z-10 flex items-center">
                          Explore Programs
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

                {/* Programs Section */}
                <section id="programs-section" className="py-20 bg-gray-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Corporate Wellness <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Programs</span>
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive wellness solutions tailored for your organization's unique needs. Choose from our range of expert-led programs designed to transform your workplace culture.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {programs.map((program) => (
                        <div key={program.id} className="group relative">
                          <div className="relative h-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative p-8 h-full flex flex-col">
                              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                <program.icon className="w-8 h-8 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                                {program.title}
                              </h3>
                              <p className="text-gray-300 mb-6 flex-grow">
                                {program.description}
                              </p>
                              <div className="space-y-3 mb-6">
                                <div className="flex items-center text-gray-400">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span className="text-sm">{program.duration}</span>
                                </div>
                                <div className="flex items-center text-gray-400">
                                  <Users className="w-4 h-4 mr-2" />
                                  <span className="text-sm">{program.participants}</span>
                                </div>
                                <div className="text-lg font-semibold text-purple-400">
                                  {program.price}
                                </div>
                              </div>
                              <a href="/contact" className="w-full block">
                                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-500 flex items-center justify-center group">
                                  Get Started
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
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
                          Corporate Fitness
                        </span>
                      </h2>
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Discover how our wellness programs can transform your workplace culture and boost employee satisfaction
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
                        Join hundreds of companies that have already improved their workplace culture with Leofitt Global
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
            
            {/* Other page routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

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
  );
}

export default App;