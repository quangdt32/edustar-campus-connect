
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  Shield, 
  UserCheck, 
  UserX, 
  Edit, 
  Eye,
  Mail,
  Trash2
} from 'lucide-react';
import { useUsers } from '../hooks/useUsers';
import CreateUserDialog from '../components/users/CreateUserDialog';
import EditUserDialog from '../components/users/EditUserDialog';
import DeleteUserDialog from '../components/users/DeleteUserDialog';

const Users = () => {
  const { users, createUser, updateUser, deleteUser } = useUsers();
  
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dialog states
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleDelete = (user: any) => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const roleColors = {
    'Quản trị viên': 'bg-red-100 text-red-800',
    'Giảng viên': 'bg-blue-100 text-blue-800',
    'Sinh viên': 'bg-green-100 text-green-800'
  };

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý người dùng" 
        subtitle="Tài khoản và phân quyền hệ thống"
      />
      
      <div className="p-6">
        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm người dùng..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <button 
                onClick={() => setCreateDialogOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Tạo tài khoản
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Người dùng</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Vai trò</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Trạng thái</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Đăng nhập cuối</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${roleColors[user.role as keyof typeof roleColors] || 'bg-gray-100 text-gray-800'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === 'Đã kích hoạt' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-600">{user.lastLogin}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors" title="Xem chi tiết">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleEdit(user)}
                          className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors" 
                          title="Chỉnh sửa"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-purple-600 hover:bg-purple-100 rounded transition-colors" title="Phân quyền">
                          <Shield className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-orange-600 hover:bg-orange-100 rounded transition-colors" title="Gửi email">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(user)}
                          className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors" 
                          title="Xóa tài khoản"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Log */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nhật ký hoạt động gần đây</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-blue-900">Admin đã tạo tài khoản mới cho ThS. Lê Minh Tuấn</p>
                <p className="text-xs text-blue-600">2 giờ trước</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-green-900">TS. Trần Thị Hoa đã đăng nhập thành công</p>
                <p className="text-xs text-green-600">3 giờ trước</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-orange-900">Admin đã gửi email kích hoạt cho 5 tài khoản mới</p>
                <p className="text-xs text-orange-600">1 ngày trước</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <CreateUserDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreateUser={createUser}
      />
      
      <EditUserDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        userData={selectedUser}
        onUpdateUser={updateUser}
      />
      
      <DeleteUserDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        userData={selectedUser}
        onDeleteUser={deleteUser}
      />
    </div>
  );
};

export default Users;
