import React from 'react';
import Container from '@mui/material/Container';
import '../../../Styles/NoticeContent.css'; 
import Box from '@mui/material/Box';

const NoticeContentAdmin = ({ notice }) => {
  return (
    <div>
      <h2 className="notice-content-head">Company Events & News</h2>
      <Container className="transparent-notice-container">
        <Box className="box-notice-content">
          <div className="aaa">
             <h2>{notice.topic}</h2>
             <img src={notice.image} alt={notice.topic} className="notice-detail-image" />
              <p>
                Aaaa heartfelt congratulations to all our MDRT Achievers and Producers of SLICLife!
              <br></br>
                67 Suba Pathum Scholarships for top achievers 
                at the 2021 G.C.E. Ordinary Level examination.225 Suba Pathum Scholarships for top achievers 
                at the 2022 Grade 5 Scholarship, G.C.E. Ordinary Level and Advanced Level examinations.
              </p>
              <p>
               Apply Now:https://www.srilankainsurance.com/.../subapathum-scholarship
              </p>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default NoticeContentAdmin;
