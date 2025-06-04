
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditStudentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  studentData: any;
  onUpdateStudent: (id: number, studentData: any) => void;
}

const EditStudentDialog = ({ open, onOpenChange, studentData, onUpdateStudent }: EditStudentDialogProps) => {
  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    email: '',
    phone: '',
    class: '',
    status: 'Đang học'
  });

  useEffect(() => {
    if (studentData) {
      setFormData({
        studentId: studentData.studentId || '',
        name: studentData.name || '',
        email: studentData.email || '',
        phone: studentData.phone || '',
        class: studentData.class || '',
        status: studentData.status || 'Đang học'
      });
    }
  }, [studentData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStudent(studentData.id, formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa sinh viên</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="studentId">Mã sinh viên</Label>
            <Input
              id="studentId"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              required
            />
          </div>
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
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="class">Lớp</Label>
            <Input
              id="class"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="status">Trạng thái</Label>
            <select
              id="status"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Đang học">Đang học</option>
              <option value="Tạm nghỉ">Tạm nghỉ</option>
              <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
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

export default EditStudentDialog;
