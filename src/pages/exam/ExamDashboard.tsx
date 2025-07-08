
import React from 'react';
import Header from '../../components/Header';
import StatsCard from '../../components/StatsCard';
import { 
  Calendar, 
  FileText, 
  Users, 
  Clock,
  ClipboardCheck,
  AlertTriangle
} from 'lucide-react';

const ExamDashboard = () => {
  const stats = [
    {
      title: 'Kỳ thi đang diễn ra',
      value: '3',
      icon: Calendar,
      trend: 'Giữa kỳ + Cuối kỳ',
      trendUp: true,
      color: 'bg-purple-500'
    },
    {
      title: 'Phòng thi hoạt động',
      value: '25',
      icon: Clock,
      trend: '+5 phòng mới',
      trendUp: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Thí sinh dự thi',
      value: '1,120',
      icon: Users,
      trend: '95% có mặt',
      trendUp: true,
      color: 'bg-green-500'
    },
    {
      title: 'Bài thi đã chấm',
      value: '856',
      icon: ClipboardCheck,
      trend: '76% hoàn thành',
      trendUp: true,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Dashboard Khảo thí" 
        subtitle="Tổng quan hoạt động thi cử"
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
              Lịch thi hôm nay
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Lập trình Web</p>
                  <p className="text-sm text-gray-600">08:00 - 10:00 | P.301</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Đang diễn ra
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Cơ sở dữ liệu</p>
                  <p className="text-sm text-gray-600">14:00 - 16:00 | P.205</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Sắp tới
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Cảnh báo
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-900">5 sinh viên vắng thi</p>
                  <p className="text-xs text-red-600">Cần báo cáo</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">Phòng 302 thiếu giám thị</p>
                  <p className="text-xs text-yellow-600">Ca chiều</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDashboard;
