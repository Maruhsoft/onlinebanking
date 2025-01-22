import React from 'react';
import { CreditCard, Building, Phone, Users, FileText, DollarSign } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { icon: <CreditCard className="w-6 h-6" />, label: 'Open Account' },
    { icon: <Building className="w-6 h-6" />, label: 'Agent Banking' },
    { icon: <Phone className="w-6 h-6" />, label: 'Contact us' },
    { icon: <Users className="w-6 h-6" />, label: 'Annual Report' },
    { icon: <FileText className="w-6 h-6" />, label: 'Loan Calculator' },
    { icon: <DollarSign className="w-6 h-6" />, label: 'Corporate Banking' }
  ];

  return (
    <div className="bg-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="flex flex-col items-center text-white hover:text-yellow-400 transition-colors"
            >
              <div className="mb-2">{link.icon}</div>
              <span className="text-sm text-center">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;