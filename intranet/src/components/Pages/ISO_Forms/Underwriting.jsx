import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../Styles/serviceshrtag.css';
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
         {/* Proposal Forms Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                    <div style={listItemStyle} onClick={() => handleDownload('/pdfs/ISO-Pdf/1.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Life Proposal Form (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/LifeProposalForm')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Life Proposal Form (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/LifeProposalForm')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Life Proposal Form BOC (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Life Proposal Form BOC (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Freedom Proposal Form (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Freedom Proposal Form (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>DTA Proposal Form (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>DTA Proposal Form (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>DTA Proposal Form BOC (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>DTA Proposal Form BOC (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Proposal Form - Forces</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Yasas Proposal Form (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Yasas Proposal Form (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>School Fee Protector Proposal Form (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>School Fee Protector Proposal Form (English)</span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* Proposal Forms Section */}
      case '2':
        {/* Policy Schedules Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                    <div style={listItemStyle} onClick={() => handleDownload('http://172.24.60.66/b-net-new/Company%20Profile%20-%20SLIC.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Company Profile</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('http://172.24.60.66/corporate-values/')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Coporate Values</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('http://172.24.60.89/aml/')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>AML Module</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>About SLIC</span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* Policy Schedules Section */}
      case '3':
        {/* Policy Books Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>First Schedule</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Second Schedule</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Third Schedule</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Fourth Schedule - Table 29</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Fifth Schedule - Table 45</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Sixth Schedule</span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* Policy Books Section */}
      case '4':
        {/* Human Resources Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Book</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Book - Table 28 (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Book - DTA</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Book - Yasas</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Book - Swarna Dhaja</span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* Human Resources Section */}
      case '5':
        {/* Finance Letters and General Forms Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Inform the Declining of Proposal</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Declined main Life or Spouse </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Deduct the Premium from Salary - Army Personals </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Inform to Attend to a Particular Medical Laboratory/Hospital-Paid by company/ customer</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Acknowledgement of not Available of Refund-(Sinhala/English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Refunding</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Affidavit for name change</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Regarding the Re-validate of Cheque</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Acknowledgement of Postponing the Proposal-(English) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Consent Letter-Form no 1022 (Sinhala/English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Queries Regarding Occupation (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Queries Regarding Occupation (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Agent Confidential Report (Sinhala)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Agent Confidential Report (English)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Backing Sheet</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Inclusion of Arogya/CIC covers to Children</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Letter of Acceptance</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Proposal Register</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>File Delivery Slip</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Financial Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Civil Aviation Questionnaire(1337)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Residence and Travel Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Sport ( Motor cycle) Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Sport ( Martial Art Questionnnaire )</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Sport ( Boxing ) Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Aviation Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Diving Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Reminder Letter for Life proposal-Refund (with deposit)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Reminder Letter for Life proposal-Refund (without deposit)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Reminder Letter for Life proposal-Adjustment</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Consent Letter for paying premium</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Acceptance form of the including health riders for not completed 03 months of aged children</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Consent for Exclusion of Security forces Personnel in Life Assurance (DTA)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Acknowledgement Form</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Deposit Request Form (Form No. 320)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Merchant Marine Questionnaire</span>
                    </div><div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Regional Manager’s Report</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Cover Request Form for SLI Comprehensive D+ Plan</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Policy Document Request Form</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Confirmation of Residential Address</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Assignment form for Valuble Consideration (Form no. 1624)</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Consent Letter of Foreign Citizenship</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Covid-19 Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Life Proposal Check List</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Branch Memo for DTA proposal</span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* Finance Letters and General Forms Section */}
      case '6':
        {/* Endorsements Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>No: 01- For Forces (E)(S)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Ammended Endorsement Clause no: 24 a - For Risky Occupations  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>No:01 - For DTA ( Decreasing Term Assurance) Policies</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>No:01 - For DTA ( Decreasing Term Assurance) Policies</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>In the event two policies are issued to cover a single risk</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CIC Letter for Below 1 year Child</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Foreign Citizenship Endorsement</span>
                    </div>
                    
                </div>
            </div>
        </div>
        );
        {/* Endorsements Section */}
      case '7':
        {/* Medical Forms & Questionnaire Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Medical Examiner's Report</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Arthrities Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Migraine Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Report of special blood pressure </span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Back Disorders Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Chest Pain Questionnaire </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Eye examination report </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Dwarfism Questionnaire </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CIC health questionnaire for child </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Epilepsy Questionnaire by Attending Physician</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Epilepsy Questionnaire (Applicant) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Health Questionnaire (Sinhala) (Form No. 7347) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Health Questionnaire (English) (Form No. 7347) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Vericose Veins Questionnaire (1199)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Hernia Questionnaire  ( 1316)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Goitre ( with operation) Questionnaire (1248)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Goitre (Without operation) Questionnaire(1249) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Questionnaire for Central Nervous System ( Complete by the Medical Examiner)(1232) </span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Questionnaire for History of Operation - Gastric or Duodenal Ulcer (1243) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Questionnaire for Personal History of Gall - Bladder Disease  ( 1245)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Questionnaire for Personal History of Gall - Bladder Disease  ( 1245)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Diabetic Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Poliomyelitis Questionnaire (1051)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => navigate('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Examination of Blood ( 1304-A) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Juvenile Medical Examination Report</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Hypertension Questionnaire ( by attending Physician) (1052) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Hypertension Questionnaire (Applicant)  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Report of Intravenous Pyelography (1237) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span> Report of Cholecystography Oral Method (1238 )  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Questionnaire of Personal History of Kidney Disease, Colic or Stone etc.(1260)  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Piles Questionnaire (1320)  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Report on Teleroentgenogram with Heart and Actric Measurement (1229 ) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Report of Full Routine Examination of Urine  (1230) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Forms for Epythrocyte Sedimentation Rate (1304 B)  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Report on X-Ray of Chest  (3319) </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Questionnaire of Gastric Disease Supplementary Statement  </span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Special Heart Report Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Medical Questionnaire for Stress, Depression etc</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Mental and Nervous Disorder Questionnaire</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Nervous Disorder Questionnaire (Applicant)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Report of Electrocardiography Examination</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Medical Underwriting Record Sheet</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Laboratory Confirmation Letter </span>
                    </div>
                  
                </div>
            </div>
        </div>
        );
        {/* Medical Forms & Questionnaire Section */}
      case '8':
        {/* Documents & Letters to Other Institutions Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Letter to Bank Related to Declining the Proposal in DTA Policies  </span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Form that Send to Reinsurance (Munich & Swiss)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Terms of Acceptance for MSPS/ESPS/CPPS/Other Funds</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Terms of Acceptance for MSPS/ESPS/CPPS/Other Funds (Table 45)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Authority Letter for MSPS</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Assignment Letter for MSPS</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Authority Letter for Other Funds</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Assignment Letter for Other Funds</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Authority Letter & Assignment Letter for ESPS</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>ESPS (Form No. 1361)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>ESPS (Form No. 1362)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>ESPS (Form No. 1367)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Authority Letter & Assignment Letter for CPPS</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CPPS (Form No. 1361/A)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CPPS (Form No. 1363)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CPPS (Form No. 1364)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CPPS (Form No. 1365)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CPPS (Form No. 1366)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>CPPS (Form No. 1367)</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Common Standing Order Mandate for Life Insurance Policies</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Standing Order Inform Letter to Bank</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Reminder Letter for DTA proposal-Refund(with deposit)</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Reminder Letter for DTA proposal-Refund(without deposit)</span>
                    </div>
                    <div style={listItemStyle} onClick={() =>handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Reminder Letter for DTA proposal-Adjustment</span>
                    </div>
                    <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Loan Sanction Letter</span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* Documents & Letters to Other Institutions Section */}
      case '9':
        {/* General Forms to the Policyholder Section */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div style={listItemStyle} onClick={() => handleDownload('/aboutSlic')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Form Regarding Occupation Details (12C)  </span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* General Forms to the Policyholder Section */}
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
          <button style={getButtonStyle('4')} onClick={() => setSelectedDept('4')}>Human Resources</button>
          <button style={getButtonStyle('5')} onClick={() => setSelectedDept('5')}>Finance Letters and General Forms (To Customer)</button>
          <button style={getButtonStyle('6')} onClick={() => setSelectedDept('6')}>Endorsements</button>
          <button style={getButtonStyle('7')} onClick={() => setSelectedDept('7')}>Medical Forms & Questionnaire</button>
          <button style={getButtonStyle('8')} onClick={() => setSelectedDept('8')}>Documents & Letters to Other Institutions (To Bank & Funds)</button>
          <button style={getButtonStyle('9')} onClick={() => setSelectedDept('9')}>General Forms to the Policyholder</button>
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