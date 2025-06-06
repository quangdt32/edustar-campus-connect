
import React, { useState } from 'react';
import { Search, Filter, MessageSquare, Clock, CheckCircle, AlertTriangle, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerComplaints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const complaints = [
    {
      id: 1,
      studentName: 'Nguyễn Văn An',
      studentId: 'SV001',
      className: 'Lập trình Web - IT01',
      subject: 'Khiếu nại về điểm số',
      content: 'Em xin phản ánh về việc chấm điểm bài tập lớn. Em cho rằng bài làm của em đạt điểm cao hơn so với điểm đã được chấm.',
      submittedDate: '2024-01-15',
      status: 'Đang xử lý',
      priority: 'Cao',
      response: ''
    },
    {
      id: 2,
      studentName: 'Trần Thị Bình',
      studentId: 'SV002',
      className: 'Cơ sở dữ liệu - IT02',
      subject: 'Thắc mắc về lịch thi',
      content: 'Thưa thầy, em muốn hỏi về lịch thi cuối kỳ môn Cơ sở dữ liệu. Lịch thi có bị thay đổi không ạ?',
      submittedDate: '2024-01-14',
      status: 'Đã phản hồi',
      priority: 'Thấp',
      response: 'Lịch thi không có thay đổi. Sinh viên vui lòng kiểm tra lại thông báo trên website.'
    },
    {
      id: 3,
      studentName: 'Lê Minh Cường',
      studentId: 'SV003',
      className: 'Trí tuệ nhân tạo - IT03',
      subject: 'Vắng mặt có phép',
      content: 'Em xin phép vắng mặt buổi học ngày 20/01 do có việc gia đình cấp bách. Em có giấy xin phép đính kèm.',
      submittedDate: '2024-01-13',
      status: 'Đã xử lý',
      priority: 'Trung bình',
      response: 'Đã chấp nhận đơn xin phép. Sinh viên liên hệ nhóm trưởng để nhận tài liệu bài học.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Đang xử lý':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Đã phản hồi':
        return <MessageSquare className="h-4 w-4 text-blue-600" />;
      case 'Đã xử lý':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'Đang xử lý':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Đã phản hồi':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Đã xử lý':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
    switch (priority) {
      case 'Cao':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'Trung bình':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Thấp':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    const matchesSearch = complaint.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || complaint.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Quản lý khiếu nại</h1>
          <p className="text-gray-600">Xử lý khiếu nại và thắc mắc từ sinh viên</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">Đang xử lý</p>
                <p className="text-2xl font-bold text-yellow-600">5</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Đã phản hồi</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Đã xử lý</p>
                <p className="text-2xl font-bold text-green-600">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-sm text-gray-600">Ưu tiên cao</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm khiếu nại..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Đã phản hồi">Đã phản hồi</option>
                <option value="Đã xử lý">Đã xử lý</option>
              </select>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(complaint.status)}
                      <h3 className="text-lg font-semibold text-gray-900">{complaint.subject}</h3>
                      <span className={getStatusBadge(complaint.status)}>
                        {complaint.status}
                      </span>
                      <span className={getPriorityBadge(complaint.priority)}>
                        {complaint.priority}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-500">Sinh viên</p>
                        <p className="font-medium">{complaint.studentName} ({complaint.studentId})</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lớp học</p>
                        <p className="font-medium">{complaint.className}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ngày gửi</p>
                        <p className="font-medium">{new Date(complaint.submittedDate).toLocaleDateString('vi-VN')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Xem chi tiết
                  </Button>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Nội dung khiếu nại:</p>
                  <p className="text-gray-700">{complaint.content}</p>
                </div>
                
                {complaint.response && (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Phản hồi:</p>
                    <p className="text-gray-700">{complaint.response}</p>
                  </div>
                )}
                
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {complaint.status === 'Đang xử lý' && (
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Phản hồi
                    </Button>
                  )}
                  {complaint.status === 'Đã phản hồi' && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Đánh dấu đã xử lý
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    Gửi tin nhắn
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturerComplaints;
