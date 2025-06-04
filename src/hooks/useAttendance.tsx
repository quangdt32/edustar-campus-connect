
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface AttendanceRecord {
  id: number;
  studentId: string;
  studentName: string;
  classCode: string;
  className: string;
  date: string;
  status: 'Có mặt' | 'Vắng mặt' | 'Đi muộn' | 'Về sớm';
  note?: string;
}

export const useAttendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: 1,
      studentId: 'SV001',
      studentName: 'Nguyễn Văn An',
      classCode: 'IT101-01',
      className: 'Lập trình căn bản',
      date: '2024-01-15',
      status: 'Có mặt'
    },
    {
      id: 2,
      studentId: 'SV002',
      studentName: 'Trần Thị Bình',
      classCode: 'IT101-01',
      className: 'Lập trình căn bản',
      date: '2024-01-15',
      status: 'Đi muộn',
      note: 'Đến muộn 15 phút'
    },
    {
      id: 3,
      studentId: 'SV003',
      studentName: 'Lê Minh Cường',
      classCode: 'IT201-01',
      className: 'Cấu trúc dữ liệu',
      date: '2024-01-15',
      status: 'Vắng mặt',
      note: 'Không có phép'
    }
  ]);

  const createAttendanceRecord = async (recordData: Omit<AttendanceRecord, 'id'>) => {
    const newRecord: AttendanceRecord = {
      ...recordData,
      id: Date.now()
    };
    
    setAttendanceRecords(prev => [...prev, newRecord]);
    toast({
      title: "Thành công",
      description: "Đã thêm bản ghi điểm danh",
    });
  };

  const updateAttendanceRecord = async (id: number, recordData: Partial<AttendanceRecord>) => {
    setAttendanceRecords(prev => prev.map(record => 
      record.id === id ? { ...record, ...recordData } : record
    ));
    toast({
      title: "Thành công",
      description: "Đã cập nhật điểm danh",
    });
  };

  const deleteAttendanceRecord = async (id: number) => {
    setAttendanceRecords(prev => prev.filter(record => record.id !== id));
    toast({
      title: "Thành công",
      description: "Đã xóa bản ghi điểm danh",
    });
  };

  return {
    attendanceRecords,
    createAttendanceRecord,
    updateAttendanceRecord,
    deleteAttendanceRecord
  };
};
