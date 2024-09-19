import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Box from '@mui/material/Box';
import '../../Styles/HRNotices.css';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";

const HRNotices = () => {
  const navigate = useNavigate();

  const todayNotices = [
    { id: 1, topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' },
    { id: 2, topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' }
  ];

  const restOfWeekNotices = [
    { id: 3, topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' },
    { id: 4, topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' }
  ];

  const lastWeekNotices = [
    { id: 5, topic: 'SLICL Suba Pathum scholarship awards 2023', content: 'Lorem Ipsum has been the industrys standard when it dummy text ever since 1500s took a galley of type when an unknown have' }
  ];

 

  return (
    <div>
      <h2 className="hr-notice-head">Notices</h2>
      <Container className="transparent-container">
        <Box className="box-content">
          <div className="aa">
            <h2 className="sub-notice-head">Today :</h2>
            <ul className="notice-list">
              {todayNotices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <button className="notice-button" >
                    <h3 className="notice-topic">{notice.topic}</h3>
                    <p className="notice-content">{notice.content}</p>
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="sub-notice-head">Rest of Week :</h2>
            <ul className="notice-list">
              {restOfWeekNotices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <button className="notice-button" >
                    <h3 className="notice-topic">{notice.topic}</h3>
                    <p className="notice-content">{notice.content}</p>
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="sub-notice-head">Last Week :</h2>
            <ul className="notice-list">
              {lastWeekNotices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <button className="notice-button" >
                    <h3 className="notice-topic">{notice.topic}</h3>
                    <p className="notice-content">{notice.content}</p>
                  </button>
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
