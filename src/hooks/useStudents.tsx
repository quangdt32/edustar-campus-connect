
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface Student {
  id: number;
  studentId: string;
  name: string;
  email: string;
  phone: string;
  class: string;
  status: string;
  avatar: string;
}

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      studentId: 'SV001',
      name: 'Nguyễn Văn An',
      email: 'an.nguyen@edu.com',
      phone: '0123456789',
      class: 'CNTT-K21',
      status: 'Đang học',
      avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+An&background=3b82f6&color=fff'
    },
    {
      id: 2,
      studentId: 'SV002',
      name: 'Trần Thị Bình',
      email: 'binh.tran@edu.com',
      phone: '0987654321',
      class: 'QTKD-K20',
      status: 'Đang học',
      avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+Binh&background=10b981&color=fff'
    },
    {
      id: 3,
      studentId: 'SV003',
      name: 'Lê Minh Cường',
      email: 'cuong.le@edu.com',
      phone: '0369852147',
      class: 'CNTT-K21',
      status: 'Tạm nghỉ',
      avatar: 'https://ui-avatars.com/api/?name=Le+Minh+Cuong&background=f59e0b&color=fff'
    }
  ]);

  const createStudent = async (studentData: Omit<Student, 'id' | 'avatar'>) => {
    const newStudent: Student = {
      ...studentData,
      id: Date.now(),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(studentData.name)}&background=3b82f6&color=fff`
    };
    
    setStudents(prev => [...prev, newStudent]);
    toast({
      title: "Thành công",
      description: "Đã thêm sinh viên mới",
    });
  };

  const updateStudent = async (id: number, studentData: Partial<Student>) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, ...studentData } : student
    ));
    toast({
      title: "Thành công",
      description: "Đã cập nhật thông tin sinh viên",
    });
  };

  const deleteStudent = async (id: number) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    toast({
      title: "Thành công",
      description: "Đã xóa sinh viên",
    });
  };

  return {
    students,
    createStudent,
    updateStudent,
    deleteStudent
  };
};
