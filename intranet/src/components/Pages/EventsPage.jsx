import React from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/FullNoticesPage.css';
import BranchPerformance from '../Home_Components/BranchPerformance';

const EventsPage = () => {
  return (
    <div className="full-notices-page">
      <div className="full-notices-column1">
        <DrawerMenu />
      </div>
      
      <div className="full-notices-column2">
        
      </div>
      
      <div className="full-notices-column4">
        <BranchPerformance />
      </div>
    </div>
  );
};

export default EventsPage;

