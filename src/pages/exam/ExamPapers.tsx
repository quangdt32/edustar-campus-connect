
import React from 'react';
import Header from '../../components/Header';

const ExamPapers = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Đề thi" 
        subtitle="Quản lý đề thi và bài kiểm tra"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Đề thi
          </h3>
          <p className="text-gray-600">Chức năng quản lý đề thi đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default ExamPapers;
