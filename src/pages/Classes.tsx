
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  Users, 
  Edit, 
  Eye, 
  UserPlus,
  Calendar,
  MapPin,
  Trash2
} from 'lucide-react';
import { useClasses } from '../hooks/useClasses';
import CreateClassDialog from '../components/classes/CreateClassDialog';
import EditClassDialog from '../components/classes/EditClassDialog';
import DeleteClassDialog from '../components/classes/DeleteClassDialog';
import ManageStudentsDialog from '../components/classes/ManageStudentsDialog';

const Classes = () => {
  const { classes, createClass, updateClass, deleteClass } = useClasses();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  
  // Dialog states
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [manageStudentsDialogOpen, setManageStudentsDialogOpen] = useState(false);
  
  const [selectedClass, setSelectedClass] = useState<any>(null);

  // Filter classes
  const filteredClasses = classes.filter(classItem => {
    const matchesSearch = classItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         classItem.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = !selectedSemester || classItem.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  const handleEdit = (classData: any) => {
    setSelectedClass(classData);
    setEditDialogOpen(true);
  };

  const handleDelete = (classData: any) => {
    setSelectedClass(classData);
    setDeleteDialogOpen(true);
  };

  const handleManageStudents = (classData: any) => {
    setSelectedClass(classData);
    setManageStudentsDialogOpen(true);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý lớp học" 
        subtitle="Danh sách và thông tin lớp học"
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
                placeholder="Tìm kiếm lớp học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters & Actions */}
            <div className="flex gap-3">
              <select 
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tất cả học kỳ</option>
                <option value="HK1 2024">HK1 2024</option>
                <option value="HK2 2023">HK2 2023</option>
              </select>
              <button 
                onClick={() => setCreateDialogOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                Tạo lớp học
              </button>
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{classItem.name}</h3>
                  <p className="text-sm text-gray-500 font-mono">{classItem.code}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  classItem.status === 'Đang học' 
                    ? 'bg-green-100 text-green-800' 
                    : classItem.status === 'Sắp kết thúc'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {classItem.status}
                </span>
              </div>

              {/* Subject & Instructor */}
              <div className="mb-4">
                <p className="font-medium text-blue-600 mb-1">{classItem.subject}</p>
                <p className="text-sm text-gray-600">{classItem.instructor}</p>
              </div>

              {/* Info Grid */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">
                    {classItem.studentCount}/{classItem.maxStudents} sinh viên
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 ml-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(classItem.studentCount / classItem.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{classItem.room}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{classItem.schedule}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{classItem.semester}</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors" title="Xem chi tiết">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleEdit(classItem)}
                    className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors" 
                    title="Chỉnh sửa"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleManageStudents(classItem)}
                    className="p-1 text-purple-600 hover:bg-purple-100 rounded transition-colors" 
                    title="Quản lý sinh viên"
                  >
                    <UserPlus className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(classItem)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors" 
                    title="Xóa lớp"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy lớp học nào</h3>
            <p className="text-gray-500">Thử thay đổi bộ lọc hoặc tạo lớp học mới</p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-medium text-blue-900">Đăng ký lớp học hàng loạt</div>
              <div className="text-sm text-blue-600 mt-1">Cho phép sinh viên đăng ký nhiều lớp cùng lúc</div>
            </button>
            <button className="text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-medium text-green-900">Tạo lịch học tự động</div>
              <div className="text-sm text-green-600 mt-1">Hệ thống tự động xếp lịch cho các lớp</div>
            </button>
            <button className="text-left p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <div className="font-medium text-orange-900">Xem lịch sử thay đổi</div>
              <div className="text-sm text-orange-600 mt-1">Theo dõi các thay đổi của lớp học</div>
            </button>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <CreateClassDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreateClass={createClass}
      />
      
      <EditClassDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        classData={selectedClass}
        onUpdateClass={updateClass}
      />
      
      <DeleteClassDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        classData={selectedClass}
        onDeleteClass={deleteClass}
      />
      
      <ManageStudentsDialog
        open={manageStudentsDialogOpen}
        onOpenChange={setManageStudentsDialogOpen}
        classData={selectedClass}
        onUpdateClass={updateClass}
      />
    </div>
  );
};

export default Classes;
