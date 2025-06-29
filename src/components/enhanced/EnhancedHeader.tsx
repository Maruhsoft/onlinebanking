import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Menu, X, LogIn, Bell, User, Settings, Zap } from 'lucide-react';
import { AccountIcon, TransferIcon, PaymentIcon, InvestmentIcon, SecurityIcon } from '../ui/BankingIcons';
import SecurityIndicator from '../ui/SecurityIndicator';
import TwoFactorAuth from '../ui/TwoFactorAuth';
import SearchSuggestions from '../ui/SearchSuggestions';
import SearchEngine from '../../utils/searchEngine';
import bankingConfig from '../../data/bankingConfig.json';
import toast from 'react-hot-toast';

interface MenuItem {
  label: string;
  path: string;
  items?: Array<{
    label: string;
    path: string;
    description?: string;
  }>;
  icon?: React.ReactNode;
}

const EnhancedHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [show2FA, setShow2FA] = useState(false);
  const [searchEngine] = useState(() => new SearchEngine());
  const [notifications] = useState([
    { id: 1, message: 'Your account has been credited with $5,000', time: '2 min ago', read: false },
    { id: 2, message: 'Monthly statement is now available', time: '1 hour ago', read: false },
    { id: 3, message: 'Security alert: New device login', time: '3 hours ago', read: true },
  ]);
  
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const menuItems: Record<string, MenuItem> = {
    'Personal Banking': {
      icon: <AccountIcon className="w-5 h-5" />,
      path: '/personal-banking',
      items: [
        { 
          label: 'Account Types', 
          path: '/personal-banking/accounts',
          description: 'Savings, Current, and Student accounts'
        },
        { 
          label: 'Cards (Credit/Debit)', 
          path: '/personal-banking/cards',
          description: 'Classic, Gold, and Premium cards'
        },
        { 
          label: 'Loans', 
          path: '/personal-banking/loans',
          description: 'Personal, Home, and Auto loans'
        },
        { 
          label: 'Open an Account', 
          path: '/personal-banking/open-account',
          description: 'Start your banking journey'
        }
      ]
    },
    'Business Banking': {
      icon: <PaymentIcon className="w-5 h-5" />,
      path: '/business-banking',
      items: [
        { 
          label: 'SME Banking', 
          path: '/business-banking/sme',
          description: 'Solutions for small businesses'
        },
        { 
          label: 'Corporate Accounts', 
          path: '/business-banking/corporate',
          description: 'Enterprise banking solutions'
        },
        { 
          label: 'Trade Finance', 
          path: '/business-banking/trade',
          description: 'Import and export financing'
        }
      ]
    },
    'Digital Banking': {
      icon: <TransferIcon className="w-5 h-5" />,
      path: '/digital-banking',
      items: [
        { 
          label: 'Internet Banking', 
          path: '/digital-banking/internet',
          description: 'Secure online banking'
        },
        { 
          label: 'Mobile App', 
          path: '/digital-banking/mobile',
          description: 'Banking on the go'
        },
        { 
          label: 'API Banking', 
          path: '/digital-banking/api',
          description: 'Open banking solutions'
        }
      ]
    },
    'Investment & Wealth': {
      icon: <InvestmentIcon className="w-5 h-5" />,
      path: '/investment-wealth',
      items: [
        { 
          label: 'Fixed Deposits', 
          path: '/investment-wealth/fixed-deposits',
          description: 'Secure investment options'
        },
        { 
          label: 'Treasury Bills', 
          path: '/investment-wealth/treasury-bills',
          description: 'Government securities'
        },
        { 
          label: 'Wealth Management', 
          path: '/investment-wealth/wealth',
          description: 'Private banking services'
        }
      ]
    },
    'Support': {
      icon: <SecurityIcon className="w-5 h-5" />,
      path: '/support',
      items: [
        { 
          label: 'FAQs', 
          path: '/support/faqs',
          description: 'Quick answers'
        },
        { 
          label: 'Contact Us', 
          path: '/contact',
          description: '24/7 customer support'
        },
        { 
          label: 'Security Center', 
          path: '/support/security',
          description: 'Protect your account'
        }
      ]
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearchSuggestions(false);
    }
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
    setShowSearchSuggestions(value.length >= 2);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSearchSuggestions(false);
  };

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const handleLogin = () => {
    setShow2FA(true);
  };

  const handle2FAVerify = async (code: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoggedIn(true);
    setShow2FA(false);
    toast.success('Login successful!');
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  // Get search suggestions
  const suggestions = searchQuery.length >= 2 ? searchEngine.getSuggestions(searchQuery) : [];
  const popularSearches = searchEngine.getPopularSearches();

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSearchSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sharp">
        {/* Enhanced Security Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4">
          <div className="flex items-center justify-between">
            <SecurityIndicator />
            <motion.div 
              className="flex items-center space-x-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Live System Status</span>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <AccountIcon className="w-8 h-8 text-blue-900" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span className="text-xl font-bold text-blue-900">{bankingConfig.bank.name}</span>
              </Link>
              
              {/* Enhanced Desktop Navigation */}
              <nav className="hidden lg:flex space-x-6">
                {Object.entries(menuItems).map(([key, { icon, path, items }]) => (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={path}
                      className={`flex items-center space-x-1 py-2 px-3 transition-all duration-200 ${
                        location.pathname.startsWith(path)
                          ? 'text-blue-900 font-semibold bg-blue-50 shadow-sharp'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50 hover:shadow-sharp'
                      }`}
                    >
                      <span className="flex items-center">
                        {icon}
                        <span className="ml-1">{key}</span>
                      </span>
                      <motion.div
                        animate={{ rotate: activeMenu === key ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </Link>
                    
                    {/* Enhanced Dropdown Menu */}
                    <AnimatePresence>
                      {activeMenu === key && items && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 left-0 mt-1 w-80 bg-white shadow-sharp-lg py-2 border border-gray-100"
                          onMouseEnter={() => handleMouseEnter(key)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {items.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                to={item.path}
                                className={`block px-4 py-3 transition-all duration-200 hover:bg-blue-50 hover:shadow-sharp ${
                                  location.pathname === item.path
                                    ? 'text-blue-900 bg-blue-50 font-semibold border-l-4 border-blue-900'
                                    : 'text-gray-700 hover:text-blue-900'
                                }`}
                              >
                                <div className="font-medium">{item.label}</div>
                                {item.description && (
                                  <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Enhanced Search with Suggestions */}
              <div className="hidden lg:block relative" ref={searchInputRef}>
                <form onSubmit={handleSearch} className="flex items-center">
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search accounts, transactions..."
                      value={searchQuery}
                      onChange={(e) => handleSearchInputChange(e.target.value)}
                      onFocus={() => setShowSearchSuggestions(searchQuery.length >= 2)}
                      className="w-64 px-4 py-2 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent shadow-sharp"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </form>

                {/* Search Suggestions */}
                <SearchSuggestions
                  suggestions={suggestions}
                  popularSearches={popularSearches}
                  isVisible={showSearchSuggestions}
                  onSuggestionClick={handleSuggestionClick}
                  onClose={() => setShowSearchSuggestions(false)}
                />
              </div>

              {/* Enhanced Notifications */}
              {isLoggedIn && (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-600 hover:text-blue-900 transition-colors"
                  >
                    <Bell className="w-6 h-6" />
                    {unreadCount > 0 && (
                      <motion.span
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {unreadCount}
                      </motion.span>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-80 bg-white shadow-sharp-lg border border-gray-100 z-50"
                      >
                        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
                          <h3 className="font-semibold text-gray-900">Notifications</h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {notifications.map((notification, index) => (
                            <motion.div
                              key={notification.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                                !notification.read ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                              }`}
                            >
                              <p className="text-sm text-gray-900">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Enhanced User Menu or Login */}
              {isLoggedIn ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-900 transition-colors shadow-sharp hover:shadow-sharp-lg"
                  >
                    <User className="w-6 h-6" />
                    <span className="hidden md:block">John Doe</span>
                  </motion.button>
                </div>
              ) : (
                <motion.a
                  href={bankingConfig.urls.onlineBanking}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  className="hidden md:flex items-center whitespace-nowrap px-6 py-2.5 bg-yellow-500 text-blue-900 font-medium hover:bg-yellow-400 transition-all duration-200 shadow-sharp hover:shadow-sharp-lg"
                >
                  <LogIn className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Online Banking</span>
                </motion.a>
              )}

              <motion.button 
                className="lg:hidden text-gray-700 hover:text-blue-900 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white shadow-sharp"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {Object.entries(menuItems).map(([key, { icon, path, items }]) => (
                  <div key={key} className="relative">
                    <motion.button
                      onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-all duration-200 shadow-sharp hover:shadow-sharp-lg ${
                        location.pathname.startsWith(path)
                          ? 'text-blue-900 bg-blue-50 font-semibold'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      <span className="flex items-center">
                        {icon}
                        <span className="ml-2">{key}</span>
                      </span>
                      <motion.div
                        animate={{ rotate: activeMenu === key ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeMenu === key && items && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 py-2 space-y-1 bg-gray-50"
                        >
                          {items.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                to={item.path}
                                className={`block px-3 py-2 text-base transition-all duration-200 shadow-sharp hover:shadow-sharp-lg ${
                                  location.pathname === item.path
                                    ? 'text-blue-900 bg-blue-50 font-semibold border-l-4 border-blue-900'
                                    : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="font-medium">{item.label}</div>
                                {item.description && (
                                  <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                {!isLoggedIn && (
                  <motion.button
                    onClick={handleLogin}
                    className="flex items-center justify-center w-full px-6 py-3 bg-yellow-500 text-blue-900 font-medium hover:bg-yellow-400 transition-all duration-200 mb-4 shadow-sharp"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogIn className="w-5 h-5 mr-2" />
                    <span>Online Banking</span>
                  </motion.button>
                )}
                
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent shadow-sharp"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-900 text-white hover:bg-blue-800 transition-colors duration-200 shadow-sharp"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <TwoFactorAuth
        isOpen={show2FA}
        onClose={() => setShow2FA(false)}
        onVerify={handle2FAVerify}
        method="sms"
      />
    </>
  );
};

export default EnhancedHeader;