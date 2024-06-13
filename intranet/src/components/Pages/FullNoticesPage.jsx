import React from 'react';
import KnowledgeBase from '../Home_Components/KnowledgeBase';
import CompanyEvents from '../Sub_Components/HRNotices';
import BranchPerformance from '../Home_Components/BranchPerformance';
import '../../Styles/FullNoticesPage.css';

const FullNoticesPage = () => {
  return (
    <div className="full-notices-page">
      <div className="full-notices-column1">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="full-notices-column2">
        <CompanyEvents />
      </div>
      <hr />
      <div className="full-notices-column4">
        <BranchPerformance />
      </div>
    </div>
  );
};

export default FullNoticesPage;
