import React from 'react'
import '../../Styles/servicesTest.css';

const Knowledge_BasePage_test = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Knowledge Base</h1>
      <div className="services-cards">
        <div className="service-card">
          <img src="path_to_blifelogo.jpg" alt="b-Life" className="service-image" />
          <h2 className="service-title">HR</h2>
        </div>
        <div className="service-card">
          <img src="path_to_mihcmlogo.jpg" alt="MiHCM" className="service-image" />
          <h2 className="service-title">Life</h2>
        </div>
      </div>
      {/* <div className="services-buttons">
        {['ICT', 'HR', 'Finance', 'Contact Centre', 'Sales', 'Procurement', 'Transport'].map(service => (
          <button key={service} className="service-button">
            {service} <span>&#x2192;</span>
          </button>
        ))}
      </div> */}
    </div>
  )
}

export default Knowledge_BasePage_test
