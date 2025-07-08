
import React from 'react';
import Header from '../../components/Header';

const ExamReports = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Báo cáo thi" 
        subtitle="Thống kê và báo cáo kỳ thi"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Báo cáo thi
          </h3>
          <p className="text-gray-600">Chức năng báo cáo thi đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default ExamReports;
