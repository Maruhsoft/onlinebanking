import React from 'react';
import { Routes, Route } from 'react-router-dom';

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

const SupportOverview = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Customer Support</h2>
      <p className="text-gray-700 mb-6">
        We're here to help. Find the support you need through our various channels.
      </p>
    </div>
  </div>
);

const FAQs = () => <div>FAQs Content</div>;
const BranchLocator = () => <div>Branch Locator Content</div>;
const SupportForms = () => <div>Support Forms Content</div>;
const LiveChat = () => <div>Live Chat Content</div>;

export default SupportPage;