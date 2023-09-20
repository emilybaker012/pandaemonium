import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/pages/Layout';
import Public from './common/pages/Public';
import UsersDisplay from './features/users/UsersDisplay';
import ClientProvider from './common/providers/ClientProvider';
import Login from './common/pages/Login';
import './App.scss';
import PostsDisplay from './features/posts/PostsDisplay';
import Dash from './common/pages/Dash';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route element={<ClientProvider />}>
          <Route element={<Layout />}>
            <Route path="dash" index element={<Dash />} />
            <Route path="users">
              <Route index element={<UsersDisplay />} />
            </Route>
            {/* End Users */}
            <Route path="posts">
              <Route index element={<PostsDisplay />} />
            </Route>
            {/* End Posts */}
          </Route>
          {/* End Layout */}
        </Route>
        {/* End Client Provider */}
      </Route>
      {/* End Layout */}
    </Routes>
  );
};

export default App;
