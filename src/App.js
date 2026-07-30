// src/App.js - Versión CORREGIDA
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Login from './components/Login';
import DashboardGeneric from './components/DashboardGeneric';
import DashboardSelector from './components/DashboardSelector';
import PrivateRoute from './components/PrivateRoute';
import { getDashboardIds } from './config/dashboards';
import './App.css';

function App() {
  const dashboardIds = getDashboardIds();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <DashboardSelector />
              </PrivateRoute>
            } 
          />
          {/* Ruta dinámica para cualquier dashboard */}
          <Route 
            path="/dashboard/:dashboardId" 
            element={
              <PrivateRoute>
                <DashboardGeneric />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
