
import React from 'react';
import Header from '../../components/Header';

const StudentServiceSettings = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Cài đặt" 
        subtitle="Cấu hình dịch vụ sinh viên"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Cài đặt dịch vụ sinh viên
          </h3>
          <p className="text-gray-600">Chức năng cài đặt đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentServiceSettings;
