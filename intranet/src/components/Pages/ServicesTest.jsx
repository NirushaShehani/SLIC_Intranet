import React, { useState } from 'react'
import '../../Styles/servicesTest.css';
import { useNavigate } from 'react-router-dom';
import Procurement from './Services_Policies_Forms/Services_Pages/Procurement';
import ICT from './Services_Policies_Forms/Services_Pages/ICT';
import Life from './Services_Policies_Forms/Services_Pages/Life';
import HR from './Services_Policies_Forms/Services_Pages/HR';
import Finance from './Services_Policies_Forms/Services_Pages/Finance';
import Sales from './Services_Policies_Forms/Services_Pages/Sales';
import Transport from './Services_Policies_Forms/Services_Pages/Transport';
import Life_Contact from './Services_Policies_Forms/Services_Pages/Life_Contact_Center';
import Recent_Links from './Services_Policies_Forms/Recent_Links';

const ServicesTest = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Life':
        return <Life />;
      case 'ICT':
        return <ICT />;
      case 'HR':
        return <HR />;
      case 'Finance':
        return <Finance />;
      // Add more cases for other components...
      default:
        return <div>Please select a service.</div>;
    }
  };

  const navigate = useNavigate();
  return (
    <div className="services-container">
      {/* Services */}
      <h1 className="services-title">Services</h1>
      {/* Recent links */}
      <Recent_Links/>
      {/* Recent links */}
      <div className="services-buttons">
        <button className="service-button" onClick={() => setActiveComponent('ICT')}>
          ICT<span>&#x2192;</span>
        </button>
        <button className="service-button" onClick={() => setActiveComponent('Life')}>
          ICT - Service B <span>&#x2192;</span>
        </button>
        <button className="service-button" onClick={() => setActiveComponent('Life')}>
          HR - Service A <span>&#x2192;</span>
        </button>
        <button className="service-button" onClick={() => setActiveComponent('Life')}>
          HR - Service B <span>&#x2192;</span>
        </button>
      </div>
      <div className="service-content">
        {renderComponent()}
      </div>
      {/* Policies */}
      <h1 className="services-title">Policies</h1> 
      
      <div className="services-buttons">
        {['ICT', 'HR', 'Finance', 'Contact Centre', 'Sales', 'Procurement', 'Transport'].map(service => (
          <button key={service} className="service-button">
            {service} <span>&#x2192;</span>
          </button>
        ))}
      </div>
      {/* Forms */}
      <h1 className="services-title">Forms</h1>
      
      <div className="services-buttons">
        {['ICT', 'HR', 'Finance', 'Contact Centre', 'Sales', 'Procurement', 'Transport'].map(service => (
          <button key={service} className="service-button">
            {service} <span>&#x2192;</span>
          </button>
        ))}
      </div>
    </div>
    
    
  )
}

export default ServicesTest
