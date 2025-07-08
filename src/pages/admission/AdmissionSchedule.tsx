
import React from 'react';
import Header from '../../components/Header';

const AdmissionSchedule = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Lịch tuyển sinh" 
        subtitle="Lịch trình tuyển sinh và các hoạt động"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Lịch tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng quản lý lịch tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSchedule;
