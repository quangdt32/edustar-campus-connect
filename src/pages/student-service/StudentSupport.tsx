
import React from 'react';
import Header from '../../components/Header';

const StudentSupport = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Tư vấn hỗ trợ" 
        subtitle="Tư vấn và hỗ trợ sinh viên"
      />
      
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tư vấn hỗ trợ
          </h3>
          <p className="text-gray-600">Chức năng tư vấn hỗ trợ đang được phát triển...</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSupport;
