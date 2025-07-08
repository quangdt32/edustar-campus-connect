
import React from 'react';
import Header from '../../components/Header';

const StudentActivities = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Hoạt động sinh viên" 
        subtitle="Quản lý hoạt động ngoại khóa"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Hoạt động sinh viên
          </h3>
          <p className="text-gray-600">Chức năng quản lý hoạt động sinh viên đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentActivities;
