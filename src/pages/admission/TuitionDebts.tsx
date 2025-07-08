
import React from 'react';
import Header from '../../components/Header';

const TuitionDebts = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Nợ học phí" 
        subtitle="Quản lý nợ học phí sinh viên"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Nợ học phí
          </h3>
          <p className="text-gray-600">Chức năng quản lý nợ học phí đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default TuitionDebts;
