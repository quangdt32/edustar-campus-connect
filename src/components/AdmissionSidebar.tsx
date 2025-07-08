
import React from 'react';
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp,
  Phone,
  MapPin,
  Settings,
  LogOut,
  School,
  UserPlus
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const AdmissionSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admission' },
    { icon: UserPlus, label: 'Hồ sơ tuyển sinh', path: '/admission/applications' },
    { icon: Calendar, label: 'Lịch tuyển sinh', path: '/admission/schedule' },
    { icon: FileText, label: 'Thông báo TS', path: '/admission/announcements' },
    { icon: Phone, label: 'Tư vấn TS', path: '/admission/counseling' },
    { icon: TrendingUp, label: 'Thống kê TS', path: '/admission/statistics' },
    { icon: MapPin, label: 'Điểm tuyển sinh', path: '/admission/locations' },
    { icon: FileText, label: 'Báo cáo TS', path: '/admission/reports' },
    { icon: Settings, label: 'Cài đặt', path: '/admission/settings' },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white w-64 min-h-screen p-4 shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-indigo-700">
        <div className="bg-orange-500 p-2 rounded-lg">
          <School className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-orange-400">EduStar</h1>
          <p className="text-xs text-indigo-300">Phòng Tuyển sinh</p>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-indigo-700 ${
                isActive ? 'bg-orange-500 shadow-lg' : ''
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info & Logout */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-indigo-800 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-bold">TS</span>
            </div>
            <div>
              <p className="text-sm font-medium">NV Tuyển sinh</p>
              <p className="text-xs text-indigo-300">Phòng Tuyển sinh</p>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-300 hover:text-red-200 hover:bg-red-900/20 rounded-lg transition-colors w-full">
          <LogOut className="h-4 w-4" />
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default AdmissionSidebar;
