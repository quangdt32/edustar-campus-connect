
import React from 'react';
import Header from '../../components/Header';

const AdmissionAnnouncements = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Thông báo tuyển sinh" 
        subtitle="Quản lý thông báo và tin tức tuyển sinh"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Thông báo tuyển sinh
          </h3>
          <p className="text-gray-600">Chức năng quản lý thông báo tuyển sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionAnnouncements;
