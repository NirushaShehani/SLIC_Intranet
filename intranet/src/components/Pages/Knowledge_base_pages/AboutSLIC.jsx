/*import React from 'react';

const AboutSLIC = () => {
  const topics = [
    "Introduction",
    "Branch List",
    "Strengths of the organization",
    "Day to day business activities of Sri Lanka Insurance",
    "Company Vision & Mission Statements"
  ];

  return (
    <div style={{ padding: '30px', backgroundColor: '#FFFFFF', width: '500px', borderRadius: '10px' }}>
      <h2 style={{ marginBottom: '15px', fontSize: '24px' }}>
        ABOUT SLIC <span style={{ fontSize: '18px', color: '#888' }}>({topics.length} Articles)</span>
      </h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {topics.map((topic, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', fontSize: '18px', paddingBottom: '10px', borderBottom: '1px solid #e0e0e0' }}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutSLIC;*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../Styles/serviceshrtag.css';

const HR = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

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
          <div style={{ padding: '30px', backgroundColor: '#FFFFFF', width: '500px', borderRadius: '10px' }}>
      <h2 style={{ marginBottom: '15px', fontSize: '24px' }}>
        ABOUT SLIC <span style={{ fontSize: '18px', color: '#888' }}>( 5 Articles)</span>
      </h2>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Introduction</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Branch List</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Strengths of the organization</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Day to day business activities of Sri Lanka Insurance</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
              <span className="hover-text">Company Vision & Mission Statements</span>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default HR;
