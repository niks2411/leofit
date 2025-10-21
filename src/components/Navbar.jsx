import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#101828]/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-[#101828] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              {/* Favicon/Logo Icon */}
              <img 
                src="/favicon.png" 
                alt="Leofitt Global Logo" 
                className="w-8 h-8 object-contain rounded"
              />
              {/* Company Name */}
              <div className="text-2xl font-bold text-white">
  Leofitt Global
</div>

            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      className={`relative font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                        location.pathname.includes('/services')
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        isServicesDropdownOpen ? 'rotate-180' : ''
                      }`} />
                      {location.pathname.includes('/services') && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                    
                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-[#101828] border border-gray-700 rounded-lg shadow-xl overflow-hidden"
                        >
                          <Link
                            to="/services/corporate"
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1D2939] transition-colors duration-200"
                          >
                            Corporate Services
                          </Link>
                          <Link
                            to="/services/individual"
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1D2939] transition-colors duration-200"
                          >
                            Individual Services
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              if (item.label === 'Resources') {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                    onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                  >
                    <button
                      className={`relative font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                        location.pathname.includes('/resources')
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        isResourcesDropdownOpen ? 'rotate-180' : ''
                      }`} />
                      {location.pathname.includes('/resources') && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                    
                    {/* Resources Dropdown */}
                    <AnimatePresence>
                      {isResourcesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-[#101828] border border-gray-700 rounded-lg shadow-xl overflow-hidden"
                        >
                          <Link
                            to="/resources/case-studies"
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1D2939] transition-colors duration-200"
                          >
                            Case Studies
                          </Link>
                          <Link
                            to="/resources/webinars"
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1D2939] transition-colors duration-200"
                          >
                            Webinars
                          </Link>
                          <Link
                            to="/resources/blogs"
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#1D2939] transition-colors duration-200"
                          >
                            Blogs
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#101828] shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, i) => {
                if (item.label === 'Services') {
                  return (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="space-y-1"
                    >
                      <div className="px-3 py-2 text-gray-300 font-medium">
                        {item.label}
                      </div>
                      <Link
                        to="/services/corporate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-2 rounded-lg transition-all duration-300 ${
                          location.pathname === '/services/corporate'
                            ? 'text-white bg-[#1D2939]'
                            : 'text-gray-300 hover:bg-[#1D2939] hover:text-white'
                        }`}
                      >
                        Corporate Services
                      </Link>
                      <Link
                        to="/services/individual"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-2 rounded-lg transition-all duration-300 ${
                          location.pathname === '/services/individual'
                            ? 'text-white bg-[#1D2939]'
                            : 'text-gray-300 hover:bg-[#1D2939] hover:text-white'
                        }`}
                      >
                        Individual Services
                      </Link>
                    </motion.div>
                  );
                }
                
                if (item.label === 'Resources') {
                  return (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="space-y-1"
                    >
                      <div className="px-3 py-2 text-gray-300 font-medium">
                        {item.label}
                      </div>
                      <Link
                        to="/resources/case-studies"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-2 rounded-lg transition-all duration-300 ${
                          location.pathname === '/resources/case-studies'
                            ? 'text-white bg-[#1D2939]'
                            : 'text-gray-300 hover:bg-[#1D2939] hover:text-white'
                        }`}
                      >
                        Case Studies
                      </Link>
                      <Link
                        to="/resources/webinars"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-2 rounded-lg transition-all duration-300 ${
                          location.pathname === '/resources/webinars'
                            ? 'text-white bg-[#1D2939]'
                            : 'text-gray-300 hover:bg-[#1D2939] hover:text-white'
                        }`}
                      >
                        Webinars
                      </Link>
                      <Link
                        to="/resources/blogs"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-2 rounded-lg transition-all duration-300 ${
                          location.pathname === '/resources/blogs'
                            ? 'text-white bg-[#1D2939]'
                            : 'text-gray-300 hover:bg-[#1D2939] hover:text-white'
                        }`}
                      >
                        Blogs
                      </Link>
                    </motion.div>
                  );
                }
                
                return (
                  <motion.div
                    key={item.path}
                    custom={i}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-white bg-[#1D2939]'
                          : 'text-gray-300 hover:bg-[#1D2939] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;