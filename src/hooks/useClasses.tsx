
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface ClassData {
  id: number;
  code: string;
  name: string;
  subject: string;
  instructor: string;
  studentCount: number;
  maxStudents: number;
  room: string;
  schedule: string;
  semester: string;
  status: string;
}

export const useClasses = () => {
  const [classes, setClasses] = useState<ClassData[]>([
    {
      id: 1,
      code: 'CNTT-K21-01',
      name: 'Công nghệ thông tin K21 - Lớp 1',
      subject: 'Lập trình Web',
      instructor: 'TS. Nguyễn Văn A',
      studentCount: 32,
      maxStudents: 40,
      room: 'P.301',
      schedule: 'T2, T4 (7:30-9:30)',
      semester: 'HK1 2024',
      status: 'Đang học'
    },
    {
      id: 2,
      code: 'QTKD-K20-01',
      name: 'Quản trị kinh doanh K20 - Lớp 1',
      subject: 'Marketing căn bản',
      instructor: 'ThS. Trần Thị B',
      studentCount: 28,
      maxStudents: 35,
      room: 'P.205',
      schedule: 'T3, T6 (9:45-11:45)',
      semester: 'HK1 2024',
      status: 'Đang học'
    },
    {
      id: 3,
      code: 'CNTT-K21-02',
      name: 'Công nghệ thông tin K21 - Lớp 2',
      subject: 'Cấu trúc dữ liệu',
      instructor: 'ThS. Lê Minh C',
      studentCount: 25,
      maxStudents: 30,
      room: 'P.401',
      schedule: 'T5, T7 (13:30-15:30)',
      semester: 'HK1 2024',
      status: 'Sắp kết thúc'
    }
  ]);

  const createClass = (classData: any) => {
    const newClass: ClassData = {
      id: Date.now(),
      ...classData,
      studentCount: 0
    };
    
    setClasses(prev => [...prev, newClass]);
    toast({
      title: "Tạo lớp học thành công",
      description: `Lớp ${newClass.name} đã được tạo`,
    });
  };

  const updateClass = (updatedClass: ClassData) => {
    setClasses(prev => prev.map(cls => 
      cls.id === updatedClass.id ? updatedClass : cls
    ));
    toast({
      title: "Cập nhật thành công",
      description: `Lớp ${updatedClass.name} đã được cập nhật`,
    });
  };

  const deleteClass = (classId: number) => {
    const classToDelete = classes.find(cls => cls.id === classId);
    setClasses(prev => prev.filter(cls => cls.id !== classId));
    toast({
      title: "Xóa lớp học thành công",
      description: `Lớp ${classToDelete?.name} đã được xóa`,
      variant: "destructive"
    });
  };

  return {
    classes,
    createClass,
    updateClass,
    deleteClass
  };
};
