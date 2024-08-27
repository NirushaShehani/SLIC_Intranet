import React from 'react'
import '../../Styles/servicesTest.css';

const ServicesTest = () => {
  return (
    <div className="services-container">
      {/* Services */}
      <h1 className="services-title">Services</h1>
      <div className="services-cards">
        <div className="service-card">
          <img src="path_to_blifelogo.jpg" alt="b-Life" className="service-image" />
          <h2 className="service-title">b-Life</h2>
        </div>
        <div className="service-card">
          <img src="path_to_mihcmlogo.jpg" alt="MiHCM" className="service-image" />
          <h2 className="service-title">MiHCM</h2>
        </div>
        <div className="service-card">
          <img src="path_to_digitalsignaturelogo.jpg" alt="Digital Signature" className="service-image" />
          <h2 className="service-title">Digital Signature</h2>
        </div>
      </div>
      <div className="services-buttons">
        {['ICT', 'HR', 'Finance', 'Contact Centre', 'Sales', 'Procurement', 'Transport'].map(service => (
          <button key={service} className="service-button">
            {service} <span>&#x2192;</span>
          </button>
        ))}
      </div>
      {/* Forms */}
      <h1 className="services-title">Forms</h1>
      <div className="services-cards">
        <div className="service-card">
          <img src="path_to_blifelogo.jpg" alt="b-Life" className="service-image" />
          <h2 className="service-title">b-Life</h2>
        </div>
        <div className="service-card">
          <img src="path_to_mihcmlogo.jpg" alt="MiHCM" className="service-image" />
          <h2 className="service-title">MiHCM</h2>
        </div>
        <div className="service-card">
          <img src="path_to_digitalsignaturelogo.jpg" alt="Digital Signature" className="service-image" />
          <h2 className="service-title">Digital Signature</h2>
        </div>
      </div>
      <div className="services-buttons">
        {['ICT', 'HR', 'Finance', 'Contact Centre', 'Sales', 'Procurement', 'Transport'].map(service => (
          <button key={service} className="service-button">
            {service} <span>&#x2192;</span>
          </button>
        ))}
      </div>
      {/* Policies */}
      <h1 className="services-title">Policies</h1>
      <div className="services-cards">
        <div className="service-card">
          <img src="path_to_blifelogo.jpg" alt="b-Life" className="service-image" />
          <h2 className="service-title">b-Life</h2>
        </div>
        <div className="service-card">
          <img src="path_to_mihcmlogo.jpg" alt="MiHCM" className="service-image" />
          <h2 className="service-title">MiHCM</h2>
        </div>
        <div className="service-card">
          <img src="path_to_digitalsignaturelogo.jpg" alt="Digital Signature" className="service-image" />
          <h2 className="service-title">Digital Signature</h2>
        </div>
      </div>
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
