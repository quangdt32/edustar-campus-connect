
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import LecturerClasses from './lecturer/LecturerClasses';
import LecturerSubjects from './lecturer/LecturerSubjects';
import LecturerSchedule from './lecturer/LecturerSchedule';
import LecturerAttendance from './lecturer/LecturerAttendance';
import LecturerReports from './lecturer/LecturerReports';
import LecturerComplaints from './lecturer/LecturerComplaints';
import LecturerSettings from './lecturer/LecturerSettings';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

const LecturerDashboard = () => {
  return (
    <Routes>
      <Route path="/classes" element={<LecturerClasses />} />
      <Route path="/subjects" element={<LecturerSubjects />} />
      <Route path="/schedule" element={<LecturerSchedule />} />
      <Route path="/attendance" element={<LecturerAttendance />} />
      <Route path="/reports" element={<LecturerReports />} />
      <Route path="/complaints" element={<LecturerComplaints />} />
      <Route path="/settings" element={<LecturerSettings />} />
      <Route path="/" element={
        <div className="flex-1 bg-gray-50">
          <Header 
            title="Trang chủ giảng viên" 
            subtitle="Tổng quan hoạt động giảng dạy"
          />
          
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Lớp đang dạy"
                value="5"
                icon={Users}
                trend="+2 so với kỳ trước"
                trendUp={true}
                color="bg-blue-500"
              />
              <StatsCard
                title="Môn phụ trách"
                value="3"
                icon={BookOpen}
                color="bg-green-500"
              />
              <StatsCard
                title="Buổi học hôm nay"
                value="2"
                icon={Calendar}
                color="bg-purple-500"
              />
              <StatsCard
                title="Tỷ lệ điểm danh"
                value="92%"
                icon={CheckCircle}
                trend="+5% so với tuần trước"
                trendUp={true}
                color="bg-orange-500"
              />
            </div>

            {/* Today's Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lịch dạy hôm nay</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Lập trình Web - Lớp IT01</p>
                      <p className="text-sm text-gray-600">7:30 - 9:30 | Phòng A201</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Cơ sở dữ liệu - Lớp IT02</p>
                      <p className="text-sm text-gray-600">13:30 - 15:30 | Phòng B103</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông báo quan trọng</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Cập nhật điểm danh</p>
                      <p className="text-sm text-gray-600">Vui lòng cập nhật điểm danh cho lớp IT01 buổi ngày 15/01</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Họp khoa</p>
                      <p className="text-sm text-gray-600">Cuộc họp khoa sẽ diễn ra vào 10:00 ngày mai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoạt động gần đây</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Điểm danh lớp IT01 - Lập trình Web</p>
                    <p className="text-xs text-gray-600">2 giờ trước</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cập nhật thông tin môn học Cơ sở dữ liệu</p>
                    <p className="text-xs text-gray-600">1 ngày trước</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default LecturerDashboard;
