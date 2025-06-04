
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
import { Users, UserPlus, UserMinus, Search } from 'lucide-react';

interface ManageStudentsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classData: any;
  onUpdateClass: (classData: any) => void;
}

const ManageStudentsDialog = ({ open, onOpenChange, classData, onUpdateClass }: ManageStudentsDialogProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data cho sinh viên trong lớp
  const [enrolledStudents] = useState([
    { id: 1, code: 'SV001', name: 'Nguyễn Văn An', email: 'an.nv@email.com' },
    { id: 2, code: 'SV002', name: 'Trần Thị Bình', email: 'binh.tt@email.com' },
    { id: 3, code: 'SV003', name: 'Lê Văn Cường', email: 'cuong.lv@email.com' },
  ]);

  // Mock data cho sinh viên có thể thêm
  const [availableStudents] = useState([
    { id: 4, code: 'SV004', name: 'Phạm Thị Dung', email: 'dung.pt@email.com' },
    { id: 5, code: 'SV005', name: 'Hoàng Văn Em', email: 'em.hv@email.com' },
  ]);

  const filteredEnrolled = enrolledStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAvailable = availableStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Quản lý sinh viên - {classData?.name}
          </DialogTitle>
          <DialogDescription>
            Thêm hoặc xóa sinh viên khỏi lớp học
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Tìm kiếm sinh viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-hidden">
            {/* Sinh viên trong lớp */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-700">
                Sinh viên trong lớp ({enrolledStudents.length})
              </h4>
              <div className="border rounded-lg p-3 space-y-2 max-h-[350px] overflow-y-auto">
                {filteredEnrolled.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-2 bg-green-50 rounded border">
                    <div>
                      <p className="font-medium text-sm">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.code}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      title="Xóa khỏi lớp"
                    >
                      <UserMinus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {filteredEnrolled.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    Không tìm thấy sinh viên nào
                  </p>
                )}
              </div>
            </div>

            {/* Sinh viên có thể thêm */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-gray-700">
                Sinh viên có thể thêm ({availableStudents.length})
              </h4>
              <div className="border rounded-lg p-3 space-y-2 max-h-[350px] overflow-y-auto">
                {filteredAvailable.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-2 bg-blue-50 rounded border">
                    <div>
                      <p className="font-medium text-sm">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.code}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
                      title="Thêm vào lớp"
                    >
                      <UserPlus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {filteredAvailable.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    Không có sinh viên nào để thêm
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManageStudentsDialog;
