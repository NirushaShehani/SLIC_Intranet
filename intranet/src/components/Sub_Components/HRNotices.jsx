import React from 'react';
// eslint-disable-next-line
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Box from '@mui/material/Box';
import '../../Styles/HRNotices.css';

const HRNotices = () => {

  const todayNotices = [
    { topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' },
    { topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' }
  ];

  const restOfWeekNotices = [
    { topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' },
    { topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' }
  ];

  const lastWeekNotices = [
    { topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' }
  ];


  
  return (
    <div>
      <h2 className="hr-notice-head">HR Notices</h2>
      <Container className="transparent-container">
        <Box className="box-content">
          <div className="aa">
            <h2 className="sub-notice-head">Today :</h2>
            <ul className="notice-list">
              {todayNotices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <h3 className="notice-topic">{notice.topic}</h3>
                  <p className="notice-content">{notice.content}</p>
                </li>
              ))}
            </ul>

            <h2 className="sub-notice-head">Rest of Week :</h2>
            <ul className="notice-list">
              {restOfWeekNotices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <h3 className="notice-topic">{notice.topic}</h3>
                  <p className="notice-content">{notice.content}</p>
                </li>
              ))}
            </ul>

            <h2 className="sub-notice-head">Last Week :</h2>
            <ul className="notice-list">
              {lastWeekNotices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <h3 className="notice-topic">{notice.topic}</h3>
                  <p className="notice-content">{notice.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default HRNotices;
