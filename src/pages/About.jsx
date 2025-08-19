import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, Award, Star } from 'lucide-react';
import yogaImage from '../images/yoga.jpg';

const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Started with a vision to revolutionize corporate wellness',
      icon: Heart
    },
    {
      year: '2020',
      title: 'First 100 Companies',
      description: 'Reached our first major milestone during challenging times',
      icon: Target
    },
    {
      year: '2022',
      title: 'Program Expansion',
      description: 'Launched specialized health and safety certifications',
      icon: Eye
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: '500+ companies trust us with their employee wellness',
      icon: Award
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Former corporate wellness director with 15+ years experience in workplace health programs.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'Head of Programs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Certified fitness trainer and wellness coach specializing in corporate environments.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emma Rodriguez',
      role: 'Wellness Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Nutritionist and mindfulness expert with a passion for workplace wellness.',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Safety Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Certified CPR instructor and workplace safety specialist.',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'We prioritize the health and well-being of every employee'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Creating stronger workplace relationships through fitness'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering the highest quality wellness programs'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Continuously improving our programs and services'
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
              About Leofitt Global{' '}
              {/* <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Leofitt Global
              </span> */}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing workplace wellness through innovative programs and expert guidance. 
              We believe healthy employees are the foundation of successful organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                We believe that healthy employees are the foundation of successful organizations. 
                Our mission is to transform workplace wellness through comprehensive, engaging 
                programs that promote physical and mental well-being.
              </p>
              <p className="text-lg text-gray-300">
                From life-saving CPR certifications to energizing HIIT sessions, we provide 
                the tools and expertise your team needs to thrive both personally and professionally.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-1 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl bg-gray-800 overflow-hidden relative">
                  <img 
                    src={yogaImage} 
                    alt="Wellness First" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <div>
                      {/* <Heart className="w-12 h-12 mx-auto mb-4 text-pink-500" /> */}
                      <h3 className="text-2xl font-bold text-blue-400">
                        {/* Wellness First */}
                      </h3>
                      <p className="text-grey-600 mt-2">
                        {/* Your team's health is our priority */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Our Core Values{' '}
              {/* <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Values
              </span> */}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-gray-800 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Our Journey{' '}
              {/* <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span> */}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-pink-600 h-full"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-gray-700"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 mx-auto">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Meet Our Team{' '}
              {/* <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Team
              </span> */}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team is dedicated to transforming workplace wellness and creating healthier, 
              more productive work environments.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-300">
                    <span className="text-xs font-bold">in</span>
                  </a>
                  <a href={member.social.twitter} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors duration-300">
                    <span className="text-xs font-bold">t</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;