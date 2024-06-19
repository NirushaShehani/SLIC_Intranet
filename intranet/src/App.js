import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FullNoticesPage from './components/Pages/FullNoticesPage';
import DetailedNoticePage from './components/Pages/DetailedNoticePage';
import EventsPage from './components/Pages/EventsPage';
import FullMedia from './components/Pages/FullMedia';
import FullBranchPerformance from './components/Pages/FullBranchPerformance';
import ContactListPage from './components/Pages/ContactListPage';

const App =() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full-notices" element={<FullNoticesPage />} />
        <Route path="/detailed-notice/:id" element={<DetailedNoticePage />} />
        <Route path="/full-events" element={<EventsPage />} />
        <Route path="/full-media" element={<FullMedia />} />
        <Route path="/full-branch-performance" element={<FullBranchPerformance />} /> 
        <Route path="/contact-list" element={<ContactListPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
