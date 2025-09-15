import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CareerSessionPage from './pages/CareerSessionPage';
import ProgressTrackerPage from './pages/ProgressTrackerPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage';
import SavedAdvicePage from './pages/SavedAdvicePage';

// Subpages
import CertificationsPage from './pages/CertificationsPage';
import CoursesPage from './pages/CoursesPage';
import CollegesPage from './pages/CollegesPage';
import TopPeoplePage from './pages/TopPeoplePage';
import EntranceExamPage from './pages/EntranceExamPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/career-session" element={<CareerSessionPage />} />
            <Route path="/progress-tracker" element={<ProgressTrackerPage />} />
            <Route path="/profile-settings" element={<ProfileSettingsPage />} />
            <Route path="/saved-advice" element={<SavedAdvicePage />} />

            {/* Dashboard Subpages */}
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
            <Route path="/top-people" element={<TopPeoplePage />} />
            <Route path="/entrance-exam" element={<EntranceExamPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
