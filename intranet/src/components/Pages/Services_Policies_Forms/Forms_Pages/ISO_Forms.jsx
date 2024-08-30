import React, { useState } from 'react';
import '../../../../Styles/servicesTest.css'
import DrawerMenu from '../../../Sub_Components/DrawerMenu';
import { Link } from 'react-router-dom';

// ISO Form Links
import Death_Claims_Dept from './ISO_Forms/Death_Claims_Dept';
import General_Forms from './ISO_Forms/General_Forms';
import Health_Claims_Dept from './ISO_Forms/Health_Claims_Dept';
import Life_Group_Business from './ISO_Forms/Life_Group_Business';
import Life_Group_Payment from './ISO_Forms/Life_Group_Payment';
import Maturity_Claims_Dept from './ISO_Forms/Maturity_Claims_Dept';
import PHS from './ISO_Forms/PHS';
import Underwriting from './ISO_Forms/Underwriting';
// ISO Form Links
const ISO_Forms = () => {
const [activeComponent, setActiveComponent] = useState(null);  // To track the active content
  const [activeSection, setActiveSection] = useState(null);      // To track the active section (Services, Policies, etc.)
  const [clickedButton, setClickedButton] = useState(null);      // To track the last clicked button

  // Function to toggle between displaying content or hiding it
  const toggleComponent = (componentName, sectionName, buttonName) => {
    if (activeComponent === componentName) {
      setActiveComponent(null);  // Hide the component if the same button is clicked again
      setActiveSection(sectionName);  // Keep the section active to show buttons
      setClickedButton(null);     // Reset the clicked button state
    } else {
      setActiveComponent(componentName);
      setActiveSection(sectionName);  // Show only the active section's buttons and content
      setClickedButton(buttonName);   // Set the clicked button name
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Death_Claims_Dept':
        return <Death_Claims_Dept />;
      case 'General_Forms':
        return <General_Forms />;
      case 'Health_Claims_Dept':
        return <Health_Claims_Dept />;
      case 'Life_Group_Business':
        return <Life_Group_Business />;
      case 'Life_Group_Payment':
        return <Life_Group_Payment/>
      case 'Maturity_Claims_Dept':
        return <Maturity_Claims_Dept/>
      case 'PHS':
        return <PHS/>
      case 'Underwriting':
        return <Underwriting/>
      // Add other cases as needed
      default:
        return null;
    }
  };

  return (
    <div className="services-container">
      
      <DrawerMenu />
      {/* Display only the active section's title and buttons */}
      
          <h1 className="services-title selected" onClick={() => setActiveSection(null)}>
            ISO Forms
          </h1>
          <div className="services-buttons">
            <button
              className={`service-button ${clickedButton === 'Death_Claims_Dept' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('Death_Claims_Dept', 'ISO Forms', 'Death_Claims_Dept')}
            >
              Death Claims <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'General_Forms' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('General_Forms', 'ISO Forms', 'General_Forms')}
            >
              ICT<span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'Health_Claims_Dept' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('Health_Claims_Dept', 'ISO Forms', 'Health_Claims_Dept')}
            >
              Finance <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'Life_Group_Business' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('Life_Group_Business', 'ISO Forms', 'Life_Group_Business')}
            >
              Sales <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'Life_Group_Payment' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('Life_Group_Payment', 'ISO Forms', 'Life_Group_Payment')}
            >
              Death Claims <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'Maturity_Claims_Dept' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('Maturity_Claims_Dept', 'ISO Forms', 'Maturity_Claims_Dept')}
            >
              ICT<span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'PHS' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('PHS', 'ISO Forms', 'PHS')}
            >
              Finance <span>&#x2192;</span>
            </button>
            <button
              className={`service-button ${clickedButton === 'Underwriting' ? 'clicked' : ''}`}
              onClick={() => toggleComponent('Underwriting', 'ISO Forms', 'Underwriting')}
            >
              Sales <span>&#x2192;</span>
            </button>
          </div>
      <div className="service-content">
        {renderComponent()}
      </div>
    </div>
  )
}

export default ISO_Forms
