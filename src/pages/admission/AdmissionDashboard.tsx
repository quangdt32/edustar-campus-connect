
import React from 'react';
import Header from '../../components/Header';
import StatsCard from '../../components/StatsCard';
import { 
  UserPlus, 
  FileText, 
  TrendingUp, 
  Calendar,
  Phone,
  CheckCircle
} from 'lucide-react';

const AdmissionDashboard = () => {
  const stats = [
    {
      title: 'Hồ sơ tuyển sinh',
      value: '2,145',
      icon: FileText,
      trend: '+156 hồ sơ mới',
      trendUp: true,
      color: 'bg-indigo-500'
    },
    {
      title: 'Đã trúng tuyển',
      value: '1,247',
      icon: CheckCircle,
      trend: '58% tỷ lệ đỗ',
      trendUp: true,
      color: 'bg-green-500'
    },
    {
      title: 'Cuộc gọi tư vấn',
      value: '456',
      icon: Phone,
      trend: '+89 cuộc gọi hôm nay',
      trendUp: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Đã nhập học',
      value: '892',
      icon: UserPlus,
      trend: '71% đã nhập học',
      trendUp: true,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Dashboard Tuyển sinh" 
        subtitle="Tổng quan hoạt động tuyển sinh"
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
              Hồ sơ mới nhất
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Nguyễn Văn Nam</p>
                  <p className="text-sm text-gray-600">CNTT - 28.5 điểm</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Trúng tuyển
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Trần Thị Lan</p>
                  <p className="text-sm text-gray-600">QTKD - 26.8 điểm</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Chờ xét
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Thống kê theo ngành
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Công nghệ thông tin</span>
                <span className="font-medium">456 hồ sơ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quản trị kinh doanh</span>
                <span className="font-medium">389 hồ sơ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Kế toán</span>
                <span className="font-medium">298 hồ sơ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Marketing</span>
                <span className="font-medium">234 hồ sơ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDashboard;
