import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../../../Styles/serviceshrtag.css';
const Services = () => {
  const [selectedDept, setSelectedDept] = useState('');
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  // Styles
  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  };

  const topStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    overflowY: 'auto',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  };

  const bottomStyle = {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto'
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

  const listContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
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

  const paragraph = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#585858',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#31769F',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    minWidth: '150px', // Ensure buttons are wide enough for longer names
  };

  const getButtonStyle = (dept) => {
    return {
      ...buttonStyle,
      backgroundColor: selectedDept === dept ? '#0056b3' : '#31769F',
    };
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
      case '1':
         {/* Maturity Claim Forms */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                    
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Discharge Form - Maturity </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Important Notice Format - Maturity</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Payment Memo - Maturity </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Payment Voucher - Maturity</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">New Business Letter - Maturity </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Affidavit for Name difference</span>
                    </div>  
                </div>
            </div>
        </div>
        );
     {/*Maturity Claim Forms  */}
     
     case '2':
        {/*  COMMON FORMS */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Affidavit for Loss Policy </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Specimen Signature Form </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Certificate of Residence-7110 </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Indeminity bond  </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">death loss policy affidavit </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">power of attorny Affidavit </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Confirmation letter for power of attorney  </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Affidavit loss of policy(power of attorney holder) </span>
                    </div>
                    </div>
            </div>
        </div>
        );
        {/* COMMON FORMS */}

        case '3':
        {/* Stage Claim Forms */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 3S  </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Discharge Form - 3S  </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Important Notice Format - 3S</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Payment Memo - 3S</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Payment Voucher - 3S </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">New Business Letter - 3S </span>
                    </div>
                    </div>
            </div>
        </div>
        );
        {/* Stage Claim Forms*/}

        case '4':
        {/*Yashtiya Claim forms ISO numbers*/}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 1st year annuities  </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 2nd year and above annuities   </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Discharge Form - YC </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Important Notice Format - YC </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Agent Letter </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Certification of Residence Form (local) </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Certification of Residence Form (overseas)</span>
                    </div>
                    </div>
            </div>
        </div>
        );
        {/* Yashtiya Claim forms ISO numbers */}

        case '5':
        {/*  Freedom Claim forms ISO numbers */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 1st year annuity   </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 2nd year annuity </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Discharge Form - FD </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Important Notice Format - FD</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Agent Letter</span>
                    </div>
                    </div>
            </div>
        </div>
        );
        {/*Freedom Claim forms ISO numbers*/}

        case '6':
        {/*  Mindada Claim forms ISO numbers*/}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 1st year annuity   </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter - 2nd year annuity   </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Discharge Form - MD</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Important Notice Format - MD </span>
                    </div>
                    </div>
            </div>
        </div>
        );
        {/* Mindada Claim forms ISO numbers */}

        case '7':
        {/*  Swarna Jayanthi Claim forms ISO numbers */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Covering Letter </span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Discharge Form</span>
                    </div>
                    <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
                    <span className="hover-text">Important Notice Format </span>
                    </div>
                    
                    </div>
            </div>
        </div>
        );
        {/*Swarna Jayanthi Claim forms ISO numbers */}
       
      default:
        return <div>Select a department to see content here.</div>;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Upper Horizontal Section */}
      <div style={topStyle}>
        <div style={buttonContainerStyle}>
          <button style={getButtonStyle('1')} onClick={() => setSelectedDept('1')}>Maturity Claim Forms</button>
          <button style={getButtonStyle('2')} onClick={() => setSelectedDept('2')}>Common Forms</button>
          <button style={getButtonStyle('3')} onClick={() => setSelectedDept('3')}>Stage Claim Forms</button>
          <button style={getButtonStyle('4')} onClick={() => setSelectedDept('4')}>Yashtiya Claim forms ISO numbers</button>
          <button style={getButtonStyle('5')} onClick={() => setSelectedDept('5')}>Freedom Claim forms ISO numbers</button>
          <button style={getButtonStyle('6')} onClick={() => setSelectedDept('6')}>Mindada Claim forms ISO numbers</button>
          <button style={getButtonStyle('7')} onClick={() => setSelectedDept('7')}>Swarna Jayanthi Claim forms ISO numbers</button>
          
          
        </div>
      </div>
      {/* Lower Horizontal Section */}
      <div style={bottomStyle}>
        <div style={paragraph}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Services;