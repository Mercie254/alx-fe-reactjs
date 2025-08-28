import React from "react";
import { Navigate } from "react-router-dom";

// ✅ Simulated authentication state 
const isAuthenticated = true; 

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    // redirect to home if not logged in
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
