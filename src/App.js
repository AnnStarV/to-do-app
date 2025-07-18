import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import TemporaryDrawer from './components/TemporaryDrawer';

import TodayPage from './pages/TodayPage';
import CreatePage from './pages/CreatePage';
import ImportantTasksPage from './pages/ImportantTasksPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <div className="app">
        <TemporaryDrawer />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/myDay" />} />
            <Route path="/myday" element={<TodayPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/important" element={<ImportantTasksPage />} />
            <Route path="/work" element={<CategoryPage category="work" />} />
            <Route path="/home" element={<CategoryPage category="home" />} />
            <Route path="/hobby" element={<CategoryPage category="hobby" />} />
            <Route path="/another" element={<CategoryPage category="another" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
