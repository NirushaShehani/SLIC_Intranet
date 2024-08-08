import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import Procurement from '../Pages/Services_Pages/Procurement';
import ICT from '../Pages/Services_Pages/ICT';
import Life from '../Pages/Services_Pages/Life';
import HR from '../Pages/Services_Pages/HR';
import Finance from '../Pages/Services_Pages/Finance';
import Sales from '../Pages/Services_Pages/Sales';
import Transport from '../Pages/Services_Pages/Transport';
import Life_Contact from '../Pages/Services_Pages/Life_Contact_Center';

import '../../Styles/services.css';
// hr tag styles
import '../../Styles/serviceshrtag.css';

const Services = () => {
  const [selectedDept, setSelectedDept] = useState(''); // State to track the selected department

  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  // Styles
  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden'
  };

  const leftStyle = {
    flex: '0 0 300px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    overflowY: 'auto', // Enable scrolling if content is too long
  };

  const verticalLineStyle = {
    width: '3px',
    backgroundColor: '#646464',
  };

  const rightStyle = {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto' // This will enable vertical scrolling
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

  const Down = {
    flex: '1',
    backgroundColor: '#FFFFFF',
    padding: '10px',
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

  const Depttitle = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '17px',
    fontStyle: 'normal',
    color: '#161616',
    margin: '20px 0',
    textAlign: 'center', // Center the title
    fontWeight: 'bold', // Make the title bold
  };

  const paragraph = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#585858',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#31769F',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
  };

  const renderContent = () => {
    switch (selectedDept) {
      case 'Procurement':
        return <Procurement />;
      case 'ICT':
        return <ICT />;
      case 'Life':
        return <Life />;
      case 'HR':
        return <HR />;
      case 'Finance':
        return <Finance />;
      case 'Sales':
        return <Sales />;
      case 'Transport':
        return <Transport />;
      case 'Life_Contact':
        return <Life_Contact />;
      default:
        return ;
    }
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={container}>
          {/* Upper Left Section */}
          <div style={up}>
            <DrawerMenu />
            <div style={ContactList}>Services</div>
          </div>
          {/* Lower Left Section */}
          <div style={Down}>
            <div style={subtitle}>THIS IS YOUR SERVICES PAGE</div>
            <div style={paragraph}>
              In here You can select the department types you want and go to the Slic Services provided by clicking the provided buttons.
            </div>
            {/* Department type section */}
            <hr className="styledHr" />
            <div style={Depttitle}>
              
            </div>
            {/* Button section */}
            <button style={buttonStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>Complaint Management Center</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('Procurement')}>Procurement</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('ICT')}>ICT</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('Life')}>Life</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('HR')}>HR</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('Finance')}>Finance</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('Sales')}>Sales</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('Transport')}>Transport</button>
            <button style={buttonStyle} onClick={() => setSelectedDept('Life_Contact')}>Life Contact Center</button>
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Services;
