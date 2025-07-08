
import React from 'react';
import Header from '../../components/Header';

const StudentServiceReports = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Báo cáo DVSV" 
        subtitle="Báo cáo dịch vụ sinh viên"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Báo cáo dịch vụ sinh viên
          </h3>
          <p className="text-gray-600">Chức năng báo cáo DVSV đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentServiceReports;
