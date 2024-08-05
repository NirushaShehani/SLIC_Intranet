import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../../../Styles/serviceshrtag.css';
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

  const renderContent = () => {
    switch (selectedDept) {
      case '1':
         {/* Proposal Forms Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
                <div style={listContainer}>
                    <div style={listItemStyle} onClick={() => openInNewWindow('http://172.24.60.66/b-net-new/Company%20Profile%20-%20SLIC.pdf')}>
                    <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
                    <span>Life Proposal Form (Sinhala)</span>
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
            </div>
        </div>;
        {/* Proposal Forms Section */}
      case '2':
        {/* Policy Schedules Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Policy Schedules Section */}
      case '3':
        {/* Policy Books Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Policy Books Section */}
      case '4':
        {/* Human Resources Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Human Resources Section */}
      case '5':
        {/* Finance Letters and General Forms Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Finance Letters and General Forms Section */}
      case '6':
        {/* Endorsements Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Endorsements Section */}
      case '7':
        {/* Medical Forms & Questionnaire Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Medical Forms & Questionnaire Section */}
      case '8':
        {/* Documents & Letters to Other Institutions Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* Documents & Letters to Other Institutions Section */}
      case '9':
        {/* General Forms to the Policyholder Section */}
        return <div style={containerStyle}>
        <div style={rightStyle}>
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
            </div>
        </div>;
        {/* General Forms to the Policyholder Section */}
      default:
        return <div>Select a department to see content here.</div>;
    }
  };

  return (
    <div style={containerStyle}>
      {/* Upper Horizontal Section */}
      <div style={topStyle}>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => setSelectedDept('1')}>Proposal Forms</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('2')}>Policy Schedules</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('3')}>Policy Books</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('4')}>Human Resources</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('5')}>Finance Letters and General Forms (To Customer)</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('6')}>Endorsements</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('7')}>Medical Forms & Questionnaire</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('8')}>Documents & Letters to Other Institutions (To Bank & Funds)</button>
          <button style={buttonStyle} onClick={() => setSelectedDept('9')}>General Forms to the Policyholder</button>
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