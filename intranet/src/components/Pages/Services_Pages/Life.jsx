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
          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Services</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate(' http://insurance-app/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://blife-comm/UI/Home.aspx')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Commission Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://callc-app/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Call center</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://blife-edomas.slic1.com/Secworks/Signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>E-Domas Life </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://blife-mis-agent/Secworks/Signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-MIS </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('https://cognoslife.srilankainsurance.com:9300/bi/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Cognos Analytics</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate(' http://blife-app.slic1.com/cashbook_web/Login.aspx')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>CashBook</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://slic.intranet.com/PGIWORKS/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>PEGI Online</span>
            </div>
            <div style={listItemStyle} onClick={() => openInNewWindow('https://apps.srilankainsurance.com/agenworks/Signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Advisor</span>
            </div>
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Circulars</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://slic.intranet.com/circular_new/Life/Life.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/legal.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Legal</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/finance.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Finance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>ICT</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Human resource Development</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/personal-lines.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Personal Lines</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Internal Audit</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/compliance.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Complience</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Acturial and risk management</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Stratergy and planning</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Corporate business and reinsurance</span>
            </div>
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Forms</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
          <div style={listItemStyle} onClick={() => openInNewWindow('/isoForms')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>ISO Forms</span>
            </div>
            <div style={listItemStyle} onClick={() => openInNewWindow('/ict')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>ICT</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/procurement')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Procurement</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/sales')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Sales</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/membership')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Membership</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/common')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Common</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/securityDepartment')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Security Department</span>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Life
