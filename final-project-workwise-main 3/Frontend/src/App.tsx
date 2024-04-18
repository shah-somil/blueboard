import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer component
import 'bootstrap/dist/css/bootstrap.min.css';

// Import different page components
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProjectsPage from "./pages/ProjectsPage";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import BoardView from "./pages/BoardView";
import ProjectSettings from "./pages/ProjectSettings";
import ProjectLayout from "./components/ProjectLayout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

// Main App component
function App() {
  return (
    <>
      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/pricing" element={<Pricing/>} />


        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId/*" element={<ProjectLayout />}>
            <Route index element={<Navigate to="board" />} />
            <Route path="board" element={<BoardView />} />
            <Route path="settings" element={<ProjectSettings />} />
          </Route>
        </Route>
      </Routes>

      {/* Display a ToastContainer for notifications */}
      <ToastContainer />
    </>
  );
}

export default App;
