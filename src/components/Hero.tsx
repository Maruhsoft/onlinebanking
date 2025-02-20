import React from 'react';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';
import siteConfig from '../data/siteConfig.json';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=2000"
          alt="Banking background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-800 bg-opacity-50 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure & Trusted Banking</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Banking Made Simple, <br />
              <span className="text-yellow-400">Secure, and Smart</span>
            </h1>
            <p className="text-lg mb-8 text-blue-100 max-w-xl">
              Experience next-generation banking with advanced security, 
              real-time transactions, and personalized services tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={siteConfig.urls.openAccount}
                className="px-6 py-3 bg-yellow-500 text-blue-900 rounded-md hover:bg-yellow-400 transition-colors duration-200 font-semibold shadow-lg flex items-center"
              >
                Open Account <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/about"
                className="px-6 py-3 border-2 border-white rounded-md hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Digital banking"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Banking</p>
                    <p className="text-sm text-gray-600">Always available</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white text-blue-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Globe className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Global Access</p>
                    <p className="text-sm text-gray-600">Bank anywhere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Indicators */}
      <div className="relative border-t border-blue-800 bg-blue-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <img src={siteConfig.images.partners.bankOfEngland} alt="Bank of England" className="h-12 opacity-75" />
            </div>
            <div className="flex items-center justify-center">
              <img src={siteConfig.images.partners.visa} alt="Visa" className="h-8 opacity-75" />
            </div>
            <div className="flex items-center justify-center">
              <img src={siteConfig.images.partners.mastercard} alt="Mastercard" className="h-8 opacity-75" />
            </div>
            <div className="flex items-center justify-center">
              <img src={siteConfig.images.partners.bitcoin} alt="Bitcoin" className="h-8 opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;