
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CreateSubjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateSubject: (subjectData: any) => void;
}

const CreateSubjectDialog = ({ open, onOpenChange, onCreateSubject }: CreateSubjectDialogProps) => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    credits: 3,
    description: '',
    instructor: '',
    semester: 'HK1 2024',
    status: 'Đang hoạt động'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateSubject(formData);
    setFormData({
      code: '',
      name: '',
      credits: 3,
      description: '',
      instructor: '',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Thêm môn học mới</DialogTitle>
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
          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Hủy
            </Button>
            <Button type="submit" className="flex-1">
              Thêm môn học
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSubjectDialog;
