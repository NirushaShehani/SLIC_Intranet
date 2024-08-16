import React from 'react'
import '../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// hr tag styles
import '../../../Styles/serviceshrtag.css';
import '../../../Styles/Link.css';
import '../../../Styles/ServicesTitle.css';
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
    fontSize: '24px', 
  marginRight: '8px',
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
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text" >B-Life</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate(' http://insurance-app/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">B-Insurance</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://blife-comm/UI/Home.aspx')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">B-Commission Life</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://callc-app/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">B-Call center</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://blife-edomas.slic1.com/Secworks/Signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">E-Domas Life </span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://blife-mis-agent/Secworks/Signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">B-MIS </span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('https://cognoslife.srilankainsurance.com:9300/bi/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Cognos Analytics </span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://blife-app.slic1.com/cashbook_web/Login.aspx')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">CashBook</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://slic.intranet.com/PGIWORKS/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">PEGI Online</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('https://apps.srilankainsurance.com/agenworks/Signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">B-Advisor</span>
            </div>   
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Circulars</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
          <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://slic.intranet.com/circular_new/Life/Life.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Life</span>
            </div>   
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/legal.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Legal</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/finance.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Finance</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">ICT</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Human resource Development</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/personal-lines.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Personal Lines</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Internal Audit</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Internal Audit</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('http://172.24.60.66/circulars-online/compliance.html')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Complience</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
              <span className="hover-text">Acturial and risk management</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"  />
              <span className="hover-text">Stratergy and planning</span>
            </div>
            <div  className="hover-container"style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
              <span className="hover-text">Corporate business and reinsurance</span>
            </div>
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Forms</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
          <div  className="hover-container" style={listItemStyle}>
              <Link to="/LIFE-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">Life Forms</span>
              </Link>
            </div>
            <div className="hover-container" style={listItemStyle} >
              <Link to="/ISO-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">ISO Forms</span>
              </Link>
            </div>
            <div  className="hover-container"style={listItemStyle}>
              <Link to="/ICT-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">ICT Forms</span>
              </Link>
            </div>
            <div  className="hover-container" style={listItemStyle}>
              <Link to="/Sales-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">Sales Forms</span>
              </Link>
            </div>
            <div  className="hover-container" style={listItemStyle}>
              <Link to="/Common-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">Common Forms</span>
              </Link>
            </div>
            <div  className="hover-container" style={listItemStyle}>
              <Link to="/Membership-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">Membership Forms</span>
              </Link>
            </div>
            <div  className="hover-container" style={listItemStyle}>
              <Link to="/Security-Department-Forms" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span  className="hover-text">Security Department Forms</span>
              </Link>
            </div>
           
          </div>



        </div>
      </div>
    </div>
  )
}

export default Life
