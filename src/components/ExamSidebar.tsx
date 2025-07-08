
import React from 'react';
import { 
  Home, 
  FileText, 
  Calendar, 
  ClipboardCheck, 
  Calculator,
  Users,
  BookOpen,
  Settings,
  LogOut,
  School,
  Clock
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ExamSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/exam' },
    { icon: Calendar, label: 'Lịch thi', path: '/exam/schedule' },
    { icon: FileText, label: 'Đề thi', path: '/exam/papers' },
    { icon: ClipboardCheck, label: 'Giám sát thi', path: '/exam/supervision' },
    { icon: Calculator, label: 'Chấm điểm', path: '/exam/grading' },
    { icon: Users, label: 'Danh sách thí sinh', path: '/exam/candidates' },
    { icon: Clock, label: 'Phòng thi', path: '/exam/rooms' },
    { icon: FileText, label: 'Báo cáo thi', path: '/exam/reports' },
    { icon: Settings, label: 'Cài đặt', path: '/exam/settings' },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white w-64 min-h-screen p-4 shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-purple-700">
        <div className="bg-orange-500 p-2 rounded-lg">
          <School className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-orange-400">EduStar</h1>
          <p className="text-xs text-purple-300">Phòng Khảo thí</p>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-purple-700 ${
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
        <div className="bg-purple-800 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-bold">KT</span>
            </div>
            <div>
              <p className="text-sm font-medium">NV Khảo thí</p>
              <p className="text-xs text-purple-300">Phòng Khảo thí</p>
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

export default ExamSidebar;
