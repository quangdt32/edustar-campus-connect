
import React from 'react';
import Header from '../../components/Header';

const AdmissionStatistics = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Thống kê tuyển sinh" 
        subtitle="Thống kê và phân tích dữ liệu tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Thống kê tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng thống kê tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionStatistics;
