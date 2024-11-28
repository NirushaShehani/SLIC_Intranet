import React from 'react';
import '../../../Styles/services.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
// hr tag styles
import '../../../Styles/serviceshrtag.css';
import '../../../Styles/services.css';
import { Find_And_Replace} from "../../../Services/ApiConfig";
const Common = () => {
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  const handleDownload = (url) => {
    if (window.confirm('Do you want to download this file?')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      link.click();
    }
  };

  // Styles
  const containerStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
  };
  const rightStyle = {
    flex: 1,
    backgroundColor: "#F4F4F4",
    padding: "20px",
    boxSizing: "border-box",
    overflowY: "auto", // Enable vertical scrolling
  };

  const sectionWrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const sectionStyle = {
    flex: "1 1 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: "20px", // Space between sections
    backgroundColor: "#FFFFFF",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    borderBottom: "1px solid #e0e0e0",
    width: "100%", // Full width for title underline
    paddingBottom: "5px", // Space between title and underline
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "10px 0",
    borderBottom: "1px solid #e0e0e0",
    width: "100%", // Full width for the list item
    boxSizing: "border-box",
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#31769F',
  };


  return (
    <div style={containerStyle}>
      <div style={rightStyle}>
        <div style={sectionWrapperStyle}>
        <div style={sectionStyle}>
        <div className="hover-container" style={listItemStyle} onClick={() => openInNewWindow('http://172.24.90.80:10157/Documents/Knowledge_Base/Life/CompanyProfileSLIC.pdf')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle}  className="hover-icon"/>
                <span className="hover-text">Company Profile</span>
              </div>
              <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/corporate-values/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Coporate Values</span>
              </div>
              <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.89/aml/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">AML Module</span>
              </div>
        </div>
            <div style={sectionStyle}>
             {/*MANUALS*/}
             <div style={titleStyle}>MANUALS</div>  
             <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/life/life-manual/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life</span>
              </div>
              <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/COGNOS/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">COGNOS Reports Manual</span>
              </div>
              <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://slic.intranet.com/GeneralManual/general.html')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">General Manual</span>
              </div>
              <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.90.80:10157/Documents/Knowledge_Base/Life/Manuals/RI_Dept_Procedure_Manual.pdf')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Reinsurance Department Procedure Manual</span>
              </div>
              <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.90.80:10157/Documents/Knowledge_Base/Life/Manuals/HRIS_User_Guide.pdf')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">HRIS User Manual</span>
              </div>
             {/*MANUALS*/}
            </div>
          </div>
           
          {/* CONTACT CENTER PROCEDURES */}
          <div style={sectionStyle}>
            <div style={titleStyle}>CONTACT CENTER PROCEDURES</div> 
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-phs-tracking/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life PHS Tracking</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/system-training/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">System Training</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/online-payments-marketing-campaigns/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Online Payments & Marketing Campaigns</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-system/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life System</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('/http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-insurance-introduction/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life Insurance Introduction</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/insurance-and-slic-introduction/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Insurance and SLIC Introduction</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/call-center-introduction/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Call Center Introduction</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/ccm-and-tis-training/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">CCM and TIS Training</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/how-to-get-medical-coordinators-contact-details/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">How to get Medical Coordinator’s Contact Details </span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/how-to-log-in-to-b-call-center-system/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">How to log in to B-Call Center System</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/handling-marketing-campaigns/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Handling Marketing Campaigns</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-new-business-call-process/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life New Business Call process</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-claims-and-other-inquiries-call-process/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life Claims and Other Inquiries Call process</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-product-policies-department-division-information-call-process/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life Product/Policies/Department/Division/Information Call Process</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-insurance-call-process/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Life Insurance Call process</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/call-quality-criteria/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Call Quality Criteria</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/functions-of-call-center-administration-department/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Functions of Call Center Administration Department </span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/call-quality-evaluating/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Call Quality Evaluating</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/training-new-agents/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Training New Agents</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/job-role-of-a-call-center-agent/')}>
                <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
                <span className="hover-text">Job Role of a Call Center Agent</span>
            </div>
          </div>
          {/* CONTACT CENTER PROCEDURES */}
          {/* PRODUCTS AND SERVICES */}
          <div style={sectionStyle}>
          <div style={titleStyle}>PRODUCTS AND SERVICES</div> 
          <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-bonus-system-training/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Life Bonus system Training</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/workmens-compensation/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Workmen’s Compensation</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sri-lanka-insurance-health-plus/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Sri Lanka Insurance Health Plus</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/protect-group-term-life-policy/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Protect – Group Term Life POLICY</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/marine-cargo-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Marine Cargo Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/marine-hull-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Marine Hull Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/leasing-all-risk-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Leasing All Risk Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/machinery-loss-of-profits-insurance-mlop/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Machinery Loss of Profits Insurance (MLOP)</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/deterioration-of-stock-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Deterioration of Stock Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/contractors-plant-and-machinery-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Contractor’s Plant and Machinery Insurance </span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/machinery-breakdown-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Machinery Breakdown Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/electronic-equipment-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Electronic Equipment Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/erection-all-risks-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Erection All Risks Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/contractors-all-risks-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Contractors’ All Risks Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/hoteliers-comprehensive-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Hoteliers Comprehensive Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/tea-factory-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Tea Factory Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/trade-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Trade Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/insurance-for-industrial-business-premises/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Insurance for Industrial / Business Premises </span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/suraksha-health-policy-for-school-children/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Suraksha Health Policy For School Children</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/personal-accident/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Personal Accident</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sri-lanka-insurance-gaurawa/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Sri Lanka Insurance Gaurawa</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/globe-trotter-travel-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Globe Trotter Travel Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/home-protect/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Home Protect</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/home-protect-lite/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Home Protect Lite</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/burglary-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Burglary Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-suba-pathum-scholarship/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Life Suba pathum Scholarship</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/mortgage-protection-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Mortgage Protection Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/minimuthu-parithyaga/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Minimuthu Parithyaga</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/minimuthu-childrens-policy/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Minimuthu – Children’s Policy</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/minimuthu-daayada/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Minimuthu Daayada</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-hospital-cash-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLI Hospital Cash Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-overseas-comprehensive-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLI Overseas Comprehensive Plan </span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-comprehensive-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLI Comprehensive Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-surgical-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLI Surgical Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('- http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-medi-life/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLI Medi-Life</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-annual-medical-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLI Annual Medical Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/freedom-retirement-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Freedom – Retirement Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/jana-diri-two-year-relief-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Jana Diri Two Year Relief Plan </span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate(' http://172.24.60.66/knowledgebase/index.php/knowledge-base/swarna-dhaja/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Swarna Dhaja</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/yasa-isuru-advance-benefit-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Yasa Isuru – Advance Benefit Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/praguna-high-returns-policy/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Praguna – High Returns Policy</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/divi-thilina-protection-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Divi Thilina – Protection Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate(' http://172.24.60.66/knowledgebase/index.php/knowledge-base/slic-products/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">SLIC Products</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/annual-medical-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Annual Medical Plan</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/motor-plus-motor-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Motor Plus – Motor Insurance</span>
            </div>
            <div className="hover-container"style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/fire-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} className="hover-icon"/>
              <span className="hover-text">Fire Insurance </span>
            </div>
            {/* PRODUCTS AND SERVICES */}
          </div>
        </div>
    </div>
        

     
  )
}

export default Common
