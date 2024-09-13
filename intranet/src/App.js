import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FullNoticesPage from './components/Pages/FullNoticesPage';
import DetailedEventsPage from './components/Pages/DetailedEventsPage';
import DetailedNoticePage from './components/Pages/DetailedNoticePage';
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
import ISO_Forms from './components/Pages/Services_Policies_Forms/Forms_Pages/ISO_Forms';
import ServicesTest from './components/Pages/ServicesTest';
import Login_Page from './components/Pages/LoginPage';
import Idea_Hub_Admin_View from './components/Pages/Admin/IdeaHub_Admin_View';
import SalesLead_Admin_View from './components/Pages/Admin/SalesLead_Admin_View';
import Life from './components/Pages/Services_Policies_Forms/Services_Pages/Life_Services';
import Incentive_Criteria from './components/Pages/Incentive_Criteria';
import HR from './components/Pages/Knowledge_base_pages/HR';
import AboutSLIC from './components/Pages/Knowledge_base_pages/AboutSLIC';

//Event pages
import Slot1 from './components/Pages/SLIC_Events/Slot1';
import Slot2 from './components/Pages/SLIC_Events/Slot2';
import Slot3 from './components/Pages/SLIC_Events/Slot3';
import Slot4 from './components/Pages/SLIC_Events/Slot4';
import Slot5 from './components/Pages/SLIC_Events/Slot5';
import Slot6 from './components/Pages/SLIC_Events/Slot6';


const App =() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full-notices" element={<FullNoticesPage />} />
        <Route path="/detailed-notice/:id" element={<DetailedNoticePage />} />
        <Route path="/detailed-events/:id" element={<DetailedEventsPage />} />
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

        
        <Route path="/Services-Life" element={<Life/>}/>

        <Route path="/Incentive-Criteria-page" element={<Incentive_Criteria/>}/>
        
        <Route path="/" element={<HR />} />
        <Route path="/aboutSlic" element={<AboutSLIC />} />
        {/* Add other routes here */}
        <Route path="/Slot1" element={<Slot1 />} />
        <Route path="/Slot2" element={<Slot2/>}/>
        <Route path="/Slot3" element={<Slot3/>}/>
        <Route path="/Slot4" element={<Slot4/>}/>
        <Route path="/Slot5" element={<Slot5/>}/>
        <Route path="/Slot6" element={<Slot6/>}/>
      </Routes>
    </Router>
  );
};

export default App;
