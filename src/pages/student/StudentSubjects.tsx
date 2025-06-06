
import React, { useState } from 'react';
import { Search, BookOpen, Clock, User, Plus, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const StudentSubjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<number[]>([]);

  const subjects = [
    {
      id: 1,
      name: 'Trí tuệ nhân tạo',
      code: 'IT201',
      teacher: 'TS. Nguyễn Văn D',
      credits: 3,
      schedule: 'Thứ 3, 7:30 - 9:30',
      maxStudents: 50,
      enrolled: 35,
      isRegistered: false
    },
    {
      id: 2,
      name: 'Phát triển ứng dụng di động',
      code: 'IT202',
      teacher: 'ThS. Trần Thị E',
      credits: 3,
      schedule: 'Thứ 5, 13:30 - 15:30',
      maxStudents: 40,
      enrolled: 28,
      isRegistered: true
    },
    {
      id: 3,
      name: 'Bảo mật thông tin',
      code: 'IT203',
      teacher: 'TS. Lê Văn F',
      credits: 2,
      schedule: 'Thứ 7, 9:30 - 11:30',
      maxStudents: 45,
      enrolled: 40,
      isRegistered: false
    },
    {
      id: 4,
      name: 'Học máy',
      code: 'IT204',
      teacher: 'TS. Phạm Thị G',
      credits: 3,
      schedule: 'Thứ 2, 13:30 - 15:30',
      maxStudents: 35,
      enrolled: 32,
      isRegistered: false
    }
  ];

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRegister = (subjectId: number) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter(id => id !== subjectId));
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  const handleSubmitRegistration = () => {
    console.log('Đăng ký môn học:', selectedSubjects);
    // Logic đăng ký môn học
  };

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Đăng ký môn học</h1>
          <p className="text-gray-600">Chọn và đăng ký các môn học cho học kỳ</p>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Tìm kiếm môn học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleSubmitRegistration}
                disabled={selectedSubjects.length === 0}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Đăng ký ({selectedSubjects.length})
              </Button>
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
                    <p className="text-sm text-gray-500">{subject.code}</p>
                  </div>
                  {subject.isRegistered && (
                    <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      <Check className="h-3 w-3" />
                      Đã đăng ký
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{subject.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{subject.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{subject.credits} tín chỉ</span>
                  </div>
                </div>

                {/* Enrollment Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Đã đăng ký</span>
                    <span>{subject.enrolled}/{subject.maxStudents}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(subject.enrolled / subject.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-200">
                  {subject.isRegistered ? (
                    <button 
                      disabled
                      className="w-full px-4 py-2 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed"
                    >
                      Đã đăng ký
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleRegister(subject.id)}
                      className={`w-full px-4 py-2 rounded-lg transition-colors ${
                        selectedSubjects.includes(subject.id)
                          ? 'bg-orange-600 text-white hover:bg-orange-700'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {selectedSubjects.includes(subject.id) ? 'Hủy chọn' : 'Chọn đăng ký'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSubjects;
