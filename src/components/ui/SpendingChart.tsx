import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

interface SpendingData {
  category: string;
  amount: number;
  color: string;
  percentage: number;
}

interface SpendingChartProps {
  data: SpendingData[];
  type?: 'pie' | 'bar';
  className?: string;
}

const SpendingChart: React.FC<SpendingChartProps> = ({ 
  data, 
  type = 'pie', 
  className = '' 
}) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{label || payload[0].payload.category}</p>
          <p className="text-blue-900">
            {formatCurrency(payload[0].value)}
          </p>
          <p className="text-sm text-gray-600">
            {payload[0].payload.percentage}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  if (type === 'pie') {
    return (
      <motion.div
        className={`w-full h-80 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ category, percentage }) => `${category} ${percentage}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="amount"
              animationBegin={0}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`w-full h-80 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis tickFormatter={formatCurrency} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" fill="#003876" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SpendingChart;