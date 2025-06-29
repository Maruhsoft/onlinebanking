import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Mail, Key, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface TwoFactorAuthProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (code: string) => void;
  method?: 'sms' | 'email' | 'app';
}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({
  isOpen,
  onClose,
  onVerify,
  method = 'sms'
}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, timeLeft]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      toast.error('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);
    try {
      await onVerify(fullCode);
      setIsVerified(true);
      setTimeout(() => {
        onClose();
        setIsVerified(false);
        setCode(['', '', '', '', '', '']);
      }, 1500);
    } catch (error) {
      toast.error('Invalid verification code');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getMethodIcon = () => {
    switch (method) {
      case 'email':
        return <Mail className="w-6 h-6" />;
      case 'app':
        return <Key className="w-6 h-6" />;
      default:
        return <Smartphone className="w-6 h-6" />;
    }
  };

  const getMethodText = () => {
    switch (method) {
      case 'email':
        return 'your email address';
      case 'app':
        return 'your authenticator app';
      default:
        return 'your mobile phone';
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 max-w-md w-full mx-4 shadow-sharp-lg relative overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-blue-900"
              style={{
                left: `${20 + i * 25}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {isVerified ? (
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4 shadow-sharp"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification Successful!</h2>
              <p className="text-gray-600">Redirecting to your dashboard...</p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-6">
                <motion.div
                  className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-4 shadow-sharp"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Shield className="w-8 h-8 text-blue-900" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Two-Factor Authentication</h2>
                <p className="text-gray-600">
                  We've sent a 6-digit verification code to {getMethodText()}
                </p>
              </div>

              <div className="flex justify-center space-x-3 mb-6">
                {code.map((digit, index) => (
                  <motion.input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleInputChange(index, e.target.value)}
                    onKeyDown={e => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-sharp"
                    whileFocus={{ scale: 1.1 }}
                    animate={digit ? { scale: [1, 1.1, 1] } : {}}
                  />
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                  {getMethodIcon()}
                  <span>Code expires in {formatTime(timeLeft)}</span>
                </div>
                <motion.button
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium shadow-sharp px-3 py-1"
                  onClick={() => {
                    setTimeLeft(300);
                    toast.success('New code sent!');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resend code
                </motion.button>
              </div>

              <div className="flex space-x-3">
                <motion.button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors shadow-sharp"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleVerify}
                  disabled={isLoading || code.join('').length !== 6}
                  className="flex-1 px-4 py-2 bg-blue-900 text-white hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sharp"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <motion.div
                      className="flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      Verifying...
                    </motion.div>
                  ) : (
                    'Verify'
                  )}
                </motion.button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TwoFactorAuth;