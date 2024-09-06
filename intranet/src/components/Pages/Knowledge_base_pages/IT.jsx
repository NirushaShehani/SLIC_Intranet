import React from 'react'
import '../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../Styles/serviceshrtag.css';

const IT = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  const handleDownload = (url) => {
    if (window.confirm('Do you want to download this file?')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      link.click();
    }
  };

  
  // Styles
  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  };
  const rightStyle = {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: "20px",
    boxSizing: "border-box",
    overflowY: "auto", // Enable vertical scrolling
  };

  const sectionWrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const sectionStyle = {
    flex: "1 1 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: "20px", // Space between sections
    backgroundColor: "#FFFFFF",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    borderBottom: "1px solid #e0e0e0",
    width: "100%", // Full width for title underline
    paddingBottom: "5px", // Space between title and underline
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px 0",
    borderBottom: "1px solid #e0e0e0",
    width: "100%", // Full width for the list item
    boxSizing: "border-box",
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#31769F',
  };

  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div style={sectionWrapperStyle}>
        <div style={sectionStyle}>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('file:///C:/SLIC/Intranet%202/folder%20structure/Knowledge_Base/ICT/Guide-Lines-for-using-training-PC-New.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Guide Lines for using training PC</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/b-net-new/Company%20Profile%20-%20SLIC.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
              <span className="hover-text">Reset Password</span>
            </div>
        </div>

   

        </div>
      </div>
    </div>
  )
}

export default IT;
