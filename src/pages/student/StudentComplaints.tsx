
import React, { useState } from 'react';
import { Plus, Search, MessageSquare, Clock, Check, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const StudentComplaints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newComplaint, setNewComplaint] = useState({
    title: '',
    category: '',
    description: ''
  });

  const complaints = [
    {
      id: 1,
      title: 'Vấn đề về lịch thi',
      category: 'Học vụ',
      description: 'Lịch thi môn Lập trình Web bị trùng với môn Cơ sở dữ liệu',
      status: 'Đang xử lý',
      createdAt: '2024-12-15',
      response: ''
    },
    {
      id: 2,
      title: 'Điểm danh sai',
      category: 'Điểm danh',
      description: 'Tôi có mặt nhưng bị đánh vắng trong buổi học ngày 10/12',
      status: 'Đã giải quyết',
      createdAt: '2024-12-10',
      response: 'Đã cập nhật lại điểm danh. Cảm ơn bạn đã báo cáo.'
    },
    {
      id: 3,
      title: 'Cơ sở vật chất',
      category: 'Cơ sở vật chất',
      description: 'Máy chiếu trong phòng A101 không hoạt động',
      status: 'Mới tạo',
      createdAt: '2024-12-20',
      response: ''
    }
  ];

  const filteredComplaints = complaints.filter(complaint =>
    complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    complaint.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Đã giải quyết':
        return <Check className="h-4 w-4 text-green-600" />;
      case 'Đang xử lý':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Mới tạo':
        return <AlertTriangle className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đã giải quyết':
        return 'bg-green-100 text-green-800';
      case 'Đang xử lý':
        return 'bg-yellow-100 text-yellow-800';
      case 'Mới tạo':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Gửi khiếu nại:', newComplaint);
    setNewComplaint({ title: '', category: '', description: '' });
    setShowCreateForm(false);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Khiếu nại</h1>
          <p className="text-gray-600">Gửi khiếu nại và theo dõi tình trạng xử lý</p>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm khiếu nại..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button
              onClick={() => setShowCreateForm(true)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Tạo khiếu nại
            </Button>
          </div>
        </div>

        {/* Create Complaint Form */}
        {showCreateForm && (
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tạo khiếu nại mới</h2>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Hủy
              </Button>
            </div>
            <form onSubmit={handleSubmitComplaint} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  value={newComplaint.title}
                  onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Danh mục
                </label>
                <select
                  value={newComplaint.category}
                  onChange={(e) => setNewComplaint({...newComplaint, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Chọn danh mục</option>
                  <option value="Học vụ">Học vụ</option>
                  <option value="Điểm danh">Điểm danh</option>
                  <option value="Cơ sở vật chất">Cơ sở vật chất</option>
                  <option value="Giảng viên">Giảng viên</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mô tả chi tiết
                </label>
                <textarea
                  value={newComplaint.description}
                  onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Gửi khiếu nại
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                  Hủy
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Complaints List */}
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                      {complaint.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{complaint.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Ngày tạo: {new Date(complaint.createdAt).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(complaint.status)}
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(complaint.status)}`}>
                    {complaint.status}
                  </span>
                </div>
              </div>

              {complaint.response && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Phản hồi từ nhà trường</span>
                    </div>
                    <p className="text-green-700">{complaint.response}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredComplaints.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Không có khiếu nại nào</h3>
            <p className="text-gray-600">Bạn chưa có khiếu nại nào hoặc không tìm thấy kết quả phù hợp.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentComplaints;
