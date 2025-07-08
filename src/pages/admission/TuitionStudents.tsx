
import React from 'react';
import Header from '../../components/Header';

const TuitionStudents = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Danh sách sinh viên" 
        subtitle="Danh sách sinh viên và thông tin học phí"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Danh sách sinh viên
          </h3>
          <p className="text-gray-600">Chức năng quản lý danh sách sinh viên đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default TuitionStudents;
