
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteStudentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  studentData: any;
  onDeleteStudent: (id: number) => void;
}

const DeleteStudentDialog = ({ open, onOpenChange, studentData, onDeleteStudent }: DeleteStudentDialogProps) => {
  const handleDelete = () => {
    onDeleteStudent(studentData.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Xác nhận xóa sinh viên</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-600">
            Bạn có chắc chắn muốn xóa sinh viên <strong>{studentData?.name}</strong>?
          </p>
          <p className="text-sm text-red-600 mt-2">
            Hành động này không thể hoàn tác.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            Hủy
          </Button>
          <Button variant="destructive" onClick={handleDelete} className="flex-1">
            Xóa sinh viên
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteStudentDialog;
