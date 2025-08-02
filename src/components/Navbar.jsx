import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Leofitt Global
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
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
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
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
              {navItems.map((item, i) => (
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;