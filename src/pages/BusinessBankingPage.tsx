import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Business Banking Solutions</h2>
      <p className="text-gray-700 mb-6">
        Comprehensive banking solutions to help your business grow and succeed.
      </p>
    </div>
  </div>
);

const SMEBanking = () => <div>SME Banking Content</div>;
const CorporateAccounts = () => <div>Corporate Accounts Content</div>;
const BusinessForms = () => <div>Business Forms Content</div>;
const BusinessResources = () => <div>Business Resources Content</div>;

export default BusinessBankingPage;