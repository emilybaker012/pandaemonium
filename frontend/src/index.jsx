import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './auth/providers/AuthProvider';
import ReactQueryClientProvider from './common/providers/ReactQueryClientProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ReactQueryClientProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ReactQueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
