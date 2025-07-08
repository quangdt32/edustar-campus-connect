
import React from 'react';
import Header from '../../components/Header';

const AdmissionApplications = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Hồ sơ tuyển sinh" 
        subtitle="Quản lý hồ sơ đăng ký tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Hồ sơ tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng quản lý hồ sơ tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionApplications;
