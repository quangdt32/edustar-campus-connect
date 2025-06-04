
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userData: any;
  onUpdateUser: (id: number, userData: any) => void;
}

const EditUserDialog = ({ open, onOpenChange, userData, onUpdateUser }: EditUserDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Giảng viên',
    status: 'Chưa kích hoạt'
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        role: userData.role || 'Giảng viên',
        status: userData.status || 'Chưa kích hoạt'
      });
    }
  }, [userData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser(userData.id, formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Họ và tên</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="role">Vai trò</Label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Quản trị viên">Quản trị viên</option>
              <option value="Giảng viên">Giảng viên</option>
              <option value="Sinh viên">Sinh viên</option>
            </select>
          </div>
          <div>
            <Label htmlFor="status">Trạng thái</Label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Đã kích hoạt">Đã kích hoạt</option>
              <option value="Chưa kích hoạt">Chưa kích hoạt</option>
              <option value="Bị khóa">Bị khóa</option>
            </select>
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Hủy
            </Button>
            <Button type="submit" className="flex-1">
              Cập nhật
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
