import React from 'react';
import EnhancedHero from '../components/enhanced/EnhancedHero';
import QuickLinks from '../components/QuickLinks';
import EnhancedServices from '../components/enhanced/EnhancedServices';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <div>
      <EnhancedHero />
      <QuickLinks />
      <EnhancedServices />
      <Features />
    </div>
  );
};

export default HomePage;