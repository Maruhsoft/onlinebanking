import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface TransactionStep {
  id: string;
  title: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  timestamp?: string;
}

interface TransactionFlowProps {
  steps: TransactionStep[];
  className?: string;
}

const TransactionFlow: React.FC<TransactionFlowProps> = ({ steps, className = '' }) => {
  const getStatusIcon = (status: TransactionStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-500 animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-gray-300" />;
    }
  };

  const getStatusColor = (status: TransactionStep['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'processing':
        return 'bg-yellow-500';
      case 'failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center space-x-4"
        >
          <div className="flex-shrink-0">
            {getStatusIcon(step.status)}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
              {step.timestamp && (
                <span className="text-xs text-gray-500">{step.timestamp}</span>
              )}
            </div>
            
            {index < steps.length - 1 && (
              <div className="mt-2 ml-2">
                <motion.div
                  className={`h-8 w-0.5 ${getStatusColor(step.status)}`}
                  initial={{ height: 0 }}
                  animate={{ height: 32 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TransactionFlow;