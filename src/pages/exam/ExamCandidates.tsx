
import React from 'react';
import Header from '../../components/Header';

const ExamCandidates = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Danh sách thí sinh" 
        subtitle="Quản lý thí sinh dự thi"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Danh sách thí sinh
          </h3>
          <p className="text-gray-600">Chức năng quản lý thí sinh đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default ExamCandidates;
