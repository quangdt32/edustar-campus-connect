
import React from 'react';
import Header from '../../components/Header';

const TrainingClasses = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý lớp học" 
        subtitle="Danh sách và thông tin lớp học"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Danh sách lớp học
          </h3>
          <p className="text-gray-600">Chức năng quản lý lớp học đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingClasses;
