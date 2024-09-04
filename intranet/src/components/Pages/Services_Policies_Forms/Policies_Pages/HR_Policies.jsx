import React from 'react'
import '../../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../../Styles/serviceshrtag.css';

const HR_Policies = () => {
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
                {/*HR Policies */}
          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">HR Policies</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
          <div style={listItemStyle} onClick={() => navigate('/performance-managment')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Performance Management Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Approved Professional Courses</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-mis')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Code of Business Conduct & Ethics</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/cashbook')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Corporate E-Mail Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-commission')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Desciplinary Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Dress Code Policy - English</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Dress Code Policy - Sinhala</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Grievance Handling - English</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Grievance Handling - Sinhala</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HR Policy Manual (English)</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>HR Policy Manual (Sinhala)	</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Professional Development Reimbursement Scheme</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Recruitment Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Vehicle Loan Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Whistle Blowing Policy (English)	</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('/b-advisor')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Whistle Blowing Policy (Sinhala)</span>
            </div>
          </div>
          {/*HR Policies */}

    
              
    
    
            </div>
          </div>
        </div>
  )
}

export default HR_Policies
