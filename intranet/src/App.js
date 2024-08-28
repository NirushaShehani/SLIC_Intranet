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
//import ServicesPage from './components/Pages/Services'
import MediaUploadDetails from './components/Pages/MediaUploadDetails';
import AllNotices from './components/Pages/AllNotices';
import SalesLead from './components/Pages/SalesLeadPage';
import CostCenter from './components/Pages/Cost_Center';
import IdeaHub from './components/Pages/IdeaHub';
//import Knowledge_BasePage from './components/Pages/Knowledge_BasePage';
import Knowledge_BasePage_test from './components/Pages/Knowledge_BasePage_test';
import BookHub from './components/Pages/BookHub';
import ISO_Forms from './components/Pages/ISO_Forms';
import ServicesTest from './components/Pages/ServicesTest';
import Login_Page from './components/Pages/LoginPage';
import Idea_Hub_Admin_View from './components/Pages/Admin/IdeaHub_Admin_View';
import SalesLead_Admin_View from './components/Pages/Admin/SalesLead_Admin_View';

import LIFE_Forms from './components/Pages/Services_Policies_Forms/Forms_pages/Life_Forms';
import ICT_Forms from './components/Pages/Services_Policies_Forms/Forms_pages/ICT';
import Common_Forms from './components/Pages/Services_Policies_Forms/Forms_pages/Common';
import Membership_Forms from './components/Pages/Services_Policies_Forms/Forms_pages/Membership';
import Sales_Forms from './components/Pages/Services_Policies_Forms/Forms_pages/Sales';
import Security_department_Forms from './components/Pages/Services_Policies_Forms/Forms_pages/Security_department';
import Life from './components/Pages/Services_Policies_Forms/Services_Pages/Life';
import Incentive_Criteria from './components/Pages/Incentive_Criteria';



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
        <Route path="/services-page" element={<ServicesTest/>}/>
        <Route path="/full-branch-events" element={<FullBranchEvent />} />
        <Route path="/upload-event" element={<UploadEvent />} />
        <Route path="/media-upload-details" element={<MediaUploadDetails />} />
        <Route path="/all-notices" element={<AllNotices />} />
        <Route path="/sales-Lead" element={<SalesLead />} />
        <Route path="/Cost-Center" element={<CostCenter/>}/>
        <Route path="/Idea-Hub" element={<IdeaHub/>}/>
        <Route path="/Knowledge-Base" element={<Knowledge_BasePage_test/>}/>
        <Route path="/Book-Hub" element={<BookHub/>}/>

        <Route path="/ISO-Forms" element={<ISO_Forms/>}/>

        <Route path="/login" element={<Login_Page/>}/>
        <Route path="/Idea_Hub_Admin_View" element={<Idea_Hub_Admin_View/>}/>
        <Route path="/SalesLead_Admin_View" element={<SalesLead_Admin_View/>}/>

        <Route path="/LIFE-Forms" element={<LIFE_Forms/>}/>
        <Route path="/ICT-Forms" element={<ICT_Forms/>}/>
        <Route path="/Common-Forms" element={<Common_Forms/>}/>
        <Route path="/Membership-Forms" element={<Membership_Forms/>}/>
        <Route path="/Sales-Forms" element={<Sales_Forms/>}/>
        <Route path="/Security-Department-Forms" element={<Security_department_Forms/>}/>
        <Route path="/Services-Life" element={<Life/>}/>

        <Route path="/Incentive-Criteria-page" element={<Incentive_Criteria/>}/>



      </Routes>
    </Router>
  );
};

export default App;
