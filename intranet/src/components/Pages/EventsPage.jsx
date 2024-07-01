import React from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/FullNoticesPage.css';
import CompanyEvents from '../Sub_Components/CompanyEvents';

const EventsPage = () => {
  return (
    <div className="full-notices-page">
      <div className="full-notices-column1">
        <DrawerMenu />
      </div>
      
      <div>
        <CompanyEvents />
      </div>
      
    </div>
  );
};

export default EventsPage;

