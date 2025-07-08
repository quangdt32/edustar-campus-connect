
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Sidebar from "./components/Sidebar";
import LecturerSidebar from "./components/LecturerSidebar";
import StudentSidebar from "./components/StudentSidebar";
import TrainingSidebar from "./components/TrainingSidebar";
import ExamSidebar from "./components/ExamSidebar";
import StudentServiceSidebar from "./components/StudentServiceSidebar";
import AdmissionSidebar from "./components/AdmissionSidebar";
import TuitionSidebar from "./components/TuitionSidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";
import Classes from "./pages/Classes";
import Schedule from "./pages/Schedule";
import Attendance from "./pages/Attendance";
import Complaints from "./pages/Complaints";
import Settings from "./pages/Settings";
import LecturerDashboard from "./pages/LecturerDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Grades from "./pages/Grades";
import TrainingRouter from "./pages/training/TrainingRouter";
import ExamRouter from "./pages/exam/ExamRouter";
import StudentServiceRouter from "./pages/student-service/StudentServiceRouter";
import AdmissionRouter from "./pages/admission/AdmissionRouter";

const queryClient = new QueryClient();

// Mock function to determine user role - in real app this would come from auth
const getUserRole = () => {
  const path = window.location.pathname;
  if (path.startsWith('/lecturer')) return 'lecturer';
  if (path.startsWith('/student')) return 'student';
  if (path.startsWith('/training')) return 'training';
  if (path.startsWith('/exam')) return 'exam';
  if (path.startsWith('/student-service')) return 'student-service';
  if (path.startsWith('/admission')) return 'admission';
  if (path.startsWith('/tuition')) return 'tuition';
  return 'admin';
};

const App = () => {
  const userRole = getUserRole();

  const renderSidebar = () => {
    switch (userRole) {
      case 'lecturer':
        return <LecturerSidebar />;
      case 'student':
        return <StudentSidebar />;
      case 'training':
        return <TrainingSidebar />;
      case 'exam':
        return <ExamSidebar />;
      case 'student-service':
        return <StudentServiceSidebar />;
      case 'admission':
        return <AdmissionSidebar />;
      case 'tuition':
        return <TuitionSidebar />;
      default:
        return <Sidebar />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex min-h-screen bg-gray-50">
              {renderSidebar()}
              <main className="flex-1">
                <Routes>
                  {/* Admin routes */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/subjects" element={<Subjects />} />
                  <Route path="/classes" element={<Classes />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/grades" element={<Grades />} />
                  <Route path="/complaints" element={<Complaints />} />
                  <Route path="/settings" element={<Settings />} />
                  
                  {/* Lecturer routes */}
                  <Route path="/lecturer/*" element={<LecturerDashboard />} />
                  
                  {/* Student routes */}
                  <Route path="/student/*" element={<StudentDashboard />} />
                  
                  {/* Training staff routes */}
                  <Route path="/training/*" element={<TrainingRouter />} />
                  
                  {/* Exam staff routes */}
                  <Route path="/exam/*" element={<ExamRouter />} />
                  
                  {/* Student service staff routes */}
                  <Route path="/student-service/*" element={<StudentServiceRouter />} />
                  
                  {/* Admission staff routes */}
                  <Route path="/admission/*" element={<AdmissionRouter />} />
                  
                  {/* Tuition staff routes */}
                  <Route path="/tuition/*" element={<AdmissionRouter />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
