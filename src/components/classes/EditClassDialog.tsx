
import React, { useState, useEffect } from 'react';
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
import { Edit } from 'lucide-react';

interface EditClassDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classData: any;
  onUpdateClass: (classData: any) => void;
}

const EditClassDialog = ({ open, onOpenChange, classData, onUpdateClass }: EditClassDialogProps) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    subject: '',
    instructor: '',
    maxStudents: '',
    room: '',
    schedule: '',
    semester: '',
    status: ''
  });

  useEffect(() => {
    if (classData) {
      setFormData({
        code: classData.code || '',
        name: classData.name || '',
        subject: classData.subject || '',
        instructor: classData.instructor || '',
        maxStudents: classData.maxStudents?.toString() || '',
        room: classData.room || '',
        schedule: classData.schedule || '',
        semester: classData.semester || '',
        status: classData.status || ''
      });
    }
  }, [classData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateClass({
      ...classData,
      ...formData,
      maxStudents: parseInt(formData.maxStudents)
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Chỉnh sửa lớp học
          </DialogTitle>
          <DialogDescription>
            Cập nhật thông tin lớp học
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-code">Mã lớp</Label>
                <Input
                  id="edit-code"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                  disabled
                  className="bg-gray-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-status">Trạng thái</Label>
                <select
                  id="edit-status"
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="Đang học">Đang học</option>
                  <option value="Sắp kết thúc">Sắp kết thúc</option>
                  <option value="Đã kết thúc">Đã kết thúc</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-name">Tên lớp</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-subject">Môn học</Label>
              <Input
                id="edit-subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-instructor">Giảng viên</Label>
              <Input
                id="edit-instructor"
                value={formData.instructor}
                onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-maxStudents">Số sinh viên tối đa</Label>
                <Input
                  id="edit-maxStudents"
                  type="number"
                  value={formData.maxStudents}
                  onChange={(e) => setFormData({...formData, maxStudents: e.target.value})}
                  min="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-room">Phòng học</Label>
                <Input
                  id="edit-room"
                  value={formData.room}
                  onChange={(e) => setFormData({...formData, room: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-schedule">Lịch học</Label>
              <Input
                id="edit-schedule"
                value={formData.schedule}
                onChange={(e) => setFormData({...formData, schedule: e.target.value})}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button type="submit">Cập nhật</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditClassDialog;
