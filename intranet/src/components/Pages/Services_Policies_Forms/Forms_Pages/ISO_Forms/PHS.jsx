import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../../../Styles/serviceshrtag.css';
const Services = () => {
  const [selectedDept, setSelectedDept] = useState('');
  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navigate = useNavigate();

  // Styles
  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  };

  const topStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    overflowY: 'auto',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  };

  const bottomStyle = {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto'
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

  const paragraph = {
    fontFamily: '"Onest", sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#585858',
    marginLeft: '18px',
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#31769F',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    minWidth: '150px', // Ensure buttons are wide enough for longer names
  };

  const getButtonStyle = (dept) => {
    return {
      ...buttonStyle,
      backgroundColor: selectedDept === dept ? '#0056b3' : '#31769F',
    };
  };

  const handleDownload = (url) => {
    if (window.confirm('Do you want to download this file?')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = url.split('/').pop();
      link.click();
    }
  };

  const renderContent = () => {
    switch (selectedDept) {
      case '1':
         {/* General Forms to the Policyholder */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Signature Verification Form ( Form No.1620)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Important Notice ( Form No.2812)  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Declaration of Continued Good Health (Form No 15C/E)  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Surrender Form ( Form No.1423)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Surrender Form ( Form No.1526)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Affidavit for Lost Policy ( Form No.1677)  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Affidavit for Name Change ( Form No.1777)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Surety Form (Form No.1630)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() =>handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Surety Bond (Form No.1545) ( Completed by Bank has lost the Policy) </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Assignment Form for Valuable Consideration ( Form No.1624)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Assignment Form for Natural Love and Affection ( Form No.1625)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Re-assignment Form ( Form No.1626)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Form Regarding Arogya / CIC inclusion for Child ( Form No.7149)</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Nomination Form ( Form No.1809) </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Bonus Surrender Form ( Form No.1612)</span>
                    </div>
                    
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Loan Bond ( Form No.1595) </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Loan Application ( Form No.1728)  </span>
                    </div>
                  
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Declaration of Continued Good Health- child (Form No 9C/E) </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Voucher (Form No.7124)  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Adjustment Voucher ( Form No.312)  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Direct Adjustment ( Form No.1752)   </span>
                    </div>
                </div>
            </div>
        </div>
        );
        {/* General Forms to the Policyholder */}
      case '2':
        {/* Endorsements */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Sum Assured and Rider Covers Redusing </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Include Children for Arogya  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Remove Arogya Cover   </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Include Child Birth Cover for Arogya  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Include Child for CIC  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Remove CIC Cover from Child  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Age Admission </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Special Revival  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Change of Name  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Correct the Name  </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Change the Name after Marriage</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Change of Nominee </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Change the Mode of the Payment </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Term Reducing</span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Removal of Accident Benefit at Age 60 </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Desanda Inclusion </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Desanda Removal </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Health Extra Inclusion </span>
                    </div>
                    <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span className="hover-text">Covers Removal with Health Extra  </span>
                    </div>
                   
                </div>
            </div>
        </div>
        );
        {/* Endorsements */}
      case '3':
        {/* Group Payments Forms  */}
        return (
        <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                  <span className="hover-text">Letter of authority-form no 155R</span>
                  </div>
                  <div  className="hover-container"style={listItemStyle} onClick={() => handleDownload('/-')}>
                  <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                  <span className="hover-text">Adjustment Voucher</span>
                  </div>
                  
                </div>
            </div>
        </div>
        );
        {/* Group Payments Forms  */}
      
      
     
       
       
      default:
        return <div>Select a department to see content here.</div>;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Upper Horizontal Section */}
      <div style={topStyle}>
        <div style={buttonContainerStyle}>
          <button style={getButtonStyle('1')} onClick={() => setSelectedDept('1')}>General Forms to the Policyholder</button>
          <button style={getButtonStyle('2')} onClick={() => setSelectedDept('2')}>Endorsements</button>
          <button style={getButtonStyle('3')} onClick={() => setSelectedDept('3')}>Group Payments Forms </button>
          
        </div>
      </div>
      {/* Lower Horizontal Section */}
      <div style={bottomStyle}>
        <div style={paragraph}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Services;