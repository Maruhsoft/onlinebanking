import React from 'react';
import { Routes, Route } from 'react-router-dom';

const InvestmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Investment & Wealth</h1>
      <Routes>
        <Route index element={<InvestmentOverview />} />
        <Route path="fixed-deposits" element={<FixedDeposits />} />
        <Route path="treasury-bills" element={<TreasuryBills />} />
        <Route path="planning" element={<InvestmentPlanning />} />
        <Route path="advisory" element={<WealthAdvisory />} />
      </Routes>
    </div>
  );
};

const InvestmentOverview = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Investment Solutions</h2>
      <p className="text-gray-700 mb-6">
        Expert guidance and solutions to help you grow and protect your wealth.
      </p>
    </div>
  </div>
);

const FixedDeposits = () => <div>Fixed Deposits Content</div>;
const TreasuryBills = () => <div>Treasury Bills Content</div>;
const InvestmentPlanning = () => <div>Investment Planning Content</div>;
const WealthAdvisory = () => <div>Wealth Advisory Content</div>;

export default InvestmentPage;