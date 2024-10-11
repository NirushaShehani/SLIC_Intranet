import React from 'react'
import '../../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../../Styles/serviceshrtag.css';
import { Find_And_Replace} from "../../../../Services/ApiConfig";

const Compliance_Policies = () => {
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

          </div>
          <div style={listContainer}>
          <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/Compliance/AML%20Policy%20SLICLL%202024-%20Board%20Approved%2027.03.2024.pdf`)}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">AML Policy SLICLL 2024</span>
            </div>
            <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/Compliance/AML%20Procedure%20SLIC%20LIFE%202024%20-%20Board%20Approved%2027.03.2024.pdf`)}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Information Security Policy-V2.5.1</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.89/aml/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">AML Module</span>
              </div>
            
          </div>
    
            </div>
          </div>
        </div>
  )
}

export default Compliance_Policies
