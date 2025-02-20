import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Terms of Use</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4">
            These terms and conditions outline the rules and regulations for the use of FirstBank's website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Intellectual Property Rights</h2>
          <p className="text-gray-700 mb-4">
            Other than the content you own, under these terms, FirstBank and/or its licensors own all the intellectual property rights and materials contained in this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Restrictions</h2>
          <p className="text-gray-700 mb-4">
            You are specifically restricted from all of the following:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website contrary to applicable laws and regulations</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;