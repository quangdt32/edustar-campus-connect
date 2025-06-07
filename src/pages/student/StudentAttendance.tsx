import React, { useState } from 'react';
import { Calendar, Clock, Check, X, AlertTriangle, Camera, ScanFace } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FaceAttendance from '@/components/student/FaceAttendance';
import { useFaceAttendance } from '@/hooks/useFaceAttendance';

const StudentAttendance = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [showFaceAttendance, setShowFaceAttendance] = useState(false);
  const { attendanceRecords: faceRecords, getTodayAttendance } = useFaceAttendance();

  const attendanceData = [
    {
      id: 1,
      subject: 'Lập trình Web',
      code: 'IT101',
      date: '2024-12-16',
      time: '7:30 - 9:30',
      status: 'Có mặt',
      method: 'manual',
      note: ''
    },
    {
      id: 2,
      subject: 'Cơ sở dữ liệu',
      code: 'IT102',
      date: '2024-12-18',
      time: '13:30 - 15:30',
      status: 'Có mặt',
      method: 'manual',
      note: ''
    },
    {
      id: 3,
      subject: 'Mạng máy tính',
      code: 'IT103',
      date: '2024-12-20',
      time: '9:30 - 11:30',
      status: 'Vắng mặt',
      method: 'manual',
      note: 'Bị ốm'
    },
    {
      id: 4,
      subject: 'Lập trình Web',
      code: 'IT101',
      date: '2024-12-23',
      time: '7:30 - 9:30',
      status: 'Muộn',
      method: 'manual',
      note: 'Đến muộn 15 phút'
    },
    {
      id: 5,
      subject: 'Trí tuệ nhân tạo',
      code: 'IT201',
      date: '2024-12-24',
      time: '7:30 - 9:30',
      status: 'Có mặt',
      method: 'face',
      note: 'Điểm danh khuôn mặt'
    }
  ];

  const subjects = ['all', 'IT101', 'IT102', 'IT103', 'IT201'];

  const filteredData = selectedSubject === 'all' 
    ? attendanceData 
    : attendanceData.filter(item => item.code === selectedSubject);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Có mặt':
        return <Check className="h-4 w-4 text-green-600" />;
      case 'Vắng mặt':
        return <X className="h-4 w-4 text-red-600" />;
      case 'Muộn':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Có mặt':
        return 'bg-green-100 text-green-800';
      case 'Vắng mặt':
        return 'bg-red-100 text-red-800';
      case 'Muộn':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMethodIcon = (method: string) => {
    return method === 'face' ? <ScanFace className="h-4 w-4 text-purple-600" /> : null;
  };

  // Tính toán thống kê
  const totalClasses = filteredData.length;
  const presentClasses = filteredData.filter(item => item.status === 'Có mặt').length;
  const absentClasses = filteredData.filter(item => item.status === 'Vắng mặt').length;
  const lateClasses = filteredData.filter(item => item.status === 'Muộn').length;
  const attendanceRate = totalClasses > 0 ? ((presentClasses + lateClasses) / totalClasses * 100).toFixed(1) : 0;

  const handleFaceAttendanceComplete = (success: boolean) => {
    if (success) {
      // Cập nhật danh sách điểm danh nếu cần
      console.log('Điểm danh khuôn mặt thành công');
    }
  };

  const todayClasses = [
    { code: 'IT101', name: 'Lập trình Web', time: '7:30 - 9:30', room: 'A101' },
    { code: 'IT201', name: 'Trí tuệ nhân tạo', time: '13:30 - 15:30', room: 'C205' }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Điểm danh</h1>
          <p className="text-gray-600">Theo dõi tình hình điểm danh của bạn</p>
        </div>

        {/* Quick Face Attendance */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Điểm danh nhanh</h2>
              <p className="text-gray-600">Sử dụng nhận diện khuôn mặt để điểm danh cho lớp học hôm nay</p>
            </div>
            <Button 
              onClick={() => setShowFaceAttendance(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Camera className="h-4 w-4 mr-2" />
              Điểm danh khuôn mặt
            </Button>
          </div>
          
          {todayClasses.length > 0 && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {todayClasses.map((classItem, index) => (
                <div key={index} className="bg-purple-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-purple-900">{classItem.name}</p>
                      <p className="text-sm text-purple-600">{classItem.time} - Phòng {classItem.room}</p>
                    </div>
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                      Hôm nay
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Thống kê */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tổng số buổi</p>
                <p className="text-2xl font-bold text-gray-900">{totalClasses}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Có mặt</p>
                <p className="text-2xl font-bold text-green-600">{presentClasses}</p>
              </div>
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Vắng mặt</p>
                <p className="text-2xl font-bold text-red-600">{absentClasses}</p>
              </div>
              <X className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tỷ lệ có mặt</p>
                <p className="text-2xl font-bold text-purple-600">{attendanceRate}%</p>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                Number(attendanceRate) >= 80 ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <span className={`text-sm font-bold ${
                  Number(attendanceRate) >= 80 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {Number(attendanceRate) >= 80 ? '✓' : '!'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bộ lọc */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Môn học:</label>
            <select 
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">Tất cả môn học</option>
              <option value="IT101">IT101 - Lập trình Web</option>
              <option value="IT102">IT102 - Cơ sở dữ liệu</option>
              <option value="IT103">IT103 - Mạng máy tính</option>
              <option value="IT201">IT201 - Trí tuệ nhân tạo</option>
            </select>
          </div>
        </div>

        {/* Bảng điểm danh */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Môn học</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Ngày</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Thời gian</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Trạng thái</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Phương thức</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{record.subject}</p>
                        <p className="text-sm text-gray-500">{record.code}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">
                          {new Date(record.date).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{record.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getMethodIcon(record.method)}
                        <span className="text-sm text-gray-600">
                          {record.method === 'face' ? 'Khuôn mặt' : 'Thủ công'}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-600">{record.note || '-'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showFaceAttendance && (
          <FaceAttendance
            onAttendanceMarked={handleFaceAttendanceComplete}
            onClose={() => setShowFaceAttendance(false)}
          />
        )}
      </div>
    </div>
  );
};

export default StudentAttendance;
