
import React, { useState } from 'react';
import { Search, Plus, Users, Clock, MapPin, BookOpen, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const classes = [
    {
      id: 1,
      name: 'Lập trình Web - Lớp IT01',
      code: 'IT101-01',
      subject: 'Lập trình Web',
      studentCount: 32,
      maxStudents: 40,
      schedule: 'Thứ 2, Thứ 4 - 7:30-9:30',
      room: 'A201',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    },
    {
      id: 2,
      name: 'Cơ sở dữ liệu - Lớp IT02',
      code: 'IT102-01',
      subject: 'Cơ sở dữ liệu',
      studentCount: 28,
      maxStudents: 35,
      schedule: 'Thứ 3, Thứ 6 - 13:30-15:30',
      room: 'B103',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    },
    {
      id: 3,
      name: 'Trí tuệ nhân tạo - Lớp IT03',
      code: 'IT201-01',
      subject: 'Trí tuệ nhân tạo',
      studentCount: 25,
      maxStudents: 30,
      schedule: 'Thứ 5, Thứ 7 - 9:30-11:30',
      room: 'C205',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    }
  ];

  const filteredClasses = classes.filter(classItem =>
    classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classItem.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Lớp học của tôi</h1>
          <p className="text-gray-600">Quản lý các lớp học đang giảng dạy</p>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm lớp học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Tạo lớp học mới
            </Button>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                    <p className="text-sm text-gray-500">{classItem.code}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {classItem.status}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{classItem.subject}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{classItem.studentCount}/{classItem.maxStudents} sinh viên</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Phòng {classItem.room}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Đã đăng ký</span>
                    <span>{classItem.studentCount}/{classItem.maxStudents}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(classItem.studentCount / classItem.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    Xem chi tiết
                  </button>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturerClasses;
