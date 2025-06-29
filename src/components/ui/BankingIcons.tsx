import React from 'react';

// Custom SVG icons for banking
export const AccountIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
);

export const TransferIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12l-4-4v3H9v2h8v3l4-4z"/>
    <path d="M3 12l4 4v-3h8v-2H7V8l-4 4z"/>
  </svg>
);

export const PaymentIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 8h20"/>
    <path d="M6 12h4"/>
  </svg>
);

export const InvestmentIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17l6-6 4 4 8-8"/>
    <path d="M14 7h7v7"/>
  </svg>
);

export const SecurityIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const LoanIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

export const SavingsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1v22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

export const MobileIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

export const ATMIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <rect x="6" y="6" width="12" height="8" rx="1"/>
    <path d="M9 17h6"/>
    <path d="M12 14v3"/>
  </svg>
);

export const BranchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 21h18"/>
    <path d="M5 21V7l8-4v18"/>
    <path d="M19 21V11l-6-4"/>
    <path d="M9 9v.01"/>
    <path d="M9 12v.01"/>
    <path d="M9 15v.01"/>
    <path d="M9 18v.01"/>
  </svg>
);