
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditSubjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subjectData: any;
  onUpdateSubject: (id: number, subjectData: any) => void;
}

const EditSubjectDialog = ({ open, onOpenChange, subjectData, onUpdateSubject }: EditSubjectDialogProps) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    credits: 3,
    description: '',
    instructor: '',
    semester: 'HK1 2024',
    status: 'Đang hoạt động'
  });

  useEffect(() => {
    if (subjectData) {
      setFormData({
        code: subjectData.code || '',
        name: subjectData.name || '',
        credits: subjectData.credits || 3,
        description: subjectData.description || '',
        instructor: subjectData.instructor || '',
        semester: subjectData.semester || 'HK1 2024',
        status: subjectData.status || 'Đang hoạt động'
      });
    }
  }, [subjectData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSubject(subjectData.id, formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa môn học</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="code">Mã môn học</Label>
              <Input
                id="code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="credits">Số tín chỉ</Label>
              <Input
                id="credits"
                type="number"
                min="1"
                max="6"
                value={formData.credits}
                onChange={(e) => setFormData({ ...formData, credits: parseInt(e.target.value) })}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="name">Tên môn học</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Mô tả</Label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>
          <div>
            <Label htmlFor="instructor">Giảng viên</Label>
            <Input
              id="instructor"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="semester">Học kỳ</Label>
              <select
                id="semester"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="HK1 2024">HK1 2024</option>
                <option value="HK2 2024">HK2 2024</option>
                <option value="HK3 2024">HK3 2024</option>
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
                <option value="Đang hoạt động">Đang hoạt động</option>
                <option value="Không hoạt động">Không hoạt động</option>
                <option value="Tạm dừng">Tạm dừng</option>
              </select>
            </div>
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

export default EditSubjectDialog;
