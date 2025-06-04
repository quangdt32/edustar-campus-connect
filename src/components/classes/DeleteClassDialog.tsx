
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteClassDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classData: any;
  onDeleteClass: (classId: number) => void;
}

const DeleteClassDialog = ({ open, onOpenChange, classData, onDeleteClass }: DeleteClassDialogProps) => {
  const handleDelete = () => {
    if (classData) {
      onDeleteClass(classData.id);
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Xác nhận xóa lớp học</AlertDialogTitle>
          <AlertDialogDescription>
            Bạn có chắc chắn muốn xóa lớp học <strong>{classData?.name}</strong> ({classData?.code})?
            <br />
            <br />
            Hành động này không thể hoàn tác và sẽ xóa tất cả dữ liệu liên quan đến lớp học này.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
            Xóa lớp học
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteClassDialog;
