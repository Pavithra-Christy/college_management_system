import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Departments from "./pages/Departments";
import Enrollment from "./pages/Enrollment";
import Exams from "./pages/Exams";
import Results from "./pages/Results";
import Login from "./pages/Login";
import { checkAuthToken, logout } from "./services/api";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // ✅ Check if token exists
    setIsAuthenticated(!!token);
    checkAuthToken(); // ✅ Ensure token is set for API requests
  }, []);

  // ✅ Handle Logout and Redirect to Login
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Navigation onLogout={handleLogout} /> {/* ✅ Pass logout function */}
          <Container fluid>
            <Row>
              <Col md={2} className="d-none d-md-block bg-light p-3">
                <Sidebar />
              </Col>
              <Col md={10} className="p-4">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/faculty" element={<Faculty />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/enrollment" element={<Enrollment />} />
                  <Route path="/exams" element={<Exams />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
