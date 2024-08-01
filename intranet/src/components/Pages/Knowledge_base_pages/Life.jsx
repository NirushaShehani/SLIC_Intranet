import React from 'react'
import '../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../Styles/serviceshrtag.css';

const Life = () => {
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
            <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/b-net-new/Company%20Profile%20-%20SLIC.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Company Profile</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/corporate-values/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Coporate Values</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.89/aml/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>AML Module</span>
            </div>
            
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Manuals</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/life/life-manual/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/COGNOS/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>COGNOS Reports Manual</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://slic.intranet.com/GeneralManual/general.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>General Manual</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://b-net/b-net-new/general-docs/RI%20Dept.%20Procedure%20Manual.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Reinsurance Department Procedure Manual</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/b-net-new/Hris-Document/HRIS-User_Guide.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HRIS User Manual</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/b-net-new/Hris-Document/SLIC_ClaimsOne_User_Manual_V1.0.pdf')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>ClaimsOne User Manual</span>
            </div>
           
          </div>

          

          

        </div>
      </div>
    </div>
  )
}

export default Life
