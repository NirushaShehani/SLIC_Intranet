import React from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/FullNoticesPage.css';
import CompanyEvents from '../Sub_Components/CompanyEvents';

const EventsPage = () => {
  return (
    <div className="full-notices-page">
      <div>
        <DrawerMenu />
      </div>
      
      <div className="company-events-container">
        <CompanyEvents />
      </div>
      
    </div>
  );
};

export default EventsPage;

