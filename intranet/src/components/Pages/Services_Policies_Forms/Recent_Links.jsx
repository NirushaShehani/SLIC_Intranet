import React, { useState } from 'react'
import '../../../Styles/servicesTest.css';
import { useNavigate } from 'react-router-dom';
import BlifeImg from '../../../assets/Blife_img.png';
import MiHCMImg from '../../../assets/MIHCM_logo.png';
import Digital_SignatureImg from '../../../assets/Digitel_signature_img.png';


const Recent_Links = () => {
    const openInNewWindow = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
      const navigate = useNavigate();
  return (
    <div className="services-container">
      <div className="services-cards">
        
        <div className="service-card"onClick={() => openInNewWindow('https://app.mihcm.com')}>
          <img src={MiHCMImg} alt="MiHCM" className="service-image" />
          <h2 className="service-title">MiHCM</h2>
        </div>
        <div className="service-card"onClick={() => openInNewWindow('https://sign.srilankainsurance.com/Account/Login')}>
          <img src={Digital_SignatureImg} alt="Digital Signature" className="service-image" />
          <h2 className="service-title">Digital Signature</h2>
        </div>
      </div>
    </div>
  )
}

export default Recent_Links
