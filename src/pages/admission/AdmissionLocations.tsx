
import React from 'react';
import Header from '../../components/Header';

const AdmissionLocations = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Điểm tuyển sinh" 
        subtitle="Quản lý các điểm tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Điểm tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng quản lý điểm tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionLocations;
