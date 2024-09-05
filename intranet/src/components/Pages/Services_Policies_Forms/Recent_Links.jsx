import React, { useState } from 'react'
import '../../../Styles/servicesTest.css';
import { useNavigate } from 'react-router-dom';
import mihcm from '../../../assets/Recentlinks/mihcm.png';
import signex from '../../../assets/Recentlinks/signex.png';
import life from '../../../assets/Recentlinks/life.png';
const Recent_Links = () => {
    const openInNewWindow = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
      const navigate = useNavigate();
  return (
    <div className="services-container">
      <div className="services-cards">
        <div className="service-card" onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
          <img src={life} alt="b-Life" className="service-image" />
          <h2 className="service-title">b-Life</h2>
        </div>
        <div className="service-card" onClick={() => openInNewWindow('https://app.mihcm.com/')}>
          <img src={mihcm} alt="MiHCM" className="service-image" />
          <h2 className="service-title">MiHCM</h2>
        </div>
        <div className="service-card">
          <img src={signex} alt="Digital Signature" className="service-image" />
          <h2 className="service-title">Digital Signature</h2>
        </div>
      </div>
    </div>
  )
}

export default Recent_Links
