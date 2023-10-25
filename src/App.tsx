import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from '@/pages/MainPage';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  </React.StrictMode>
);
