import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/slicLIfe_New_1.png';

const SalesLeadPage = () => {
    const containerStyle = {
        width: '100%',
        height: '100vh'
      };
    
      const leftStyle = {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: '20px',
        boxSizing: 'border-box'
      };
    
      const verticalLineStyle = {
        width: '3px',
        backgroundColor: '#646464', // You can change the color of the line
        margin: '-1px' // Adjust spacing as needed
      };
    
      const rightStyle = {
        flex: 4,
        backgroundColor: '#F4F4F4',
        padding: '20px',
        boxSizing: 'border-box',
      };

      const border = {
        border: '2px solid #0000002B', // Add border
        borderRadius: '20px', // Make the border rounded
        boxShadow: '0 10px 8px rgba(0, 0, 0, 0.1)', // Add shadow for the elevated effect
        margin: '10px', // Add margin to give space around the container
         width: '90%', // Set the width to 60% of the parent container
        height: '80vh', // Set the height to 80% of the viewport height
        display: 'flex',
        padding: '50px',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center' // Center vertically
      }
    
      const container = {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        
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
    
      const Down = {
        flex: '1',
        
        padding: '1p0x',
        marginLeft: '-20px',
        marginRight: '-20px',
      };
    
      const ContactList = {
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
    
      const formContainerStyle = {
        padding: '20px',
        backgroundColor: '#F4F4F4',
        width: '100%'
      };
      
      const contentStyle = {
        display: 'flex',
        flex: 1,
      };
  return (
    <div style={{ display: 'flex', ...containerStyle }}>
      <div style={leftStyle}>
        <div style={{ display: 'flex', ...container }}>
          <div style={up}>
            <DrawerMenu/>
            <div style={ContactList}>
              Sales Leads
            </div>
          </div>
          <div style={Down}>
              <div style={subtitle}>
              Welcome to SLIC's Sales Leads Form
              </div>
              <div style={paragraph}>
              <p>Thank you for your interest in Sri Lanka Insurance Corporation (SLIC). 
              To help us understand your insurance needs and provide you with the best service possible, 
              please fill out the form below with your contact details and the type of insurance you are interested in. 
              Your information will be used by our sales team to get in touch with you and offer personalized assistance.</p>
              </div>
              <br/>
              <br/>
              <div style={subtitle}>
              Why Fill Out This Form?
              </div>
              <div style={paragraph}>
              <p>Personalized Service: By providing us with your information, we can tailor our services to meet your specific insurance needs.</p>
              <p>Expert Advice: Our experienced team will contact you to discuss the best insurance options available to you.</p>
              <p>Convenience: Save time by letting us reach out to you at your preferred contact method and time.</p>
              </div>
              
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      {/* Right pane */}
      <div style={rightStyle}>
      <div style={{ display: 'flex', ...container }}>
         <div style={border}>
            <div className="logo" >
              <img src={logo} alt="Logo" style={{ width: '300px', height: '30%', center: 'auto', marginBottom: '550px', marginLeft: '200px'}} />
            </div>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Sales Contact Form</h3>
         </div>
        </div>
      </div>
      {/* Right pane */}
    </div>
  )
}

export default SalesLeadPage
