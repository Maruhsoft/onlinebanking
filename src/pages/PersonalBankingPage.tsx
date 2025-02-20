import React from 'react';
import { Routes, Route } from 'react-router-dom';

const PersonalBankingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Personal Banking</h1>
      <Routes>
        <Route index element={<PersonalBankingOverview />} />
        <Route path="accounts" element={<AccountTypes />} />
        <Route path="cards" element={<Cards />} />
        <Route path="loans" element={<Loans />} />
        <Route path="open-account" element={<OpenAccount />} />
        <Route path="manage" element={<ManageFinances />} />
        <Route path="help" element={<HelpResources />} />
      </Routes>
    </div>
  );
};

const PersonalBankingOverview = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Welcome to Personal Banking</h2>
      <p className="text-gray-700 mb-6">
        Discover a wide range of personal banking solutions designed to meet your financial needs.
      </p>
    </div>
  </div>
);

const AccountTypes = () => <div>Account Types Content</div>;
const Cards = () => <div>Cards Content</div>;
const Loans = () => <div>Loans Content</div>;
const OpenAccount = () => <div>Open Account Content</div>;
const ManageFinances = () => <div>Manage Finances Content</div>;
const HelpResources = () => <div>Help Resources Content</div>;

export default PersonalBankingPage;