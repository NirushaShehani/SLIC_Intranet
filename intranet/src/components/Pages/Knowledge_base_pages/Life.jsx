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
            <div style={listItemStyle} onClick={() => navigate('/aboutSlic')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>About SLIC</span>
            </div>
            
          </div>

          <div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText">MANUALS</span>
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
           
           
          </div>
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

          
{/* PRODUCTS AND SERVICES */}
<div className="hrContainer">
            <span className="hrLine"></span><span className="hrDot"></span>
            <span className="hrText"> PRODUCTS AND SERVICES</span>
            <span className="hrDot"></span><span className="hrLine"></span>
          </div>
          <div style={listContainer}>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-bonus-system-training/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life Bonus system Training</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/workmens-compensation/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Workmen’s Compensation</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sri-lanka-insurance-health-plus/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Sri Lanka Insurance Health Plus</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/protect-group-term-life-policy/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Protect – Group Term Life POLICY</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/marine-cargo-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Marine Cargo Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/marine-hull-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Marine Hull Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/knowledgebase/index.php/knowledge-base/leasing-all-risk-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Leasing All Risk Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/machinery-loss-of-profits-insurance-mlop/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Machinery Loss of Profits Insurance (MLOP)</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/deterioration-of-stock-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Deterioration of Stock Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/contractors-plant-and-machinery-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Contractor’s Plant and Machinery Insurance </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/machinery-breakdown-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Machinery Breakdown Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/electronic-equipment-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Electronic Equipment Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/erection-all-risks-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Erection All Risks Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/contractors-all-risks-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Contractors’ All Risks Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/hoteliers-comprehensive-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Hoteliers Comprehensive Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/tea-factory-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Tea Factory Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/trade-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Trade Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/insurance-for-industrial-business-premises/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Insurance for Industrial / Business Premises </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/suraksha-health-policy-for-school-children/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Suraksha Health Policy For School Children</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/personal-accident/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Personal Accident</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sri-lanka-insurance-gaurawa/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Sri Lanka Insurance Gaurawa</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/globe-trotter-travel-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Globe Trotter Travel Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/home-protect/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Home Protect</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/home-protect-lite/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Home Protect Lite</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/burglary-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Burglary Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/life-suba-pathum-scholarship/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Life Suba pathum Scholarship</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/mortgage-protection-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Mortgage Protection Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/minimuthu-parithyaga/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Minimuthu Parithyaga</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/minimuthu-childrens-policy/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Minimuthu – Children’s Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/minimuthu-daayada/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Minimuthu Daayada</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-hospital-cash-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLI Hospital Cash Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-overseas-comprehensive-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLI Overseas Comprehensive Plan </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-comprehensive-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLI Comprehensive Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-surgical-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLI Surgical Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('- http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-medi-life/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLI Medi-Life</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/sli-annual-medical-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLI Annual Medical Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/freedom-retirement-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Freedom – Retirement Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/jana-diri-two-year-relief-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Jana Diri Two Year Relief Plan </span>
            </div>
            <div style={listItemStyle} onClick={() => navigate(' http://172.24.60.66/knowledgebase/index.php/knowledge-base/swarna-dhaja/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Swarna Dhaja</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/yasa-isuru-advance-benefit-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Yasa Isuru – Advance Benefit Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/praguna-high-returns-policy/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Praguna – High Returns Policy</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/divi-thilina-protection-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Divi Thilina – Protection Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate(' http://172.24.60.66/knowledgebase/index.php/knowledge-base/slic-products/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>SLIC Products</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/annual-medical-plan/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Annual Medical Plan</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/motor-plus-motor-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Motor Plus – Motor Insurance</span>
            </div>
            <div style={listItemStyle} onClick={() => navigate('http://172.24.60.66/knowledgebase/index.php/knowledge-base/fire-insurance/')}>
              <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
              <span>Fire Insurance </span>
            </div>
           

          </div>
          {/* CONTACT CENTER PROCEDURES */}

          

        </div>
      </div>
    </div>
  )
}

export default Life
