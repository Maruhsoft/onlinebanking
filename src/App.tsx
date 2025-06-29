import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import EnhancedHeader from './components/enhanced/EnhancedHeader';
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
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import Dashboard from './components/enhanced/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <EnhancedHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<SearchPage />} />
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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;