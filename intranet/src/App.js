import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FullNoticesPage from './components/Pages/FullNoticesPage';
import DetailedEventsPage from './components/Pages/DetailedEventsPage';
import DetailedNoticePage from './components/Pages/DetailedNoticePage';
import EventsPage from './components/Pages/EventsPage';
import FullMedia from './components/Pages/FullMedia';
import FullBranchPerformance from './components/Pages/FullBranchPerformance';
import ContactListPage from './components/Pages/ContactListPage';
import FullBranchEvent from './components/Pages/FullBranchEvent';
import UploadEvent from './components/Pages/UploadEvent';
import ServicesPage from './components/Pages/Services'
import MediaUploadDetails from './components/Pages/MediaUploadDetails';
import AllNotices from './components/Pages/AllNotices';
import SalesLead from './components/Pages/SalesLeadPage';
import CostCenter from './components/Pages/Cost_Center';
import IdeaHub from './components/Pages/IdeaHub';
import Knowledge_BasePage from './components/Pages/Knowledge_BasePage';
import BookHub from './components/Pages/BookHub';


const App =() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full-notices" element={<FullNoticesPage />} />
        <Route path="/detailed-notice/:id" element={<DetailedNoticePage />} />
        <Route path="/detailed-events/:id" element={<DetailedEventsPage />} />
        <Route path="/full-events" element={<EventsPage />} />
        <Route path="/full-media" element={<FullMedia />} />
        <Route path="/full-branch-performance" element={<FullBranchPerformance />} /> 
        <Route path="/contact-list" element={<ContactListPage/>}/>
        <Route path="/services-page" element={<ServicesPage/>}/>
        <Route path="/full-branch-events" element={<FullBranchEvent />} />
        <Route path="/upload-event" element={<UploadEvent />} />
        <Route path="/media-upload-details" element={<MediaUploadDetails />} />
        <Route path="/all-notices" element={<AllNotices />} />
        <Route path="/sales-Lead" element={<SalesLead />} />
        <Route path="/Cost-Center" element={<CostCenter/>}/>
        <Route path="/Idea-Hub" element={<IdeaHub/>}/>
        <Route path="/Knowledge-Base" element={<Knowledge_BasePage/>}/>
        <Route path="/Book-Hub" element={<BookHub/>}/>
      </Routes>
    </Router>
  );
};

export default App;
