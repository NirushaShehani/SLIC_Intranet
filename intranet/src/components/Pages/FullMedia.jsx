import React from 'react';
import KnowledgeBase from '../Home_Components/KnowledgeBase';
import CompanyEvents from '../Sub_Components/Media';
import BranchPerformance from '../Home_Components/BranchPerformance';
import '../../Styles/FullMedia.css';

const FullMedia = () => {
  return (
    <div className="full-media">
      <div className="full-media-column1">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="full-media-column2">
        <CompanyEvents />
      </div>
      <hr />
      <div className="full-media-column4">
        <BranchPerformance />
      </div>
    </div>
  );
};

export default FullMedia;

