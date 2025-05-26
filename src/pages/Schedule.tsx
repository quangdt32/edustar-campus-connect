
import React, { useState } from 'react';
import Header from '../components/Header';
import { Calendar, Clock, MapPin, User, Download, FileText } from 'lucide-react';

const Schedule = () => {
  const [currentWeek] = useState('15/01/2024 - 21/01/2024');
  const [scheduleData] = useState([
    {
      day: 'Thứ 2',
      date: '15/01',
      sessions: [
        {
          time: '07:30 - 09:30',
          subject: 'Lập trình Web',
          class: 'CNTT-K21-01',
          instructor: 'TS. Nguyễn Văn A',
          room: 'P.301',
          students: 32
        },
        {
          time: '13:30 - 15:30',
          subject: 'Cơ sở dữ liệu',
          class: 'CNTT-K21-02',
          instructor: 'ThS. Lê Minh C',
          room: 'P.401',
          students: 28
        }
      ]
    },
    {
      day: 'Thứ 3',
      date: '16/01',
      sessions: [
        {
          time: '09:45 - 11:45',
          subject: 'Marketing căn bản',
          class: 'QTKD-K20-01',
          instructor: 'ThS. Trần Thị B',
          room: 'P.205',
          students: 25
        }
      ]
    },
    {
      day: 'Thứ 4',
      date: '17/01',
      sessions: [
        {
          time: '07:30 - 09:30',
          subject: 'Lập trình Web',
          class: 'CNTT-K21-01',
          instructor: 'TS. Nguyễn Văn A',
          room: 'P.301',
          students: 32
        }
      ]
    },
    {
      day: 'Thứ 5',
      date: '18/01',
      sessions: [
        {
          time: '13:30 - 15:30',
          subject: 'Cấu trúc dữ liệu',
          class: 'CNTT-K21-03',
          instructor: 'ThS. Lê Minh C',
          room: 'P.401',
          students: 25
        }
      ]
    },
    {
      day: 'Thứ 6',
      date: '19/01',
      sessions: [
        {
          time: '09:45 - 11:45',
          subject: 'Marketing căn bản',
          class: 'QTKD-K20-01',
          instructor: 'ThS. Trần Thị B',
          room: 'P.205',
          students: 25
        }
      ]
    }
  ]);

  return (
    <div className="flex-1 bg-gray-50">
      <Header 
        title="Lịch học" 
        subtitle="Quản lý và xem lịch học các lớp"
      />
      
      <div className="p-6">
        {/* Week Navigation & Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Week Navigation */}
            <div className="flex items-center gap-4">
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                ← Tuần trước
              </button>
              <div className="text-center">
                <p className="font-medium text-gray-900">Tuần hiện tại</p>
                <p className="text-sm text-gray-600">{currentWeek}</p>
              </div>
              <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                Tuần sau →
              </button>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Download className="h-4 w-4" />
                Xuất PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FileText className="h-4 w-4" />
                Xuất Excel
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {scheduleData.map((day, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Day Header */}
              <div className="bg-blue-600 text-white p-4 text-center">
                <h3 className="font-semibold">{day.day}</h3>
                <p className="text-sm opacity-90">{day.date}</p>
              </div>
              
              {/* Sessions */}
              <div className="p-4 space-y-3">
                {day.sessions.length > 0 ? (
                  day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      {/* Time */}
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-600">{session.time}</span>
                      </div>
                      
                      {/* Subject & Class */}
                      <h4 className="font-medium text-gray-900 mb-1">{session.subject}</h4>
                      <p className="text-sm text-gray-600 mb-2">{session.class}</p>
                      
                      {/* Instructor */}
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{session.instructor}</span>
                      </div>
                      
                      {/* Room & Students */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-gray-600">{session.room}</span>
                        </div>
                        <span className="text-gray-500">{session.students} SV</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">Không có lịch học</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-sm text-gray-600">Tổng buổi học tuần này</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-600">Phòng học được sử dụng</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-orange-600">720</div>
            <div className="text-sm text-gray-600">Tổng sinh viên tham gia</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-2xl font-bold text-purple-600">96%</div>
            <div className="text-sm text-gray-600">Tỷ lệ sử dụng phòng học</div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Chú thích</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Lịch học bình thường</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span>Lịch học thay đổi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Lịch học hủy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Lịch học bổ sung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
