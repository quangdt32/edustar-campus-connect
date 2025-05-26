
import React from 'react';
import { 
  Home, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  ClipboardCheck, 
  MessageSquare,
  Settings,
  LogOut,
  School,
  BarChart3
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LecturerSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Trang chủ', path: '/lecturer' },
    { icon: GraduationCap, label: 'Lớp học của tôi', path: '/lecturer/classes' },
    { icon: BookOpen, label: 'Môn học phụ trách', path: '/lecturer/subjects' },
    { icon: Calendar, label: 'Lịch giảng dạy', path: '/lecturer/schedule' },
    { icon: ClipboardCheck, label: 'Điểm danh', path: '/lecturer/attendance' },
    { icon: BarChart3, label: 'Báo cáo', path: '/lecturer/reports' },
    { icon: MessageSquare, label: 'Khiếu nại', path: '/lecturer/complaints' },
    { icon: Settings, label: 'Cài đặt', path: '/lecturer/settings' },
  ];

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-800 text-white w-64 min-h-screen p-4 shadow-xl">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-green-700">
        <div className="bg-orange-500 p-2 rounded-lg">
          <School className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-orange-400">EduStar</h1>
          <p className="text-xs text-green-300">Dành cho giảng viên</p>
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-green-700 ${
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
        <div className="bg-green-800 rounded-lg p-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-bold">GV</span>
            </div>
            <div>
              <p className="text-sm font-medium">TS. Trần Thị Hoa</p>
              <p className="text-xs text-green-300">Giảng viên</p>
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

export default LecturerSidebar;
