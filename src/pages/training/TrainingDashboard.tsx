
import React from 'react';
import Header from '../../components/Header';
import StatsCard from '../../components/StatsCard';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  TrendingUp,
  FileText,
  School
} from 'lucide-react';

const TrainingDashboard = () => {
  const stats = [
    {
      title: 'Chương trình đào tạo',
      value: '15',
      icon: BookOpen,
      trend: '+2 chương trình mới',
      trendUp: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Học kỳ đang diễn ra',
      value: '2',
      icon: Calendar,
      trend: 'HK1 2023-2024',
      trendUp: true,
      color: 'bg-green-500'
    },
    {
      title: 'Lớp học hoạt động',
      value: '45',
      icon: School,
      trend: '+5 lớp mới',
      trendUp: true,
      color: 'bg-purple-500'
    },
    {
      title: 'Sinh viên đang học',
      value: '1,247',
      icon: GraduationCap,
      trend: '+12% so với kỳ trước',
      trendUp: true,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Dashboard Đào tạo" 
        subtitle="Tổng quan hoạt động đào tạo"
      />
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Chương trình đào tạo gần đây
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Công nghệ thông tin</p>
                  <p className="text-sm text-gray-600">Cử nhân - 4 năm</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Đang hoạt động
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Quản trị kinh doanh</p>
                  <p className="text-sm text-gray-600">Cử nhân - 4 năm</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Đang hoạt động
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hoạt động gần đây
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm">Cập nhật chương trình CNTT</p>
                  <p className="text-xs text-gray-500">2 giờ trước</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm">Thêm học phần mới</p>
                  <p className="text-xs text-gray-500">5 giờ trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDashboard;
