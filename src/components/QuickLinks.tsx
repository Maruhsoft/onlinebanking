import React from 'react';
import { CreditCard, Building, Phone, Users, FileText, DollarSign, Shield, Smartphone } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { 
      icon: <CreditCard className="w-6 h-6" />, 
      label: 'Open Account',
      description: 'Start banking with us'
    },
    { 
      icon: <Building className="w-6 h-6" />, 
      label: 'Find Branch',
      description: 'Locate nearest branch'
    },
    { 
      icon: <Smartphone className="w-6 h-6" />, 
      label: 'Mobile Banking',
      description: 'Bank on the go'
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      label: 'Security Center',
      description: 'Stay protected'
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      label: 'Apply for Loan',
      description: 'Quick approval process'
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      label: '24/7 Support',
      description: "We are here to help"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-blue-900">{link.icon}</div>
              </div>
              <span className="text-gray-900 font-semibold mb-1">{link.label}</span>
              <span className="text-sm text-gray-600 text-center">{link.description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;