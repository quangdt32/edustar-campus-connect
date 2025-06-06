
import React, { useState } from 'react';
import { User, Lock, Bell, Monitor, Save, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'TS. Trần Thị Hoa',
    email: 'hoa.tran@edustar.com',
    phone: '0123456789',
    department: 'Khoa Công nghệ thông tin',
    position: 'Tiến sĩ',
    bio: 'Tiến sĩ Công nghệ thông tin với 15 năm kinh nghiệm giảng dạy và nghiên cứu.',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    emailNotifications: true,
    smsNotifications: false,
    systemNotifications: true,
    attendanceReminder: true,
    theme: 'light',
    language: 'vi'
  });

  const tabs = [
    { id: 'profile', label: 'Thông tin cá nhân', icon: User },
    { id: 'security', label: 'Bảo mật', icon: Lock },
    { id: 'notifications', label: 'Thông báo', icon: Bell },
    { id: 'preferences', label: 'Tùy chọn', icon: Monitor }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', formData);
    // Logic lưu cài đặt
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">GV</span>
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border hover:bg-gray-50">
            <Camera className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Ảnh đại diện</h3>
          <p className="text-sm text-gray-600">Nhấn vào biểu tượng camera để thay đổi ảnh</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Họ và tên
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Khoa
          </label>
          <input
            type="text"
            value={formData.department}
            onChange={(e) => handleInputChange('department', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chức vụ
          </label>
          <select
            value={formData.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Tiến sĩ">Tiến sĩ</option>
            <option value="Thạc sĩ">Thạc sĩ</option>
            <option value="Kỹ sư">Kỹ sư</option>
            <option value="Giảng viên">Giảng viên</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Giới thiệu
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleInputChange('bio', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Đổi mật khẩu</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mật khẩu hiện tại
            </label>
            <input
              type="password"
              value={formData.currentPassword}
              onChange={(e) => handleInputChange('currentPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mật khẩu mới
            </label>
            <input
              type="password"
              value={formData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Xác nhận mật khẩu mới
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Bảo mật tài khoản</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Xác thực hai bước</h4>
              <p className="text-sm text-gray-600">Tăng cường bảo mật với xác thực qua SMS</p>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Kích hoạt
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Phiên đăng nhập</h4>
              <p className="text-sm text-gray-600">Quản lý các thiết bị đã đăng nhập</p>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Cài đặt thông báo</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Thông báo email</h4>
              <p className="text-sm text-gray-600">Nhận thông báo qua email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.emailNotifications}
                onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Thông báo SMS</h4>
              <p className="text-sm text-gray-600">Nhận thông báo qua tin nhắn</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.smsNotifications}
                onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Thông báo hệ thống</h4>
              <p className="text-sm text-gray-600">Nhận thông báo từ hệ thống</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.systemNotifications}
                onChange={(e) => handleInputChange('systemNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-medium">Nhắc nhở điểm danh</h4>
              <p className="text-sm text-gray-600">Nhận nhắc nhở trước giờ học</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.attendanceReminder}
                onChange={(e) => handleInputChange('attendanceReminder', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Tùy chọn hiển thị</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Giao diện
            </label>
            <select
              value={formData.theme}
              onChange={(e) => handleInputChange('theme', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="light">Sáng</option>
              <option value="dark">Tối</option>
              <option value="auto">Tự động</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ngôn ngữ
            </label>
            <select
              value={formData.language}
              onChange={(e) => handleInputChange('language', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Cài đặt tài khoản</h1>
          <p className="text-gray-600">Quản lý thông tin cá nhân và cài đặt hệ thống</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'security' && renderSecurityTab()}
            {activeTab === 'notifications' && renderNotificationsTab()}
            {activeTab === 'preferences' && renderPreferencesTab()}
          </div>

          {/* Save Button */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              Lưu thay đổi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerSettings;
