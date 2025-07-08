
import React from 'react';
import Header from '../../components/Header';
import StatsCard from '../../components/StatsCard';
import { 
  FileText, 
  Users, 
  CheckCircle, 
  Clock,
  MessageSquare,
  Award
} from 'lucide-react';

const StudentServiceDashboard = () => {
  const stats = [
    {
      title: 'Đơn xin học bổng',
      value: '145',
      icon: Award,
      trend: '+23 đơn mới',
      trendUp: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Đơn xin nghỉ học',
      value: '12',
      icon: FileText,
      trend: '+2 đơn mới',
      trendUp: true,
      color: 'bg-orange-500'
    },
    {
      title: 'Đơn đã xử lý',
      value: '98',
      icon: CheckCircle,
      trend: '85% hoàn thành',
      trendUp: true,
      color: 'bg-green-500'
    },
    {
      title: 'Đơn chờ xử lý',
      value: '47',
      icon: Clock,
      trend: 'Cần xử lý gấp',
      trendUp: false,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Dashboard Dịch vụ SV" 
        subtitle="Tổng quan dịch vụ sinh viên"
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
              Đơn mới nhất
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Đơn xin học bổng</p>
                  <p className="text-sm text-gray-600">Nguyễn Văn A - SV001</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  Chờ duyệt
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Đơn xin chuyển lớp</p>
                  <p className="text-sm text-gray-600">Trần Thị B - SV002</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Đã duyệt
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Thống kê theo loại đơn
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Học bổng</span>
                <span className="font-medium">145 đơn</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Chuyển lớp</span>
                <span className="font-medium">32 đơn</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Nghỉ học</span>
                <span className="font-medium">12 đơn</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Giấy xác nhận</span>
                <span className="font-medium">67 đơn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentServiceDashboard;
