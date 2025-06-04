
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  BookOpen, 
  Edit, 
  Eye, 
  ToggleLeft, 
  ToggleRight,
  Clock,
  User,
  Trash2
} from 'lucide-react';
import { useSubjects } from '../hooks/useSubjects';
import CreateSubjectDialog from '../components/subjects/CreateSubjectDialog';
import EditSubjectDialog from '../components/subjects/EditSubjectDialog';
import DeleteSubjectDialog from '../components/subjects/DeleteSubjectDialog';

const Subjects = () => {
  const { subjects, createSubject, updateSubject, deleteSubject } = useSubjects();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  
  // Dialog states
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<any>(null);

  // Filter subjects
  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = !selectedSemester || subject.semester === selectedSemester;
    return matchesSearch && matchesSemester;
  });

  const handleEdit = (subject: any) => {
    setSelectedSubject(subject);
    setEditDialogOpen(true);
  };

  const handleDelete = (subject: any) => {
    setSelectedSubject(subject);
    setDeleteDialogOpen(true);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý môn học" 
        subtitle="Danh sách và thông tin môn học"
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
                placeholder="Tìm kiếm môn học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filters */}
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
                Thêm môn học
              </button>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                    <p className="text-sm text-gray-500 font-mono">{subject.code}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  subject.status === 'Đang hoạt động' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {subject.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {subject.description}
              </p>

              {/* Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{subject.credits} tín chỉ</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{subject.instructor}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">{subject.semester}</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors" title="Xem chi tiết">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleEdit(subject)}
                    className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors" 
                    title="Chỉnh sửa"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(subject)}
                    className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors" 
                    title="Xóa môn học"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors" title="Kích hoạt/Vô hiệu hóa">
                    {subject.status === 'Đang hoạt động' ? (
                      <ToggleRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ToggleLeft className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">{subjects.length}</div>
            <div className="text-sm text-gray-600">Tổng môn học</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">
              {subjects.filter(s => s.status === 'Đang hoạt động').length}
            </div>
            <div className="text-sm text-gray-600">Đang hoạt động</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-orange-600">
              {(subjects.reduce((sum, s) => sum + s.credits, 0) / subjects.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Tín chỉ trung bình</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(subjects.map(s => s.instructor)).size}
            </div>
            <div className="text-sm text-gray-600">Giảng viên</div>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <CreateSubjectDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreateSubject={createSubject}
      />
      
      <EditSubjectDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        subjectData={selectedSubject}
        onUpdateSubject={updateSubject}
      />
      
      <DeleteSubjectDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        subjectData={selectedSubject}
        onDeleteSubject={deleteSubject}
      />
    </div>
  );
};

export default Subjects;
