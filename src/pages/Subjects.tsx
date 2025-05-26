
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  BookOpen, 
  Edit, 
  Eye, 
  ToggleLeft, 
  ToggleRight,
  Clock,
  User
} from 'lucide-react';

const Subjects = () => {
  const [subjects] = useState([
    {
      id: 1,
      code: 'IT101',
      name: 'Lập trình căn bản',
      credits: 3,
      description: 'Môn học cung cấp kiến thức cơ bản về lập trình',
      instructor: 'TS. Nguyễn Văn A',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    },
    {
      id: 2,
      code: 'IT201',
      name: 'Cấu trúc dữ liệu và giải thuật',
      credits: 4,
      description: 'Nghiên cứu các cấu trúc dữ liệu và thuật toán cơ bản',
      instructor: 'ThS. Trần Thị B',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    },
    {
      id: 3,
      code: 'MK101',
      name: 'Marketing căn bản',
      credits: 3,
      description: 'Kiến thức cơ bản về marketing và quảng cáo',
      instructor: 'ThS. Lê Minh C',
      semester: 'HK2 2023',
      status: 'Không hoạt động'
    }
  ]);

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý môn học" 
        subtitle="Danh sách và thông tin môn học"
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
                placeholder="Tìm kiếm môn học..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tất cả học kỳ</option>
                <option>HK1 2024</option>
                <option>HK2 2023</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                Thêm môn học
              </button>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                    <p className="text-sm text-gray-500 font-mono">{subject.code}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  subject.status === 'Đang hoạt động' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {subject.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {subject.description}
              </p>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{subject.credits} tín chỉ</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{subject.instructor}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{subject.semester}</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors" title="Xem chi tiết">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors" title="Chỉnh sửa">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors" title="Kích hoạt/Vô hiệu hóa">
                    {subject.status === 'Đang hoạt động' ? (
                      <ToggleRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ToggleLeft className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">127</div>
            <div className="text-sm text-gray-600">Tổng môn học</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">98</div>
            <div className="text-sm text-gray-600">Đang hoạt động</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-orange-600">3.2</div>
            <div className="text-sm text-gray-600">Tín chỉ trung bình</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <div className="text-sm text-gray-600">Giảng viên</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
