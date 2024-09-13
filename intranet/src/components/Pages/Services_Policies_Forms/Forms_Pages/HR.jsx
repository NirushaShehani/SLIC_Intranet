import React from "react";
import "../../../../Styles/services.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
// hr tag styles
import "../../../../Styles/serviceshrtag.css";

const HR_Forms = () => {
  const openInNewWindow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (url) => {
    if (window.confirm("Do you want to download this file?")) {
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop();
      link.click();
    }
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
  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div className="home-container">
          <div style={listContainer}>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/18_Month_Loan_Covering_Letter.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                18 Months Loan Covering Letter{" "}
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Distress_Loan_Form.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                18 Months Loan/One month Loan Application{" "}
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/SLIC_BOC_LOAN_APPLICATION_FORM.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">BOC Loan Application Form</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Booking_of_SLIC_Bus.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Booking of SLIC Bus</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Buddhist_Assocoation.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Buddhist Association Membership Form
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/CHAWS_Claim_Form.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">CHAWS Claim Form</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/SLIC_Circuit_Bungalows.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Circuit Bunglow Booking Information
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/ID_CARD_APPLICATION_FORM.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Company ID Request Form</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Death_Claim_Form.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Death Claim Form</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/DUTY_LEAVE_REQUEST_FORM.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Duty Leave Form</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/APPLICATION_FORM_ENGLISH.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Examination Expense Reimbursement Application
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/olicies_Services_Forms/Forms/HR/Gate_Pass%20Form.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Gate Pass Application</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Grievance_application_english.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Greivance Handling - English Application Form
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Grievance_application_Sinhala.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Grievance Handling - Sinhala Application Form
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Group_Term_Life_Assurance_Form_(GTLA).pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Group Term Life Assurance Form (GTLA)
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Gym_Application_&_Rules.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Gym Application</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Medical.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Medical Treatment Form</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/PROFESSIONAL_DEVELOPMENT_SCHEME_POST%20EXAM.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Reimbursment Application-Post Exam
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Professional_Development_Scheme_Pre%20exam.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Reimbursment Application-Pre Exam
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/employee_application_English.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Service Extension - Employee Application (English)
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Employee_Application_Sinhala.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Service Extension - Employee Application (Sinhala)
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/overseas_english.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Travel Overseas - Official</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Travel_Overseas_Private.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Travel Overseas - Private</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/VEHICLE_LOAN_APPLICATION_FORM.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Vehicle Loan - Application</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/VEHICLE_LOAN_GUARANTOR’S_STATEMENT.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Vehicle Loan - Guarantor''s Statement
              </span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() => handleDownload("/pdfs/ISO-Pdf/1.pdf")}
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">Visting Card Application</span>
            </div>
            <div
              className="hover-container"
              style={listItemStyle}
              onClick={() =>
                handleDownload(
                  "http://172.24.90.80:10157/Documents/Policies_Services_Forms/Forms/HR/Request_Form.pdf"
                )
              }
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                style={iconStyle}
                className="hover-icon"
              />
              <span className="hover-text">
                Weddings and Funerals - Bus booking & Leave form
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR_Forms;
