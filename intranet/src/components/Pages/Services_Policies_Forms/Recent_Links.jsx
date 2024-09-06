import React, { useState } from 'react'
import '../../../Styles/servicesTest.css';
import { useNavigate } from 'react-router-dom';

const Recent_Links = () => {
    const openInNewWindow = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
      const navigate = useNavigate();
  return (
    <div className="services-container">
      <div className="services-cards">
        <div className="service-card" onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
          <img src="path_to_blifelogo.jpg" alt="b-Life" className="service-image" />
          <h2 className="service-title">b-Life</h2>
        </div>
        <div className="service-card">
          <img src="path_to_mihcmlogo.jpg" alt="MiHCM" className="https://app.mihcm.com/" />
          <h2 className="service-title">MiHCM</h2>
        </div>
        <div className="service-card">
          <img src="path_to_digitalsignaturelogo.jpg" alt="Digital Signature" className="service-image" />
          <h2 className="service-title">Digital Signature</h2>
        </div>
      </div>
    </div>
  )
}

export default Recent_Links
