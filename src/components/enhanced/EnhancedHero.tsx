import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Globe, TrendingUp, Users, Award, Zap } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import { SecurityIcon, AccountIcon } from '../ui/BankingIcons';
import bankingConfig from '../../data/bankingConfig.json';

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Banking Made Simple,",
      highlight: "Secure, and Smart",
      subtitle: "Experience next-generation banking with advanced security, real-time transactions, and personalized services tailored to your needs.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      cta: "Open Account",
      ctaLink: bankingConfig.urls.openAccount
    },
    {
      title: "Invest in Your",
      highlight: "Financial Future",
      subtitle: "Grow your wealth with our comprehensive investment solutions, expert guidance, and competitive returns.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
      cta: "Start Investing",
      ctaLink: bankingConfig.urls.investmentPlanning
    },
    {
      title: "Business Banking",
      highlight: "That Works for You",
      subtitle: "Comprehensive solutions to help your business grow, from SME accounts to corporate banking services.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      cta: "Explore Business",
      ctaLink: bankingConfig.urls.businessBanking
    }
  ];

  const stats = [
    { value: 130, suffix: " Years", label: "Of Excellence" },
    { value: 250, suffix: "+", label: "Branches" },
    { value: 15000, suffix: "+", label: "Banking Agents" },
    { value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
            >
              {i % 4 === 0 && <div className="w-3 h-3 bg-yellow-400" />}
              {i % 4 === 1 && <div className="w-2 h-2 bg-blue-300" />}
              {i % 4 === 2 && <Zap className="w-4 h-4 text-yellow-400" />}
              {i % 4 === 3 && <div className="w-1 h-1 bg-white" />}
            </motion.div>
          ))}
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white transform rotate-12"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-blue-800 bg-opacity-50 text-sm mb-6 shadow-sharp"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SecurityIcon className="w-4 h-4 mr-2" />
              <span>Secure & Trusted Banking Since {bankingConfig.bank.establishedYear}</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {currentSlideData.title} <br />
              <span className="text-yellow-400 relative">
                {currentSlideData.highlight}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-yellow-400"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <p className="text-lg mb-8 text-blue-100 max-w-xl leading-relaxed">
              {currentSlideData.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a 
                href={currentSlideData.ctaLink}
                className="group px-8 py-4 bg-yellow-500 text-blue-900 hover:bg-yellow-400 transition-all duration-300 font-semibold shadow-sharp hover:shadow-sharp-lg flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentSlideData.cta}
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
              <motion.a
                href={bankingConfig.urls.learnMore}
                className="px-8 py-4 border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold shadow-sharp"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>

            {/* Enhanced Slide Indicators */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400 shadow-neon-yellow' : 'bg-white bg-opacity-30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                key={currentSlide}
                src={currentSlideData.image}
                alt="Digital banking"
                className="shadow-sharp-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Enhanced Floating Cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 shadow-sharp-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Banking</p>
                    <p className="text-sm text-gray-600">Always available</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-6 -right-6 bg-white text-blue-900 p-6 shadow-sharp-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3">
                    <Globe className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Global Access</p>
                    <p className="text-sm text-gray-600">Bank anywhere</p>
                  </div>
                </div>
              </motion.div>

              {/* New Security Badge */}
              <motion.div
                className="absolute top-1/2 -left-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 shadow-sharp transform -rotate-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ rotate: 0, scale: 1.1 }}
              >
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-bold">FDIC Insured</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Stats Section */}
      <div className="relative border-t border-blue-800 bg-blue-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:animate-glow">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2 + index * 0.5}
                  />
                </div>
                <p className="text-blue-100 group-hover:text-white transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Trust Indicators */}
      <div className="relative border-t border-blue-800 bg-blue-900 bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-blue-100 mb-2">Trusted by millions, regulated by</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {bankingConfig.bank.regulatoryBodies.map((body, index) => (
              <motion.div
                key={body}
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white bg-opacity-10 px-4 py-2 shadow-sharp hover:shadow-sharp-lg transition-all">
                  <span className="text-white font-medium">{body}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;