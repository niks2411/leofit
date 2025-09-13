import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  Heart, 
  Dumbbell, 
  Brain, 
  Apple, 
  Clock,
  ArrowRight,
  Check,
  Star,
  Target,
  Zap
} from 'lucide-react';

const IndividualServices = () => {
  const individualPackages = [
    {
      id: 1,
      title: 'Basic Wellness',
      description: 'Perfect for individuals starting their wellness journey',
      price: '₹2,999/month',
      features: [
        'Personalized fitness assessment',
        'Basic nutrition guidance',
        'Weekly workout plans',
        'Access to exercise video library',
        'Monthly progress tracking',
        'Email support',
        'Basic health tips and articles'
      ],
      icon: User,
      mostPopular: false,
      duration: 'Monthly commitment'
    },
    {
      id: 2,
      title: 'Premium Wellness',
      description: 'Comprehensive wellness solution for dedicated individuals',
      price: '₹4,999/month',
      features: [
        'All Basic Wellness features',
        'Personalized meal plans',
        'Bi-weekly one-on-one coaching sessions',
        'Advanced fitness tracking',
        'Mental health and stress management support',
        'Priority customer support',
        'Access to live virtual classes',
        'Quarterly health assessments'
      ],
      icon: Target,
      mostPopular: true,
      duration: '3-month minimum'
    },
    {
      id: 3,
      title: 'Elite Transformation',
      description: 'Premium program for serious fitness and wellness goals',
      price: '₹7,999/month',
      features: [
        'All Premium Wellness features',
        'Daily personalized coaching',
        'Custom supplement recommendations',
        'Advanced body composition analysis',
        'Injury prevention and recovery protocols',
        '24/7 support hotline',
        'Exclusive access to expert workshops',
        'Personalized lifestyle optimization plan'
      ],
      icon: Star,
      mostPopular: false,
      duration: '6-month minimum'
    }
  ];

  const individualFeatures = [
    {
      icon: Heart,
      title: 'Personalized Health Plans',
      description: 'Customized wellness programs tailored to your unique health goals and lifestyle'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Training',
      description: 'Expert-designed workout routines for all fitness levels, from beginner to advanced'
    },
    {
      icon: Apple,
      title: 'Nutrition Coaching',
      description: 'Personalized meal plans and nutrition guidance to fuel your body optimally'
    },
    {
      icon: Brain,
      title: 'Mental Wellness',
      description: 'Stress management, mindfulness training, and mental health support'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Sessions that fit your busy lifestyle with 24/7 access to resources'
    },
    {
      icon: Zap,
      title: 'Quick Results',
      description: 'Evidence-based approaches that deliver noticeable improvements in weeks'
    }
  ];

  const specialPrograms = [
    {
      title: 'Weight Management',
      description: 'Sustainable weight loss and maintenance programs',
      icon: Target,
      duration: '12 weeks'
    },
    {
      title: 'Strength Building',
      description: 'Progressive strength training for muscle development',
      icon: Dumbbell,
      duration: '16 weeks'
    },
    {
      title: 'Stress Relief',
      description: 'Mindfulness and relaxation techniques for better mental health',
      icon: Brain,
      duration: '8 weeks'
    },
    {
      title: 'Injury Recovery',
      description: 'Rehabilitation and recovery programs with physiotherapy',
      icon: Heart,
      duration: 'As needed'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      content: 'The personalized approach helped me lose 15kg in 6 months while building healthy habits that last.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'Amazing support and guidance. The flexibility to work around my schedule was perfect.',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'Teacher',
      content: 'Not just fitness, but complete wellness. The mental health support was incredibly valuable.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Individual Wellness
              <span className="block text-pink-400">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Achieve your personal health and fitness goals with our customized individual wellness programs. 
              Get personalized coaching, nutrition guidance, and support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-pink-400 text-pink-400 font-semibold rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}
              >
                View Programs
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
              Why Choose Our Individual Programs?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personalized approach to wellness that adapts to your lifestyle and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Specialized Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Targeted programs designed for specific health and fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{program.description}</p>
                <div className="text-pink-400 text-sm font-semibold">{program.duration}</div>
              </motion.div>
            ))}
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
              Individual Wellness Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect wellness program for your personal goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {individualPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative bg-gray-800 rounded-xl p-8 border transition-all duration-300 ${
                  pkg.mostPopular 
                    ? 'border-red-500 ring-1 ring-red-500' 
                    : 'border-gray-700 hover:border-red-500/30'
                }`}
              >
                {pkg.mostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6">
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <div className="text-pink-400 font-semibold mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-400 mb-6">{pkg.duration}</div>
                
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
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg'
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real people who transformed their lives with our programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards a healthier, happier you. Our expert coaches are ready to guide you every step of the way.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-500 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Book Your Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndividualServices;