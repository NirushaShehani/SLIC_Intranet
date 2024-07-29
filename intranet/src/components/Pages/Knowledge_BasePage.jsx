import React from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import '../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import '../../Styles/knowledgebase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt,faArchive } from '@fortawesome/free-solid-svg-icons';

const Knowledge_BasePage = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden'
  };

  const leftStyle = {
    flex: '0 0 300px',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative'
  };

  const verticalLineStyle = {
    width: '3px',
    backgroundColor: '#646464',
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
      {/* Left side */}
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
      {/* Left side */}
      <div style={verticalLineStyle}></div>
      {/* right side */}
      <div style={rightStyle}>
        <div className="home-container">
          {/* ICT Forms */}
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faArchive} style={iconStyle} /> 
              <span>B-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-mis')}>
              <FontAwesomeIcon icon={faArchive} style={iconStyle} />
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
          {/* ICT Forms */}
          {/* CONTACT CENTER PROCEDURES */}
          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">CONTACT CENTER PROCEDURES</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-phs-tracking/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life PHS Tracking</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/system-training/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>System Training</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/online-payments-marketing-campaigns/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Online Payments & Marketing Campaigns</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-system/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life System</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/hhttp://172.24.60.66/knowledgebase/index.php/knowledge-base/life-insurance-introduction/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life Insurance Introduction</span>
            </div>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/insurance-and-slic-introduction/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Insurance and SLIC Introduction</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/call-center-introduction/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Call Center Introduction</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/ccm-and-tis-training/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>CCM and TIS Training</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/how-to-get-medical-coordinators-contact-details/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>How to get Medical Coordinator’s Contact Details </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/how-to-log-in-to-b-call-center-system/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>How to log in to B-Call Center System</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/handling-marketing-campaigns/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Handling Marketing Campaigns</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-new-business-call-process/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life New Business Call process</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-claims-and-other-inquiries-call-process/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life Claims and Other Inquiries Call process</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-product-policies-department-division-information-call-process/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life Product/Policies/Department/Division/Information Call Process</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-insurance-call-process/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life Insurance Call process</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/call-quality-criteria/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Call Quality Criteria</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/functions-of-call-center-administration-department/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Functions of Call Center Administration Department </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/call-quality-evaluating/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Call Quality Evaluating</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/training-new-agents/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Training New Agents</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/job-role-of-a-call-center-agent/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Job Role of a Call Center Agent</span>
            </div>
          </div>
          {/* CONTACT CENTER PROCEDURES */}
          {/* Life-Circulars Forms */}
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
          {/* Life-Circulars Forms */}
          {/* ICT Forms */}
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
          {/* ICT Forms */}
        </div>
      </div>
      {/* right side */}
    </div>
  );
};

export default Knowledge_BasePage;
