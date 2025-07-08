
import React from 'react';
import Header from '../../components/Header';

const AdmissionSettings = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Cài đặt" 
        subtitle="Cấu hình hệ thống tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Cài đặt tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng cài đặt đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSettings;
