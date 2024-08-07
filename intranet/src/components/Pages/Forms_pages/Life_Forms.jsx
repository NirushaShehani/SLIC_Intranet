import React, { useState } from 'react';
import DrawerMenu from '../../Sub_Components/DrawerMenu';
import Procurement from '../Services_Pages/Procurement';
import ICT from '../Services_Pages/ICT';
import Life from '../Services_Pages/Life';
import HR from '../Services_Pages/HR';
import Finance from '../Services_Pages/Finance';
import Sales from '../Services_Pages/Sales';
import Transport from '../Services_Pages/Transport';
import Life_Contact from '../Services_Pages/Life_Contact_Center';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../Styles/services.css';
// hr tag styles
import '../../../Styles/serviceshrtag.css';

const Life_Forms = () => {
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

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    margin: '10px 0',
    borderBottom: '1px solid #e0e0e0',
    width: 'calc(50% - 10px)',  // Adjusting the width to fit two columns with space in between
    boxSizing: 'border-box'
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#31769F',
  };

  const handleDownload = (url) => {
    if (window.confirm('Do you want to download this file?')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      link.click();
    }
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
            <div style={ContactList}>Life Forms</div>
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
      <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                  <span>Jana Rekuma Death Claim Form</span>
                </div>
                <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                  <span>Jana Rekuma Hospitalization Claim Form</span>
                </div>
      </div>
    </div>
  );
};

export default Life_Forms;
