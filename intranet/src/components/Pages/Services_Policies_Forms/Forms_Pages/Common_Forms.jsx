import React, { useState } from "react";
import "../../../../Styles/services.css";

const Common_Forms = () => {
  const [expandedForms, setExpandedForms] = useState(false);
  const [expandedSports, setExpandedSports] = useState(false);

  const handleDownload = (url) => {
    if (window.confirm('Do you want to download this file?')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      link.click();
    }
  };

  const toggleExpandForms = () => {
    setExpandedForms(!expandedForms);
  };

  const toggleExpandSports = () => {
    setExpandedSports(!expandedSports);
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
  };

  const columnStyle = {
    flex: "1 1 45%", // Two columns, each taking up 45% of the width
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: "10px", // Space between columns
    padding: "10px",
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

  const dotStyle = {
    marginRight: "10px",
    marginLeft: "20px", // Add left margin for additional forms
    fontSize: "12px", // Smaller dot size
  };

  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        {/* Common Forms Section */}
        <div style={sectionWrapperStyle}>
          {/* Left Column */}
          <div style={columnStyle}>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/Complaint_Lodging_Application.pdf')}>
              <span className="hover-text">Complaint Lodging Application</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/Change_management_for_SW_V3.1.pdf')}>
              <span className="hover-text">Change Request</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/IAAF.pdf')}>
              <span className="hover-text">Advisor Application</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/Door_Access_Approval_Form.pdf')}>
              <span className="hover-text">Door Access</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/Certify_-Id_-No.pdf')}>
              <span className="hover-text">NIC Number</span>
            </div>

            {/* Expandable Forms Section */}
            <div className="hover-container" style={listItemStyle} onClick={toggleExpandForms}>
              <span className="hover-text">Additional Forms</span>
            </div>

            {/* Conditionally render extra forms if expandedForms is true */}
            {expandedForms && (
              <div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-1.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 1</span>
                </div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-2.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 2</span>
                </div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-2.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 2</span>
                </div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-2.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 2</span>
                </div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-2.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 2</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div style={columnStyle}>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://slic.intranet.com/Thrift_society/thrift-society.html')}>
              <span className="hover-text">Thrift Society App</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/subapathum_application.pdf')}>
              <span className="hover-text">Suba Pethum</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.60.66/b-net-new/suraksha/suraksha.html')}>
              <span className="hover-text">Suraksha</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/Common/Pinnacle%20Form.pdf')}>
              <span className="hover-text">Pinnacle</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <span className="hover-text">Combank Credit Card</span>
            </div>

            {/* Expandable Sports Section */}
            <div className="hover-container" style={listItemStyle} onClick={toggleExpandSports}>
              <span className="hover-text">Sports</span>
            </div>

            {/* Conditionally render extra sports forms if expandedSports is true */}
            {expandedSports && (
              <div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-1.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 1</span>
                </div>
                <div className="hover-container" style={listItemStyle} onClick={() => handleDownload('http://example.com/additional-form-2.pdf')}>
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Additional Form 2</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common_Forms;
