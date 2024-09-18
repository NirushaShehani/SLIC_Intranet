import React, { useState } from "react";
import "../../../../Styles/services.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
// hr tag styles
import "../../../../Styles/serviceshrtag.css";

const HR_Policies = () => {
  const [expandedforms, setexpandedforms] = useState(false);

  const handleDownload = (url) => {
    if (window.confirm("Do you want to download this file?")) {
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop();
      link.click();
    }
  };

  const toggleExpandforms = () => {
    setexpandedforms(!expandedforms);
  };

  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navigate = useNavigate();

  // Styles
  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    overflow: "hidden",
  };

  const rightStyle = {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowY: "auto", // This will enable vertical scrolling
  };

  const listContainer = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px",
    margin: "10px 0",
    borderBottom: "1px solid #e0e0e0",
    width: "calc(50% - 10px)", // Adjusting the width to fit two columns with space in between
    boxSizing: "border-box",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#31769F",
  };

  const dotStyle = {
    marginRight: "10px",
    marginLeft: "20px", // Add left margin for additional forms
    fontSize: "12px", // Smaller dot size
  };

  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div className="home-container">
          {/* HR Policies */}
          <div className="hrContainer"></div>
          <div style={listContainer}>
            {/* Regular HR Policy Items */}
            {/* Example */}
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Approved_Courses_of_Study_new_eddition.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Approved Professional Courses</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Code_of_Business_Conduct.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Code of Business Conduct & Ethics
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Corporate_Email_Policy_%20SLIC.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Corporate E-Mail Policy</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Disciplinary_Policy.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Desciplinary Policy</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Dress_Code_Policy_English.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Dress Code Policy - English</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Dress_Code_Policy_%20Sinhala.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Dress Code Policy - Sinhala</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Grievance_Handling_Policy_English.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Grievance Handling - English</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Gravences_Policy_sinhala.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Grievance Handling - Sinhala</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/HR_Manual_English.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">HR Policy Manual (English)</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/HR_policy_manual_Sinhala.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">HR Policy Manual (Sinhala) </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Prof_Dev_Scheme.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Professional Development Reimbursement Scheme
              </span>
            </div>

            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Vehicle_Loan_Policy_27_05_2020.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Vehicle Loan Policy</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/WB_PolicyEnglish.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Whistle Blowing Policy (English){" "}
              </span>
            </div>

            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                openInNewWindow(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/WB_PolicySinhala.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Whistle Blowing Policy (Sinhala)
              </span>
            </div>

            {/* Expandable forms Section */}
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={toggleExpandforms}
            >
              <FontAwesomeIcon
                icon={expandedforms ? faChevronUp : faChevronDown}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Performance Management Policy</span>
            </div>

            {/* Conditionally render extra forms if expandedforms is true */}
            {expandedforms && (
              <>
                <div
                  className="hover-container"
                  style={{ ...listItemStyle, width: "100%" }} // Set to full width
                  onClick={() =>
                    handleDownload("http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Policy%20managment/Annexure1_Charter_Technical_Committee_on_KPIs&PA.pdf")
                  }
                >
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Charter for Technical Committee on Recommendations for setting KPIS and 
                  PA</span>
                </div>
                <div
                  className="hover-container"
                  style={{ ...listItemStyle, width: "100%" }} // Set to full width
                  onClick={() =>
                    handleDownload("http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Policy%20managment/Annexure2_KPI_Form_2024.pdf")
                  }
                >
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">KPIs setting form– 2024</span>
                </div>
                <div
                  className="hover-container"
                  style={{ ...listItemStyle, width: "100%" }} // Set to full width
                  onClick={() =>
                    handleDownload("http://172.24.90.80:10157/Documents//Policies_Services_Forms/Policies/HR/Policy%20managment/Annexure3_Performance_Evaluation_Form.pdf")
                  }
                >
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Performance appraisal and development review</span>
                </div>
                <div
                  className="hover-container"
                  style={{ ...listItemStyle, width: "100%" }} // Set to full width
                  onClick={() =>
                    handleDownload("http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies/HR/Policy%20managment/Annexure4%20EvaluationFormProbation.pdf")
                  }
                >
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Performance evaluation form – probation</span>
                </div>
                <div
                  className="hover-container"
                  style={{ ...listItemStyle, width: "100%" }} // Set to full width
                  onClick={() =>
                    handleDownload("http://172.24.90.80:10157/Documents/Policies_Services_Forms/Policies_Services_Forms/Policies/HR/Policy%20managment/Performance_Management_Policy_SLICLL%20.pdf")
                  }
                >
                  <span style={dotStyle}>•</span>
                  <span className="hover-text">Policy on performance management</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR_Policies;
