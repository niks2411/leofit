import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion as motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Heart, Users, TrendingUp, Shield, Zap, Award, X, Calendar, Clock } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Admin from './pages/admin';

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
  const [selectedProgram, setSelectedProgram] = useState(null);
  
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

  // Create refs for each program
  const programRefs = useRef([]);
  programRefs.current = Array(6).fill().map((_, i) => programRefs.current[i] ?? React.createRef());
  
  // Check if programs are in view
  const isInView = [];
  for (let i = 0; i < programRefs.current.length; i++) {
    isInView.push(useInView(programRefs.current[i], { once: true, margin: "0px 0px -100px 0px" }));
  }

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
      detailedDescription: 'Our CPR Certification program provides hands-on training in life-saving techniques for workplace emergencies. Participants will learn adult, child, and infant CPR, how to use an AED, and first aid basics. Certification is valid for 2 years and meets all OSHA requirements.',
      icon: Heart,
      duration: '4 hours',
      participants: 'Up to 20',
      benefits: [
        'Meets OSHA workplace safety requirements',
        'Hands-on practice with manikins',
        'Certification valid for 2 years',
        'Includes AED training',
        'First aid basics included'
      ]
    },
    {
      id: 2,
      title: 'Cervical Health & Posture Sessions',
      description: 'Essential health awareness for women employees. Focus on posture correction and cervical health.',
      detailedDescription: 'This specialized program focuses on women\'s health in the workplace, with emphasis on cervical health awareness and posture correction. Our experts will teach ergonomic adjustments, simple desk exercises, and provide screenings for early detection of potential issues.',
      icon: Shield,
      duration: '2 hours',
      participants: 'Up to 30',
      benefits: [
        'Ergonomic workplace assessments',
        'Preventive health screenings',
        'Daily 5-minute desk exercises',
        'Posture correction techniques',
        'Customized health plans'
      ]
    },
    {
      id: 3,
      title: 'HIIT for Teams',
      description: 'High-intensity workouts to boost team energy. Energizing group fitness sessions.',
      detailedDescription: 'Our HIIT for Teams program brings high-energy, short-duration workouts to your workplace. These 45-minute sessions are designed to maximize calorie burn, boost metabolism, and improve team morale through group challenges and friendly competition.',
      icon: Zap,
      duration: '45 minutes',
      participants: 'Up to 15',
      benefits: [
        'No equipment needed',
        'Adaptable for all fitness levels',
        'Boosts metabolism for hours after',
        'Team-building through challenges',
        'Can be done in office attire'
      ]
    },
    {
      id: 4,
      title: 'Stress Management Workshops',
      description: 'Mindfulness and wellness techniques. Learn effective stress management strategies.',
      detailedDescription: 'This workshop provides practical tools for managing workplace stress through mindfulness, breathing techniques, and cognitive behavioral approaches. Participants will leave with a personalized stress management plan and daily practices.',
      icon: Users,
      duration: '1.5 hours',
      participants: 'Up to 25',
      benefits: [
        'Personalized stress assessments',
        'Guided meditation sessions',
        'Breathing techniques',
        'Work-life balance strategies',
        'Ongoing digital resources'
      ]
    },
    {
      id: 5,
      title: 'Nutrition Planning',
      description: 'Corporate meal planning and healthy habits. Expert nutrition guidance for workplace wellness.',
      detailedDescription: 'Our nutrition program provides customized meal plans for busy professionals, healthy snack alternatives for the office, and strategies for maintaining energy throughout the workday. Includes personalized consultations and group workshops.',
      icon: Calendar,
      duration: '3 hours',
      participants: 'Up to 40',
      benefits: [
        'Personalized nutrition assessments',
        'Healthy office snack ideas',
        'Meal prep strategies',
        'Grocery store tours',
        '30-day follow-up consultation'
      ]
    },
    {
      id: 6,
      title: 'Fitness Challenges',
      description: 'Monthly team challenges and competitions. Engaging fitness competitions for team building.',
      detailedDescription: 'Our monthly fitness challenges create friendly competition and camaraderie among coworkers. Each month features a different focus (steps, hydration, mindfulness) with tracking tools, team leaderboards, and prizes for top performers.',
      icon: Award,
      duration: 'Ongoing',
      participants: 'Unlimited',
      benefits: [
        'Customizable challenge types',
        'Digital tracking platform',
        'Team vs. team competitions',
        'Monthly prize incentives',
        'Progress reports for HR'
      ]
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

  const programVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/location', label: 'Location' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* Scroll to top on route change */}
        <ScrollToTop />
        
        {/* Navbar */}
        <Navbar navItems={navItems} />
        
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
                      {programs.map((program, index) => (
                        <motion.div 
                          key={program.id} 
                          ref={programRefs.current[index]}
                          custom={index}
                          initial="hidden"
                          animate={isInView[index] ? "visible" : "hidden"}
                          variants={programVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedProgram(program)}
                          className="group relative"
                        >
                          <div className="relative h-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
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
                              </div>
                              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-500 flex items-center justify-center group">
                                View Details
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
            <Route path="/location" element={<Location />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Program Detail Modal */}
        <AnimatePresence>
          {selectedProgram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProgram(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                        <selectedProgram.icon className="w-12 h-12" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProgram.title}
                      </h2>
                      <p className="text-xl text-purple-400 mb-6">
                        {selectedProgram.duration} • {selectedProgram.participants}
                      </p>
                      <p className="text-gray-300 mb-6">
                        {selectedProgram.detailedDescription}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Program Benefits:
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProgram.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-2 text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          to="/contact" 
                          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center"
                          onClick={() => setSelectedProgram(null)}
                        >
                          Book This Program
                        </Link>
                        <button 
                          onClick={() => setSelectedProgram(null)}
                          className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
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
  );
}

export default App;