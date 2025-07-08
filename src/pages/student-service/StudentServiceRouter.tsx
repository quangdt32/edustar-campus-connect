
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentServiceDashboard from './StudentServiceDashboard';
import StudentProfiles from './StudentProfiles';
import StudentDocuments from './StudentDocuments';
import StudentScholarships from './StudentScholarships';
import StudentComplaints from './StudentComplaints';
import StudentSupport from './StudentSupport';
import StudentActivities from './StudentActivities';
import StudentServiceReports from './StudentServiceReports';
import StudentServiceSettings from './StudentServiceSettings';

const StudentServiceRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentServiceDashboard />} />
      <Route path="/profiles" element={<StudentProfiles />} />
      <Route path="/documents" element={<StudentDocuments />} />
      <Route path="/scholarships" element={<StudentScholarships />} />
      <Route path="/complaints" element={<StudentComplaints />} />
      <Route path="/support" element={<StudentSupport />} />
      <Route path="/activities" element={<StudentActivities />} />
      <Route path="/reports" element={<StudentServiceReports />} />
      <Route path="/settings" element={<StudentServiceSettings />} />
    </Routes>
  );
};

export default StudentServiceRouter;
