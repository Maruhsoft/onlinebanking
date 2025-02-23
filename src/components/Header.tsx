import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Menu, X, Home, CreditCard, Building2, Smartphone, PiggyBank, HelpCircle, Lock, LogIn } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

interface MenuItem {
  label: string;
  path: string;
  items?: Array<{
    label: string;
    path: string;
  }>;
  icon?: React.ReactNode;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [sessionTime, setSessionTime] = useState('00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setSessionTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const menuItems: Record<string, MenuItem> = {
    'Personal Banking': {
      icon: <Home className="w-5 h-5" />,
      path: '/personal-banking',
      items: [
        { label: 'Account Types', path: '/personal-banking/accounts' },
        { label: 'Cards (Credit/Debit)', path: '/personal-banking/cards' },
        { label: 'Loans', path: '/personal-banking/loans' },
        { label: 'Open an Account', path: '/personal-banking/open-account' },
        { label: 'Manage Finances', path: '/personal-banking/manage' },
        { label: 'Help and Resources', path: '/personal-banking/help' }
      ]
    },
    'Business Banking': {
      icon: <Building2 className="w-5 h-5" />,
      path: '/business-banking',
      items: [
        { label: 'SME Banking', path: '/business-banking/sme' },
        { label: 'Corporate Accounts', path: '/business-banking/corporate' },
        { label: 'Forms', path: '/business-banking/forms' },
        { label: 'Business Resources', path: '/business-banking/resources' }
      ]
    },
    'Digital Banking': {
      icon: <Smartphone className="w-5 h-5" />,
      path: '/digital-banking',
      items: [
        { label: 'Internet Banking', path: '/digital-banking/internet' },
        { label: 'Mobile App', path: '/digital-banking/mobile' },
        { label: 'Online Chat Support', path: '/digital-banking/support' }
      ]
    },
    'Investment & Wealth': {
      icon: <PiggyBank className="w-5 h-5" />,
      path: '/investment-wealth',
      items: [
        { label: 'Fixed Deposits', path: '/investment-wealth/fixed-deposits' },
        { label: 'Treasury Bills', path: '/investment-wealth/treasury-bills' },
        { label: 'Investment Planning', path: '/investment-wealth/planning' },
        { label: 'Wealth Advisory', path: '/investment-wealth/advisory' }
      ]
    },
    'Support': {
      icon: <HelpCircle className="w-5 h-5" />,
      path: '/support',
      items: [
        { label: 'FAQs', path: '/support/faqs' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'Branch Locator', path: '/support/branches' },
        { label: 'Forms', path: '/support/forms' },
        { label: 'Online Chat Support', path: '/support/chat' }
      ]
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
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

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Security Banner */}
      <div className="bg-blue-900 text-white py-1 px-4 text-sm flex justify-between items-center">
        <div className="flex items-center">
          <Lock className="w-4 h-4 mr-2" />
          <span>Secure Connection</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Session Time: {sessionTime}</span>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>SSL Encrypted</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <CreditCard className="w-8 h-8 text-blue-900" />
              <span className="text-xl font-bold text-blue-900">{siteConfig.siteName}</span>
            </Link>
            
            {/* Desktop Navigation */}
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
                    className={`flex items-center space-x-1 py-2 px-3 rounded-md transition-colors duration-200 ${
                      location.pathname.startsWith(path)
                        ? 'text-blue-900 font-semibold bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                  >
                    <span className="flex items-center">
                      {icon}
                      <span className="ml-1">{key}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === key ? 'rotate-180' : ''
                    }`} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {activeMenu === key && items && (
                    <div 
                      className="absolute z-50 left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 animate-fadeIn border border-gray-100"
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            location.pathname === item.path
                              ? 'text-blue-900 bg-blue-50 font-semibold'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 text-white rounded-r hover:bg-blue-800 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            <a
              href={siteConfig.urls.onlineBanking}
              className="hidden md:flex items-center whitespace-nowrap px-6 py-2.5 bg-yellow-500 text-blue-900 rounded-md font-medium hover:bg-yellow-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <LogIn className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>Online Banking</span>
            </a>
            <button 
              className="lg:hidden text-gray-700 hover:text-blue-900 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(menuItems).map(([key, { icon, path, items }]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname.startsWith(path)
                      ? 'text-blue-900 bg-blue-50 font-semibold'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                >
                  <span className="flex items-center">
                    {icon}
                    <span className="ml-2">{key}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      activeMenu === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {activeMenu === key && items && (
                  <div className="pl-4 py-2 space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-3 py-2 text-base transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-blue-900 bg-blue-50 font-semibold'
                            : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <a
              href={siteConfig.urls.onlineBanking}
              className="flex items-center justify-center w-full px-6 py-3 bg-yellow-500 text-blue-900 rounded-md font-medium hover:bg-yellow-400 transition-all duration-200 mb-4"
            >
              <LogIn className="w-5 h-5 mr-2" />
              <span>Online Banking</span>
            </a>
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 text-white rounded-r hover:bg-blue-800 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;