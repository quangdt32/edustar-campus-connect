
import React from 'react';
import Header from '../../components/Header';

const StudentComplaints = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Khiếu nại" 
        subtitle="Xử lý khiếu nại từ sinh viên"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Khiếu nại sinh viên
          </h3>
          <p className="text-gray-600">Chức năng xử lý khiếu nại đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentComplaints;
