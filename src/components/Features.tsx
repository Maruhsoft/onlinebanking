import React from 'react';
import { Calculator, MapPin, MessageSquare } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access powerful tools and features to manage your finances effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Loan Calculator */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <Calculator className="text-blue-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Loan Calculator</h3>
            <p className="text-gray-600 mb-4">
              Calculate your monthly payments and see how much you can borrow.
            </p>
            <button className="text-blue-900 font-medium hover:text-blue-700">
              Calculate Now →
            </button>
          </div>

          {/* Branch Locator */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <MapPin className="text-blue-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Branch Locator</h3>
            <p className="text-gray-600 mb-4">
              Find the nearest branch or ATM in your area.
            </p>
            <button className="text-blue-900 font-medium hover:text-blue-700">
              Find Location →
            </button>
          </div>

          {/* Live Chat */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <MessageSquare className="text-blue-900" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Chat Support</h3>
            <p className="text-gray-600 mb-4">
              Get instant help from our customer service team.
            </p>
            <button className="text-blue-900 font-medium hover:text-blue-700">
              Start Chat →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;