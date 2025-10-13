import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WorkflowCanvas from "./pages/WorkflowCanvas";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import { useAuthStore } from "./store/authStore";

function App() {
  const token = useAuthStore((state) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/" replace />}
        />
        <Route
          path="/"
          element={token ? <WorkflowCanvas /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
