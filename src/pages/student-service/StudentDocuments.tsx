
import React from 'react';
import Header from '../../components/Header';

const StudentDocuments = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Giấy tờ - Văn bản" 
        subtitle="Quản lý giấy tờ và văn bản của sinh viên"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Giấy tờ - Văn bản
          </h3>
          <p className="text-gray-600">Chức năng quản lý giấy tờ đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDocuments;
