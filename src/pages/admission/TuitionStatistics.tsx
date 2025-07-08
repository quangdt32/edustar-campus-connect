
import React from 'react';
import Header from '../../components/Header';

const TuitionStatistics = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Thống kê học phí" 
        subtitle="Thống kê và báo cáo học phí"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Thống kê học phí
          </h3>
          <p className="text-gray-600">Chức năng thống kê học phí đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default TuitionStatistics;
