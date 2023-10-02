import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './auth/providers/AuthProvider';
import ReactQueryClientProvider from './common/providers/ReactQueryClientProvider';

import './common/styles/custom.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ReactQueryClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ReactQueryClientProvider>
  </AuthProvider>,
);
