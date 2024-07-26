import React from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import '../../Styles/knowledgebase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Knowledge_BasePage = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex'
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const verticalLineStyle = {
    width: '3px',
    backgroundColor: '#646464',
    margin: '-1px'
  };

  const rightStyle = {
    flex: 4,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const container = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  };

  const up = {
    flex: '0 0 15%',
    backgroundColor: '#31769F',
    padding: '10px',
    marginLeft: '-20px',
    marginRight: '-20px',
    marginTop: '-20px',
    width: 'auto',
    height: 'auto',
  };

  const Down = {
    flex: '1',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    marginLeft: '-20px',
    marginRight: '-20px',
  };

  const ContactList = {
    fontFamily: '"Gloock", serif',
    fontWeight: 500,
    fontSize: '48px',
    fontStyle: 'normal',
    color: 'white',
    marginLeft: '30px',
    marginTop: '10px',
  };

  const subtitle = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '17px',
    fontStyle: 'normal',
    color: '#161616',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const paragraph = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#585858',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const listContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px',
    margin: '10px 0',
    borderBottom: '1px solid #e0e0e0',
    width: 'calc(50% - 20px)'  // Adjusting the width to fit two columns
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#31769F',
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <div style={container}>
          <div style={up}>
            <DrawerMenu />
            <div style={ContactList}>
              Knowledge Base
            </div>
          </div>
          <div style={Down}>
            <div style={subtitle}>
              THIS IS YOUR KNOWLEDGE BASE PAGE
            </div>
            <div style={paragraph}>
              In here You can access to the manuals, request forms provided by SLIC clicking the provided buttons.
            </div>
          </div>
        </div>
      </div>
      <div style={verticalLineStyle}></div>
      <div style={rightStyle}>
        <div className="home-container">
          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Company Policies</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-mis')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-MIS</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/cashbook')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Cashbook</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Commission</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Advisor</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HRIS</span>
            </div>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-mis')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-MIS</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/cashbook')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Cashbook</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Commission</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Advisor</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HRIS</span>
            </div>
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">Life-Circulars Forms</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-mis')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-MIS</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/cashbook')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Cashbook</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Commission</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Advisor</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HRIS</span>
            </div>
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">ICT Forms</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-mis')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-MIS</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/cashbook')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Cashbook</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Commission</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>B-Advisor</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hris')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HRIS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge_BasePage;
