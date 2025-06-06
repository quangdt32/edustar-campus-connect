
import React from 'react';
import { BookOpen, Clock, User, MapPin } from 'lucide-react';

const StudentClasses = () => {
  const classes = [
    {
      id: 1,
      name: 'Lập trình Web',
      code: 'IT101',
      teacher: 'TS. Nguyễn Văn A',
      schedule: 'Thứ 2, 7:30 - 9:30',
      room: 'A101',
      credits: 3,
      status: 'Đang học'
    },
    {
      id: 2,
      name: 'Cơ sở dữ liệu',
      code: 'IT102',
      teacher: 'ThS. Trần Thị B',
      schedule: 'Thứ 4, 13:30 - 15:30',
      room: 'B205',
      credits: 3,
      status: 'Đang học'
    },
    {
      id: 3,
      name: 'Mạng máy tính',
      code: 'IT103',
      teacher: 'TS. Lê Văn C',
      schedule: 'Thứ 6, 9:30 - 11:30',
      room: 'C301',
      credits: 2,
      status: 'Đang học'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Lớp học của tôi</h1>
          <p className="text-gray-600">Danh sách các lớp học đã đăng ký</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                    <p className="text-sm text-gray-500">{classItem.code}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {classItem.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{classItem.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Phòng {classItem.room}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{classItem.credits} tín chỉ</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;
