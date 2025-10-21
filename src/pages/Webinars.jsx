import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, ExternalLink, Filter } from 'lucide-react';

const Webinars = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Webinars' },
    { id: 'wellness', name: 'Wellness & Health' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'fitness', name: 'Fitness & Exercise' },
    { id: 'leadership', name: 'Leadership' }
  ];

  const webinars = [
    {
      id: 1,
      title: "Building a Resilient Workplace Culture",
      description: "Learn how to create a workplace that supports employee mental health and builds resilience during challenging times.",
      category: 'mental-health',
      date: "2024-02-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      attendees: 1250,
      speaker: "Dr. Sarah Williams",
      speakerTitle: "Chief Wellness Officer, HealthCorp",
      image: "/api/placeholder/400/250",
      isLive: false,
      isUpcoming: true,
      tags: ["Mental Health", "Leadership", "Resilience"]
    },
    {
      id: 2,
      title: "Nutrition for Peak Performance",
      description: "Discover the science behind workplace nutrition and how proper fueling can boost productivity and energy levels.",
      category: 'nutrition',
      date: "2024-02-20",
      time: "1:00 PM EST",
      duration: "45 minutes",
      attendees: 980,
      speaker: "Michael Chen",
      speakerTitle: "Registered Dietitian & Performance Coach",
      image: "/api/placeholder/400/250",
      isLive: false,
      isUpcoming: true,
      tags: ["Nutrition", "Performance", "Energy"]
    },
    {
      id: 3,
      title: "Ergonomic Excellence: Preventing Workplace Injuries",
      description: "Master the fundamentals of ergonomic design and learn practical strategies to prevent common workplace injuries.",
      category: 'wellness',
      date: "2024-01-28",
      time: "3:00 PM EST",
      duration: "75 minutes",
      attendees: 2100,
      speaker: "Lisa Rodriguez",
      speakerTitle: "Physical Therapist & Ergonomics Specialist",
      image: "/api/placeholder/400/250",
      isLive: false,
      isUpcoming: false,
      tags: ["Ergonomics", "Safety", "Prevention"]
    },
    {
      id: 4,
      title: "Mindfulness in the Modern Workplace",
      description: "Explore practical mindfulness techniques that can be integrated into daily work routines for better focus and stress management.",
      category: 'mental-health',
      date: "2024-01-15",
      time: "2:30 PM EST",
      duration: "50 minutes",
      attendees: 1850,
      speaker: "Dr. James Park",
      speakerTitle: "Mindfulness Expert & Author",
      image: "/api/placeholder/400/250",
      isLive: false,
      isUpcoming: false,
      tags: ["Mindfulness", "Stress Management", "Focus"]
    },
    {
      id: 5,
      title: "High-Intensity Workplace Fitness",
      description: "Learn how to implement effective, time-efficient fitness programs that work within busy corporate schedules.",
      category: 'fitness',
      date: "2024-02-25",
      time: "12:00 PM EST",
      duration: "40 minutes",
      attendees: 0,
      speaker: "Alex Thompson",
      speakerTitle: "Certified Personal Trainer & Corporate Wellness Coach",
      image: "/api/placeholder/400/250",
      isLive: false,
      isUpcoming: true,
      tags: ["Fitness", "HIIT", "Time Management"]
    },
    {
      id: 6,
      title: "Leading with Emotional Intelligence",
      description: "Develop your emotional intelligence skills to become a more effective leader and create a positive work environment.",
      category: 'leadership',
      date: "2024-01-10",
      time: "1:30 PM EST",
      duration: "65 minutes",
      attendees: 1650,
      speaker: "Dr. Maria Garcia",
      speakerTitle: "Organizational Psychologist & Leadership Consultant",
      image: "/api/placeholder/400/250",
      isLive: false,
      isUpcoming: false,
      tags: ["Leadership", "Emotional Intelligence", "Team Building"]
    }
  ];

  const filteredWebinars = selectedCategory === 'all' 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  const upcomingWebinars = filteredWebinars.filter(w => w.isUpcoming);
  const pastWebinars = filteredWebinars.filter(w => !w.isUpcoming);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
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
              Expert <span className="text-red-600">Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our live and recorded webinars featuring industry experts sharing insights on workplace wellness, health, and productivity
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-red-600" />
                <span>Monthly Sessions</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-600" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center">
                <Play className="w-5 h-5 mr-2 text-red-600" />
                <span>Live & Recorded</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Webinars</h2>
              <p className="text-gray-400">Don't miss these live sessions with industry experts</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-600/30 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-red-600/20 to-red-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-red-600" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-red-600/20 text-red-400 text-xs font-medium rounded">
                        Upcoming
                      </span>
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded">
                        Live
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(webinar.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {webinar.time} • {webinar.duration}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-sm text-gray-300 mb-1">{webinar.speaker}</p>
                      <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                    </div>
                    
                    <button className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Past Webinars</h2>
            <p className="text-gray-400">Watch recorded sessions from our expert speakers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-xl overflow-hidden border border-gray-600 hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-600/20 to-gray-500/20 flex items-center justify-center relative">
                  <Play className="w-16 h-16 text-white/80" />
                  <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {webinar.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded">
                      Recorded
                    </span>
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-medium rounded">
                      {webinar.attendees.toLocaleString()} views
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(webinar.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-sm text-gray-300 mb-1">{webinar.speaker}</p>
                    <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
                  </div>
                  
                  <button className="w-full mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Recording
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Webinars
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to get notified about upcoming webinars and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-red-600 focus:outline-none"
              />
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
