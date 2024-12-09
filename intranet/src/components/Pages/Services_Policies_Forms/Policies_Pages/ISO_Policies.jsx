import React from 'react'
import '../../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../../Styles/serviceshrtag.css';
import { Find_And_Replace } from "../../../../Services/ApiConfig";

const ISO_Policies = () => {
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
                    {/*ICT Policies */}
                    <div className="hrContainer">

                    </div>
                    <div style={listContainer}>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Malicious_Software_Control_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Malicious Software Control Procedure_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Incident_Management_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Incident Management Procedure_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Password_Management_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Password Management Procedure_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Information_Classification_and_Handling_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Information Classification and Handling Procedure_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Clear_Desk_and_Clear_Screen_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Clear Desk and Clear Screen Procedure_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PO-Information_Security_Policy_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PO-Information Security Policy_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Mobile_Device_Security_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Mobile Device Security Procedure_V2.0</span>
                        </div>
                        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow(`${Find_And_Replace}/Documents/Policies_Services_Forms/Policies/ISO/ISMS-PR-Internet_and_Email_Usage_Procedure_V2.0.pdf`)}>
                            <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon" />
                            <span className="hover-text">ISMS-PR-Internet and Email Usage Procedure_V2.0</span>
                        </div>
                    </div>

                    {/*ICT Policies */}
                </div>
            </div>
        </div>
    )
}

export default ISO_Policies
