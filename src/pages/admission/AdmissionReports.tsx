
import React from 'react';
import Header from '../../components/Header';

const AdmissionReports = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Báo cáo tuyển sinh" 
        subtitle="Báo cáo tổng hợp tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Báo cáo tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng báo cáo tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionReports;
