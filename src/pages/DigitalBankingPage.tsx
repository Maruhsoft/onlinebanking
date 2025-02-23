import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Smartphone, Globe, MessageSquare } from 'lucide-react';

const DigitalBankingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Digital Banking</h1>
      <Routes>
        <Route index element={<DigitalBankingOverview />} />
        <Route path="internet" element={<InternetBanking />} />
        <Route path="mobile" element={<MobileApp />} />
        <Route path="support" element={<OnlineSupport />} />
      </Routes>
    </div>
  );
};

const DigitalBankingOverview = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Digital Banking Services</h2>
        <p className="text-gray-700 mb-6">
          Experience banking at your fingertips with our comprehensive digital banking solutions.
        </p>
        <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
          Get Started
        </button>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
          alt="Digital Banking"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <ServiceCard
        icon={<Globe />}
        title="Internet Banking"
        description="Secure online banking platform"
        link="/digital-banking/internet"
      />
      <ServiceCard
        icon={<Smartphone />}
        title="Mobile Banking"
        description="Banking on your mobile device"
        link="/digital-banking/mobile"
      />
      <ServiceCard
        icon={<MessageSquare />}
        title="Online Support"
        description="24/7 digital assistance"
        link="/digital-banking/support"
      />
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <div className="text-blue-900">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-blue-900 font-medium hover:text-blue-800">
      Learn More →
    </a>
  </div>
);

const InternetBanking = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Internet Banking</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Online Banking Features</h3>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>View account balances and transactions</li>
        <li>Make transfers and payments</li>
        <li>Pay bills and manage standing orders</li>
        <li>Apply for loans and cards</li>
        <li>Manage account settings</li>
      </ul>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Login to Internet Banking
      </button>
    </div>
  </div>
);

const MobileApp = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Mobile Banking App</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Bank on the Go</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Quick and secure login with biometrics</li>
            <li>Mobile check deposit</li>
            <li>Real-time account alerts</li>
            <li>Card controls and management</li>
            <li>Location-based services</li>
          </ul>
          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800">
              Download on App Store
            </button>
            <button className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800">
              Get it on Google Play
            </button>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400"
            alt="Mobile App"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

const OnlineSupport = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Online Support</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">24/7 Digital Assistance</h3>
      <p className="text-gray-700 mb-6">
        Get help anytime, anywhere with our digital support services:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-200 rounded">
          <h4 className="font-semibold mb-2">Live Chat</h4>
          <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
            Start Chat
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded">
          <h4 className="font-semibold mb-2">Virtual Assistant</h4>
          <p className="text-gray-600 mb-4">Get instant answers to common questions</p>
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
            Ask Assistant
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default DigitalBankingPage;