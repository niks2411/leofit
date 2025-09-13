import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Zap, Users, Calendar, Award, Clock, ArrowRight, X } from 'lucide-react';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'CPR Certification',
      description: 'Life-saving skills for your entire team. Comprehensive training in cardiopulmonary resuscitation techniques.',
      longDescription: 'Our CPR Certification program provides comprehensive training in life-saving techniques. Participants learn proper chest compressions, rescue breathing, and how to use automated external defibrillators (AEDs). This program is essential for workplace safety and can potentially save lives in emergency situations.',
      icon: Heart,
      duration: '4 hours',
      participants: 'Up to 20',
      price: '$75 per person',
      features: [
        'Hands-on practice with mannequins',
        'AED training included',
        'Certification valid for 2 years',
        'On-site training available',
        'Emergency response protocols'
      ]
    },
    {
      id: 2,
      title: 'Cervical Health & Posture Sessions',
      description: 'Essential health awareness for women employees. Focus on posture correction and cervical health.',
      longDescription: 'Specialized sessions designed to address common workplace health issues, particularly focusing on cervical health and posture correction. This program helps prevent chronic pain and improves overall workplace ergonomics.',
      icon: Shield,
      duration: '2 hours',
      participants: 'Up to 30',
      price: '$45 per person',
      features: [
        'Posture assessment',
        'Ergonomic workstation setup',
        'Stretching exercises',
        'Stress relief techniques',
        'Ongoing support materials'
      ]
    },
    {
      id: 3,
      title: 'HIIT for Teams',
      description: 'High-intensity workouts to boost team energy. Energizing group fitness sessions.',
      longDescription: 'High-Intensity Interval Training sessions designed specifically for corporate teams. These energetic workouts boost morale, improve fitness levels, and create a fun team-building experience.',
      icon: Zap,
      duration: '45 minutes',
      participants: 'Up to 15',
      price: '$35 per person',
      features: [
        'Cardio and strength training',
        'Team challenges',
        'Modifications for all fitness levels',
        'Energy-boosting routines',
        'Progress tracking'
      ]
    },
    {
      id: 4,
      title: 'Stress Management Workshops',
      description: 'Mindfulness and wellness techniques. Learn effective stress management strategies.',
      longDescription: 'Comprehensive workshops teaching mindfulness, meditation, and stress management techniques. Participants learn practical tools to handle workplace stress and improve mental well-being.',
      icon: Users,
      duration: '1.5 hours',
      participants: 'Up to 25',
      price: '$55 per person',
      features: [
        'Mindfulness meditation',
        'Breathing techniques',
        'Stress identification tools',
        'Work-life balance strategies',
        'Follow-up resources'
      ]
    },
    {
      id: 5,
      title: 'Nutrition Planning',
      description: 'Corporate meal planning and healthy habits. Expert nutrition guidance for workplace wellness.',
      longDescription: 'Professional nutrition guidance tailored for corporate environments. Learn about healthy eating habits, meal planning, and how nutrition affects workplace performance and energy levels.',
      icon: Calendar,
      duration: '3 hours',
      participants: 'Up to 40',
      price: '$65 per person',
      features: [
        'Personalized meal plans',
        'Nutrition education',
        'Healthy snack ideas',
        'Dietary restriction guidance',
        'Cooking demonstrations'
      ]
    },
    {
      id: 6,
      title: 'Fitness Challenges',
      description: 'Monthly team challenges and competitions. Engaging fitness competitions for team building.',
      longDescription: 'Ongoing fitness challenges that keep teams motivated and engaged. Monthly competitions with rewards and recognition to maintain long-term fitness goals and team camaraderie.',
      icon: Award,
      duration: 'Ongoing',
      participants: 'Unlimited',
      price: '$25 per person/month',
      features: [
        'Monthly challenges',
        'Progress tracking',
        'Team leaderboards',
        'Rewards and recognition',
        'Custom challenge design'
      ]
    }
  ];





  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
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

  return (
    <div className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Corporate Wellness{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Programs
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive wellness solutions tailored for your organization's unique needs. 
            Choose from our range of expert-led programs designed to transform your workplace culture.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {program.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{program.participants}</span>
                    </div>
                    <div className="text-lg font-semibold text-red-600 dark:text-purple-400">
                      {program.price}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProgram(program)}
                    className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/25 transform hover:scale-105 transition-all duration-500 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Program Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                      <selectedProgram.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProgram.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-300"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProgram.longDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedProgram.duration}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Participants</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {selectedProgram.participants}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Price
                    </div>
                    <div className="text-lg font-semibold text-red-600 dark:text-purple-400">
                      {selectedProgram.price}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-2">
                    {selectedProgram.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/25 transition-all duration-500"
                  >
                    Book This Program
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProgram(null)}
                    className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Programs; 