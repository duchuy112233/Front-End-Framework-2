import React from 'react';
import { useLoading } from '../context/Loading';// Đảm bảo đường dẫn chính xác

const LoadingIndicator: React.FC = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
};

export default LoadingIndicator;
