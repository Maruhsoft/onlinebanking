import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X, Home, CreditCard, Building2, Smartphone, PiggyBank, HelpCircle } from 'lucide-react';

interface MenuItem {
  label: string;
  items?: string[];
  icon?: React.ReactNode;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems: Record<string, MenuItem> = {
    'Personal Banking': {
      icon: <Home className="w-5 h-5" />,
      items: [
        'Account Types',
        'Cards (Credit/Debit)',
        'Loans',
        'Open an Account',
        'Manage Finances',
        'Help and Resources'
      ]
    },
    'Business Banking': {
      icon: <Building2 className="w-5 h-5" />,
      items: [
        'SME Banking',
        'Corporate Accounts',
        'Forms',
        'Business Resources'
      ]
    },
    'Digital Banking': {
      icon: <Smartphone className="w-5 h-5" />,
      items: [
        'Internet Banking',
        'Mobile App',
        'Online Chat Support'
      ]
    },
    'Investment & Wealth': {
      icon: <PiggyBank className="w-5 h-5" />,
      items: [
        'Fixed Deposits',
        'Treasury Bills',
        'Investment Planning',
        'Wealth Advisory'
      ]
    },
    'Support': {
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        'FAQs',
        'Contact Us',
        'Branch Locator',
        'Forms',
        'Online Chat Support'
      ]
    }
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top navigation */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-8 h-8 text-blue-900" />
              <span className="text-xl font-bold text-blue-900">FirstBank</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {Object.entries(menuItems).map(([key, { icon }]) => (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 py-2">
                    <span className="flex items-center">
                      {icon}
                      <span className="ml-1">{key}</span>
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeMenu === key && (
                    <div className="absolute z-50 left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 animate-fadeIn">
                      {menuItems[key].items?.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center text-gray-600 hover:text-blue-900">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded font-medium hover:bg-yellow-400">
              Online Banking
            </button>
            <button 
              className="lg:hidden text-gray-700"
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
            {Object.entries(menuItems).map(([key, { icon, items }]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                >
                  <span className="flex items-center">
                    {icon}
                    <span className="ml-2">{key}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      activeMenu === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {activeMenu === key && (
                  <div className="pl-4 py-2 space-y-1">
                    {items?.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-3 py-2 text-base text-gray-600 hover:text-blue-900 hover:bg-blue-50"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="ml-2 w-full bg-transparent border-none focus:ring-0 text-gray-600 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;