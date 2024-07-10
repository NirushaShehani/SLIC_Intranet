import React from 'react';
import DrawerMenu from '../../Sub_Components/DrawerMenu';
import '../../../Styles/FullNoticesPage.css';
import CompanyEvents from './CompanyEventsAdmin';

const EventsAdminPage = () => {
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

export default EventsAdminPage;

