import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { 
  AccountIcon, 
  TransferIcon, 
  PaymentIcon, 
  InvestmentIcon, 
  SecurityIcon, 
  MobileIcon,
  LoanIcon,
  SavingsIcon 
} from '../ui/BankingIcons';
import bankingConfig from '../../data/bankingConfig.json';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  delay: number;
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  link, 
  delay,
  isPopular = false
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`bg-white p-8 shadow-sharp hover:shadow-sharp-lg transition-all duration-300 border border-gray-100 group relative overflow-hidden ${
      isPopular ? 'ring-2 ring-yellow-400' : ''
    }`}
  >
    {isPopular && (
      <motion.div
        className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-500 text-blue-900 px-3 py-1 text-sm font-bold flex items-center"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: delay + 0.3 }}
      >
        <Sparkles className="w-4 h-4 mr-1" />
        POPULAR
      </motion.div>
    )}

    {/* Animated background effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={false}
    />
    
    <div className="relative z-10">
      <motion.div 
        className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-sharp"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        <div className="text-blue-900 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-sm text-gray-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + (index * 0.1) }}
          >
            <motion.div 
              className="w-2 h-2 bg-blue-900 mr-3 shadow-sharp"
              whileHover={{ scale: 1.5 }}
            />
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          to={link}
          className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200 group"
        >
          Learn More
          <motion.div
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

const EnhancedServices = () => {
  const services = [
    {
      icon: <AccountIcon className="w-8 h-8" />,
      title: 'Personal Banking',
      description: 'Comprehensive banking solutions tailored to your personal financial needs.',
      features: [
        'Savings & Current Accounts',
        'Debit & Credit Cards',
        'Personal Loans',
        'Mobile & Internet Banking'
      ],
      link: '/personal-banking',
      isPopular: true
    },
    {
      icon: <PaymentIcon className="w-8 h-8" />,
      title: 'Business Banking',
      description: 'Powerful tools and services to help your business grow and succeed.',
      features: [
        'SME & Corporate Accounts',
        'Trade Finance',
        'Business Loans',
        'Cash Management'
      ],
      link: '/business-banking'
    },
    {
      icon: <MobileIcon className="w-8 h-8" />,
      title: 'Digital Banking',
      description: 'Bank anytime, anywhere with our advanced digital platforms.',
      features: [
        'Mobile Banking App',
        'Internet Banking',
        'API Banking',
        'Digital Payments'
      ],
      link: '/digital-banking'
    },
    {
      icon: <InvestmentIcon className="w-8 h-8" />,
      title: 'Investment & Wealth',
      description: 'Expert guidance to help you grow and protect your wealth.',
      features: [
        'Fixed Deposits',
        'Treasury Bills',
        'Investment Planning',
        'Wealth Advisory'
      ],
      link: '/investment-wealth'
    },
    {
      icon: <LoanIcon className="w-8 h-8" />,
      title: 'Loans & Credit',
      description: 'Flexible financing solutions for all your needs.',
      features: [
        `Personal Loans up to $${(bankingConfig.products.personalBanking.loans.personal.maxAmount / 1000).toFixed(0)}K`,
        `Home Loans up to $${(bankingConfig.products.personalBanking.loans.home.maxAmount / 1000).toFixed(0)}K`,
        `Auto Loans from ${bankingConfig.products.personalBanking.loans.auto.interestRate}% APR`,
        'Quick Approval Process'
      ],
      link: '/personal-banking/loans'
    },
    {
      icon: <SecurityIcon className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your banking needs.',
      features: [
        '24/7 Call Center',
        'Live Chat Support',
        'Branch Network',
        'Security Center'
      ],
      link: '/support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 text-sm font-medium mb-4 shadow-sharp"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Banking Solutions
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Your Financial Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our full range of banking services designed to meet your financial needs, 
            from personal banking to business solutions and investment opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-8 text-white shadow-sharp-lg relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-yellow-400"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Ready to Get Started?
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                Join millions of satisfied customers who trust {bankingConfig.bank.name} 
                for their banking needs. Open your account today and experience the difference.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  href={bankingConfig.urls.openAccount}
                  className="px-8 py-3 bg-yellow-500 text-blue-900 font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-sharp hover:shadow-sharp-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Account
                </motion.a>
                <motion.a
                  href={bankingConfig.urls.contactUs}
                  className="px-8 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 shadow-sharp"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServices;