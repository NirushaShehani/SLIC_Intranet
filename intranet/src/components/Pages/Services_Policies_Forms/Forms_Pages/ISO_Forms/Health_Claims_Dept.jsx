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
         {/* Arogya Claim Forms*/}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                    
                    
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Arogya Claim Form </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Doctors declaration form for hospitalization benifit</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Arogya working sheet</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Voucher </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Cheque/Slip Covering Letter</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Requirement Calling Letter</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Health Product Claim Form</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Doctors declaration form for hospitalization benefit</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Acknowledgement letter</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Health product working sheet</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Voucher</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                    <span className="hover-text">Cheque/Slip Covering Letter</span>
                    </div>
                </div>
            </div>
        </div>
        );
     {/*Arogya Claim Forms  */}
     
    
      default:
        return <div>Select a department to see content here.</div>;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Upper Horizontal Section */}
      <div style={topStyle}>
        <div style={buttonContainerStyle}>
          <button style={getButtonStyle('1')} onClick={() => setSelectedDept('1')}>Arogya Claim Forms</button>
         
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