import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/pages/Layout';
import Public from './common/pages/Public';
import UsersDisplay from './features/users/UsersDisplay';
import ReactQueryClientProvider from './common/providers/ReactQueryClientProvider';
import Login from './common/pages/Login';
import './App.scss';
import PostsDisplay from './features/posts/PostsDisplay';
import Dash from './common/pages/Dash';
import NotFound from './common/pages/NotFound';
import RequireAuth from './common/components/RequireAuth';
import PersistLogin from './common/components/PersistLogin';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* Public Routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<ReactQueryClientProvider />}>
              <Route element={<Layout />}>
                <Route path="dash" element={<Dash />} />
                <Route path="users" element={<UsersDisplay />} />
                <Route path="posts" element={<PostsDisplay />} />
              </Route> {/* End Layout */}
            </Route> {/* End Client Provider */}
          </Route> {/* End Require Auth */}
        </Route> {/* End Persist Login */}

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
