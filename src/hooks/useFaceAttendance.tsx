
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export interface FaceAttendanceRecord {
  id: number;
  studentId: string;
  studentName: string;
  classCode: string;
  className: string;
  date: string;
  time: string;
  method: 'manual' | 'face';
  imageUrl?: string;
  confidence?: number;
}

export const useFaceAttendance = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState<FaceAttendanceRecord[]>([]);

  const markAttendance = async (imageData: string, classInfo: any) => {
    setIsProcessing(true);
    
    try {
      // Mô phỏng API call để xử lý nhận diện khuôn mặt
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newRecord: FaceAttendanceRecord = {
        id: Date.now(),
        studentId: 'SV001',
        studentName: 'Nguyễn Văn An',
        classCode: classInfo.code || 'IT101',
        className: classInfo.name || 'Lập trình Web',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('vi-VN'),
        method: 'face',
        imageUrl: imageData,
        confidence: 0.95
      };
      
      setAttendanceRecords(prev => [...prev, newRecord]);
      
      toast({
        title: "Thành công",
        description: "Điểm danh khuôn mặt thành công!",
      });
      
      return { success: true, record: newRecord };
    } catch (error) {
      console.error('Lỗi điểm danh:', error);
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi điểm danh.",
        variant: "destructive"
      });
      return { success: false, error };
    } finally {
      setIsProcessing(false);
    }
  };

  const getTodayAttendance = () => {
    const today = new Date().toISOString().split('T')[0];
    return attendanceRecords.filter(record => record.date === today);
  };

  return {
    isProcessing,
    attendanceRecords,
    markAttendance,
    getTodayAttendance
  };
};
