import React from 'react';
import Container from '@mui/material/Container';
import '../../Styles/NoticeContent.css'; 

const NoticeContent = ({ notice }) => {
  return (
    <div className="notice-content-content">
      <h2 className="notice-content-head">HR Notices</h2>
      <Container className="transparent-notice-container">
        <div className="notice-content-details">
            <h2>{notice.topic}</h2>
            <img src={notice.image} alt={notice.topic} className="notice-detail-image" />
            <p>Here is the page</p>
        </div>
      </Container>
    </div>
  );
};

export default NoticeContent;
