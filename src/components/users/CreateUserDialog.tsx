
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CreateUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateUser: (userData: any) => void;
}

const CreateUserDialog = ({ open, onOpenChange, onCreateUser }: CreateUserDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Giảng viên',
    status: 'Chưa kích hoạt'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateUser(formData);
    setFormData({
      name: '',
      email: '',
      role: 'Giảng viên',
      status: 'Chưa kích hoạt'
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tạo tài khoản mới</DialogTitle>
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
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Hủy
            </Button>
            <Button type="submit" className="flex-1">
              Tạo tài khoản
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserDialog;
