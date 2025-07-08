
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Download,
  Upload,
  Calculator,
  TrendingUp
} from 'lucide-react';
import { useGrades } from '../hooks/useGrades';

const Grades = () => {
  const { grades, createGrade, updateGrade, deleteGrade } = useGrades();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');

  const filteredGrades = grades.filter(grade => {
    const matchesSearch = 
      grade.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grade.subjectName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSemester = selectedSemester === 'all' || grade.semester === selectedSemester;
    const matchesClass = selectedClass === 'all' || grade.className === selectedClass;
    
    return matchesSearch && matchesSemester && matchesClass;
  });

  const getGradeColor = (status: string) => {
    switch (status) {
      case 'Đạt':
        return 'bg-green-100 text-green-800';
      case 'Không đạt':
        return 'bg-red-100 text-red-800';
      case 'Chờ xử lý':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateClassAverage = () => {
    if (filteredGrades.length === 0) return 0;
    const total = filteredGrades.reduce((sum, grade) => sum + grade.totalScore, 0);
    return (total / filteredGrades.length).toFixed(2);
  };

  const getPassRate = () => {
    if (filteredGrades.length === 0) return 0;
    const passCount = filteredGrades.filter(grade => grade.status === 'Đạt').length;
    return ((passCount / filteredGrades.length) * 100).toFixed(1);
  };

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý điểm số" 
        subtitle="Nhập và quản lý điểm số sinh viên"
      />
      
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tổng bài thi</p>
                <p className="text-2xl font-bold text-gray-900">{filteredGrades.length}</p>
              </div>
              <Calculator className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Điểm trung bình</p>
                <p className="text-2xl font-bold text-gray-900">{calculateClassAverage()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tỷ lệ đạt</p>
                <p className="text-2xl font-bold text-gray-900">{getPassRate()}%</p>
              </div>
              <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Chờ xử lý</p>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredGrades.filter(g => g.status === 'Chờ xử lý').length}
                </p>
              </div>
              <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sinh viên, môn học..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả học kỳ</option>
                <option value="HK1">Học kỳ 1</option>
                <option value="HK2">Học kỳ 2</option>
                <option value="HK3">Học kỳ 3</option>
              </select>
              
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả lớp</option>
                <option value="CNTT-K21">CNTT-K21</option>
                <option value="QTKD-K20">QTKD-K20</option>
                <option value="KT-K22">KT-K22</option>
              </select>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Upload className="h-4 w-4" />
                Import Excel
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Download className="h-4 w-4" />
                Xuất báo cáo
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                Nhập điểm
              </button>
            </div>
          </div>
        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Sinh viên</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Môn học</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Lớp</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Chuyên cần</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Giữa kỳ</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Cuối kỳ</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Tổng kết</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Xếp loại</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Trạng thái</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredGrades.map((grade) => (
                  <tr key={grade.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{grade.studentName}</p>
                        <p className="text-sm text-gray-500">{grade.studentId}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{grade.subjectName}</p>
                        <p className="text-sm text-gray-500">{grade.subjectId}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">{grade.className}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm bg-blue-50 px-2 py-1 rounded">
                        {grade.attendanceScore.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm bg-yellow-50 px-2 py-1 rounded">
                        {grade.midtermScore.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono text-sm bg-purple-50 px-2 py-1 rounded">
                        {grade.finalScore.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-mono font-bold text-sm bg-gray-100 px-2 py-1 rounded">
                        {grade.totalScore.toFixed(1)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-sm">
                        {grade.letterGrade}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(grade.status)}`}>
                        {grade.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
