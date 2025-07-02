import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TemporaryDrawer from './components/TemporaryDrawer';
import MyDay from './pages/MyDay';
import './App.scss';


function App() {
  return (
    <Router>
      <div className="app">
        <TemporaryDrawer />
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/myDay" />} />
            <Route path="/myday" element={<MyDay />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
