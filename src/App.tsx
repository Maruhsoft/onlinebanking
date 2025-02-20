import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import PersonalBankingPage from './pages/PersonalBankingPage';
import BusinessBankingPage from './pages/BusinessBankingPage';
import DigitalBankingPage from './pages/DigitalBankingPage';
import InvestmentPage from './pages/InvestmentPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/personal-banking/*" element={<PersonalBankingPage />} />
            <Route path="/business-banking/*" element={<BusinessBankingPage />} />
            <Route path="/digital-banking/*" element={<DigitalBankingPage />} />
            <Route path="/investment-wealth/*" element={<InvestmentPage />} />
            <Route path="/support/*" element={<SupportPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;