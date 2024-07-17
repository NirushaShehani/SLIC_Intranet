import React from 'react'
const imageUrl1 = require('../../assets/Chart_Images/Screenshot 2024-07-17 125452.png');
const imageUrl2 = require('../../assets/Chart_Images/Screenshot 2024-07-17 125507.png');
const imageUrl3 = require('../../assets/Chart_Images/Screenshot 2024-07-17 125521.png');
const Cost_Center = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={imageUrl1} alt="Payout Ratio Chart" style={{ width: '80%', marginBottom: '20px' }} />
        <img src={imageUrl2} alt="Expense Ratio Chart" style={{ width: '80%', marginBottom: '20px' }} />
        <img src={imageUrl3} alt="Shareholder Surplus Chart" style={{ width: '80%', marginBottom: '20px' }} />
      </div>
    );
  };
export default Cost_Center
