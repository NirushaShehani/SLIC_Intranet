import React from 'react'
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
const Services = () => {

  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};
  const navigate = useNavigate();

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const container = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
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
    
      const up2 = {
        flex: '0 0 15%',
        backgroundColor: '#F4F4F4',
        padding: '10px',
        marginLeft: '-20px',
        marginRight: '-20px',
        marginTop: '-20px',
        width: 'auto',
        height: 'auto',
      };
    
      const Down = {
        flex: '1',
        backgroundColor: '#FFFFFF',
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
              Services
            </div>
          </div>
          <div style={Down}>
              <div style={subtitle}>
              ADD NAMES TO YOUR PHONE BOOK
              </div>
              <div style={paragraph}>
              You can add the numbers you need most to your Personal Phone Book by clicking the link 
            "Add" next to the name in the SLIC phone directory. 
            Now your Personal Phone Book is ready to give your most needed numbers instantly.
              </div>
              <br/>
              <br/>
              <div style={subtitle}>
              LOCATE YOUR PHONE BOOK
              </div>
              <div style={paragraph}>
              If you are away from your own computer, by typing your Computer No. 
            (IP No.) you can still access your address book from any other computer.
              </div>
              
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
      <div className="home-container">
      <div className="grid-container">
        <button className="grid-item" onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>B-Life</button>
        <button className="grid-item" onClick={() => navigate('/b-mis')}>B-MIS</button>
        <button className="grid-item" onClick={() => navigate('/cashbook')}>Cashbook</button>
        <button className="grid-item" onClick={() => navigate('/b-commission')}>B-Commission</button>
        <button className="grid-item" onClick={() => navigate('/b-advisor')}>B-Advisor</button>
        <button className="grid-item highlighted" onClick={() => navigate('/hris')}>HRIS</button>
        <button className="grid-item highlighted" onClick={() => navigate('/hris')}>HRIS</button>
      </div>
      <hr />
      <div className="grid-container">
        <button className="grid-item" onClick={() => navigate('/documents')}>Documents</button>
        <button className="grid-item" onClick={() => navigate('/common-forms')}>Common Forms</button>
        <button className="grid-item" onClick={() => navigate('/ict-forms')}>ICT Forms</button>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Services

