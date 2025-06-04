
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  Calendar,
  Edit, 
  Eye, 
  Trash2,
  Download,
  Filter
} from 'lucide-react';
import { useAttendance } from '../hooks/useAttendance';
import CreateAttendanceDialog from '../components/attendance/CreateAttendanceDialog';
import EditAttendanceDialog from '../components/attendance/EditAttendanceDialog';
import DeleteAttendanceDialog from '../components/attendance/DeleteAttendanceDialog';

const Attendance = () => {
  const { attendanceRecords, createAttendanceRecord, updateAttendanceRecord, deleteAttendanceRecord } = useAttendance();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  
  // Dialog states
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  // Filter records
  const filteredRecords = attendanceRecords.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.classCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate || record.date === selectedDate;
    const matchesStatus = !selectedStatus || record.status === selectedStatus;
    return matchesSearch && matchesDate && matchesStatus;
  });

  const handleEdit = (record: any) => {
    setSelectedRecord(record);
    setEditDialogOpen(true);
  };

  const handleDelete = (record: any) => {
    setSelectedRecord(record);
    setDeleteDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Có mặt':
        return 'bg-green-100 text-green-800';
      case 'Vắng mặt':
        return 'bg-red-100 text-red-800';
      case 'Đi muộn':
        return 'bg-yellow-100 text-yellow-800';
      case 'Về sớm':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý điểm danh" 
        subtitle="Theo dõi và quản lý điểm danh sinh viên"
      />
      
      <div className="p-6">
        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm sinh viên, lớp..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters & Actions */}
            <div className="flex gap-3">
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
                <option value="">Tất cả trạng thái</option>
                <option value="Có mặt">Có mặt</option>
                <option value="Vắng mặt">Vắng mặt</option>
                <option value="Đi muộn">Đi muộn</option>
                <option value="Về sớm">Về sớm</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Download className="h-4 w-4" />
                Xuất báo cáo
              </button>
              <button 
                onClick={() => setCreateDialogOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Thêm điểm danh
              </button>
            </div>
          </div>
        </div>

        {/* Attendance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">
              {filteredRecords.filter(r => r.status === 'Có mặt').length}
            </div>
            <div className="text-sm text-gray-600">Có mặt</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-red-600">
              {filteredRecords.filter(r => r.status === 'Vắng mặt').length}
            </div>
            <div className="text-sm text-gray-600">Vắng mặt</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-yellow-600">
              {filteredRecords.filter(r => r.status === 'Đi muộn').length}
            </div>
            <div className="text-sm text-gray-600">Đi muộn</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">
              {filteredRecords.length > 0 ? 
                Math.round((filteredRecords.filter(r => r.status === 'Có mặt').length / filteredRecords.length) * 100) : 0}%
            </div>
            <div className="text-sm text-gray-600">Tỷ lệ có mặt</div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Sinh viên</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Lớp học</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Ngày</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Trạng thái</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Ghi chú</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{record.studentName}</p>
                        <p className="text-sm text-gray-500 font-mono">{record.studentId}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{record.className}</p>
                        <p className="text-sm text-gray-500 font-mono">{record.classCode}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-900">{record.date}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-600">{record.note || '-'}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors" title="Xem chi tiết">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleEdit(record)}
                          className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors" 
                          title="Chỉnh sửa"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(record)}
                          className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors" 
                          title="Xóa"
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
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Không có dữ liệu điểm danh</h3>
              <p className="text-gray-500">Thử thay đổi bộ lọc hoặc thêm điểm danh mới</p>
            </div>
          )}
        </div>
      </div>

      {/* Dialogs */}
      <CreateAttendanceDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreateRecord={createAttendanceRecord}
      />
      
      <EditAttendanceDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        recordData={selectedRecord}
        onUpdateRecord={updateAttendanceRecord}
      />
      
      <DeleteAttendanceDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        recordData={selectedRecord}
        onDeleteRecord={deleteAttendanceRecord}
      />
    </div>
  );
};

export default Attendance;
