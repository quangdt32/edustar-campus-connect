
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface Subject {
  id: number;
  code: string;
  name: string;
  credits: number;
  description: string;
  instructor: string;
  semester: string;
  status: string;
}

export const useSubjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: 1,
      code: 'IT101',
      name: 'Lập trình căn bản',
      credits: 3,
      description: 'Môn học cung cấp kiến thức cơ bản về lập trình',
      instructor: 'TS. Nguyễn Văn A',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    },
    {
      id: 2,
      code: 'IT201',
      name: 'Cấu trúc dữ liệu và giải thuật',
      credits: 4,
      description: 'Nghiên cứu các cấu trúc dữ liệu và thuật toán cơ bản',
      instructor: 'ThS. Trần Thị B',
      semester: 'HK1 2024',
      status: 'Đang hoạt động'
    },
    {
      id: 3,
      code: 'MK101',
      name: 'Marketing căn bản',
      credits: 3,
      description: 'Kiến thức cơ bản về marketing và quảng cáo',
      instructor: 'ThS. Lê Minh C',
      semester: 'HK2 2023',
      status: 'Không hoạt động'
    }
  ]);

  const createSubject = async (subjectData: Omit<Subject, 'id'>) => {
    const newSubject: Subject = {
      ...subjectData,
      id: Date.now()
    };
    
    setSubjects(prev => [...prev, newSubject]);
    toast({
      title: "Thành công",
      description: "Đã thêm môn học mới",
    });
  };

  const updateSubject = async (id: number, subjectData: Partial<Subject>) => {
    setSubjects(prev => prev.map(subject => 
      subject.id === id ? { ...subject, ...subjectData } : subject
    ));
    toast({
      title: "Thành công",
      description: "Đã cập nhật thông tin môn học",
    });
  };

  const deleteSubject = async (id: number) => {
    setSubjects(prev => prev.filter(subject => subject.id !== id));
    toast({
      title: "Thành công",
      description: "Đã xóa môn học",
    });
  };

  return {
    subjects,
    createSubject,
    updateSubject,
    deleteSubject
  };
};
