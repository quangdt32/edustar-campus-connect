
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrainingDashboard from './TrainingDashboard';
import TrainingStudents from './TrainingStudents';
import TrainingClasses from './TrainingClasses';
import TrainingSubjects from './TrainingSubjects';
import TrainingSchedule from './TrainingSchedule';
import TrainingAttendance from './TrainingAttendance';
import TrainingGrades from './TrainingGrades';
import TrainingReports from './TrainingReports';
import TrainingSettings from './TrainingSettings';

const TrainingRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TrainingDashboard />} />
      <Route path="/students" element={<TrainingStudents />} />
      <Route path="/classes" element={<TrainingClasses />} />
      <Route path="/subjects" element={<TrainingSubjects />} />
      <Route path="/schedule" element={<TrainingSchedule />} />
      <Route path="/attendance" element={<TrainingAttendance />} />
      <Route path="/grades" element={<TrainingGrades />} />
      <Route path="/reports" element={<TrainingReports />} />
      <Route path="/settings" element={<TrainingSettings />} />
    </Routes>
  );
};

export default TrainingRouter;
