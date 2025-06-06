
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentProfile from './student/StudentProfile';
import StudentClasses from './student/StudentClasses';
import StudentSubjects from './student/StudentSubjects';
import StudentSchedule from './student/StudentSchedule';
import StudentAttendance from './student/StudentAttendance';
import StudentComplaints from './student/StudentComplaints';
import StudentSettings from './student/StudentSettings';
import { Calendar, BookOpen, User, Clock, ClipboardCheck, MessageSquare, GraduationCap } from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    {
      title: 'Môn học đã đăng ký',
      value: '6',
      icon: BookOpen,
      color: 'bg-purple-500'
    },
    {
      title: 'Lớp học tuần này',
      value: '12',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Tỷ lệ điểm danh',
      value: '95%',
      icon: ClipboardCheck,
      color: 'bg-green-500'
    },
    {
      title: 'GPA hiện tại',
      value: '3.65',
      icon: GraduationCap,
      color: 'bg-orange-500'
    }
  ];

  const upcomingClasses = [
    {
      subject: 'Lập trình Web',
      time: '7:30 - 9:30',
      room: 'A101',
      date: 'Hôm nay'
    },
    {
      subject: 'Trí tuệ nhân tạo',
      time: '7:30 - 9:30',
      room: 'C205',
      date: 'Ngày mai'
    },
    {
      subject: 'Cơ sở dữ liệu',
      time: '13:30 - 15:30',
      room: 'B205',
      date: 'Thứ 4'
    }
  ];

  return (
    <Routes>
      <Route path="/profile" element={<StudentProfile />} />
      <Route path="/classes" element={<StudentClasses />} />
      <Route path="/subjects" element={<StudentSubjects />} />
      <Route path="/schedule" element={<StudentSchedule />} />
      <Route path="/attendance" element={<StudentAttendance />} />
      <Route path="/complaints" element={<StudentComplaints />} />
      <Route path="/settings" element={<StudentSettings />} />
      <Route path="/" element={
        <div className="flex-1 bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Chào mừng, Nguyễn Văn An!</h1>
              <p className="text-gray-600">Đây là tổng quan về hoạt động học tập của bạn</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center">
                      <div className={`${stat.color} p-3 rounded-lg mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Classes */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Lịch học sắp tới</h2>
                </div>
                <div className="space-y-3">
                  {upcomingClasses.map((classItem, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div>
                        <p className="font-medium text-purple-900">{classItem.subject}</p>
                        <p className="text-sm text-purple-600">{classItem.time} - Phòng {classItem.room}</p>
                      </div>
                      <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">
                        {classItem.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-5 w-5 text-purple-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Thao tác nhanh</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="font-medium text-gray-900">Đăng ký môn học</p>
                    <p className="text-sm text-gray-600">Đăng ký môn học mới</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <ClipboardCheck className="h-6 w-6 text-green-600 mb-2" />
                    <p className="font-medium text-gray-900">Xem điểm danh</p>
                    <p className="text-sm text-gray-600">Kiểm tra điểm danh</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <Clock className="h-6 w-6 text-orange-600 mb-2" />
                    <p className="font-medium text-gray-900">Thời khóa biểu</p>
                    <p className="text-sm text-gray-600">Xem lịch học</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <MessageSquare className="h-6 w-6 text-red-600 mb-2" />
                    <p className="font-medium text-gray-900">Gửi khiếu nại</p>
                    <p className="text-sm text-gray-600">Phản ánh vấn đề</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default StudentDashboard;
