import React from 'react';
import DrawerMenu from '../Sub_Components/DrawerMenu';


const ContactListPage = () => {
  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const rightStyle = {
    flex: 3,
    backgroundColor: '#c0c0c0',
    padding: '20px',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ display: 'flex', ...containerStyle }}>
      <div style={leftStyle}>
        <DrawerMenu/>
      </div>
      <div style={rightStyle}>
        {/* Content for the right side */}
      </div>
    </div>
  );
};

export default ContactListPage;
