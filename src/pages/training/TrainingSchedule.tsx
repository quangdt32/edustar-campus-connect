
import React from 'react';
import Header from '../../components/Header';

const TrainingSchedule = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Lịch học" 
        subtitle="Quản lý thời khóa biểu"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Thời khóa biểu
          </h3>
          <p className="text-gray-600">Chức năng quản lý lịch học đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default TrainingSchedule;
