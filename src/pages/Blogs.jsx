import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'wellness', name: 'Workplace Wellness' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'productivity', name: 'Productivity' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Workplace Wellness: Why It Matters More Than Ever",
      excerpt: "Explore the latest research on workplace wellness and discover how investing in employee health leads to measurable business outcomes.",
      content: "In today's fast-paced corporate environment, workplace wellness has evolved from a nice-to-have perk to a strategic business imperative. Recent studies show that companies with comprehensive wellness programs see 25% lower healthcare costs and 28% higher productivity rates...",
      category: 'wellness',
      author: "Dr. Sarah Williams",
      authorRole: "Chief Wellness Officer",
      publishDate: "2024-02-10",
      readTime: "8 min read",
      image: "/api/placeholder/600/400",
      tags: ["Wellness", "Research", "Productivity"],
      featured: true,
      views: 2840
    },
    {
      id: 2,
      title: "5 Simple Mindfulness Techniques for Busy Professionals",
      excerpt: "Learn practical mindfulness strategies that busy professionals can integrate into their daily routines for better focus and stress management.",
      content: "Mindfulness isn't just a buzzword—it's a powerful tool for managing stress and improving focus in the workplace. Here are five simple techniques you can start using today...",
      category: 'mental-health',
      author: "James Park",
      authorRole: "Mindfulness Expert",
      publishDate: "2024-02-08",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      tags: ["Mindfulness", "Stress Management", "Focus"],
      featured: false,
      views: 1920
    },
    {
      id: 3,
      title: "Ergonomic Workspace Setup: A Complete Guide",
      excerpt: "Transform your workspace into a health-supporting environment with this comprehensive guide to ergonomic design principles.",
      content: "Poor ergonomics can lead to chronic pain, reduced productivity, and increased healthcare costs. This guide covers everything from chair selection to monitor positioning...",
      category: 'wellness',
      author: "Lisa Rodriguez",
      authorRole: "Physical Therapist",
      publishDate: "2024-02-05",
      readTime: "12 min read",
      image: "/api/placeholder/600/400",
      tags: ["Ergonomics", "Workspace", "Health"],
      featured: true,
      views: 3150
    },
    {
      id: 4,
      title: "Nutrition for Peak Performance: Fueling Your Workday",
      excerpt: "Discover the science of workplace nutrition and learn how proper fueling can boost your energy, focus, and overall performance.",
      content: "What you eat directly impacts your cognitive function, energy levels, and productivity. Here's how to optimize your nutrition for peak workplace performance...",
      category: 'nutrition',
      author: "Michael Chen",
      authorRole: "Registered Dietitian",
      publishDate: "2024-02-03",
      readTime: "7 min read",
      image: "/api/placeholder/600/400",
      tags: ["Nutrition", "Performance", "Energy"],
      featured: false,
      views: 1680
    },
    {
      id: 5,
      title: "Building Emotional Intelligence in Leadership",
      excerpt: "Develop your emotional intelligence skills to become a more effective leader and create a positive work environment for your team.",
      content: "Emotional intelligence is a critical skill for modern leaders. Learn how to develop self-awareness, empathy, and social skills that drive team success...",
      category: 'leadership',
      author: "Dr. Maria Garcia",
      authorRole: "Organizational Psychologist",
      publishDate: "2024-02-01",
      readTime: "10 min read",
      image: "/api/placeholder/600/400",
      tags: ["Leadership", "Emotional Intelligence", "Team Building"],
      featured: false,
      views: 2250
    },
    {
      id: 6,
      title: "The 15-Minute Workout: Maximizing Fitness in Minimal Time",
      excerpt: "Learn how to get maximum fitness benefits from short, high-intensity workouts that fit into even the busiest schedules.",
      content: "You don't need hours in the gym to stay fit and healthy. These 15-minute workout routines are designed for busy professionals who want to maintain their fitness...",
      category: 'fitness',
      author: "Alex Thompson",
      authorRole: "Personal Trainer",
      publishDate: "2024-01-28",
      readTime: "6 min read",
      image: "/api/placeholder/600/400",
      tags: ["Fitness", "HIIT", "Time Management"],
      featured: false,
      views: 1980
    },
    {
      id: 7,
      title: "Remote Work Wellness: Staying Healthy While Working from Home",
      excerpt: "Navigate the unique challenges of remote work with these practical wellness strategies for maintaining health and work-life balance.",
      content: "Remote work presents unique wellness challenges. From creating healthy boundaries to maintaining social connections, here's how to thrive while working from home...",
      category: 'wellness',
      author: "Jennifer Lee",
      authorRole: "Remote Work Consultant",
      publishDate: "2024-01-25",
      readTime: "9 min read",
      image: "/api/placeholder/600/400",
      tags: ["Remote Work", "Work-Life Balance", "Health"],
      featured: false,
      views: 2420
    },
    {
      id: 8,
      title: "The Psychology of Productivity: Understanding What Drives Performance",
      excerpt: "Dive into the psychological factors that influence workplace productivity and learn evidence-based strategies for optimizing performance.",
      content: "Productivity isn't just about working harder—it's about understanding the psychological factors that drive performance. Explore the science behind peak productivity...",
      category: 'productivity',
      author: "Dr. Robert Kim",
      authorRole: "Behavioral Psychologist",
      publishDate: "2024-01-22",
      readTime: "11 min read",
      image: "/api/placeholder/600/400",
      tags: ["Productivity", "Psychology", "Performance"],
      featured: true,
      views: 2760
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              Wellness <span className="text-red-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, tips, and strategies for creating healthier, more productive workplaces
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:border-red-600 focus:outline-none"
                />
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
              <p className="text-gray-400">Our most popular and impactful wellness insights</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-600/30 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-red-600/20 to-red-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-8 h-8 text-red-600" />
                      </div>
                      <span className="text-red-400 font-medium">Featured</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-red-600/20 text-red-400 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-sm font-medium rounded-full">
                        {post.views.toLocaleString()} views
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <button className="flex items-center text-red-400 hover:text-red-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-400">Fresh insights and practical tips for workplace wellness</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-xl overflow-hidden border border-gray-600 hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-600/20 to-gray-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-gray-400 text-sm">Article</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs font-medium rounded">
                      {post.views.toLocaleString()} views
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <button className="flex items-center text-red-400 hover:text-red-300 transition-colors text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest wellness tips, research updates, and industry insights delivered to your inbox
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

export default Blogs;
