
import React from 'react';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardCheck, 
  TrendingUp,
  School,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Tổng sinh viên',
      value: '1,247',
      icon: GraduationCap,
      trend: '+12% so với tháng trước',
      trendUp: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Lớp học đang hoạt động',
      value: '45',
      icon: School,
      trend: '+3 lớp mới',
      trendUp: true,
      color: 'bg-green-500'
    },
    {
      title: 'Môn học',
      value: '127',
      icon: BookOpen,
      trend: 'Không thay đổi',
      trendUp: true,
      color: 'bg-purple-500'
    },
    {
      title: 'Điểm danh hôm nay',
      value: '89.2%',
      icon: ClipboardCheck,
      trend: '-2.1% so với hôm qua',
      trendUp: false,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Dashboard" 
        subtitle="Tổng quan hệ thống quản lý EduStar"
      />
      
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Thao tác nhanh
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="font-medium text-blue-900">Tạo lớp học mới</div>
                <div className="text-sm text-blue-600">Thêm lớp học cho học kỳ mới</div>
              </button>
              <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <div className="font-medium text-green-900">Nhập danh sách sinh viên</div>
                <div className="text-sm text-green-600">Import từ file Excel</div>
              </button>
              <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <div className="font-medium text-orange-900">Tạo lịch điểm danh</div>
                <div className="text-sm text-orange-600">Thiết lập điểm danh tự động</div>
              </button>
            </div>
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Thông báo gần đây
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-red-900">5 sinh viên vắng quá 3 buổi</p>
                  <p className="text-xs text-red-600">Cần gửi cảnh báo</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-yellow-900">3 khiếu nại mới chờ xử lý</p>
                  <p className="text-xs text-yellow-600">Về điểm danh và đổi lớp</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Lịch học tuần sau đã sẵn sàng</p>
                  <p className="text-xs text-blue-600">Tất cả lớp đã được xếp lịch</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-500" />
            Lịch học hôm nay
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Thời gian</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Lớp học</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Môn học</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Giảng viên</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Phòng</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 text-sm">07:30 - 09:30</td>
                  <td className="py-3 px-4 text-sm font-medium">CNTT-K21</td>
                  <td className="py-3 px-4 text-sm">Lập trình Web</td>
                  <td className="py-3 px-4 text-sm">TS. Nguyễn Văn A</td>
                  <td className="py-3 px-4 text-sm">P.301</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Đang diễn ra
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">09:45 - 11:45</td>
                  <td className="py-3 px-4 text-sm font-medium">QTKD-K20</td>
                  <td className="py-3 px-4 text-sm">Marketing căn bản</td>
                  <td className="py-3 px-4 text-sm">ThS. Trần Thị B</td>
                  <td className="py-3 px-4 text-sm">P.205</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Sắp tới
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
