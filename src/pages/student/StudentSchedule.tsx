
import React, { useState } from 'react';
import { Clock, MapPin, User, Calendar } from 'lucide-react';

const StudentSchedule = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const schedule = [
    {
      day: 'Thứ 2',
      classes: [
        {
          id: 1,
          subject: 'Lập trình Web',
          code: 'IT101',
          teacher: 'TS. Nguyễn Văn A',
          time: '7:30 - 9:30',
          room: 'A101',
          type: 'Lý thuyết'
        },
        {
          id: 2,
          subject: 'Học máy',
          code: 'IT204',
          teacher: 'TS. Phạm Thị G',
          time: '13:30 - 15:30',
          room: 'B301',
          type: 'Thực hành'
        }
      ]
    },
    {
      day: 'Thứ 3',
      classes: [
        {
          id: 3,
          subject: 'Trí tuệ nhân tạo',
          code: 'IT201',
          teacher: 'TS. Nguyễn Văn D',
          time: '7:30 - 9:30',
          room: 'C205',
          type: 'Lý thuyết'
        }
      ]
    },
    {
      day: 'Thứ 4',
      classes: [
        {
          id: 4,
          subject: 'Cơ sở dữ liệu',
          code: 'IT102',
          teacher: 'ThS. Trần Thị B',
          time: '13:30 - 15:30',
          room: 'B205',
          type: 'Thực hành'
        }
      ]
    },
    {
      day: 'Thứ 5',
      classes: [
        {
          id: 5,
          subject: 'Phát triển ứng dụng di động',
          code: 'IT202',
          teacher: 'ThS. Trần Thị E',
          time: '13:30 - 15:30',
          room: 'A301',
          type: 'Lý thuyết'
        }
      ]
    },
    {
      day: 'Thứ 6',
      classes: [
        {
          id: 6,
          subject: 'Mạng máy tính',
          code: 'IT103',
          teacher: 'TS. Lê Văn C',
          time: '9:30 - 11:30',
          room: 'C301',
          type: 'Thực hành'
        }
      ]
    },
    {
      day: 'Thứ 7',
      classes: [
        {
          id: 7,
          subject: 'Bảo mật thông tin',
          code: 'IT203',
          teacher: 'TS. Lê Văn F',
          time: '9:30 - 11:30',
          room: 'B401',
          type: 'Lý thuyết'
        }
      ]
    },
    {
      day: 'Chủ nhật',
      classes: []
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Thời khóa biểu</h1>
            <p className="text-gray-600">Lịch học trong tuần</p>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="current">Tuần hiện tại</option>
              <option value="next">Tuần tới</option>
              <option value="previous">Tuần trước</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-7 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {schedule.map((daySchedule) => (
              <div key={daySchedule.day} className="p-4">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-gray-900">{daySchedule.day}</h3>
                  <p className="text-sm text-gray-500">
                    {daySchedule.day === 'Thứ 2' && '16/12'}
                    {daySchedule.day === 'Thứ 3' && '17/12'}
                    {daySchedule.day === 'Thứ 4' && '18/12'}
                    {daySchedule.day === 'Thứ 5' && '19/12'}
                    {daySchedule.day === 'Thứ 6' && '20/12'}
                    {daySchedule.day === 'Thứ 7' && '21/12'}
                    {daySchedule.day === 'Chủ nhật' && '22/12'}
                  </p>
                </div>

                <div className="space-y-3">
                  {daySchedule.classes.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      <Calendar className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Không có lịch học</p>
                    </div>
                  ) : (
                    daySchedule.classes.map((classItem) => (
                      <div key={classItem.id} className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <div className="mb-2">
                          <h4 className="font-medium text-purple-900 text-sm">{classItem.subject}</h4>
                          <p className="text-xs text-purple-600">{classItem.code}</p>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Clock className="h-3 w-3" />
                            <span>{classItem.time}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>Phòng {classItem.room}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <User className="h-3 w-3" />
                            <span className="truncate">{classItem.teacher}</span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            classItem.type === 'Lý thuyết' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {classItem.type}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Tóm tắt tuần</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm text-purple-600">Tổng số tiết học</p>
              <p className="text-2xl font-bold text-purple-900">14</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-600">Tiết lý thuyết</p>
              <p className="text-2xl font-bold text-blue-900">8</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-600">Tiết thực hành</p>
              <p className="text-2xl font-bold text-green-900">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSchedule;
