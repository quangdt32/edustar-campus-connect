
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface Grade {
  id: number;
  studentId: string;
  studentName: string;
  subjectId: string;
  subjectName: string;
  className: string;
  semester: string;
  academicYear: string;
  attendanceScore: number;
  midtermScore: number;
  finalScore: number;
  totalScore: number;
  letterGrade: string;
  gpa: number;
  status: 'Đạt' | 'Không đạt' | 'Chờ xử lý';
  createdAt: string;
  updatedAt: string;
}

export const useGrades = () => {
  const [grades, setGrades] = useState<Grade[]>([
    {
      id: 1,
      studentId: 'SV001',
      studentName: 'Nguyễn Văn An',
      subjectId: 'IT101',
      subjectName: 'Lập trình Web',
      className: 'CNTT-K21',
      semester: 'HK1',
      academicYear: '2023-2024',
      attendanceScore: 8.5,
      midtermScore: 7.5,
      finalScore: 8.0,
      totalScore: 7.9,
      letterGrade: 'B+',
      gpa: 3.3,
      status: 'Đạt',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 2,
      studentId: 'SV002', 
      studentName: 'Trần Thị Bình',
      subjectId: 'IT102',
      subjectName: 'Cơ sở dữ liệu',
      className: 'CNTT-K21',
      semester: 'HK1',
      academicYear: '2023-2024',
      attendanceScore: 9.0,
      midtermScore: 8.5,
      finalScore: 9.0,
      totalScore: 8.8,
      letterGrade: 'A',
      gpa: 4.0,
      status: 'Đạt',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: 3,
      studentId: 'SV003',
      studentName: 'Lê Minh Cường',
      subjectId: 'IT101',
      subjectName: 'Lập trình Web',
      className: 'CNTT-K21',
      semester: 'HK1',
      academicYear: '2023-2024',
      attendanceScore: 6.0,
      midtermScore: 5.5,
      finalScore: 6.0,
      totalScore: 5.8,
      letterGrade: 'D+',
      gpa: 1.3,
      status: 'Không đạt',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    }
  ]);

  const createGrade = async (gradeData: Omit<Grade, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newGrade: Grade = {
      ...gradeData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    
    setGrades(prev => [...prev, newGrade]);
    toast({
      title: "Thành công",
      description: "Đã thêm điểm số mới",
    });
  };

  const updateGrade = async (id: number, gradeData: Partial<Grade>) => {
    setGrades(prev => prev.map(grade => 
      grade.id === id ? { 
        ...grade, 
        ...gradeData,
        updatedAt: new Date().toISOString().split('T')[0]
      } : grade
    ));
    toast({
      title: "Thành công", 
      description: "Đã cập nhật điểm số",
    });
  };

  const deleteGrade = async (id: number) => {
    setGrades(prev => prev.filter(grade => grade.id !== id));
    toast({
      title: "Thành công",
      description: "Đã xóa điểm số",
    });
  };

  return {
    grades,
    createGrade,
    updateGrade,
    deleteGrade
  };
};
