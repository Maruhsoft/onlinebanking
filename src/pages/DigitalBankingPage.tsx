import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Digital Banking Services</h2>
      <p className="text-gray-700 mb-6">
        Experience convenient and secure banking at your fingertips.
      </p>
    </div>
  </div>
);

const InternetBanking = () => <div>Internet Banking Content</div>;
const MobileApp = () => <div>Mobile App Content</div>;
const OnlineSupport = () => <div>Online Support Content</div>;

export default DigitalBankingPage;