
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  avatar: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Nguyễn Văn Admin',
      email: 'admin@edustar.com',
      role: 'Quản trị viên',
      status: 'Đã kích hoạt',
      lastLogin: '2024-01-15 09:30',
      avatar: 'https://ui-avatars.com/api/?name=Admin&background=ef4444&color=fff'
    },
    {
      id: 2,
      name: 'TS. Trần Thị Hoa',
      email: 'hoa.tran@edustar.com',
      role: 'Giảng viên',
      status: 'Đã kích hoạt',
      lastLogin: '2024-01-15 08:15',
      avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+Hoa&background=10b981&color=fff'
    },
    {
      id: 3,
      name: 'ThS. Lê Minh Tuấn',
      email: 'tuan.le@edustar.com',
      role: 'Giảng viên',
      status: 'Chưa kích hoạt',
      lastLogin: 'Chưa đăng nhập',
      avatar: 'https://ui-avatars.com/api/?name=Le+Minh+Tuan&background=6366f1&color=fff'
    }
  ]);

  const createUser = async (userData: Omit<User, 'id' | 'avatar' | 'lastLogin'>) => {
    const newUser: User = {
      ...userData,
      id: Date.now(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=3b82f6&color=fff`,
      lastLogin: 'Chưa đăng nhập'
    };
    
    setUsers(prev => [...prev, newUser]);
    toast({
      title: "Thành công",
      description: "Đã tạo tài khoản mới",
    });
  };

  const updateUser = async (id: number, userData: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...userData } : user
    ));
    toast({
      title: "Thành công",
      description: "Đã cập nhật thông tin người dùng",
    });
  };

  const deleteUser = async (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id));
    toast({
      title: "Thành công",
      description: "Đã xóa tài khoản",
    });
  };

  return {
    users,
    createUser,
    updateUser,
    deleteUser
  };
};
