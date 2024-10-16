import React from "react";
import BranchPerformance from "./Home_Components/BranchPerformance";
import CompanyEvents from "./Home_Components/CompanyEvents";
import KnowledgeBase from "./Home_Components/KnowledgeBase";
import LifeGWP from "./Home_Components/LifeGWP";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div></div>
        <div className="home-column1">
          <KnowledgeBase />
        </div>
        <hr />
        <div className="home-column2">
          <CompanyEvents />
        </div>
        <hr />
        <div style={{ justifyContent: "center", marginTop: "20px" }}>
          <LifeGWP />
        </div>
        <hr />
        <div className="home-column4">
          <BranchPerformance />
        </div>
      </div>
      <div className="footer">
        <p>2024 All right reserved. Sri Lanka Insurance Corporation Life LTD.</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Home;
