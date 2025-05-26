
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  QrCode, 
  Camera, 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock,
  Download,
  Search,
  Filter
} from 'lucide-react';

const Attendance = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [attendanceData] = useState([
    {
      id: 1,
      studentId: 'SV001',
      studentName: 'Nguyễn Văn An',
      status: 'Có mặt',
      time: '07:35',
      method: 'QR Code',
      avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+An&background=3b82f6&color=fff'
    },
    {
      id: 2,
      studentId: 'SV002',
      studentName: 'Trần Thị Bình',
      status: 'Có mặt',
      time: '07:32',
      method: 'Khuôn mặt',
      avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+Binh&background=10b981&color=fff'
    },
    {
      id: 3,
      studentId: 'SV003',
      studentName: 'Lê Minh Cường',
      status: 'Vắng',
      time: '-',
      method: '-',
      avatar: 'https://ui-avatars.com/api/?name=Le+Minh+Cuong&background=f59e0b&color=fff'
    },
    {
      id: 4,
      studentId: 'SV004',
      studentName: 'Phạm Thị Dung',
      status: 'Đi trễ',
      time: '08:15',
      method: 'Thủ công',
      avatar: 'https://ui-avatars.com/api/?name=Pham+Thi+Dung&background=ef4444&color=fff'
    }
  ]);

  const [currentSession] = useState({
    class: 'CNTT-K21-01',
    subject: 'Lập trình Web',
    room: 'P.301',
    time: '07:30 - 09:30',
    date: '15/01/2024',
    instructor: 'TS. Nguyễn Văn A'
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Có mặt': return 'bg-green-100 text-green-800';
      case 'Vắng': return 'bg-red-100 text-red-800';
      case 'Đi trễ': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const presentCount = attendanceData.filter(s => s.status === 'Có mặt').length;
  const absentCount = attendanceData.filter(s => s.status === 'Vắng').length;
  const lateCount = attendanceData.filter(s => s.status === 'Đi trễ').length;

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Điểm danh" 
        subtitle="Quản lý điểm danh lớp học"
      />
      
      <div className="p-6">
        {/* Current Session Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buổi học hiện tại</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Lớp học:</span>
                  <p className="font-medium">{currentSession.class}</p>
                </div>
                <div>
                  <span className="text-gray-500">Môn học:</span>
                  <p className="font-medium">{currentSession.subject}</p>
                </div>
                <div>
                  <span className="text-gray-500">Phòng:</span>
                  <p className="font-medium">{currentSession.room}</p>
                </div>
                <div>
                  <span className="text-gray-500">Thời gian:</span>
                  <p className="font-medium">{currentSession.time}</p>
                </div>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <QrCode className="h-4 w-4" />
                Tạo QR
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Camera className="h-4 w-4" />
                Nhận diện
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                <Download className="h-4 w-4" />
                Xuất dữ liệu
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{attendanceData.length}</div>
                <div className="text-sm text-gray-600">Tổng sinh viên</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">{presentCount}</div>
                <div className="text-sm text-gray-600">Có mặt</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-red-600">{absentCount}</div>
                <div className="text-sm text-gray-600">Vắng mặt</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-600">{lateCount}</div>
                <div className="text-sm text-gray-600">Đi trễ</div>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header with Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900">Danh sách điểm danh</h3>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Tìm sinh viên..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <Filter className="h-4 w-4" />
                  Lọc
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">Sinh viên</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">Mã SV</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">Trạng thái</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">Thời gian</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">Phương thức</th>
                  <th className="text-left py-3 px-6 font-medium text-gray-700">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {attendanceData.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={student.avatar}
                          alt={student.studentName}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium text-gray-900">{student.studentName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                        {student.studentId}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">
                      {student.time}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600">
                      {student.method}
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Sửa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Attendance History */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lịch sử điểm danh gần đây</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">CNTT-K21-01 - Lập trình Web</p>
                <p className="text-sm text-gray-600">14/01/2024 - 07:30-09:30</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">30/32 sinh viên</p>
                <p className="text-xs text-green-600">93.75% có mặt</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">QTKD-K20-01 - Marketing căn bản</p>
                <p className="text-sm text-gray-600">13/01/2024 - 09:45-11:45</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">23/25 sinh viên</p>
                <p className="text-xs text-green-600">92% có mặt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
