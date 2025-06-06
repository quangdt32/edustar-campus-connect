
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Clock, Download, Calendar, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedClass, setSelectedClass] = useState('all');

  const reportData = {
    attendance: {
      present: 85,
      late: 10,
      absent: 5
    },
    classes: [
      { name: 'Lập trình Web - IT01', students: 32, avgAttendance: 92 },
      { name: 'Cơ sở dữ liệu - IT02', students: 28, avgAttendance: 88 },
      { name: 'Trí tuệ nhân tạo - IT03', students: 25, avgAttendance: 86 }
    ],
    weeklyStats: [
      { week: 'Tuần 1', present: 88, late: 8, absent: 4 },
      { week: 'Tuần 2', present: 92, late: 6, absent: 2 },
      { week: 'Tuần 3', present: 85, late: 12, absent: 3 },
      { week: 'Tuần 4', present: 90, late: 7, absent: 3 }
    ]
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Báo cáo giảng dạy</h1>
          <p className="text-gray-600">Thống kê và báo cáo hoạt động giảng dạy</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex gap-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="week">Tuần này</option>
                <option value="month">Tháng này</option>
                <option value="semester">Học kỳ này</option>
              </select>
              
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="all">Tất cả lớp</option>
                <option value="IT01">Lập trình Web - IT01</option>
                <option value="IT02">Cơ sở dữ liệu - IT02</option>
                <option value="IT03">Trí tuệ nhân tạo - IT03</option>
              </select>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700">
              <Download className="h-4 w-4 mr-2" />
              Xuất báo cáo
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tổng sinh viên</p>
                <p className="text-2xl font-bold text-gray-900">85</p>
                <p className="text-xs text-green-600">+5 so với tháng trước</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Tỷ lệ có mặt</p>
                <p className="text-2xl font-bold text-gray-900">89%</p>
                <p className="text-xs text-blue-600">+2% so với tháng trước</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Số buổi dạy</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-yellow-600">Tháng này</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Điểm trung bình</p>
                <p className="text-2xl font-bold text-gray-900">8.2</p>
                <p className="text-xs text-purple-600">+0.3 so với kỳ trước</p>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Chart */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Thống kê điểm danh theo tuần</h3>
          <div className="space-y-4">
            {reportData.weeklyStats.map((week, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{week.week}</span>
                  <span className="text-sm text-gray-500">Tổng: 100%</span>
                </div>
                <div className="flex h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="bg-green-500" 
                    style={{ width: `${week.present}%` }}
                    title={`Có mặt: ${week.present}%`}
                  ></div>
                  <div 
                    className="bg-yellow-500" 
                    style={{ width: `${week.late}%` }}
                    title={`Đi muộn: ${week.late}%`}
                  ></div>
                  <div 
                    className="bg-red-500" 
                    style={{ width: `${week.absent}%` }}
                    title={`Vắng mặt: ${week.absent}%`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>Có mặt: {week.present}%</span>
                  <span>Đi muộn: {week.late}%</span>
                  <span>Vắng: {week.absent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class Performance */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiệu suất các lớp học</h3>
          <div className="space-y-4">
            {reportData.classes.map((classItem, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{classItem.name}</h4>
                    <p className="text-sm text-gray-500">{classItem.students} sinh viên</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{classItem.avgAttendance}%</p>
                    <p className="text-xs text-gray-500">Tỷ lệ có mặt</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${classItem.avgAttendance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerReports;
