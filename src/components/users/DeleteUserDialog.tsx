
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userData: any;
  onDeleteUser: (id: number) => void;
}

const DeleteUserDialog = ({ open, onOpenChange, userData, onDeleteUser }: DeleteUserDialogProps) => {
  const handleDelete = () => {
    onDeleteUser(userData.id);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Xác nhận xóa tài khoản</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-600">
            Bạn có chắc chắn muốn xóa tài khoản <strong>{userData?.name}</strong>?
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
            Xóa tài khoản
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserDialog;
