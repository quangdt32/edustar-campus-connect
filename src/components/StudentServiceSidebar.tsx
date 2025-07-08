
import React from 'react';
import { 
  Home, 
  Users, 
  FileText, 
  MessageSquare, 
  Award,
  CreditCard,
  Calendar,
  Settings,
  LogOut,
  School,
  HelpCircle
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const StudentServiceSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/student-service' },
    { icon: Users, label: 'Hồ sơ sinh viên', path: '/student-service/profiles' },
    { icon: FileText, label: 'Giấy tờ - Văn bản', path: '/student-service/documents' },
    { icon: Award, label: 'Học bổng', path: '/student-service/scholarships' },
    { icon: MessageSquare, label: 'Khiếu nại', path: '/student-service/complaints' },
    { icon: HelpCircle, label: 'Tư vấn hỗ trợ', path: '/student-service/support' },
    { icon: Calendar, label: 'Hoạt động SV', path: '/student-service/activities' },
    { icon: FileText, label: 'Báo cáo DVSV', path: '/student-service/reports' },
    { icon: Settings, label: 'Cài đặt', path: '/student-service/settings' },
  ];

  return (
    <div className="bg-gradient-to-b from-teal-900 to-teal-800 text-white w-64 min-h-screen p-4 shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-teal-700">
        <div className="bg-orange-500 p-2 rounded-lg">
          <School className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-orange-400">EduStar</h1>
          <p className="text-xs text-teal-300">DVSV</p>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-teal-700 ${
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
        <div className="bg-teal-800 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-bold">DV</span>
            </div>
            <div>
              <p className="text-sm font-medium">NV DVSV</p>
              <p className="text-xs text-teal-300">Dịch vụ SV</p>
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

export default StudentServiceSidebar;
