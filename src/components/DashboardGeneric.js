// src/components/DashboardGeneric.js
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { getDashboardById, DASHBOARDS } from '../config/dashboards';
import './Dashboard.css';

function DashboardGeneric() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { dashboardId } = useParams();
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // LOGS PARA DEBUG - MUESTRA TODOS LOS DASHBOARDS DISPONIBLES
  console.log('📋 Todos los dashboards disponibles:', DASHBOARDS);
  console.log('🔍 Dashboard ID desde URL:', dashboardId);
  console.log('🔍 Tipo de dashboardId:', typeof dashboardId);

  // Obtener la configuración del dashboard
  const dashboardConfig = getDashboardById(dashboardId);
  
  console.log('📊 Configuración encontrada:', dashboardConfig);

  useEffect(() => {
    // Si no hay configuración, mostrar error y redirigir
    if (!dashboardConfig) {
      console.log('❌ Dashboard no encontrado para ID:', dashboardId);
      const timer = setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      return () => clearTimeout(timer);
    }
    setLoading(false);
  }, [dashboardConfig, dashboardId, navigate]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-screen">
          <p>Cargando dashboard...</p>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>ID: {dashboardId}</p>
        </div>
      </div>
    );
  }

  if (!dashboardConfig) {
    return (
      <div className="dashboard-container">
        <div className="loading-screen">
          <p>⚠️ Dashboard no encontrado</p>
          <p style={{ fontSize: '0.8rem', color: '#666' }}>ID: {dashboardId}</p>
          <button onClick={() => navigate('/dashboard')}>Volver</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <button 
        onClick={() => navigate('/dashboard')}
        className="floating-btn back"
        title="Volver"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </button>

      <button 
        onClick={logout}
        className="floating-btn logout"
        title="Cerrar sesión"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>

      <div className="dashboard-header">
        <h2>{dashboardConfig.title}</h2>
      </div>

      <div className="powerbi-embed-container">
        <iframe 
          ref={iframeRef}
          title={dashboardConfig.title}
          src={dashboardConfig.iframeUrl}
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default DashboardGeneric;
