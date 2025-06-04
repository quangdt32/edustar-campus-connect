
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteSubjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subjectData: any;
  onDeleteSubject: (id: number) => void;
}

const DeleteSubjectDialog = ({ open, onOpenChange, subjectData, onDeleteSubject }: DeleteSubjectDialogProps) => {
  const handleDelete = () => {
    onDeleteSubject(subjectData.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Xác nhận xóa môn học</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-600">
            Bạn có chắc chắn muốn xóa môn học <strong>{subjectData?.name}</strong> ({subjectData?.code})?
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
            Xóa môn học
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSubjectDialog;
