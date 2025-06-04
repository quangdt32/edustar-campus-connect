
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';

interface CreateClassDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateClass: (classData: any) => void;
}

const CreateClassDialog = ({ open, onOpenChange, onCreateClass }: CreateClassDialogProps) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    subject: '',
    instructor: '',
    maxStudents: '',
    room: '',
    schedule: '',
    semester: 'HK1 2024'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateClass({
      ...formData,
      maxStudents: parseInt(formData.maxStudents),
      studentCount: 0,
      status: 'Đang học'
    });
    setFormData({
      code: '',
      name: '',
      subject: '',
      instructor: '',
      maxStudents: '',
      room: '',
      schedule: '',
      semester: 'HK1 2024'
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Tạo lớp học mới
          </DialogTitle>
          <DialogDescription>
            Nhập thông tin để tạo lớp học mới
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="code">Mã lớp</Label>
                <Input
                  id="code"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                  placeholder="VD: CNTT-K21-01"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="semester">Học kỳ</Label>
                <select
                  id="semester"
                  value={formData.semester}
                  onChange={(e) => setFormData({...formData, semester: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="HK1 2024">HK1 2024</option>
                  <option value="HK2 2024">HK2 2024</option>
                  <option value="HK1 2025">HK1 2025</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Tên lớp</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="VD: Công nghệ thông tin K21 - Lớp 1"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Môn học</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="VD: Lập trình Web"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructor">Giảng viên</Label>
              <Input
                id="instructor"
                value={formData.instructor}
                onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                placeholder="VD: TS. Nguyễn Văn A"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="maxStudents">Số sinh viên tối đa</Label>
                <Input
                  id="maxStudents"
                  type="number"
                  value={formData.maxStudents}
                  onChange={(e) => setFormData({...formData, maxStudents: e.target.value})}
                  placeholder="40"
                  min="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="room">Phòng học</Label>
                <Input
                  id="room"
                  value={formData.room}
                  onChange={(e) => setFormData({...formData, room: e.target.value})}
                  placeholder="P.301"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="schedule">Lịch học</Label>
              <Input
                id="schedule"
                value={formData.schedule}
                onChange={(e) => setFormData({...formData, schedule: e.target.value})}
                placeholder="T2, T4 (7:30-9:30)"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button type="submit">Tạo lớp học</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateClassDialog;
