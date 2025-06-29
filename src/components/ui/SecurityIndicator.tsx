import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, EyeOff, Wifi, WifiOff } from 'lucide-react';

interface SecurityIndicatorProps {
  className?: string;
}

const SecurityIndicator: React.FC<SecurityIndicatorProps> = ({ className = '' }) => {
  const [isSecure, setIsSecure] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [sessionTime, setSessionTime] = useState('00:00:00');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const interval = setInterval(() => {
      const now = new Date();
      setSessionTime(now.toLocaleTimeString());
    }, 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className={`flex items-center space-x-4 text-sm ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <motion.div
          animate={{ rotate: isSecure ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className={`w-4 h-4 ${isSecure ? 'text-green-500' : 'text-red-500'}`} />
        </motion.div>
        <span className={isSecure ? 'text-green-600' : 'text-red-600'}>
          {isSecure ? 'Secure Connection' : 'Connection Error'}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <Lock className="w-4 h-4 text-blue-600" />
        <span className="text-blue-600">256-bit SSL</span>
      </div>

      <div className="flex items-center space-x-2">
        {isOnline ? (
          <Wifi className="w-4 h-4 text-green-500" />
        ) : (
          <WifiOff className="w-4 h-4 text-red-500" />
        )}
        <span className={isOnline ? 'text-green-600' : 'text-red-600'}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-gray-600">Session: {sessionTime}</span>
      </div>
    </motion.div>
  );
};

export default SecurityIndicator;