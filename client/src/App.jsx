import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navigation Bar */}
        <nav style={{ padding: '15px', background: '#222', color: '#fff', display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
          <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
        </nav>

        {/* Page Routing */}
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Construction ERP Portal</h1>
                <p>Welcome! Use the links above to get started.</p>
              </div>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* We will add the Dashboard route here next */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;