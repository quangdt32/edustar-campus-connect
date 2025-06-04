
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditAttendanceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recordData: any;
  onUpdateRecord: (id: number, recordData: any) => void;
}

const EditAttendanceDialog = ({ open, onOpenChange, recordData, onUpdateRecord }: EditAttendanceDialogProps) => {
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    classCode: '',
    className: '',
    date: '',
    status: 'Có mặt' as const,
    note: ''
  });

  useEffect(() => {
    if (recordData) {
      setFormData({
        studentId: recordData.studentId || '',
        studentName: recordData.studentName || '',
        classCode: recordData.classCode || '',
        className: recordData.className || '',
        date: recordData.date || '',
        status: recordData.status || 'Có mặt',
        note: recordData.note || ''
      });
    }
  }, [recordData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateRecord(recordData.id, formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa điểm danh</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="date">Ngày</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="studentName">Tên sinh viên</Label>
            <Input
              id="studentName"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="classCode">Mã lớp</Label>
              <Input
                id="classCode"
                value={formData.classCode}
                onChange={(e) => setFormData({ ...formData, classCode: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="status">Trạng thái</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Có mặt">Có mặt</option>
                <option value="Vắng mặt">Vắng mặt</option>
                <option value="Đi muộn">Đi muộn</option>
                <option value="Về sớm">Về sớm</option>
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="className">Tên lớp</Label>
            <Input
              id="className"
              value={formData.className}
              onChange={(e) => setFormData({ ...formData, className: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="note">Ghi chú</Label>
            <textarea
              id="note"
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
              placeholder="Ghi chú thêm (tùy chọn)"
            />
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

export default EditAttendanceDialog;
