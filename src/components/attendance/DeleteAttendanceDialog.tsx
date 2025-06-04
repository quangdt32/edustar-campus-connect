
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteAttendanceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recordData: any;
  onDeleteRecord: (id: number) => void;
}

const DeleteAttendanceDialog = ({ open, onOpenChange, recordData, onDeleteRecord }: DeleteAttendanceDialogProps) => {
  const handleDelete = () => {
    onDeleteRecord(recordData.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Xác nhận xóa bản ghi điểm danh</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-600">
            Bạn có chắc chắn muốn xóa bản ghi điểm danh của sinh viên <strong>{recordData?.studentName}</strong> 
            trong lớp <strong>{recordData?.classCode}</strong> ngày <strong>{recordData?.date}</strong>?
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
            Xóa bản ghi
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAttendanceDialog;
