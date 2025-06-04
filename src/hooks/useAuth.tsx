
import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "@/hooks/use-toast";

interface User {
  id: number;
  email: string;
  fullName: string;
  role: 'admin' | 'lecturer' | 'student';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: 1,
      email,
      fullName: 'Người dùng Demo',
      role: email.includes('admin') ? 'admin' : email.includes('lecturer') ? 'lecturer' : 'student'
    };
    
    setUser(mockUser);
    toast({
      title: "Đăng nhập thành công",
      description: `Chào mừng ${mockUser.fullName}!`,
    });
  };

  const register = async (userData: any) => {
    // Simulate API call
    const newUser: User = {
      id: Date.now(),
      email: userData.email,
      fullName: userData.fullName,
      role: userData.role
    };
    
    setUser(newUser);
    toast({
      title: "Đăng ký thành công",
      description: `Tài khoản ${newUser.fullName} đã được tạo!`,
    });
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Đăng xuất thành công",
      description: "Hẹn gặp lại bạn!",
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
