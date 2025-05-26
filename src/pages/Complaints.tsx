
import React, { useState } from 'react';
import Header from '../components/Header';
import { 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Eye,
  Plus,
  Filter,
  Search
} from 'lucide-react';

const Complaints = () => {
  const [complaints] = useState([
    {
      id: 1,
      type: 'Điểm danh',
      title: 'Khiếu nại về điểm danh không chính xác',
      student: 'Nguyễn Văn An (SV001)',
      description: 'Sinh viên có mặt nhưng hệ thống ghi nhận là vắng mặt trong buổi học ngày 14/01/2024',
      status: 'Chờ xử lý',
      priority: 'Cao',
      created: '15/01/2024 08:30',
      assignee: 'Chưa phân công'
    },
    {
      id: 2,
      type: 'Đổi lớp',
      title: 'Yêu cầu chuyển lớp học do xung đột lịch',
      student: 'Trần Thị Bình (SV002)',
      description: 'Sinh viên có lịch làm thêm trùng với giờ học lớp hiện tại, yêu cầu chuyển sang lớp khác',
      status: 'Đang xử lý',
      priority: 'Trung bình',
      created: '14/01/2024 15:20',
      assignee: 'TS. Nguyễn Văn A'
    },
    {
      id: 3,
      type: 'Điểm danh',
      title: 'Khiếu nại thiết bị điểm danh lỗi',
      student: 'Lê Minh Cường (SV003)',
      description: 'Máy quét QR code không hoạt động, sinh viên không thể điểm danh',
      status: 'Hoàn thành',
      priority: 'Thấp',
      created: '13/01/2024 09:15',
      assignee: 'Admin'
    },
    {
      id: 4,
      type: 'Khác',
      title: 'Phản ánh về chất lượng phòng học',
      student: 'Phạm Thị Dung (SV004)',
      description: 'Phòng học P.301 máy chiếu không hoạt động, ảnh hưởng đến việc học',
      status: 'Từ chối',
      priority: 'Thấp',
      created: '12/01/2024 14:00',
      assignee: 'ThS. Trần Thị B'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Chờ xử lý': return 'bg-yellow-100 text-yellow-800';
      case 'Đang xử lý': return 'bg-blue-100 text-blue-800';
      case 'Hoàn thành': return 'bg-green-100 text-green-800';
      case 'Từ chối': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Cao': return 'bg-red-100 text-red-800';
      case 'Trung bình': return 'bg-yellow-100 text-yellow-800';
      case 'Thấp': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Điểm danh': return <CheckCircle className="h-4 w-4" />;
      case 'Đổi lớp': return <MessageSquare className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const pendingCount = complaints.filter(c => c.status === 'Chờ xử lý').length;
  const processingCount = complaints.filter(c => c.status === 'Đang xử lý').length;
  const completedCount = complaints.filter(c => c.status === 'Hoàn thành').length;

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Quản lý khiếu nại" 
        subtitle="Xử lý và theo dõi khiếu nại của sinh viên"
      />
      
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-600">{pendingCount}</div>
                <div className="text-sm text-gray-600">Chờ xử lý</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-600">{processingCount}</div>
                <div className="text-sm text-gray-600">Đang xử lý</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-green-600">{completedCount}</div>
                <div className="text-sm text-gray-600">Hoàn thành</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <div className="text-xl font-bold text-red-600">1</div>
                <div className="text-sm text-gray-600">Từ chối</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search & Filter */}
            <div className="flex gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm khiếu nại..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                <Filter className="h-4 w-4" />
                Lọc
              </button>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Tất cả trạng thái</option>
                <option>Chờ xử lý</option>
                <option>Đang xử lý</option>
                <option>Hoàn thành</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                Tạo khiếu nại
              </button>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg mt-1">
                      {getTypeIcon(complaint.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{complaint.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(complaint.priority)}`}>
                          {complaint.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{complaint.student}</p>
                      <p className="text-sm text-gray-700 line-clamp-2">{complaint.description}</p>
                    </div>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span>Tạo: {complaint.created}</span>
                    <span>Phân công: {complaint.assignee}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      complaint.type === 'Điểm danh' ? 'bg-blue-100 text-blue-700' :
                      complaint.type === 'Đổi lớp' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {complaint.type}
                    </span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex flex-col items-end gap-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(complaint.status)}`}>
                    {complaint.status}
                  </span>
                  
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Xem chi tiết">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Xử lý
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Thao tác nhanh</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="text-left p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
              <div className="font-medium text-yellow-900">Phân công khiếu nại hàng loạt</div>
              <div className="text-sm text-yellow-600 mt-1">Gán nhiều khiếu nại cho người xử lý</div>
            </button>
            <button className="text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="font-medium text-blue-900">Gửi thông báo tự động</div>
              <div className="text-sm text-blue-600 mt-1">Cập nhật tiến độ cho sinh viên</div>
            </button>
            <button className="text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="font-medium text-green-900">Báo cáo thống kê</div>
              <div className="text-sm text-green-600 mt-1">Tạo báo cáo khiếu nại theo thời gian</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
