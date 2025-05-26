
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  Users, 
  Edit, 
  Eye, 
  UserPlus,
  UserMinus,
  Calendar,
  MapPin
} from 'lucide-react';

const Classes = () => {
  const [classes] = useState([
    {
      id: 1,
      code: 'CNTT-K21-01',
      name: 'Công nghệ thông tin K21 - Lớp 1',
      subject: 'Lập trình Web',
      instructor: 'TS. Nguyễn Văn A',
      studentCount: 32,
      maxStudents: 40,
      room: 'P.301',
      schedule: 'T2, T4 (7:30-9:30)',
      semester: 'HK1 2024',
      status: 'Đang học'
    },
    {
      id: 2,
      code: 'QTKD-K20-01',
      name: 'Quản trị kinh doanh K20 - Lớp 1',
      subject: 'Marketing căn bản',
      instructor: 'ThS. Trần Thị B',
      studentCount: 28,
      maxStudents: 35,
      room: 'P.205',
      schedule: 'T3, T6 (9:45-11:45)',
      semester: 'HK1 2024',
      status: 'Đang học'
    },
    {
      id: 3,
      code: 'CNTT-K21-02',
      name: 'Công nghệ thông tin K21 - Lớp 2',
      subject: 'Cấu trúc dữ liệu',
      instructor: 'ThS. Lê Minh C',
      studentCount: 25,
      maxStudents: 30,
      room: 'P.401',
      schedule: 'T5, T7 (13:30-15:30)',
      semester: 'HK1 2024',
      status: 'Sắp kết thúc'
    }
  ]);

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý lớp học" 
        subtitle="Danh sách và thông tin lớp học"
      />
      
      <div className="p-6">
        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm lớp học..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters & Actions */}
            <div className="flex gap-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tất cả học kỳ</option>
                <option>HK1 2024</option>
                <option>HK2 2023</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                Tạo lớp học
              </button>
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{classItem.name}</h3>
                  <p className="text-sm text-gray-500 font-mono">{classItem.code}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  classItem.status === 'Đang học' 
                    ? 'bg-green-100 text-green-800' 
                    : classItem.status === 'Sắp kết thúc'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {classItem.status}
                </span>
              </div>

              {/* Subject & Instructor */}
              <div className="mb-4">
                <p className="font-medium text-blue-600 mb-1">{classItem.subject}</p>
                <p className="text-sm text-gray-600">{classItem.instructor}</p>
              </div>

              {/* Info Grid */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">
                    {classItem.studentCount}/{classItem.maxStudents} sinh viên
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 ml-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(classItem.studentCount / classItem.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{classItem.room}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{classItem.schedule}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{classItem.semester}</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors" title="Xem chi tiết">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors" title="Chỉnh sửa">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-purple-600 hover:bg-purple-100 rounded transition-colors" title="Thêm sinh viên">
                    <UserPlus className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-orange-600 hover:bg-orange-100 rounded transition-colors" title="Xóa sinh viên">
                    <UserMinus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-medium text-blue-900">Đăng ký lớp học hàng loạt</div>
              <div className="text-sm text-blue-600 mt-1">Cho phép sinh viên đăng ký nhiều lớp cùng lúc</div>
            </button>
            <button className="text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-medium text-green-900">Tạo lịch học tự động</div>
              <div className="text-sm text-green-600 mt-1">Hệ thống tự động xếp lịch cho các lớp</div>
            </button>
            <button className="text-left p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="font-medium text-orange-900">Xem lịch sử thay đổi</div>
              <div className="text-sm text-orange-600 mt-1">Theo dõi các thay đổi của lớp học</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
