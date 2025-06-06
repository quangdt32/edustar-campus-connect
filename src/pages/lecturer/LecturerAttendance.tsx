
import React, { useState } from 'react';
import { Search, Filter, Download, Check, X, Clock, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerAttendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedDate, setSelectedDate] = useState('2024-01-15');

  const attendanceData = [
    {
      id: 1,
      studentId: 'SV001',
      studentName: 'Nguyễn Văn An',
      className: 'Lập trình Web - IT01',
      date: '2024-01-15',
      time: '7:30-9:30',
      status: 'Có mặt',
      note: '',
      checkInTime: '7:28'
    },
    {
      id: 2,
      studentId: 'SV002',
      studentName: 'Trần Thị Bình',
      className: 'Lập trình Web - IT01',
      date: '2024-01-15',
      time: '7:30-9:30',
      status: 'Đi muộn',
      note: 'Đến muộn 15 phút',
      checkInTime: '7:45'
    },
    {
      id: 3,
      studentId: 'SV003',
      studentName: 'Lê Minh Cường',
      className: 'Lập trình Web - IT01',
      date: '2024-01-15',
      time: '7:30-9:30',
      status: 'Vắng mặt',
      note: 'Không có phép',
      checkInTime: '-'
    },
    {
      id: 4,
      studentId: 'SV004',
      studentName: 'Phạm Thị Dung',
      className: 'Cơ sở dữ liệu - IT02',
      date: '2024-01-16',
      time: '13:30-15:30',
      status: 'Có mặt',
      note: '',
      checkInTime: '13:25'
    }
  ];

  const classes = [
    { value: 'all', label: 'Tất cả lớp' },
    { value: 'IT01', label: 'Lập trình Web - IT01' },
    { value: 'IT02', label: 'Cơ sở dữ liệu - IT02' },
    { value: 'IT03', label: 'Trí tuệ nhân tạo - IT03' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Có mặt':
        return <Check className="h-4 w-4 text-green-600" />;
      case 'Đi muộn':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Vắng mặt':
        return <X className="h-4 w-4 text-red-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'Có mặt':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Đi muộn':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Vắng mặt':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const filteredData = attendanceData.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || record.className.includes(selectedClass);
    return matchesSearch && matchesClass;
  });

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Quản lý điểm danh</h1>
          <p className="text-gray-600">Theo dõi và quản lý điểm danh của sinh viên</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm sinh viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {classes.map(cls => (
                <option key={cls.value} value={cls.value}>{cls.label}</option>
              ))}
            </select>
            
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sinh viên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lớp học
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tiết học
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giờ vào
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ghi chú
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{record.studentName}</div>
                        <div className="text-sm text-gray-500">{record.studentId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.className}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(record.date).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span className={getStatusBadge(record.status)}>
                          {record.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.checkInTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.note || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-green-600 hover:text-green-900 mr-3">
                        Sửa
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <Check className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Có mặt</p>
                <p className="text-2xl font-bold text-green-600">85%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Đi muộn</p>
                <p className="text-2xl font-bold text-yellow-600">10%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <X className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Vắng mặt</p>
                <p className="text-2xl font-bold text-red-600">5%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Cảnh báo</p>
                <p className="text-2xl font-bold text-orange-600">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerAttendance;
