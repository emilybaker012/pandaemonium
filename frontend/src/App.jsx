import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from './auth/RequireAuth';
import PersistLogin from './auth/PersistLogin';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './pages/components/Layout';
import NotFound from './pages/NotFound';

import './common/styles/custom.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* Public Routes */}
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route element={<PersistLogin />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route> {/* End Layout */}
          </Route> {/* End Persist Login */}
        </Route> {/* End Require Auth */}

        {/** Sample Role Based Authorization
         *  <Route element={<RequireAuth allowedRoles={"Admin"}}/>
         *    <Route path="Admin" element={<Admin/>}  />
         *  </Route>
         */}

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
