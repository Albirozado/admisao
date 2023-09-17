"use client"
import React from 'react';

const LoadingIndicator = ({ loading }) => {
  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-300">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  ) : null;
};

export default LoadingIndicator;
