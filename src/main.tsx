import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { startAutoRefreshAuth } from './store/auth/autoUpdateAuth';

import './style/global.scss';
import 'primereact/resources/primereact.min.css';

startAutoRefreshAuth();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
