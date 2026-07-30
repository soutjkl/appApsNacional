// src/config/dashboards.js
export const DASHBOARDS = [
  {
    id: 'cuatorsenoventainueve',  // ⚠️ Este ID debe coincidir con el que usas en la URL
    title: 'Resolución 1499 - 2025',
    description: 'Avance de la estrategia APS',
    iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTVlOTI3ZTQtMmZmNy00MThkLTljZjItYzZmNTBkNDc5ZjdjIiwidCI6ImE2NjdiNTIwLTBjZmMtNDViOC1hNTkwLWFiZjNmMjJkNWI3YSJ9&pageName=90e5b7e0ed800c4dd396',
    icon: 'chart-bar',
    iconColor: '#2e7d32',
  },
  {
    id: 'admin',  // ⚠️ Este ID debe coincidir con el que usas en la URL
    title: 'Resolución 2225 - 2025',
    description: 'Avance de la estrategia APS',
    iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiY2VlZjAyNGYtYzcwMi00Y2MyLWIxOGYtNTY3NDlhNWJhNzYyIiwidCI6ImE2NjdiNTIwLTBjZmMtNDViOC1hNTkwLWFiZjNmMjJkNWI3YSJ9&pageName=c9f99492a68167551b30',
    icon: 'chart-line',
    iconColor: '#1565c0',
  },
  {
    id: 'res2290',
    title: 'Resolución 2290 - 2025',
    description: 'Avance de la estrategia APS',
    iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNDk0NGU5MjgtYmE2OS00YzViLThmMTAtMDRlYzZmNWM5YjdiIiwidCI6ImE2NjdiNTIwLTBjZmMtNDViOC1hNTkwLWFiZjNmMjJkNWI3YSJ9',
    icon: 'chart-pie',
    iconColor: '#e65100',
  },
  {
    id: 'res1489',
    title: 'Resolución 1489 - 2026',
    description: 'Avance de la estrategia APS',
    iframeUrl: '',
    icon: 'file-alt',
    iconColor: '#6a1b9a',
  },
  {
    id: 'res2291',
    title: 'Resolución 2291 - 2026',
    description: 'Avance de la estrategia APS',
    iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTVlOTI3ZTQtMmZmNy00MThkLTljZjItYzZmNTBkNDc5ZjdjIiwidCI6ImE2NjdiNTIwLTBjZmMtNDViOC1hNTkwLWFiZjNmMjJkNWI3YSJ9&pageName=90e5b7e0ed800c4dd396',
    icon: 'chart-simple',
    iconColor: '#00838f',
  },
  {
    id: 'res1893',
    title: 'Resolución 1893 - 2026',
    description: 'Avance de la estrategia APS',
    iframeUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNjQ2NmNmNTUtOGMyZi00NGM0LWE1M2MtODVlMzIwYmU2ZDJiIiwidCI6ImE2NjdiNTIwLTBjZmMtNDViOC1hNTkwLWFiZjNmMjJkNWI3YSJ9&pageName=0d4ea1dbd5d7d586f096"',
    icon: 'chart-simple',
    iconColor: '#00838f',
  },
];

export const getDashboardById = (id) => {
  console.log('🔍 Buscando dashboard con ID:', id);
  const found = DASHBOARDS.find(d => d.id === id);
  console.log('🔍 Resultado:', found);
  return found;
};

export const getDashboardIds = () => {
  return DASHBOARDS.map(d => d.id);
};