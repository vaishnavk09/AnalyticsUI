import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Reports from './pages/Reports';
import Workflows from './pages/Workflows';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
