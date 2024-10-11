import React from 'react';
import '../../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../../Styles/serviceshrtag.css';
import { Find_And_Replace} from "../../../../Services/ApiConfig";

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
    overflow: 'hidden',
  };
  const rightStyle = {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
  };

  const listContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    margin: '10px 0',
    borderBottom: '1px solid #e0e0e0',
    width: 'calc(50% - 10px)', // Adjusting the width to fit two columns with space in between
    boxSizing: 'border-box',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#31769F',
  };

  const smallFontStyle = {
    fontSize: '14px', // Smaller font size
    color: '#31769F', // Optional: color for language links
    cursor: 'pointer',
    padding: '0',
  };

  const items = [
    {
      title: "18 Month Loan/Distress Loan",
      links: {
        English: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/18MONTHS_DISTRESS_LOAN.pdf`,
        Sinhala: 'http://example.com/sinhala-link-1',
        Tamil: 'http://example.com/tamil-link-1',
      },
    },
    {
      title: "Approved No Pay Leave to Travel Overseas",
      links: {
        English: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/Approved_No_Pay_Leave_to_travel_overseas.pdf`,
        Sinhala: 'http://example.com/sinhala-link-2',
        Tamil: 'http://example.com/tamil-link-2',
      },
    },
    {
      title: "Circuit Bungalows & Busses Price List",
      links: {
        English: 'http://example.com/tamil-link-3',
        Sinhala: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/CircuitBungalowsandBussesPriceList.pdf`,
        Tamil: 'http://example.com/tamil-link-3',
      },
    },
    {
      title: "Guidelines on using Staff Canteen",
      links: {
        English: 'http://example.com/tamil-link-4',
        Sinhala: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/NOTICE_Canteen.pdf`,
        Tamil: 'http://example.com/tamil-link-4',
      },
    },
    {
      title: "Re-imbursement of Examination Expenses",
      links: {
        English: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/CIRCULAR_NO-HRD_26_2016_ENGLISH.pdf`,
        Sinhala: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/CIRCULAR_NO-HRD_26_2016_SINHALA.pdf`,
        Tamil: 'http://example.com/tamil-link-5',
      },
    },
    
    {
      title: "Revised Medical Scheme (CHAWS)",
      links: {
        English: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/CHAWS_NOTICE_ENGLISH.pdf`,
        Sinhala: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/CHAWS_NOTICE_SINHALA.pdf`,
        Tamil: 'http://example.com/tamil-link-7',
      },
    },
    
    {
      title: "Service Extension Circular",
      links: {
        English: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/Service_Extension_Circular_(English).pdf`,
        Sinhala: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/Service_Extension_Circular_(Sinhala).pdf`,
        Tamil: 'http://example.com/tamil-link-9',
      },
    },
   
    {
      title: "Study Leave Procedure",
      links: {
        English: `${Find_And_Replace}/Documents/Policies_Services_Forms/Circulars/HR/Study_Leave_Procedure_PD_12A_2010.pdf`,
        Sinhala: 'http://example.com/sinhala-link-11',
        Tamil: 'http://example.com/tamil-link-11',
      },
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div className="home-container">
          <div style={listContainer}>
            {items.map((item, index) => (
              <div key={index} style={listItemStyle}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                <span className="hover-text">{item.title} </span>
                <span className="hover-text">(</span>
                <span className="hover-text" onClick={() => openInNewWindow(item.links.English)} style={smallFontStyle}>
                  English
                </span>
                <span className="hover-text">/</span>
                <span className="hover-text" onClick={() => openInNewWindow(item.links.Sinhala)} style={smallFontStyle}>
                  Sinhala
                </span>
                <span className="hover-text">/</span>
                <span className="hover-text" onClick={() => openInNewWindow(item.links.Tamil)} style={smallFontStyle}>
                  Tamil
                </span>
                <span className="hover-text">)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR_Circulars;
