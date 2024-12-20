import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../../../Styles/serviceshrtag.css';
import { Find_And_Replace} from "../../../../../Services/ApiConfig";
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
        {/* Disability Claim Forms  */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>

                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DisabilityClaimForms/LI-DI-FO-SE-01.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">TPD Claim Form - Accident </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DisabilityClaimForms/LI-DI-FO-SE-02.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Permanent Partial Disability Claim Form  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Partial Disability Admitted Covering Letter </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">PPDB Discharge Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">TPDB Admitted Covering Letter</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">TPDB Discharge Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Minimuthu Admitted Covering Letter </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Minimuthu Discharge Form </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DisabilityClaimForms/LI-DI-FO-SE-09.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Important Notice  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DisabilityClaimForms/LI-DI-FO-E-10.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Medical Report - TPD  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Disability Benefits Covering Letter  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DisabilityClaimForms/LI-DI-FO-E-12.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Medical Certificate - PPDB </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DisabilityClaimForms/LI-DI-FO-SE-13.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">TPD claim form - Sikness </span>
                </div>


              </div>
            </div>
          </div>
        );
        {/* Disability Claim Forms  */ }

      case '2':
        {/*  Death Claim Forms */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Death Detail Summary Report </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-02.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Death Claim Intimation Form </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-02.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Claimant's Statement(English) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.S.03.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Claimant's Statement(Sinhala) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.E.04.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Certificate to Hospital Treatment </span>
                </div>

                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.SE.05.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Covering Letter to Insured (Document calling memo) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Payment Memo  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-07.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Letter of Admitted </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-08.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Discharge Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-09.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Important Notice </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-10.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Discharge Form - Minimuthu(English) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-S-10.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Discharge Form - Minimuthu(Sinhala) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-11.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Certificate of Residence  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-12.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Indemnity Form B - Bond for Loss Policy </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-13.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Affidavit Form A </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-14.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Refund Minimuthu Death of Child (Discharge Form-English) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-S-14.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Refund Minimuthu Death of Child (Discharge Form-Sinhala) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-15.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Refund of Premium Discharge </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-16.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Yashtiya Policy Discharge Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-17.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Bond for Lost Policy (Companies) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.SE.18.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Affidavit - Legal </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.SE.19.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Forces Agreement and covering letter</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Payment Breakup  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.SE.21.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Covering Letter to Leave Particulars </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.SE.22.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Leave Particulars Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.E.23.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Employee Service Certification- English</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI.DC.FO.S.23.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Employee Service Certification - Sinhala</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-24.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Assignee Statement -  English</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-S-24.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Assignee Statement - Sinhala</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-25.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Letter of Indemnity</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-26.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Lost of Assignment  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-27.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Loss Policy Affidavit </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-28.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Signature Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-29.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">ADB Discharge</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-SE-30.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">DTA Discharge</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-E-31.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Assignee Statment Table22 Form -English</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/DeathClaimForms/LI-DC-FO-S-31.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Assignee Statment Table22 Form - Sinhala</span>
                </div>
                
              </div>
            </div>
          </div>
        );
        {/* Death Claim Forms */ }

      case '3':
        {/*  Group Claim Forms  */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() =>  handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/GroupClaimForms/LIGRFOE01.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Medical Report- Disability</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() =>  handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/GroupClaimForms/LIGRFOE02.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Claimant Statement - Group Term   </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() =>  handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/GroupClaimForms/LIGRFOE03.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Claimant Statement- DTA</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() =>  handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/GroupClaimForms/LI-DC-FO-E-04.pdf`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Last Medical Attendant report </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() =>  handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/GroupClaimForms/LIGRFOE05.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Certificate of discharge</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload(`${Find_And_Replace}/Documents/Policies_Services_Forms/Forms/ISO/DeathClaimForms/GroupClaimForms/LIGRFOE06.doc`)}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span  className="hover-text">Important notice </span>
                </div>
              </div>
            </div>
          </div>
        );
        {/*  Group Claim Forms  */ }

      default:
        return <div>Select a department to see content here.</div>;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Upper Horizontal Section */}
      <div style={topStyle}>
        <div style={buttonContainerStyle}>
          <button style={getButtonStyle('1')} onClick={() => setSelectedDept('1')}>Disability Claim Forms</button>
          <button style={getButtonStyle('2')} onClick={() => setSelectedDept('2')}>Death Claim Forms</button>
          <button style={getButtonStyle('3')} onClick={() => setSelectedDept('3')}>Group Claim Forms </button>

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