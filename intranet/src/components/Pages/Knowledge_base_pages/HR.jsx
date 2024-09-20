import React from 'react';
import '../../../Styles/services.css';
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
            <div className="hover-container" style={listItemStyle} onClick={() =>  openInNewWindow('/aboutSlic')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">About SLIC</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/EMPLOYEE_HAND_BOOK_Eversion.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Employee Handbook</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/Benifits_of_ETF.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Benefits of ETF</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/Principles_of_Life.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Principles of Life Insurance</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() =>  openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/IC33_English_Woorkbook.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
              <span className="hover-text">Questions on Life Insurance</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() =>  openInNewWindow('http://172.24.60.60/e-Learning/learning.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
              <span className="hover-text">E-Learning</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() =>  openInNewWindow('http://172.24.60.66/b-net-new/hr-training/hr-training.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
              <span className="hover-text">HR Training</span>
            </div>
          </div>

          {/* CHAWS Section */}
          <div style={sectionStyle}>
            <div style={titleStyle}>CHAWS</div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/CHAWS/Enrolment_to_CHAWS.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">CHAWS - Enrolment Guide</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/CHAWS/Approving_in_CHAWS.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">CHAWS - Approving Guide</span>
            </div>
          </div>
          {/* End CHAWS Section */}

          {/* CHAWS Section */}
          <div style={sectionStyle}>
            <div style={titleStyle}>Recruitment</div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HR_Recruitment/PRF(Amend).pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">PRF(Amend)</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HR_Recruitment/ProcessFlowChart.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Process Flow Chart</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HR_Recruitment/QualificationMatrix.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Qualification Matrix</span>
            </div>
          </div>
          {/* End CHAWS Section */}

          {/* CHAWS Section */}
          <div style={sectionStyle}>
            <div style={titleStyle}>Training and Development</div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HRTandD/Application(2).pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Application</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HRTandD/DIP_APPLICATION(1).pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">DIP APPLICATION</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HRTandD/IFC_Application(1).pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">IFC Application</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/HR/HRTandD/SLIIMembershipApplicationForm.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLII Membership Application</span>
            </div>
            
          </div>
          {/* End CHAWS Section */}
          
        </div>
      </div>
    </div>
  );
};

export default HR;
