import React from "react";
import "../../../../Styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
// hr tag styles
import "../../../../Styles/serviceshrtag.css";

const HR_Common = () => {
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
        marginRight: "10px",
        color: "#31769F",
      };
  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div style={sectionWrapperStyle}>
          {/* Membership Forms Section */}
          <div style={sectionStyle}>
            <div style={titleStyle}>Guides</div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Application for SLII membership</span>
            </div>
          </div>

          {/* Security Department Forms Section */}
          <div style={sectionStyle}>
            <div style={titleStyle}>Labour Law</div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>abc</span>
            </div>
          </div>
        </div>

        {/* Common Forms Section */}
        <div style={sectionWrapperStyle}>
          <div style={sectionStyle}>
            <div style={titleStyle}>Reading Materials</div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Complaint Lodging Application</span>
            </div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Change management for SW V3.1</span>
            </div>
          </div>
        </div>

        {/* Recruitment Section */}
        <div style={sectionWrapperStyle}>
          <div style={sectionStyle}>
            <div style={titleStyle}>Recruitment</div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Complaint Lodging Application</span>
            </div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Change management for SW V3.1</span>
            </div>
          </div>
        </div>

         {/* T and D Section */}
         <div style={sectionWrapperStyle}>
          <div style={sectionStyle}>
            <div style={titleStyle}>T&D</div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Complaint Lodging Application</span>
            </div>
            <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Change management for SW V3.1</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HR_Common
