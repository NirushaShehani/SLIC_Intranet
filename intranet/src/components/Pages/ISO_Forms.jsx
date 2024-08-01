import React, { useState } from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import Death_Claims from '../Pages/ISO_Forms/Death_Claims_Dept';
import General_Forms from '../Pages/ISO_Forms/General_Forms';
import Health_Claims from '../Pages/ISO_Forms/Health_Claims_Dept';
import Life_Group_Business from '../Pages/ISO_Forms/Life_Group_Business';
import Life_Group_payment from '../Pages/ISO_Forms/Life_Group_Payment';
import Maturity_Claims from '../Pages/ISO_Forms/Maturity_Claims_Dept';
import PHS from '../Pages/ISO_Forms/PHS';
import Underwriting from '../Pages/ISO_Forms/Underwriting';


import '../../Styles/services.css';
// hr tag styles
import '../../Styles/serviceshrtag.css';
const ISO_Forms = () => {
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
      case 'Death_Claims':
        return <Death_Claims/>;
      case 'General_Forms':
        return <General_Forms/>;
      case 'Health_Claims':
        return <Health_Claims/>;
      case 'Life_Group_Business':
        return <Life_Group_Business/>;
      case 'Life_Group_payment':
        return <Life_Group_payment/>;
      case 'Maturity_Claims':
        return <Maturity_Claims/>;
      case 'PHS':
        return <PHS/>;
      case 'Underwriting':
        return <Underwriting/>;
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
          <div style={ContactList}>ISO-Forms</div>
        </div>
        {/* Lower Left Section */}
        <div style={Down}>
          <div style={subtitle}>THIS IS YOUR ISO-Forms PAGE</div>
          <div style={paragraph}>
            In here You can select the department types you want and go to the Slic Services provided by clicking the provided buttons.
          </div>
          {/* Department type section */}
          <hr className="styledHr" />
          <div style={Depttitle}>
            
          </div>
          {/* Button section */}
          <button style={buttonStyle} onClick={() => setSelectedDept('Death_Claims')}>Death Claims</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('General_Forms')}>General Forms</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('Health_Claims')}>Health Claims</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('Life_Group_Business')}>Life Group Business</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('Life_Group_payment')}>Life Group payment</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('Maturity_Claims')}>Maturity Claims</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('PHS')}>PHS</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('Underwriting')}>Underwriting</button>
        </div>
      </div>
    </div>
    <div style={verticalLineStyle}></div>
    <div style={rightStyle}>
      {renderContent()}
    </div>
  </div>
  )
}

export default ISO_Forms
