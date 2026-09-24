import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/Layout';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import ForgotPassword from '@/pages/ForgotPassword';
import Dashboard from '@/pages/Dashboard';
import Meetings from '@/pages/Meetings';
import AIActionItemReview from '@/pages/AIActionItemReview';
import TaskBoard from '@/pages/TaskBoard';
import Team from '@/pages/Team';
import HelpSupport from '@/pages/HelpSupport';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Auth routes — no sidebar/header */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* App routes — sidebar + header */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/ai-review" element={<AIActionItemReview />} />
            <Route path="/task-board" element={<TaskBoard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/help" element={<HelpSupport />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
