import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information that you provide directly to us, information we obtain automatically when you visit our website, and information from other sources.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, to communicate with you, and to personalize your experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Information Sharing and Security</h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your personal information to third parties. We maintain appropriate physical, technical, and administrative safeguards to protect your information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;