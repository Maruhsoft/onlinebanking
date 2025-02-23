import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelpCircle, MapPin, FileText, MessageSquare } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Support</h1>
      <Routes>
        <Route index element={<SupportOverview />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="branches" element={<BranchLocator />} />
        <Route path="forms" element={<SupportForms />} />
        <Route path="chat" element={<LiveChat />} />
      </Routes>
    </div>
  );
};

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

const SupportOverview = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Customer Support</h2>
        <p className="text-gray-700 mb-6">
          We're here to help. Find the support you need through our various channels.
        </p>
        <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
          Contact Us
        </button>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
          alt="Customer Support"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ServiceCard
        icon={<HelpCircle />}
        title="FAQs"
        description="Find answers quickly"
        link="/support/faqs"
      />
      <ServiceCard
        icon={<MapPin />}
        title="Branch Locator"
        description="Find nearest branch"
        link="/support/branches"
      />
      <ServiceCard
        icon={<FileText />}
        title="Forms"
        description="Download forms"
        link="/support/forms"
      />
      <ServiceCard
        icon={<MessageSquare />}
        title="Live Chat"
        description="Chat with us"
        link="/support/chat"
      />
    </div>
  </div>
);

const FAQs = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {[
        {
          question: 'How do I open an account?',
          answer: 'You can open an account online or visit any of our branches with valid identification.'
        },
        {
          question: 'How do I reset my online banking password?',
          answer: 'Click on the "Forgot Password" link on the login page and follow the instructions.'
        },
        {
          question: 'What are your banking hours?',
          answer: 'Our branches are open Monday to Friday, 8:00 AM to 4:00 PM.'
        }
      ].map((faq, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

const BranchLocator = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Branch Locator</h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your location"
          className="w-full px-4 py-2 border rounded"
        />
      </div>
      <div className="h-96 bg-gray-100 rounded mb-6">
        {/* Map component would go here */}
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-600">Map View</p>
        </div>
      </div>
      <div className="space-y-4">
        {[
          {
            name: 'Main Branch',
            address: '123 Banking Street',
            hours: '8:00 AM - 4:00 PM'
          },
          {
            name: 'Downtown Branch',
            address: '456 Finance Avenue',
            hours: '8:00 AM - 4:00 PM'
          }
        ].map((branch, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h3 className="font-semibold">{branch.name}</h3>
            <p className="text-gray-600">{branch.address}</p>
            <p className="text-gray-600">{branch.hours}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SupportForms = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Support Forms</h2>
    <div className="grid gap-6">
      {[
        'Account Opening Form',
        'Card Replacement Form',
        'Address Change Form',
        'Standing Order Form',
        'Complaint Form'
      ].map((form, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
          <span className="text-gray-700">{form}</span>
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">
            Download
          </button>
        </div>
      ))}
    </div>
  </div>
);

const LiveChat = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Live Chat Support</h2>
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-8">
        <MessageSquare className="w-16 h-16 text-blue-900 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Start a Conversation</h3>
        <p className="text-gray-600 mb-6">
          Our support team is available 24/7 to assist you
        </p>
        <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
          Start Chat
        </button>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-semibold mb-4">Other Ways to Contact Us</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded">
            <h5 className="font-semibold mb-2">Phone Support</h5>
            <p className="text-gray-600">1-800-FIRSTBANK</p>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <h5 className="font-semibold mb-2">Email Support</h5>
            <p className="text-gray-600">support@firstbank.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SupportPage;