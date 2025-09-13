import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Heart, 
  Award, 
  Zap,
  ArrowRight,
  Check,
  Building,
  Target,
  Clock
} from 'lucide-react';

const CorporateServices = () => {
  const corporatePackages = [
    {
      id: 1,
      title: 'Bronze Corporate',
      description: 'Essential wellness package for small to medium businesses',
      price: 'Starting from ₹15,000/month',
      features: [
        'Instant posture correction reports for all employees',
        '15-minute pain relief sessions by expert physiotherapists',
        'Basic nutrition tips and generic exercise plans',
        'Access to online yoga and exercise video library',
        'Parent wellness support program',
        'Monthly wellness newsletters',
        'Basic health screening for up to 50 employees'
      ],
      icon: Building,
      mostPopular: false,
      teamSize: 'Up to 50 employees'
    },
    {
      id: 2,
      title: 'Silver Corporate',
      description: 'Comprehensive wellness solution for growing organizations',
      price: 'Starting from ₹25,000/month',
      features: [
        'All Bronze services included',
        'Customized diet charts and exercise plans for each employee',
        'Mental health screening and stress management webinars',
        'Unlimited online consultation support for employees and their families',
        'Quarterly on-site wellness workshops',
        'Dedicated wellness coordinator',
        'Advanced health analytics dashboard for HR teams',
        'Emergency health support hotline'
      ],
      icon: Target,
      mostPopular: true,
      teamSize: 'Up to 200 employees'
    },
    {
      id: 3,
      title: 'Gold Corporate',
      description: 'Premium enterprise wellness solution with priority support',
      price: 'Starting from ₹45,000/month',
      features: [
        'All Silver services included',
        'Priority 24/7 support with dedicated account manager',
        'Monthly on-site expert-led workshops and seminars',
        'Advanced reporting and wellness analytics',
        'Custom wellness challenges and competitions',
        'Executive health check-ups',
        'Workplace ergonomic assessments',
        'Annual wellness retreat planning assistance',
        'Integration with existing HR systems'
      ],
      icon: Award,
      mostPopular: false,
      teamSize: 'Unlimited employees'
    }
  ];

  const corporateFeatures = [
    {
      icon: Users,
      title: 'Team Wellness Programs',
      description: 'Comprehensive wellness initiatives designed to improve overall team health and productivity'
    },
    {
      icon: TrendingUp,
      title: 'Productivity Enhancement',
      description: 'Evidence-based programs that boost employee performance and reduce absenteeism'
    },
    {
      icon: Shield,
      title: 'Workplace Safety',
      description: 'CPR training, first aid certification, and emergency response protocols for your team'
    },
    {
      icon: Heart,
      title: 'Employee Health Monitoring',
      description: 'Regular health screenings and personalized wellness tracking for all employees'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Wellness sessions that fit your business hours and operational requirements'
    },
    {
      icon: Zap,
      title: 'Energy & Motivation',
      description: 'High-energy fitness sessions and motivational workshops to energize your workforce'
    }
  ];

  const benefits = [
    'Reduce healthcare costs by up to 30%',
    'Increase employee retention by 40%',
    'Boost productivity by 25%',
    'Decrease sick days by 35%',
    'Improve employee satisfaction scores',
    'Enhance company culture and team bonding'
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Corporate Wellness
              <span className="block text-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your workplace culture with our comprehensive corporate wellness programs. 
              Designed for businesses of all sizes to improve employee health, productivity, and satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get Custom Quote
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
              >
                View Packages
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Corporate Wellness Programs?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our evidence-based approach delivers measurable results for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Results for Your Business
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Companies using our corporate wellness programs report significant improvements 
                across all key performance indicators.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600/20 to-red-500/20 p-8 rounded-xl border border-red-600/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Companies Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
                  <div className="text-gray-300">Employees Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Corporate Wellness Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect wellness solution for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative bg-gray-800 rounded-xl p-8 border transition-all duration-300 ${
                  pkg.mostPopular 
                    ? 'border-red-600 ring-1 ring-red-600' 
                    : 'border-gray-700 hover:border-red-600/30'
                }`}
              >
                {pkg.mostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full mb-6">
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <div className="text-purple-400 font-semibold mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-400 mb-6">{pkg.teamSize}</div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center ${
                      pkg.mostPopular
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workplace?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of companies that have already improved their workplace culture with our wellness programs
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServices;