
import React from 'react';
import Header from '../../components/Header';

const TuitionCollection = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Thu học phí" 
        subtitle="Thu học phí và quản lý thanh toán"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Thu học phí
          </h3>
          <p className="text-gray-600">Chức năng thu học phí đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default TuitionCollection;
