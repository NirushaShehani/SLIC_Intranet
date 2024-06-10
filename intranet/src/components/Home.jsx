import React from 'react';
import BranchPerformance from './Home_Components/BranchPerformance';
import CompanyEvents from './Home_Components/CompanyEvents';
import KnowledgeBase from './Home_Components/KnowledgeBase';
import LifeGWP from './Home_Components/LifeGWP';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-column1">
        <BranchPerformance />
      </div>
      <hr />
      <div className="home-column2">
        <CompanyEvents />
      </div>
      <hr />
      <div className="home-column3">
        <KnowledgeBase />
      </div>
      <hr />
      <div className="home-column4">
        <LifeGWP />
      </div>
    </div>
  );
};

export default Home;
