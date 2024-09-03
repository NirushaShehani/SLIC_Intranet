import React, { useState } from "react";
import '../../Styles/servicesTest.css';
import DrawerMenu from "../Sub_Components/DrawerMenu";
//Knowledge base page links
import Life from './Knowledge_base_pages/Life';
import HR from './Knowledge_base_pages/HR';

//Knowledge base page links
const Knowledge_BasePage_test = () => {
  const [activeComponent, setActiveComponent] = useState(null); // To track the active content
  const [activeSection, setActiveSection] = useState(null); // To track the active section (Services, Policies, etc.)
  const [clickedButton, setClickedButton] = useState(null); // To track the last clicked button

  // Function to toggle between displaying content or hiding it
  const toggleComponent = (componentName, sectionName, buttonName) => {
    if (activeComponent === componentName) {
      setActiveComponent(null); // Hide the component if the same button is clicked again
      setActiveSection(sectionName); // Keep the section active to show buttons
      setClickedButton(null); // Reset the clicked button state
    } else {
      setActiveComponent(componentName);
      setActiveSection(sectionName); // Show only the active section's buttons and content
      setClickedButton(buttonName); // Set the clicked button name
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Life":
        return <Life />;
      case "HR":
        return <HR />;
      // Add other cases as needed
      default:
        return null;
    }
  };
  return (
    <div className="services-container">
      <DrawerMenu/>
      <h1
        className="services-title selected"
        onClick={() => setActiveSection(null)}
      >
        Knowledge Base
      </h1>
      <br/>
      <div
        className="services-buttons"
        style={{ width: "calc(100% + 10px)" }} // OR use sx={{ width: "calc(50% - 10px)" }} if using MUI's sx prop
      >
        <button
          className={`service-button ${
            clickedButton === "Life" ? "clicked" : ""
          }`}
          onClick={() =>
            toggleComponent(
              "Life",
              "Knowledge Base",
              "Life"
            )
          }
        >
          Life <span>&#x2192;</span>
        </button>
        <button
          className={`service-button ${
            clickedButton === "HR" ? "clicked" : ""
          }`}
          onClick={() =>
            toggleComponent("HR", "Knowledge Base", "HR")
          }
        >
          General <span>&#x2192;</span>
        </button>
      </div>
      <div className="service-content">{renderComponent()}</div>
    </div>
  );
};

export default Knowledge_BasePage_test
