
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdmissionDashboard from './AdmissionDashboard';
import AdmissionApplications from './AdmissionApplications';
import AdmissionSchedule from './AdmissionSchedule';
import AdmissionAnnouncements from './AdmissionAnnouncements';
import AdmissionCounseling from './AdmissionCounseling';
import AdmissionStatistics from './AdmissionStatistics';
import AdmissionLocations from './AdmissionLocations';
import AdmissionReports from './AdmissionReports';
import AdmissionSettings from './AdmissionSettings';
import TuitionManagement from './TuitionManagement';
import TuitionStudents from './TuitionStudents';
import TuitionCollection from './TuitionCollection';
import TuitionDebts from './TuitionDebts';
import TuitionSchedule from './TuitionSchedule';
import TuitionStatistics from './TuitionStatistics';
import TuitionReports from './TuitionReports';

const AdmissionRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdmissionDashboard />} />
      <Route path="/applications" element={<AdmissionApplications />} />
      <Route path="/schedule" element={<AdmissionSchedule />} />
      <Route path="/announcements" element={<AdmissionAnnouncements />} />
      <Route path="/counseling" element={<AdmissionCounseling />} />
      <Route path="/statistics" element={<AdmissionStatistics />} />
      <Route path="/locations" element={<AdmissionLocations />} />
      <Route path="/reports" element={<AdmissionReports />} />
      <Route path="/settings" element={<AdmissionSettings />} />
      <Route path="/management" element={<TuitionManagement />} />
      <Route path="/students" element={<TuitionStudents />} />
      <Route path="/collection" element={<TuitionCollection />} />
      <Route path="/debts" element={<TuitionDebts />} />
      <Route path="/tuition-schedule" element={<TuitionSchedule />} />
      <Route path="/tuition-statistics" element={<TuitionStatistics />} />
      <Route path="/tuition-reports" element={<TuitionReports />} />
    </Routes>
  );
};

export default AdmissionRouter;
