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
        {/* Proposal Forms Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Life Proposal Form (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/LifeProposalForm')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Life Proposal Form (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/LifeProposalForm')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Life Proposal Form BOC (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Life Proposal Form BOC (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Freedom Proposal Form (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Freedom Proposal Form (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">DTA Proposal Form (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">DTA Proposal Form (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">DTA Proposal Form BOC (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">DTA Proposal Form BOC (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Yasas Proposal Form (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Yasas Proposal Form (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">School Fee Protector Proposal Form (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">School Fee Protector Proposal Form (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Proposal Form - Forces</span>
                </div>
              </div>
            </div>
          </div>
        );
        {/* Proposal Forms Section */ }
      case '2':
        {/* Policy Schedules Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/first_schedule')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">First Schedule</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('http://172.24.60.66/corporate-values/')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Second Schedule</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('http://172.24.60.89/aml/')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Third Schedule</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Fourth Schedule - Table 29</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Fifth Schedule - Table 45</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Sixth Schedule</span>
                </div>

              </div>
            </div>
          </div>
        );
        {/* Policy Schedules Section */ }
      case '3':
        {/* Policy Books Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Policy Book</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Policy Book - Table 28</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Policy Book - DTA</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Policy Book - Yasas</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Policy Book - Swarna Dhaja</span>
                </div>

              </div>
            </div>
          </div>
        );
        {/* Policy Books Section */ }

      case '4':
        {/* Letters and General Forms (To customer) Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Inform the Declining of Proposal</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Declined main Life or Spouse </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Deduct the Premium from Salary - Army Personals </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Inform to Attend to a Particular Medical Laboratory/Hospital-Paid by company/ customer</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Acknowledgement of not Available of Refund-(Sinhala/English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Refunding</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Affidavit for name change</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Regarding the Re-validate of Cheque</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Acknowledgement of Postponing the Proposal-(English) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Consent Letter-Form no 1022 (Sinhala/English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span>Queries Regarding Occupation (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Queries Regarding Occupation (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Agent Confidential Report (Sinhala)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Agent Confidential Report (English)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Backing Sheet</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span>Inclusion of Arogya/CIC covers to Children</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Letter of Acceptance</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Proposal Register</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">File Delivery Slip</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Financial Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                  <span className="hover-text">Civil Aviation Questionnaire(1337)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Residence and Travel Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Sport ( Motor cycle) Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Sport ( Martial Art Questionnnaire )</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Sport ( Boxing ) Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Aviation Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Diving Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Reminder Letter for Life proposal-Refund (with deposit)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Reminder Letter for Life proposal-Refund (without deposit)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Reminder Letter for Life proposal-Adjustment</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Consent Letter for paying premium</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Acceptance form of the including health riders for not completed 03 months of aged children</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Consent for Exclusion of Security forces Personnel in Life Assurance (DTA)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Policy Acknowledgement Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Deposit Request Form (Form No. 320)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Merchant Marine Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Regional Manager’s Report</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                  <span className="hover-text">Cover Request Form for SLI Comprehensive D+ Plan</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Policy Document Request Form</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Confirmation of Residential Address</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Assignment form for Valuble Consideration (Form no. 1624)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Consent Letter of Foreign Citizenship</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Covid-19 Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Life Proposal Check List</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Branch Memo for DTA proposal</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Consent Letter for Forces  </span>
                </div>
              </div>
            </div>
          </div>
        );
        {/*Letters and General Forms (To customer) Section */ }
      case '5':
        {/* Endorsements Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">No: 01- For Forces (E)(S)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Ammended Endorsement Clause no: 24 a - For Risky Occupations  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">No:01 - For DTA ( Decreasing Term Assurance) Policies</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">No:01 - For DTA ( Decreasing Term Assurance) Policies</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">In the event two policies are issued to cover a single risk</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">CIC Letter for Below 1 year Child</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Foreign Citizenship Endorsement</span>
                </div>

              </div>
            </div>
          </div>
        );
        {/* Endorsements Section */ }
      case '6':
        {/* Medical Forms & Questionnaire Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Medical Examiner's Report</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Arthrities Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Migraine Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Report of special blood pressure </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Back Disorders Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Chest Pain Questionnaire </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Eye examination report </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Dwarfism Questionnaire </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">CIC health questionnaire for child </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Epilepsy Questionnaire by Attending Physician</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Epilepsy Questionnaire (Applicant) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Health Questionnaire (Sinhala) (Form No. 7347) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Health Questionnaire (English) (Form No. 7347) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Vericose Veins Questionnaire (1199)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Hernia Questionnaire  ( 1316)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Goitre ( with operation) Questionnaire (1248)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Goitre (Without operation) Questionnaire(1249) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Questionnaire for Central Nervous System ( Complete by the Medical Examiner)(1232) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Questionnaire for History of Operation - Gastric or Duodenal Ulcer (1243) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Questionnaire for Personal History of Gall - Bladder Disease  ( 1245)</span>
                </div>
               
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Diabetic Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Poliomyelitis Questionnaire (1051)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => navigate('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Examination of Blood ( 1304-A) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Juvenile Medical Examination Report</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Hypertension Questionnaire ( by attending Physician) (1052) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Hypertension Questionnaire (Applicant)  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Report of Intravenous Pyelography (1237) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text"> Report of Cholecystography Oral Method (1238 )  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Questionnaire of Personal History of Kidney Disease, Colic or Stone etc.(1260)  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Piles Questionnaire (1320)  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Report on Teleroentgenogram with Heart and Actric Measurement (1229 ) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Report of Full Routine Examination of Urine  (1230) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Forms for Epythrocyte Sedimentation Rate (1304 B)  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Report on X-Ray of Chest  (3319) </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Questionnaire of Gastric Disease Supplementary Statement  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Special Heart Report Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Medical Questionnaire for Stress, Depression etc</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Mental and Nervous Disorder Questionnaire</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Nervous Disorder Questionnaire (Applicant)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Report of Electrocardiography Examination</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Medical Underwriting Record Sheet</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Laboratory Confirmation Letter </span>
                </div>
              </div>
            </div>
          </div>
        );
        {/* Medical Forms & Questionnaire Section */ }
      case '7':
        {/* Documents & Letters to Other Institutions Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Letter to Bank Related to Declining the Proposal in DTA Policies  </span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Form that Send to Reinsurance (Munich & Swiss)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Terms of Acceptance for MSPS/ESPS/CPPS/Other Funds</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Terms of Acceptance for MSPS/ESPS/CPPS/Other Funds (Table 45)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Authority Letter for MSPS</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Assignment Letter for MSPS</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Authority Letter for Other Funds</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Assignment Letter for Other Funds</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Authority Letter & Assignment Letter for ESPS</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">ESPS (Form No. 1361)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">ESPS (Form No. 1362)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">ESPS (Form No. 1366)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">ESPS (Form No. 1367)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Authority Letter & Assignment Letter for CPPS</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1361/A)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1362/A)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1363)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1364)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1365)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1366)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">CPPS (Form No. 1367)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span className="hover-text">Common Standing Order Mandate for Life Insurance Policies</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Standing Order Inform Letter to Bank</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Reminder Letter for DTA proposal-Refund(with deposit)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Reminder Letter for DTA proposal-Refund(without deposit)</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Reminder Letter for DTA proposal-Adjustment</span>
                </div>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                  <span  className="hover-text">Loan Sanction Letter</span>
                </div>
              </div>
            </div>
          </div>
        );
        {/* Documents & Letters to Other Institutions Section */ }
      case '8':
        {/* General Forms to the Policyholder Section */ }
        return (
          <div style={containerStyle}>
            <div style={rightStyle}>
              <div style={listContainer}>
                <div className="hover-container"style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon"/>
                  <span className="hover-text">Form Regarding Occupation Details (12C)  </span>
                </div>
              </div>
            </div>
          </div>
        );
        {/* General Forms to the Policyholder Section */ }
      default:
        return <div>Select a department to see content here.</div>;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Upper Horizontal Section */}
      <div style={topStyle}>
        <div style={buttonContainerStyle}>
          <button style={getButtonStyle('1')} onClick={() => setSelectedDept('1')}>Proposal Forms</button>
          <button style={getButtonStyle('2')} onClick={() => setSelectedDept('2')}>Policy Schedules</button>
          <button style={getButtonStyle('3')} onClick={() => setSelectedDept('3')}>Policy Books</button>
          <button style={getButtonStyle('4')} onClick={() => setSelectedDept('4')}>Letters and General Forms (To Customer)</button>
          <button style={getButtonStyle('5')} onClick={() => setSelectedDept('5')}>Endorsements</button>
          <button style={getButtonStyle('6')} onClick={() => setSelectedDept('6')}>Medical Forms & Questionnaire</button>
          <button style={getButtonStyle('7')} onClick={() => setSelectedDept('7')}>Documents & Letters to Other Institutions (To Bank & Funds)</button>
          <button style={getButtonStyle('8')} onClick={() => setSelectedDept('8')}>General Forms to the Policyholder</button>
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