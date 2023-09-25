import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from './auth/RequireAuth';
import PersistLogin from './auth/PersistLogin';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Layout from './pages/components/Layout';
import NotFound from './pages/NotFound';

import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* Public Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="signup" element={<SignUp />} />

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
