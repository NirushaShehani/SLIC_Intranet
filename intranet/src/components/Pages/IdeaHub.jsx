import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/slicLIfe_New_1.png';

const IdeaHub = () => {
    const containerStyle = {
        width: '100%',
        height: '100vh',
        display: 'flex',
      };
    
      const leftStyle = {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: '20px',
        boxSizing: 'border-box',
      };
    
      const verticalLineStyle = {
        width: '3px',
        backgroundColor: '#646464',
        margin: '-1px',
      };
    
      const rightStyle = {
        flex: 4,
        backgroundColor: '#F4F4F4',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const border = {
        border: '2px solid #0000002B',
        borderRadius: '20px',
        boxShadow: '0 10px 8px rgba(0, 0, 0, 0.1)',
        width: '80%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
        padding: '20px',
      };
    
      const container = {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
      };
    
      const formContainerStyle = {
        padding: '20px',
        backgroundColor: '#F4F4F4',
        width: '100%'
      };
    
      const contentStyle = {
        display: 'flex',
        flex: 1,
      };
    
      const up = {
        flex: '0 0 15%',
        backgroundColor: '#31769F',
        padding: '10px',
        marginLeft: '-20px',
        marginRight: '-20px',
        marginTop: '-20px',
        width: 'auto',
        height: 'auto',
      };
    
      const down = {
        flex: '1',
        padding: '10px',
        marginLeft: '-20px',
        marginRight: '-20px',
      };
    
      const contactList = {
        fontFamily: '"Gloock", serif',
        fontWeight: 500,
        fontSize: '48px',
        fontStyle: 'normal',
        color: 'white',
        marginLeft: '30px',
        marginTop: '10px',
      };
    
      const subtitle = {
        fontFamily: '"Onest", sans-serif',
        fontSize: '17px',
        fontStyle: 'normal',
        color: '#161616',
        marginLeft: '18px',
        marginTop: '20px',
      };
    
      const paragraph = {
        fontFamily: '"Onest", sans-serif',
        fontSize: '15px',
        fontStyle: 'normal',
        color: '#585858',
        marginLeft: '18px',
        marginTop: '20px',
      };
    
      const logoStyle = {
        width: '240px',
        height: 'auto',
        marginBottom: '10px',
      };
    
      const titleStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
      };
    
      const inputStyle = {
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        width: '100%',
        marginBottom: '10px',
        outline: 'none',
        boxSizing: 'border-box'
      };
    
      const buttonStyle = {
        backgroundColor: '#2F5BDA',  // Blue color for the button
        color: '#FFFFFF',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        height: '37px',
        width: '171px',
      };
    
      const formRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        width: '100%',
      };
    
      const formColumnStyle = {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        marginLeft: '10px',
        marginRight: '10px',
      };
  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={container}>
          <div style={up}>
            <DrawerMenu />
            <div style={contactList}>Idea Hub</div>
          </div>
          <div style={down}>
            <div style={subtitle}>Welcome to SLIC's Idea Hub</div>
            <div style={paragraph}>
              <p>
                As a Company We always value your New Ideas.
                Feel free to drop your new Ideas, Which will help to enhanse our company environment for all.  
              </p>
            </div>
            <br />
            <br />
            <div style={subtitle}>Why Fill Out This Form?</div>
            <div style={paragraph}>
              <p>
                Personalized Service: By providing us with your information, we can tailor our services to meet your
                specific insurance needs.
              </p>
              <p>Expert Advice: Our experienced team will contact you to discuss the best insurance options available to you.</p>
              <p>Convenience: Save time by letting us reach out to you at your preferred contact method and time.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
        <div style={border}>
          <div className="logo">
            <img src={logo} alt="Logo" style={logoStyle} />
            <h3 style={titleStyle}>Sales Contact Form</h3>
          </div>
          {/* Form area */}
          <div style={formContainerStyle}>
            <form>
              <div style={formColumnStyle}>
                <label>Name of the client:</label>
                <input type="text" placeholder="Enter your name.." style={inputStyle} />
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>Contact No 1:</label>
                  <input type="text" placeholder="0704561233" style={inputStyle} />
                </div>
                <div style={formColumnStyle}>
                  <label>Contact No 2:</label>
                  <input type="text" placeholder="0785642350" style={inputStyle} />
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <h4>SLIC Contact :</h4>
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>Name:</label>
                  <input type="text" placeholder="xxxxxxxxx" style={inputStyle} />
                </div>
                <div style={formColumnStyle}>
                  <label>Mobile number:</label>
                  <input type="text" placeholder="xxxxxxxxx" style={inputStyle} />
                </div>
              </div>
              <div style={formRowStyle}>
                <div style={formColumnStyle}>
                  <label>Extension:</label>
                  <input type="text" placeholder="Enter company name ..." style={inputStyle} />
                </div>
                <div style={formColumnStyle}>
                  <label>Department:</label>
                  <input type="text" placeholder="xxxxxxxxx" style={inputStyle} />
                </div>
              </div>
              <div>
                <button type="submit" style={buttonStyle}>Submit</button>
              </div>
            </form>
          </div>
          {/* Form area */}
        </div>
      </div>
    </div>
  )
}

export default IdeaHub