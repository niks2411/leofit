import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Solutions",
      industry: "Technology",
      employees: "500+",
      duration: "6 months",
      challenge: "High employee burnout and low productivity due to long working hours and sedentary lifestyle",
      solution: "Implemented comprehensive wellness program including ergonomic assessments, stress management workshops, and flexible fitness schedules",
      results: [
        "32% reduction in sick days",
        "28% increase in productivity",
        "45% improvement in employee satisfaction",
        "18% decrease in healthcare costs"
      ],
      testimonial: "The wellness program transformed our workplace culture. Our employees are healthier, happier, and more productive than ever before.",
      author: "Sarah Johnson, HR Director"
    },
    {
      id: 2,
      company: "Global Manufacturing Ltd",
      industry: "Manufacturing",
      employees: "1200+",
      duration: "8 months",
      challenge: "High injury rates and low morale among factory workers, leading to increased turnover",
      solution: "Customized safety and wellness program with on-site physiotherapy, injury prevention training, and team building activities",
      results: [
        "40% reduction in workplace injuries",
        "25% decrease in employee turnover",
        "35% improvement in safety compliance",
        "22% increase in team collaboration"
      ],
      testimonial: "Our workers feel valued and supported. The program has created a safer, more positive work environment.",
      author: "Michael Chen, Operations Manager"
    },
    {
      id: 3,
      company: "Financial Services Group",
      industry: "Finance",
      employees: "300+",
      duration: "4 months",
      challenge: "High stress levels and poor work-life balance affecting employee mental health and retention",
      solution: "Mental health focused wellness program with counseling services, mindfulness sessions, and flexible work arrangements",
      results: [
        "38% reduction in stress-related absences",
        "30% improvement in work-life balance scores",
        "42% increase in employee retention",
        "27% decrease in mental health claims"
      ],
      testimonial: "The mental health support has been life-changing for our team. We've seen remarkable improvements in both personal and professional well-being.",
      author: "Emily Rodriguez, Chief People Officer"
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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-red-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how leading companies transformed their workplace culture and achieved remarkable results with our wellness programs
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-600" />
                <span>500+ Companies Served</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-red-600" />
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-red-600" />
                <span>Industry Recognition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 hover:border-red-600/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Company Info & Challenge */}
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                        <span className="px-3 py-1 bg-red-600/20 text-red-400 text-sm font-medium rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {study.employees} employees
                        </span>
                        <span className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {study.duration} program
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">The Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Our Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Right Column - Results & Testimonial */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Results Achieved</h4>
                      <div className="space-y-3">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-red-600">
                      <blockquote className="text-gray-300 italic mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-red-400 font-medium">— {study.author}</cite>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have transformed their workplace culture with our proven wellness programs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-full hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
