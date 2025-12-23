import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a24',
            color: '#f0f0f5',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '16px',
            fontFamily: 'Outfit, sans-serif',
          },
          success: {
            iconTheme: {
              primary: '#00D9FF',
              secondary: '#0a0a0f',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF6B6B',
              secondary: '#0a0a0f',
            },
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);





