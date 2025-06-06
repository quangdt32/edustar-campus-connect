
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LecturerSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const scheduleData = [
    {
      id: 1,
      subject: 'Lập trình Web',
      class: 'IT01',
      time: '7:30 - 9:30',
      room: 'A201',
      studentCount: 32,
      date: '2024-01-15',
      day: 'Thứ 2'
    },
    {
      id: 2,
      subject: 'Cơ sở dữ liệu',
      class: 'IT02',
      time: '13:30 - 15:30',
      room: 'B103',
      studentCount: 28,
      date: '2024-01-16',
      day: 'Thứ 3'
    },
    {
      id: 3,
      subject: 'Lập trình Web',
      class: 'IT01',
      time: '7:30 - 9:30',
      room: 'A201',
      studentCount: 32,
      date: '2024-01-17',
      day: 'Thứ 4'
    },
    {
      id: 4,
      subject: 'Trí tuệ nhân tạo',
      class: 'IT03',
      time: '9:30 - 11:30',
      room: 'C205',
      studentCount: 25,
      date: '2024-01-18',
      day: 'Thứ 5'
    },
    {
      id: 5,
      subject: 'Cơ sở dữ liệu',
      class: 'IT02',
      time: '13:30 - 15:30',
      room: 'B103',
      studentCount: 28,
      date: '2024-01-19',
      day: 'Thứ 6'
    }
  ];

  const weekDays = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
  const timeSlots = ['7:30-9:30', '9:45-11:45', '13:30-15:30', '15:45-17:45'];

  const getClassForTimeSlot = (day: string, timeSlot: string) => {
    return scheduleData.find(item => 
      item.day === day && item.time === timeSlot
    );
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Lịch giảng dạy</h1>
          <p className="text-gray-600">Thời khóa biểu giảng dạy trong tuần</p>
        </div>

        {/* Week Navigation */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="text-center">
                <h2 className="text-lg font-semibold">Tuần 15-21/01/2024</h2>
                <p className="text-sm text-gray-500">Học kỳ 1 - Năm học 2023-2024</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Hôm nay
            </Button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-8 border-b">
            <div className="p-4 bg-gray-50 font-medium text-gray-900">Tiết học</div>
            {weekDays.map(day => (
              <div key={day} className="p-4 bg-gray-50 font-medium text-gray-900 text-center border-l">
                {day}
              </div>
            ))}
          </div>

          {timeSlots.map((timeSlot, timeIndex) => (
            <div key={timeSlot} className="grid grid-cols-8 border-b">
              <div className="p-4 bg-gray-50 font-medium text-gray-700 border-r">
                <div className="text-sm">{timeSlot}</div>
                <div className="text-xs text-gray-500">Tiết {timeIndex * 2 + 1}-{timeIndex * 2 + 2}</div>
              </div>
              
              {weekDays.map(day => {
                const classItem = getClassForTimeSlot(day, timeSlot);
                return (
                  <div key={`${day}-${timeSlot}`} className="p-2 border-l min-h-[100px]">
                    {classItem && (
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3 h-full">
                        <div className="font-medium text-green-900 text-sm mb-1">
                          {classItem.subject}
                        </div>
                        <div className="text-xs text-green-700 space-y-1">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>Lớp {classItem.class}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>Phòng {classItem.room}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{classItem.studentCount} SV</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Today's Classes */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lịch dạy hôm nay</h3>
          <div className="space-y-3">
            {scheduleData.slice(0, 2).map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <Clock className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.subject} - Lớp {item.class}</p>
                  <p className="text-sm text-gray-600">{item.time} | Phòng {item.room} | {item.studentCount} sinh viên</p>
                </div>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Điểm danh
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerSchedule;
