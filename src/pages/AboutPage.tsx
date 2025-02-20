import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">About FirstBank</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Heritage</h2>
          <p className="text-gray-700 mb-6">
            Since 1894, FirstBank has been a pioneer in banking services, setting standards for financial excellence in Nigeria and across Africa. Our journey spans over 130 years of dedicated service, innovation, and unwavering commitment to our customers.
          </p>
          <p className="text-gray-700 mb-6">
            As Nigeria's premier and leading financial services provider, FirstBank has distinguished itself as a brand of strength and dynamism, with a rich heritage of excellent customer service and innovative banking solutions.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            alt="FirstBank Building"
            className="rounded-lg shadow-lg mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;