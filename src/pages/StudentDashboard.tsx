
import React from 'react';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle,
  Clock,
  GraduationCap,
  AlertCircle
} from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Trang chủ sinh viên" 
        subtitle="Thông tin học tập và lịch học"
      />
      
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Môn đang học"
            value="6"
            icon={BookOpen}
            color="bg-blue-500"
          />
          <StatsCard
            title="Tín chỉ đã đăng ký"
            value="18"
            icon={GraduationCap}
            color="bg-green-500"
          />
          <StatsCard
            title="Buổi học hôm nay"
            value="3"
            icon={Calendar}
            color="bg-purple-500"
          />
          <StatsCard
            title="Tỷ lệ điểm danh"
            value="95%"
            icon={CheckCircle}
            trend="+2% so với tuần trước"
            trendUp={true}
            color="bg-orange-500"
          />
        </div>

        {/* Today's Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lịch học hôm nay</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Lập trình Web</p>
                  <p className="text-sm text-gray-600">7:30 - 9:30 | Phòng A201 | TS. Trần Thị Hoa</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Cơ sở dữ liệu</p>
                  <p className="text-sm text-gray-600">13:30 - 15:30 | Phòng B103 | ThS. Lê Minh Tuấn</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Toán rời rạc</p>
                  <p className="text-sm text-gray-600">15:45 - 17:45 | Phòng C205 | PGS. Nguyễn Văn Nam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông báo</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Nhắc nhở điểm danh</p>
                  <p className="text-sm text-gray-600">Bạn đã vắng 2 buổi môn Lập trình Web. Vui lòng chú ý điểm danh</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Đăng ký môn học</p>
                  <p className="text-sm text-gray-600">Thời gian đăng ký môn học kỳ mới từ 20/01 - 25/01</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">Đăng ký môn</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Calendar className="h-8 w-8 text-green-600" />
              <span className="text-sm font-medium text-gray-900">Xem lịch học</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <CheckCircle className="h-8 w-8 text-purple-600" />
              <span className="text-sm font-medium text-gray-900">Xem điểm danh</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
              <GraduationCap className="h-8 w-8 text-orange-600" />
              <span className="text-sm font-medium text-gray-900">Hồ sơ học tập</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoạt động gần đây</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Điểm danh thành công môn Lập trình Web</p>
                <p className="text-xs text-gray-600">2 giờ trước</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Cập nhật thông tin cá nhân</p>
                <p className="text-xs text-gray-600">1 ngày trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
