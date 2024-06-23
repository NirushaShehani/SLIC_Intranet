import React from 'react';
import '../../Styles/FullBranchEvent.css';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import CompanyEvents from '../Sub_Components/BranchEvents';


const BranchEvent = () => {
  return (
    <div className="full-branch-events">
      <div className="full-branch-events-column1">
        <DrawerMenu />
        
      </div>
      
      <div className="full-branch-events-column2">
        <CompanyEvents/>
      </div>
      
      <div className="full-branch-events-column4">
      
      </div>
    </div>
  );
};

export default BranchEvent;