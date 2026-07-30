// src/components/DashboardSelector.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { DASHBOARDS } from '../config/dashboards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartBar, 
  faChartLine, 
  faChartPie, 
  faFileAlt,
  faChartSimple,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import './DashboardSelector.css';

const iconMap = {
  'chart-bar': faChartBar,
  'chart-line': faChartLine,
  'chart-pie': faChartPie,
  'file-alt': faFileAlt,
  'chart-simple': faChartSimple,
};

function DashboardSelector() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleDashboardSelect = (dashboardId) => {
    console.log('🔄 Click en dashboard con ID:', dashboardId);
    console.log('🔄 Navegando a:', `/dashboard/${dashboardId}`);
    navigate(`/dashboard/${dashboardId}`);
  };

  return (
    <div className="dashboard-selector-container">
      <div className="welcome-card">
        <h1>¡Bienvenido, {user?.email}!</h1>
        <p>Selecciona el dashboard que deseas visualizar</p>
        
        <div className="dashboard-options">
          {DASHBOARDS.map((dashboard) => (
            <button 
              key={dashboard.id}
              className="dashboard-option"
              onClick={() => handleDashboardSelect(dashboard.id)}
            >
              <div className="option-icon" style={{ color: dashboard.iconColor || '#2e7d32' }}>
                <FontAwesomeIcon 
                  icon={iconMap[dashboard.icon] || faFileAlt} 
                  size="2x"
                />
              </div>
              <h3>{dashboard.title}</h3>
              <p>{dashboard.description}</p>
            </button>
          ))}
        </div>
      </div>
      
      <button className="logout-btn" onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </button>
    </div>
  );
}

export default DashboardSelector;
