import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import TemporaryDrawer from './components/TemporaryDrawer';

import HomePage from './pages/MyDayPage';
import CreatePage from './pages/CreatePage';

function App() {
  return (
    <Router>
      <div className="app">
        <TemporaryDrawer />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/myDay" />} />
            <Route path="/myday" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
