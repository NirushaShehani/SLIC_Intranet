import React from 'react';
import KnowledgeBase from '../Home_Components/KnowledgeBase';
import CompanyEvents from '../Sub_Components/Performance';
import BranchPerformance from '../Home_Components/BranchPerformance';
import '../../Styles/FullBranchPerformance.css';
const FullBranchPerformance = () => {
  return (
    <div className="full-branch-performance">
      <div className="full-branch-performance-column1">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="full-branch-performance-column3">
        <CompanyEvents />
      </div>
      
    </div>
  );
};

export default FullBranchPerformance;
