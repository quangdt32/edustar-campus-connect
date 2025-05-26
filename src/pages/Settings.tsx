
import React from 'react';
import Header from '../components/Header';
import { User, Settings as SettingsIcon, Shield, Bell, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Cài đặt hệ thống" 
        subtitle="Quản lý cấu hình và tùy chọn"
      />
      
      <div className="p-6 space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Thông tin cá nhân</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tên hiển thị</label>
              <input 
                type="text" 
                value="Admin User"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                value="admin@edustar.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Cài đặt hệ thống</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Cho phép đăng ký tự động</p>
                <p className="text-sm text-gray-600">Sinh viên có thể tự đăng ký tài khoản</p>
              </div>
              <input type="checkbox" className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Xác thực 2 bước</p>
                <p className="text-sm text-gray-600">Bắt buộc xác thực qua email</p>
              </div>
              <input type="checkbox" className="h-4 w-4 text-blue-600" defaultChecked />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900">Bảo mật</h3>
          </div>
          <div className="space-y-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Đổi mật khẩu
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Xem phiên đăng nhập
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold text-gray-900">Thông báo</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-900">Email thông báo</span>
              <input type="checkbox" className="h-4 w-4 text-blue-600" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-900">Thông báo hệ thống</span>
              <input type="checkbox" className="h-4 w-4 text-blue-600" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
