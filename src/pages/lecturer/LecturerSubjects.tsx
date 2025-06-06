
import React, { useState } from 'react';
import { Search, Plus, BookOpen, Users, Clock, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerSubjects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = [
    {
      id: 1,
      code: 'IT101',
      name: 'Lập trình Web',
      credits: 3,
      description: 'Môn học cung cấp kiến thức cơ bản về phát triển web với HTML, CSS, JavaScript',
      classCount: 2,
      totalStudents: 65,
      semester: 'HK1 2024',
      status: 'Đang giảng dạy'
    },
    {
      id: 2,
      code: 'IT102',
      name: 'Cơ sở dữ liệu',
      credits: 3,
      description: 'Nghiên cứu các khái niệm cơ bản về cơ sở dữ liệu và SQL',
      classCount: 1,
      totalStudents: 28,
      semester: 'HK1 2024',
      status: 'Đang giảng dạy'
    },
    {
      id: 3,
      code: 'IT201',
      name: 'Trí tuệ nhân tạo',
      credits: 4,
      description: 'Giới thiệu các khái niệm và thuật toán trong trí tuệ nhân tạo',
      classCount: 1,
      totalStudents: 25,
      semester: 'HK1 2024',
      status: 'Đang giảng dạy'
    }
  ];

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Môn học phụ trách</h1>
          <p className="text-gray-600">Quản lý các môn học đang giảng dạy</p>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm môn học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Thêm môn học
            </Button>
          </div>
        </div>

        {/* Subjects List */}
        <div className="space-y-4">
          {filteredSubjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {subject.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Mã môn học</p>
                      <p className="font-medium">{subject.code}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Số tín chỉ</p>
                      <p className="font-medium">{subject.credits}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Số lớp</p>
                      <p className="font-medium">{subject.classCount} lớp</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tổng sinh viên</p>
                      <p className="font-medium">{subject.totalStudents} SV</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm">
                  Xem lớp học
                </Button>
                <Button variant="outline" size="sm">
                  Quản lý nội dung
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Xem chi tiết
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturerSubjects;
