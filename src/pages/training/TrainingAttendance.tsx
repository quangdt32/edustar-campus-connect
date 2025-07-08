
import React, { useState } from 'react';
import { Search, Filter, Download, Check, X, Clock, AlertTriangle, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAttendance } from '../../hooks/useAttendance';
import Header from '../../components/Header';

const TrainingAttendance = () => {
  const { attendanceRecords, createAttendanceRecord, updateAttendanceRecord, deleteAttendanceRecord } = useAttendance();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const classes = [
    { value: 'all', label: 'Tất cả lớp' },
    { value: 'IT101-01', label: 'Lập trình căn bản - IT101-01' },
    { value: 'IT201-01', label: 'Cấu trúc dữ liệu - IT201-01' },
    { value: 'IT301-01', label: 'Cơ sở dữ liệu - IT301-01' }
  ];

  const statusOptions = [
    { value: 'all', label: 'Tất cả trạng thái' },
    { value: 'Có mặt', label: 'Có mặt' },
    { value: 'Vắng mặt', label: 'Vắng mặt' },
    { value: 'Đi muộn', label: 'Đi muộn' },
    { value: 'Về sớm', label: 'Về sớm' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Có mặt':
        return <Check className="h-4 w-4 text-green-600" />;
      case 'Đi muộn':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Vắng mặt':
        return <X className="h-4 w-4 text-red-600" />;
      case 'Về sớm':
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'Có mặt':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Đi muộn':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Vắng mặt':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'Về sớm':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.classCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'all' || record.classCode === selectedClass;
    const matchesDate = !selectedDate || record.date === selectedDate;
    const matchesStatus = selectedStatus === 'all' || record.status === selectedStatus;
    return matchesSearch && matchesClass && matchesDate && matchesStatus;
  });

  const handleQuickAttendance = async () => {
    // Tạo điểm danh nhanh cho lớp được chọn
    if (selectedClass !== 'all') {
      const sampleStudents = [
        { id: 'SV004', name: 'Phạm Văn Dương' },
        { id: 'SV005', name: 'Hoàng Thị Em' },
        { id: 'SV006', name: 'Vũ Minh Phát' }
      ];

      for (const student of sampleStudents) {
        await createAttendanceRecord({
          studentId: student.id,
          studentName: student.name,
          classCode: selectedClass,
          className: classes.find(c => c.value === selectedClass)?.label || selectedClass,
          date: selectedDate,
          status: 'Có mặt',
          note: 'Điểm danh tự động'
        });
      }
    }
  };

  const getTotalStats = () => {
    const total = filteredRecords.length;
    const present = filteredRecords.filter(r => r.status === 'Có mặt').length;
    const absent = filteredRecords.filter(r => r.status === 'Vắng mặt').length;
    const late = filteredRecords.filter(r => r.status === 'Đi muộn').length;
    const earlyLeave = filteredRecords.filter(r => r.status === 'Về sớm').length;
    
    return { total, present, absent, late, earlyLeave };
  };

  const stats = getTotalStats();

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Điểm danh sinh viên" 
        subtitle="Quản lý điểm danh và theo dõi tình hình học tập"
      />
      
      <div className="p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">{stats.total}</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng số</p>
                <p className="text-lg font-bold text-blue-600">{stats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center gap-3">
              <Check className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Có mặt</p>
                <p className="text-lg font-bold text-green-600">{stats.present}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center gap-3">
              <X className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Vắng mặt</p>
                <p className="text-lg font-bold text-red-600">{stats.absent}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Đi muộn</p>
                <p className="text-lg font-bold text-yellow-600">{stats.late}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Về sớm</p>
                <p className="text-lg font-bold text-orange-600">{stats.earlyLeave}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm sinh viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {classes.map(cls => (
                <option key={cls.value} value={cls.value}>{cls.label}</option>
              ))}
            </select>
            
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            
            <Button 
              onClick={handleQuickAttendance}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={selectedClass === 'all'}
            >
              <Plus className="h-4 w-4 mr-2" />
              Điểm danh nhanh
            </Button>
            
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sinh viên
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lớp học
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ngày
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ghi chú
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{record.studentName}</div>
                        <div className="text-sm text-gray-500">{record.studentId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{record.className}</div>
                        <div className="text-sm text-gray-500">{record.classCode}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(record.date).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(record.status)}
                        <span className={getStatusBadge(record.status)}>
                          {record.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.note || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateAttendanceRecord(record.id, { status: record.status === 'Có mặt' ? 'Vắng mặt' : 'Có mặt' })}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => deleteAttendanceRecord(record.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredRecords.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Clock className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Chưa có dữ liệu điểm danh</h3>
              <p className="text-gray-500">Hãy chọn lớp và thực hiện điểm danh nhanh hoặc thay đổi bộ lọc</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingAttendance;
