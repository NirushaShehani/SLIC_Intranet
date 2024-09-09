import React from 'react'
import '../../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../../Styles/serviceshrtag.css';

const HR_Forms = () => {
    const openInNewWindow = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
const handleDownload = (url) => {
        if (window.confirm('Do you want to download this file?')) {
          const link = document.createElement('a');
          link.href = url;
          link.download = url.split('/').pop();
          link.click();
        }
      };

      const navigate = useNavigate();
    
      // Styles
      const containerStyle = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden'
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
      return (
        <div style={containerStyle}>
          <div style={rightStyle}>
          <div style={listContainer}>
              <div className="hover-container" style={listContainer}>
              <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">18 Month Loan Covering Letter </span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">APPLICATION FORM - ENGLISH </span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">E-Mail Facility Access Request Form</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span>Internet Access Request Form New</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">Multifunction Printer Facility Request Form</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">Secure Intranet Access Request Form</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">Tsplus Form</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">User Account Application Form</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">User Backup Shared Folder Access Request Form</span>
        </div>
        <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
          <span className="hover-text">VPN Request Form</span>
        </div>
              </div>
    
              
    
    
            </div>
          </div>
        </div>
  )
}

export default HR_Forms
