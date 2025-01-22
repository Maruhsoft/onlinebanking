import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import QuickLinks from './components/QuickLinks';
import AboutContent from './components/AboutContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <QuickLinks />
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;