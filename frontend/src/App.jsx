import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './common/pages/Layout';
import Public from './common/components/Public';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
      </Route>
      {/* End Layout */}
    </Routes>
  );
};

export default App;
