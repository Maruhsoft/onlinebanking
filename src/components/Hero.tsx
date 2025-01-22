import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              You're Never Far From Home
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Experience banking that puts you first. With our nationwide presence and digital solutions,
              we're always by your side.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 flex items-center">
                Open Account <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="px-6 py-3 border border-white rounded-md hover:bg-blue-800">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
              alt="Happy family banking"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;