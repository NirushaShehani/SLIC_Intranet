import React from 'react'
import KnowledgeBase from '../Home_Components/KnowledgeBase';
import CompanyEvents from '../Sub_Components/Performance';
import BranchPerformance from '../Home_Components/BranchPerformance';
import '../../Styles/FullBranchPerformance.css';
import CostCenter from '../Pages/Cost_Center';
const Cost_Center = () => {
  return (
    <div className="full-branch-performance">
      <div className="full-branch-performance-column1">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="full-branch-performance-column2">
        <CompanyEvents />
      </div>
      <hr />
      <div className="full-branch-performance-column4">
        <BranchPerformance/>
      </div>
    </div>
  )
}

export default Cost_Center
