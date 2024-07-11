import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin'
import FullNoticesPage from './components/Pages/FullNoticesPage';
import DetailedEventsPageAdmin from './components/Admin_Components/AdminEventsAndComponents/DetailedEventsPageAdmin';
import DetailedEventsPage from './components/Pages/DetailedEventsPage';
import DetailedNoticePage from './components/Pages/DetailedNoticePage';
import EventsPage from './components/Pages/EventsPage';
import FullMedia from './components/Pages/FullMedia';
import FullBranchPerformance from './components/Pages/FullBranchPerformance';
import ContactListPage from './components/Pages/ContactListPage';
import FullBranchEvent from './components/Pages/FullBranchEvent';
import UploadEvent from './components/Pages/UploadEvent';
import HRNoticeAdmin1 from './components/Admin_Components/HRNoticeAdmin1';
import HRNoticeAdmin2 from './components/Admin_Components/HRNoticeAdmin2';
import MediaUploadDetails from './components/Pages/MediaUploadDetails';
import AllNotices from './components/Pages/AllNotices';
import EventsAdminPage from './components/Admin_Components/AdminEventsAndComponents/EventsAdminPage';
import FullNoticesAdmin from './components/Admin_Components/AdminHRNotices/FullNoticesAdmin';

const App =() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/full-notices" element={<FullNoticesPage />} />
        <Route path="/detailed-notice/:id" element={<DetailedNoticePage />} />
        <Route path="/detailed-events/:id" element={<DetailedEventsPage />} />
        <Route path="/full-events" element={<EventsPage />} />
        <Route path="/full-media" element={<FullMedia />} />
        <Route path="/full-branch-performance" element={<FullBranchPerformance />} /> 
        <Route path="/contact-list" element={<ContactListPage/>}/>
        <Route path="/full-branch-events" element={<FullBranchEvent />} />
        <Route path="/media-upload-details" element={<MediaUploadDetails />} />
        <Route path="/all-notices" element={<AllNotices />} />

        <Route path="/events-admin" element={<EventsAdminPage />} />
        <Route path="/hr-notice-admin1" element={<HRNoticeAdmin1 />} />
        <Route path="/hr-notice-admin2" element={<HRNoticeAdmin2 />} />
        <Route path="/upload-event" element={<UploadEvent />} />
        <Route path="/detailed-events-admin/:id" element={<DetailedEventsPageAdmin />} />
        <Route path="/full-notices-admin" element={<FullNoticesAdmin />} />

      </Routes>
    </Router>
  );
};

export default App;
