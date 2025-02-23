import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PiggyBank, Landmark, LineChart, Users } from 'lucide-react';

const InvestmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Investment & Wealth</h1>
      <Routes>
        <Route index element={<InvestmentOverview />} />
        <Route path="fixed-deposits" element={<FixedDeposits />} />
        <Route path="treasury-bills" element={<TreasuryBills />} />
        <Route path="planning" element={<InvestmentPlanning />} />
        <Route path="advisory" element={<WealthAdvisory />} />
      </Routes>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <div className="text-blue-900">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-blue-900 font-medium hover:text-blue-800">
      Learn More →
    </a>
  </div>
);

const InvestmentOverview = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Investment Solutions</h2>
        <p className="text-gray-700 mb-6">
          Grow and protect your wealth with our comprehensive investment solutions and expert guidance.
        </p>
        <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
          Start Investing
        </button>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
          alt="Investment Solutions"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ServiceCard
        icon={<PiggyBank />}
        title="Fixed Deposits"
        description="Secure returns with fixed deposits"
        link="/investment-wealth/fixed-deposits"
      />
      <ServiceCard
        icon={<Landmark />}
        title="Treasury Bills"
        description="Government-backed securities"
        link="/investment-wealth/treasury-bills"
      />
      <ServiceCard
        icon={<LineChart />}
        title="Investment Planning"
        description="Personalized investment strategies"
        link="/investment-wealth/planning"
      />
      <ServiceCard
        icon={<Users />}
        title="Wealth Advisory"
        description="Expert financial guidance"
        link="/investment-wealth/advisory"
      />
    </div>
  </div>
);

const FixedDeposits = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Fixed Deposits</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Secure Your Savings</h3>
      <p className="text-gray-700 mb-6">
        Earn competitive interest rates with our fixed deposit accounts:
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { term: '30 Days', rate: '3.5%' },
          { term: '90 Days', rate: '4.0%' },
          { term: '180 Days', rate: '4.5%' },
        ].map((option, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 text-center">
            <h4 className="font-semibold mb-2">{option.term}</h4>
            <p className="text-2xl text-blue-900 font-bold">{option.rate}</p>
            <p className="text-gray-600">Interest Rate</p>
          </div>
        ))}
      </div>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Open Fixed Deposit
      </button>
    </div>
  </div>
);

const TreasuryBills = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Treasury Bills</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Government Securities</h3>
      <p className="text-gray-700 mb-6">
        Invest in government-backed securities with competitive yields:
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          { term: '91 Days', yield: '5.0%' },
          { term: '182 Days', yield: '5.5%' },
          { term: '364 Days', yield: '6.0%' },
        ].map((bill, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 text-center">
            <h4 className="font-semibold mb-2">{bill.term}</h4>
            <p className="text-2xl text-blue-900 font-bold">{bill.yield}</p>
            <p className="text-gray-600">Yield Rate</p>
          </div>
        ))}
      </div>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Invest Now
      </button>
    </div>
  </div>
);

const InvestmentPlanning = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Investment Planning</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Personalized Investment Strategies</h3>
      <p className="text-gray-700 mb-6">
        Our investment planning services help you achieve your financial goals:
      </p>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Comprehensive financial assessment</li>
        <li>Goal-based investment planning</li>
        <li>Risk profiling and portfolio allocation</li>
        <li>Regular portfolio review and rebalancing</li>
        <li>Tax-efficient investment strategies</li>
      </ul>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Schedule Consultation
      </button>
    </div>
  </div>
);

const WealthAdvisory = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Wealth Advisory</h2>
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Expert Financial Guidance</h3>
      <p className="text-gray-700 mb-6">
        Our wealth advisory services provide comprehensive financial guidance:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 rounded p-4">
          <h4 className="font-semibold mb-2">Private Banking</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Dedicated relationship manager</li>
            <li>Exclusive banking services</li>
            <li>Preferential rates</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded p-4">
          <h4 className="font-semibold mb-2">Wealth Management</h4>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Portfolio management</li>
            <li>Estate planning</li>
            <li>Succession planning</li>
          </ul>
        </div>
      </div>
      <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400">
        Contact Advisor
      </button>
    </div>
  </div>
);

export default InvestmentPage;