import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreditCard, Wallet, PiggyBank, UserPlus, LineChart, HelpCircle } from 'lucide-react';
import bankingConfig from '../data/bankingConfig.json';

const PersonalBankingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Personal Banking</h1>
      <Routes>
        <Route index element={<PersonalBankingOverview />} />
        <Route path="accounts" element={<AccountTypes />} />
        <Route path="cards" element={<Cards />} />
        <Route path="loans" element={<Loans />} />
        <Route path="open-account" element={<OpenAccount />} />
        <Route path="manage" element={<ManageFinances />} />
        <Route path="help" element={<HelpResources />} />
      </Routes>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, link }) => (
  <div className="bg-white p-6 shadow-sharp hover:shadow-sharp-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4 shadow-sharp">
      <div className="text-blue-900">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-blue-900 font-medium hover:text-blue-800">
      Learn More →
    </a>
  </div>
);

const PersonalBankingOverview = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Welcome to Personal Banking</h2>
        <p className="text-gray-700 mb-6">
          Discover our comprehensive range of personal banking solutions designed to meet your financial needs.
        </p>
        <a href={bankingConfig.urls.openAccount} className="inline-block bg-yellow-500 text-blue-900 px-6 py-2 font-medium hover:bg-yellow-400 shadow-sharp">
          Open Account
        </a>
      </div>
      <div>
        <img 
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
          alt="Personal Banking"
          className="shadow-sharp-lg"
        />
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard
        icon={<Wallet />}
        title="Account Types"
        description="Choose from our range of accounts"
        link="/personal-banking/accounts"
      />
      <ServiceCard
        icon={<CreditCard />}
        title="Cards"
        description="Credit and debit card options"
        link="/personal-banking/cards"
      />
      <ServiceCard
        icon={<PiggyBank />}
        title="Loans"
        description="Personal loan solutions"
        link="/personal-banking/loans"
      />
      <ServiceCard
        icon={<UserPlus />}
        title="Open Account"
        description="Start banking with us"
        link="/personal-banking/open-account"
      />
      <ServiceCard
        icon={<LineChart />}
        title="Manage Finances"
        description="Tools to manage your money"
        link="/personal-banking/manage"
      />
      <ServiceCard
        icon={<HelpCircle />}
        title="Help & Resources"
        description="Get support and guidance"
        link="/personal-banking/help"
      />
    </div>
  </div>
);

const AccountTypes = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Account Types</h2>
    <div className="grid gap-6">
      {[
        {
          title: 'Savings Account',
          features: ['Competitive interest rates', 'No minimum balance', 'Mobile banking access'],
          rate: '3.5%'
        },
        {
          title: 'Current Account',
          features: ['Free checkbook', 'Overdraft facility', 'Business banking tools'],
          rate: '0.5%'
        },
        {
          title: 'Student Account',
          features: ['No monthly fees', 'Student discounts', 'Educational resources'],
          rate: '2.0%'
        }
      ].map((account, index) => (
        <div key={index} className="bg-white shadow-sharp p-6">
          <h3 className="text-xl font-semibold mb-4">{account.title}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="list-disc pl-6 text-gray-700">
                {account.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900">{account.rate}</p>
              <p className="text-gray-600">Interest Rate</p>
              <a href={bankingConfig.urls.openAccount} className="inline-block mt-4 bg-yellow-500 text-blue-900 px-6 py-2 font-medium hover:bg-yellow-400 shadow-sharp">
                Open Account
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Cards = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Cards</h2>
    <div className="grid gap-6">
      {[
        {
          title: 'Classic Credit Card',
          features: ['0% APR on purchases', 'No annual fee', 'Rewards program'],
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: 'Premium Credit Card',
          features: ['Travel insurance', 'Airport lounge access', 'Concierge service'],
          image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: 'Debit Card',
          features: ['Worldwide acceptance', 'Contactless payments', 'Online shopping'],
          image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&q=80&w=800"
        }
      ].map((card, index) => (
        <div key={index} className="bg-white shadow-sharp p-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <img src={card.image} alt={card.title} className="w-full h-auto shadow-sharp" />
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href={bankingConfig.urls.applyCard}
                className="inline-block bg-yellow-500 text-blue-900 px-6 py-2 font-medium hover:bg-yellow-400 shadow-sharp"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Loans = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Personal Loans</h2>
    <div className="grid gap-6">
      {[
        {
          title: 'Personal Loan',
          rate: '12.5%',
          term: 'Up to 5 years',
          features: ['Quick approval', 'Flexible repayment', 'No collateral required']
        },
        {
          title: 'Home Loan',
          rate: '8.5%',
          term: 'Up to 30 years',
          features: ['Competitive rates', 'Property insurance', 'Tax benefits']
        },
        {
          title: 'Auto Loan',
          rate: '10.5%',
          term: 'Up to 7 years',
          features: ['Quick processing', 'Flexible tenure', 'Attractive interest rates']
        }
      ].map((loan, index) => (
        <div key={index} className="bg-white shadow-sharp p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
              <p className="text-gray-600">Starting from</p>
              <p className="text-3xl font-bold text-blue-900">{loan.rate}</p>
              <p className="text-gray-600">{loan.term}</p>
            </div>
            <div className="md:col-span-2">
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                {loan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href={bankingConfig.urls.applyLoan} className="inline-block bg-yellow-500 text-blue-900 px-6 py-2 font-medium hover:bg-yellow-400 shadow-sharp">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OpenAccount = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Open an Account</h2>
    <div className="bg-white shadow-sharp p-6">
      <form className="space-y-6" action={bankingConfig.urls.submitApplication} method="POST">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">First Name</label>
            <input type="text" className="w-full px-4 py-2 border shadow-sharp" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input type="text" className="w-full px-4 py-2 border shadow-sharp" />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input type="email" className="w-full px-4 py-2 border shadow-sharp" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input type="tel" className="w-full px-4 py-2 border shadow-sharp" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Account Type</label>
          <select className="w-full px-4 py-2 border shadow-sharp">
            <option>Savings Account</option>
            <option>Current Account</option>
            <option>Student Account</option>
          </select>
        </div>
        <button type="submit" className="bg-yellow-500 text-blue-900 px-6 py-2 font-medium hover:bg-yellow-400 shadow-sharp">
          Submit Application
        </button>
      </form>
    </div>
  </div>
);

const ManageFinances = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Manage Your Finances</h2>
    <div className="grid gap-6">
      <div className="bg-white shadow-sharp p-6">
        <h3 className="text-xl font-semibold mb-4">Financial Tools</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 shadow-sharp">
            <h4 className="font-semibold mb-2">Budgeting Tools</h4>
            <p className="text-gray-600 mb-4">Track your spending and set budgets</p>
            <a href={bankingConfig.urls.budgetingTools} className="inline-block bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 shadow-sharp">
              Start Budgeting
            </a>
          </div>
          <div className="p-4 border border-gray-200 shadow-sharp">
            <h4 className="font-semibold mb-2">Savings Goals</h4>
            <p className="text-gray-600 mb-4">Set and track your savings targets</p>
            <a href={bankingConfig.urls.savingsGoals} className="inline-block bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 shadow-sharp">
              Set Goals
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HelpResources = () => (
  <div className="max-w-4xl">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Help & Resources</h2>
    <div className="grid gap-6">
      <div className="bg-white shadow-sharp p-6">
        <h3 className="text-xl font-semibold mb-4">Support Resources</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 shadow-sharp">
            <h4 className="font-semibold mb-2">FAQs</h4>
            <p className="text-gray-600 mb-4">Find answers to common questions</p>
            <a href={bankingConfig.urls.faqs} className="inline-block bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 shadow-sharp">
              View FAQs
            </a>
          </div>
          <div className="p-4 border border-gray-200 shadow-sharp">
            <h4 className="font-semibold mb-2">Contact Support</h4>
            <p className="text-gray-600 mb-4">Get help from our support team</p>
            <a href={bankingConfig.urls.support} className="inline-block bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 shadow-sharp">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PersonalBankingPage;