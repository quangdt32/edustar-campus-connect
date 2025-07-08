
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExamDashboard from './ExamDashboard';
import ExamSchedule from './ExamSchedule';
import ExamPapers from './ExamPapers';
import ExamSupervision from './ExamSupervision';
import ExamGrading from './ExamGrading';
import ExamCandidates from './ExamCandidates';
import ExamRooms from './ExamRooms';
import ExamReports from './ExamReports';
import ExamSettings from './ExamSettings';

const ExamRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ExamDashboard />} />
      <Route path="/schedule" element={<ExamSchedule />} />
      <Route path="/papers" element={<ExamPapers />} />
      <Route path="/supervision" element={<ExamSupervision />} />
      <Route path="/grading" element={<ExamGrading />} />
      <Route path="/candidates" element={<ExamCandidates />} />
      <Route path="/rooms" element={<ExamRooms />} />
      <Route path="/reports" element={<ExamReports />} />
      <Route path="/settings" element={<ExamSettings />} />
    </Routes>
  );
};

export default ExamRouter;
