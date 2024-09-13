import React from 'react'
import '../../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../../Styles/serviceshrtag.css';

const HR_Circulars = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  // Styles
  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden'
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
  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div className="home-container">
        
          <div style={listContainer}>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/18MONTHS_DISTRESS_LOAN.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">18 Month Loan/Distress Loan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() =>openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/Approved_No_Pay_Leave_to_travel_overseas.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Approved No Pay Leave to Travel Overseas</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() =>openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/CircuitBungalowsandBussesPriceList.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Circuit Bungalows & Busses Price List	</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/NOTICE_Canteen.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Guidlines on using Staff Canteen</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/CIRCULAR_NO-HRD_26_2016_ENGLISH.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Re-imbursement of Examination Expenses (English)	</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/CIRCULAR_NO-HRD_26_2016_SINHALA.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Re-imbursement of Examination Expenses (Sinhala)</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/CHAWS_NOTICE_ENGLISH.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Revised Medical Scheme (CHAWS) - English</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/CHAWS_NOTICE_SINHALA.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Revised Medical Scheme (CHAWS) - Sinhala</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/Service_Extension_Circular_(English).pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Service Extension Circular (English)</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() =>openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/Service_Extension_Circular_(Sinhala).pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Service Extension Circular (Sinhala)	</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() =>openInNewWindow('http://172.24.90.80:10157/Documents/Policies_Services_Forms/Circulars/HR/Study_Leave_Procedure_PD_12A_2010.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}className="hover-icon" />
              <span className="hover-text">Study Leave Procedure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HR_Circulars
