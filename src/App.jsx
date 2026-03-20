import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StoreList from './pages/StoreList';
import StoreSetup from './pages/StoreSetup';
import ImportData from './pages/ImportData';
import SetupAPIs from './pages/SetupAPIs';
import CreateAPI from './pages/CreateAPI';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', overflow: 'hidden' }}>

          {/* Top Header */}
          <header style={{
            height: '70px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
            padding: '0 2rem', borderBottom: '1px solid #e2e8f0', gap: '1.5rem', backgroundColor: '#fff',
            zIndex: 10
          }}>
            <button style={{
              backgroundColor: '#9333ea', color: 'white', border: 'none',
              padding: '0.5rem 1.25rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer',
              fontSize: '0.9rem'
            }}>Upgrade</button>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '1px solid currentColor', borderRadius: '3px' }}></span> Website
            </a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '50%', border: '1px solid currentColor' }}></span> Help Center
            </a>
            <div style={{ width: '1px', height: '24px', backgroundColor: '#e2e8f0', margin: '0 0.5rem' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1e293b', fontWeight: 500, fontSize: '0.95rem' }}>
              Annie Arora
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
            </div>
          </header>

          <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', backgroundColor: '#f8fafc' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/encoding" element={<div><h1>Encoding</h1><p className="text-muted">This is a mock page representing the Encoding tab.</p></div>} />
              <Route path="/suggestiq" element={<Navigate to="/suggestiq/stores" replace />} />
              <Route path="/suggestiq/stores" element={<StoreList />} />
              <Route path="/suggestiq/store-setup" element={<StoreSetup />} />
              <Route path="/suggestiq/import-data" element={<ImportData />} />
              <Route path="/suggestiq/setup-apis" element={<SetupAPIs />} />
              <Route path="/suggestiq/create-api" element={<CreateAPI />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
