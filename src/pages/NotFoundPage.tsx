import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-yellow-500 text-blue-900 px-6 py-2 rounded font-medium hover:bg-yellow-400"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;