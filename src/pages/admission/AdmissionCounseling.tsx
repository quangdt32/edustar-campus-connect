
import React from 'react';
import Header from '../../components/Header';

const AdmissionCounseling = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Tư vấn tuyển sinh" 
        subtitle="Tư vấn hướng nghiệp và tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tư vấn tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng tư vấn tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCounseling;
