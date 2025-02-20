import React from 'react';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import Services from '../components/Services';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuickLinks />
      <Services />
      <Features />
    </div>
  );
};

export default HomePage;