import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft, Plus, Zap, Target, Award } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import SpendingChart from '../ui/SpendingChart';
import TransactionFlow from '../ui/TransactionFlow';
import { AccountIcon, TransferIcon, PaymentIcon } from '../ui/BankingIcons';

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState('savings');

  const accounts = {
    savings: {
      name: 'FirstSave Account',
      balance: 24500,
      accountNumber: '0123456789',
      change: 12.5,
      changeType: 'increase'
    },
    current: {
      name: 'FirstCurrent Account',
      balance: 8500,
      accountNumber: '0987654321',
      change: -3.2,
      changeType: 'decrease'
    }
  };

  const recentTransactions = [
    {
      id: '1',
      type: 'credit',
      description: 'Salary Payment',
      amount: 4500,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'debit',
      description: 'Grocery Shopping',
      amount: -250,
      date: '2024-01-14',
      status: 'completed'
    },
    {
      id: '3',
      type: 'debit',
      description: 'Utility Bills',
      amount: -750,
      date: '2024-01-13',
      status: 'completed'
    },
    {
      id: '4',
      type: 'transfer',
      description: 'Transfer to John Doe',
      amount: -1000,
      date: '2024-01-12',
      status: 'processing'
    }
  ];

  const spendingData = [
    { category: 'Food & Dining', amount: 1500, color: '#FF6B6B', percentage: 30 },
    { category: 'Transportation', amount: 1000, color: '#4ECDC4', percentage: 20 },
    { category: 'Shopping', amount: 1250, color: '#45B7D1', percentage: 25 },
    { category: 'Bills & Utilities', amount: 750, color: '#96CEB4', percentage: 15 },
    { category: 'Entertainment', amount: 500, color: '#FFEAA7', percentage: 10 }
  ];

  const transactionSteps = [
    { id: '1', title: 'Transaction Initiated', status: 'completed', timestamp: '10:30 AM' },
    { id: '2', title: 'Security Verification', status: 'completed', timestamp: '10:31 AM' },
    { id: '3', title: 'Processing Payment', status: 'processing', timestamp: '10:32 AM' },
    { id: '4', title: 'Transaction Complete', status: 'pending' }
  ];

  const currentAccount = accounts[selectedAccount];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Math.abs(amount));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
              <p className="text-gray-600">Here's what's happening with your accounts today.</p>
            </div>
            <motion.div
              className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 shadow-sharp"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">All Systems Operational</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Account Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-blue-900 to-blue-800 p-6 text-white shadow-sharp-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 border border-white"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-100 mb-1">Total Balance</h3>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl font-bold">
                      {showBalance ? (
                        <AnimatedCounter
                          value={Object.values(accounts).reduce((sum, acc) => sum + acc.balance, 0)}
                          prefix="$"
                          className="text-white"
                        />
                      ) : (
                        '$••••••••'
                      )}
                    </div>
                    <motion.button
                      onClick={() => setShowBalance(!showBalance)}
                      className="p-2 hover:bg-blue-800 transition-colors shadow-sharp"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
                    </motion.button>
                  </div>
                </div>
                <div className="text-right">
                  <motion.div 
                    className="flex items-center text-green-400 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp size={16} className="mr-1" />
                    <span className="text-sm">+5.2%</span>
                  </motion.div>
                  <p className="text-xs text-blue-200">vs last month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(accounts).map(([key, account]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedAccount(key)}
                    className={`p-4 transition-all duration-200 text-left shadow-sharp hover:shadow-sharp-lg ${
                      selectedAccount === key
                        ? 'bg-white bg-opacity-20 border-2 border-white border-opacity-50'
                        : 'bg-white bg-opacity-10 hover:bg-opacity-15'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{account.name}</h4>
                      <AccountIcon className="w-5 h-5" />
                    </div>
                    <div className="text-xl font-bold mb-1">
                      {showBalance ? formatCurrency(account.balance) : '$••••••'}
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-blue-200">••••{account.accountNumber.slice(-4)}</span>
                      <div className={`ml-auto flex items-center ${
                        account.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {account.changeType === 'increase' ? (
                          <TrendingUp size={12} className="mr-1" />
                        ) : (
                          <TrendingDown size={12} className="mr-1" />
                        )}
                        <span>{Math.abs(account.change)}%</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Quick Actions */}
          <motion.div
            className="bg-white p-6 shadow-sharp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { icon: <TransferIcon className="w-5 h-5" />, label: 'Transfer Money', color: 'bg-blue-100 text-blue-900', popular: true },
                { icon: <PaymentIcon className="w-5 h-5" />, label: 'Pay Bills', color: 'bg-green-100 text-green-900' },
                { icon: <Plus className="w-5 h-5" />, label: 'Add Money', color: 'bg-purple-100 text-purple-900' },
              ].map((action, index) => (
                <motion.button
                  key={index}
                  className="w-full flex items-center p-3 hover:bg-gray-50 transition-colors shadow-sharp hover:shadow-sharp-lg relative"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {action.popular && (
                    <motion.div
                      className="absolute -top-1 -right-1 bg-yellow-400 text-blue-900 text-xs px-2 py-1 font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      HOT
                    </motion.div>
                  )}
                  <div className={`p-2 ${action.color} mr-3 shadow-sharp`}>
                    {action.icon}
                  </div>
                  <span className="font-medium text-gray-900">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Charts and Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Enhanced Spending Chart */}
          <motion.div
            className="bg-white p-6 shadow-sharp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Spending Overview</h3>
              <motion.div
                className="flex items-center space-x-1 text-sm text-green-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target className="w-4 h-4" />
                <span>On Budget</span>
              </motion.div>
            </div>
            <SpendingChart data={spendingData} type="pie" />
          </motion.div>

          {/* Enhanced Recent Transactions */}
          <motion.div
            className="bg-white p-6 shadow-sharp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              <motion.button 
                className="text-blue-900 font-medium hover:text-blue-700 shadow-sharp px-3 py-1"
                whileHover={{ scale: 1.05 }}
              >
                View All
              </motion.button>
            </div>
            <div className="space-y-3">
              {recentTransactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors shadow-sharp"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                  <div className="flex items-center">
                    <motion.div 
                      className={`p-2 mr-3 shadow-sharp ${
                        transaction.type === 'credit' 
                          ? 'bg-green-100 text-green-900' 
                          : transaction.type === 'debit'
                          ? 'bg-red-100 text-red-900'
                          : 'bg-blue-100 text-blue-900'
                      }`}
                      whileHover={{ rotate: 5 }}
                    >
                      {transaction.type === 'credit' ? (
                        <ArrowDownLeft size={16} />
                      ) : (
                        <ArrowUpRight size={16} />
                      )}
                    </motion.div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                    </p>
                    <motion.p 
                      className={`text-xs ${
                        transaction.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                      }`}
                      animate={transaction.status === 'processing' ? { opacity: [1, 0.5, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {transaction.status}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Transaction Flow */}
        <motion.div
          className="bg-white p-6 shadow-sharp"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Current Transaction Status</h3>
            <motion.div
              className="flex items-center space-x-2 text-sm text-blue-600"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-4 h-4" />
              <span>Secure Processing</span>
            </motion.div>
          </div>
          <TransactionFlow steps={transactionSteps} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;