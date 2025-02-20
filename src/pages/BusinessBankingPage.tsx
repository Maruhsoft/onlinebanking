import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Building2, Users, FileText, BookOpen } from 'lucide-react';

const BusinessBankingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Business Banking</h1>
      <Routes>
        <Route index element={<BusinessBankingOverview />} />
        <Route path="sme" element={<SMEBanking />} />
        <Route path="corporate" element={<CorporateAccounts />} />
        <Route path="forms" element={<BusinessForms />} />
        <Route path="resources" element={<BusinessResources />} />
      </Routes>
    </div>
  );
};

const BusinessBankingOverview = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Business Banking Solutions</h2>
        <p className="text-gray-700 mb-6">
          Comprehensive banking solutions designed to help your business grow and succeed in today's competitive market.
        </p>
        <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
          Get Started
        </button>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
          alt="Business Banking"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ServiceCard
        icon={<Building2 />}
        title="SME Banking"
        description="Tailored solutions for small and medium enterprises"
        link="/business-banking/sme"
      />
      <ServiceCard
        icon={<Users />}
        title="Corporate Banking"
        description="Comprehensive solutions for large corporations"
        link="/business-banking/corporate"
      />
      <ServiceCard
        icon={<FileText />}
        title="Business Forms"
        description="Access all necessary business banking forms"
        link="/business-banking/forms"
      />
      <ServiceCard
        icon={<BookOpen />}
        title="Resources"
        description="Helpful guides and business resources"
        link="/business-banking/resources"
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

const SMEBanking = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">SME Banking Solutions</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Growing Your Business</h3>
      <p className="text-gray-700 mb-4">
        Our SME banking solutions are designed to help small and medium enterprises thrive. We offer:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Business current accounts with competitive rates</li>
        <li>Flexible business loans and overdrafts</li>
        <li>Point of Sale (POS) terminals</li>
        <li>Business advisory services</li>
        <li>Online and mobile banking</li>
      </ul>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Apply Now
      </button>
    </div>
  </div>
);

const CorporateAccounts = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Corporate Banking</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Corporate Solutions</h3>
      <p className="text-gray-700 mb-4">
        Comprehensive banking solutions for large corporations, including:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Corporate current accounts</li>
        <li>Trade finance facilities</li>
        <li>International banking services</li>
        <li>Treasury management</li>
        <li>Corporate advisory services</li>
      </ul>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Contact Us
      </button>
    </div>
  </div>
);

const BusinessForms = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Business Forms</h2>
    <div className="grid gap-6">
      {[
        'Account Opening Form',
        'Business Loan Application',
        'Trade Finance Application',
        'Corporate Internet Banking Form',
        'Direct Debit Mandate'
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

const BusinessResources = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Business Resources</h2>
    <div className="grid gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Business Guides</h3>
        <div className="space-y-4">
          {[
            'Starting a Business in Nigeria',
            'Business Planning Template',
            'Financial Management Guide',
            'Tax Compliance Guide',
            'Import/Export Procedures'
          ].map((guide, index) => (
            <div key={index} className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-blue-900" />
              <a href="#" className="text-gray-700 hover:text-blue-900">
                {guide}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BusinessBankingPage;