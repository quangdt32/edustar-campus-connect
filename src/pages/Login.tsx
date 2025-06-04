
import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from '../hooks/useAuth';
import LoginDialog from '../components/auth/LoginDialog';
import RegisterDialog from '../components/auth/RegisterDialog';

const Login = () => {
  const { user, login, register, isAuthenticated } = useAuth();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);

  const handleSwitchToRegister = () => {
    setLoginDialogOpen(false);
    setRegisterDialogOpen(true);
  };

  const handleSwitchToLogin = () => {
    setRegisterDialogOpen(false);
    setLoginDialogOpen(true);
  };

  // If authenticated, show welcome message
  if (isAuthenticated && user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">
              {user.fullName.charAt(0).toUpperCase()}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Chào mừng {user.fullName}!</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <p className="text-sm text-gray-500 mb-6">Vai trò: {user.role}</p>
          <div className="space-y-3">
            <Button onClick={() => window.location.href = '/'} className="w-full">
              Đi đến Dashboard
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/classes'} className="w-full">
              Quản lý lớp học
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <LogIn className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">EduStar</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-6">Hệ thống quản lý giáo dục</h2>
        <p className="text-gray-600 mb-8">Đăng nhập để truy cập hệ thống quản lý lớp học</p>
        
        <div className="space-y-4">
          <Button onClick={() => setLoginDialogOpen(true)} className="w-full">
            Đăng nhập
          </Button>
          <Button variant="outline" onClick={() => setRegisterDialogOpen(true)} className="w-full">
            Đăng ký tài khoản mới
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Tài khoản demo:</p>
          <div className="space-y-2 text-xs text-gray-600">
            <p><strong>Admin:</strong> admin@edu.vn</p>
            <p><strong>Giảng viên:</strong> lecturer@edu.vn</p>
            <p><strong>Sinh viên:</strong> student@edu.vn</p>
            <p className="text-gray-500">Mật khẩu: 123456</p>
          </div>
        </div>
      </div>

      <LoginDialog
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
        onLogin={login}
        onSwitchToRegister={handleSwitchToRegister}
      />
      
      <RegisterDialog
        open={registerDialogOpen}
        onOpenChange={setRegisterDialogOpen}
        onRegister={register}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </div>
  );
};

export default Login;
