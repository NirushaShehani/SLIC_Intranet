import React from 'react';
import KnowledgeBase from '../Home_Components/KnowledgeBase';
import CompanyEvents from '../Sub_Components/HRNotices';
import BranchPerformance from '../Home_Components/BranchPerformance';
import '../../Styles/Home.css';

const FullNoticesPage = () => {
  return (
    <div className="home">
      <div className="home-column1">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="home-column2">
        <CompanyEvents />
      </div>
      <hr />
      <div className="home-column4">
        <BranchPerformance />
      </div>
    </div>
  );
};

export default FullNoticesPage;
