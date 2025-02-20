import React from 'react';
import { CreditCard, Building2, Smartphone, PiggyBank, Users, HeadphonesIcon } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-blue-900" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'Cards & Payments',
      description: 'Secure and convenient payment solutions for your everyday needs.'
    },
    {
      icon: Building2,
      title: 'Business Banking',
      description: 'Comprehensive solutions to help your business grow and succeed.'
    },
    {
      icon: Smartphone,
      title: 'Digital Banking',
      description: 'Bank anytime, anywhere with our advanced mobile and online services.'
    },
    {
      icon: PiggyBank,
      title: 'Savings & Investments',
      description: 'Expert guidance to help you grow and protect your wealth.'
    },
    {
      icon: Users,
      title: 'Personal Banking',
      description: 'Tailored solutions for your personal financial journey.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your banking needs.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of banking solutions designed to meet your financial needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;