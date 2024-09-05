import React, { useState } from "react";
import "../../Styles/servicesTest.css";
import DrawerMenu from "../Sub_Components/DrawerMenu";
//import Procurement from './Services_Policies_Forms/Services_Pages/Procurement';
//import HRServices from './Services_Policies_Forms/Services_Pages/HR';
//import Transport from './Services_Policies_Forms/Services_Pages/Transport';
// Services_Pages Links
import ICTServices from "./Services_Policies_Forms/Services_Pages/ICT_Services";
import LifeServices from "./Services_Policies_Forms/Services_Pages/Life_Services";
import FinanceServices from "./Services_Policies_Forms/Services_Pages/Finance_Services";
import SalesServices from "./Services_Policies_Forms/Services_Pages/Sales_Services";
// Services_Pages Links
// Policies_Pages Links
import HR_Policies from "./Services_Policies_Forms/Policies_Pages/HR_Policies";
// Policies_Pages Links
// Forms_Pages Links
import ICT_Forms from "./Services_Policies_Forms/Forms_Pages/ICT_Forms";
import Common_Forms from "./Services_Policies_Forms/Forms_Pages/Common_Forms";
import HR_Forms from "./Services_Policies_Forms/Forms_Pages/HR_Forms";
// Forms_Pages Links
// Circulars_Pages Links
import HR_Circulars from "./Services_Policies_Forms/Circulars_pages/HR_Circulars";
import ICT_Circulars from "./Services_Policies_Forms/Circulars_pages/ICT_Circulars";
import Life_Circulars from "./Services_Policies_Forms/Circulars_pages/Life_Circulars";
// Circulars_Pages Links
// Common_Pages Links
import HR_Common from "./Services_Policies_Forms/Common_pages/HR_Common";
// Common_Pages Links
import Recent_Links from "./Services_Policies_Forms/Recent_Links";
import { Link } from "react-router-dom";

const ServicesTest = () => {
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

  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "LifeServices":
        return <LifeServices />;
      case "ICTServices":
        return <ICTServices />;
      case "SalesServices":
        return <SalesServices />;
      case "FinanceServices":
        return <FinanceServices />;
      case "HR_Circulars":
        return <HR_Circulars />;
      case "ICT_Circulars":
        return <ICT_Circulars />;
      case "Life_Circulars":
        return <Life_Circulars />;
      case "HR_Policies":
        return <HR_Policies />;
      case "ICT_Forms":
        return <ICT_Forms />;
      case "Common_Forms":
        return <Common_Forms />;
      case "HR_Forms":
        return <HR_Forms />;
      case "HR_Common":
        return <HR_Common />;
      // Add other cases as needed
      default:
        return null;
    }
  };

  return (
    <div className="services-container">
      <DrawerMenu />
      {/* Display section names in a horizontal layout */}
      {!activeComponent && (
        <div className="section-names">
          {activeSection !== "services" && (
            <h1
              className={`services-title ${
                activeSection === "services" ? "selected" : ""
              }`}
              onClick={() => setActiveSection("services")}
            >
              Services
            </h1>
          )}
          {activeSection !== "policies" && (
            <h1
              className={`services-title ${
                activeSection === "policies" ? "selected" : ""
              }`}
              onClick={() => setActiveSection("policies")}
            >
              Policies
            </h1>
          )}
          {activeSection !== "forms" && (
            <h1
              className={`services-title ${
                activeSection === "forms" ? "selected" : ""
              }`}
              onClick={() => setActiveSection("forms")}
            >
              Forms
            </h1>
          )}
          {activeSection !== "circulars" && (
            <h1
              className={`services-title ${
                activeSection === "circulars" ? "selected" : ""
              }`}
              onClick={() => setActiveSection("circulars")}
            >
              Circulars
            </h1>
          )}
          {activeSection !== "common" && (
            <h1
              className={`services-title ${
                activeSection === "common" ? "selected" : ""
              }`}
              onClick={() => setActiveSection("common")}
            >
              Common
            </h1>
          )}
        </div>
      )}
      {/* Display section names in a horizontal layout */}

      {/* Display only the active section's title and buttons */}
      {activeSection === "services" && (
        <>
          <h1
            className="services-title selected"
            onClick={() => setActiveSection(null)}
          >
            Services
          </h1>
          <Recent_Links />
          <div className="services-buttons">
            <button
              className={`service-button ${
                clickedButton === "LifeServices" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("LifeServices", "services", "LifeServices")
              }
            >
              Life<span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${
                clickedButton === "ICTServices" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("ICTServices", "services", "ICTServices")
              }
            >
              ICT<span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${
                clickedButton === "FinanceServices" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent(
                  "FinanceServices",
                  "services",
                  "FinanceServices"
                )
              }
            >
              Finance <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${
                clickedButton === "SalesServices" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("SalesServices", "services", "SalesServices")
              }
            >
              Sales <span>&#x2192;</span>
            </button>
          </div>
        </>
      )}

      {activeSection === "policies" && (
        <>
          <h1
            className="services-title selected"
            onClick={() => setActiveSection(null)}
          >
            Policies
          </h1>
          <br />
          <div className="services-buttons">
            <button
              className={`service-button ${
                clickedButton === "HR_Policies" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("HR_Policies", "policies", "HR_Policies")
              }
            >
              HR <span>&#x2192;</span>
            </button>
            {/* <button
              className={`service-button ${clickedButton === 'ICT' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('ICT', 'policies', 'ICT')}
            >
              ICT - Service B <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'HR' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('HR', 'policies', 'HR')}
            >
              HR - Service A <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'HR_B' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('HR', 'policies', 'HR_B')}
            >
              HR - Service B <span>&#x2192;</span>
            </button> */}
          </div>
        </>
      )}

      {activeSection === "forms" && (
        <>
          <h1
            className="services-title selected"
            onClick={() => setActiveSection(null)}
          >
            Forms
          </h1>
          <br />
          <div className="services-buttons">
          <button
              className={`service-button ${
                clickedButton === "HR_Forms" ? "clicked" : ""
              }`}
              onClick={() => toggleComponent("HR_Forms", "forms", "HR_Forms")}
            >
              HR <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${
                clickedButton === "ICT_Forms" ? "clicked" : ""
              }`}
              onClick={() => toggleComponent("ICT_Forms", "forms", "ICT_Forms")}
            >
              ICT <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${
                clickedButton === "Common_Forms" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("Common_Forms", "forms", "Common_Forms")
              }
            >
              Common <span>&#x2192;</span>
            </button>
            <Link to="/ISO-Forms" style={{ cursor: "pointer" }}>
              <button
                className={`service-button ${
                  clickedButton === "ISO Forms" ? "clicked" : ""
                }`}
                onClick={() =>
                  toggleComponent("ISO Forms", "forms", "ISO Forms")
                }
              >
                ISO Forms <span>&#x2192;</span>
              </button>
            </Link>
          </div>
        </>
      )}

      {activeSection === "circulars" && (
        <>
          <h1
            className="services-title selected"
            onClick={() => setActiveSection(null)}
          >
            Circulars
          </h1>
          <br />
          <div className="services-buttons">
          <button
              className={`service-button ${
                clickedButton === "Life_Circulars" ? "clicked" : ""
              }`}
              onClick={() => openInNewWindow('http://172.24.60.66/circulars-online')}
            >
              Life<span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${
                clickedButton === "HR_Circulars" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("HR_Circulars", "circulars", "HR_Circulars")
              }
            >
              HR <span>&#x2192;</span>
            </button>
            {/* <button
              className={`service-button ${
                clickedButton === "ICT_Circulars" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("ICT_Circulars", "circulars", "ICT_Circulars")
              }
            >
              ICT<span>&#x2192;</span>
            </button> */}
           
          </div>
        </>
      )}

      {activeSection === "common" && (
        <>
          <h1
            className="services-title selected"
            onClick={() => setActiveSection(null)}
          >
            Common
          </h1>
          <br />
          <div className="services-buttons">
            <button
              className={`service-button ${
                clickedButton === "HR_Common" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("HR_Common", "common", "HR_Common")
              }
            >
              HR <span>&#x2192;</span>
            </button>
            {/* <button
              className={`service-button ${
                clickedButton === "ICT_Circulars" ? "clicked" : ""
              }`}
              onClick={() =>
                toggleComponent("ICT_Circulars", "circulars", "ICT_Circulars")
              }
            >
              ICT<span>&#x2192;</span>
            </button> */}
           
          </div>
        </>
      )}

      {/* Display the content if a component is active */}
      <div className="service-content">{renderComponent()}</div>
    </div>
  );
};

export default ServicesTest;
