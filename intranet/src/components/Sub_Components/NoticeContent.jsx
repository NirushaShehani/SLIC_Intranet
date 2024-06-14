import React from 'react';
import Container from '@mui/material/Container';
import '../../Styles/NoticeContent.css'; 
import Box from '@mui/material/Box';

const NoticeContent = ({ notice }) => {
  return (
    // <div className="notice-content-content">
    //   <h2 className="notice-content-head">HR Notices</h2>
    //   <Container className="transparent-notice-container">
    //     <div className="notice-content-details">
    //         <h2>{notice.topic}</h2>
    //         <img src={notice.image} alt={notice.topic} className="notice-detail-image" />
    //         <p>Here is the page</p>
    //     </div>
    //   </Container>
    // </div>
    <div>
      <h2 className="notice-content-head">HR Notices</h2>
      <Container className="transparent-notice-container">
        <Box className="box-notice-content">
          <div className="aaa">
             <h2>{notice.topic}</h2>
             <img src={notice.image} alt={notice.topic} className="notice-detail-image" />
              <p>
                This year we are ready to offer 300 Suba Pathum Scholarships for the children of 
                Sri Lanka Insurance Life Policyholders.
              <br></br>
                75 Suba Pathum Scholarships for top achievers 
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

export default NoticeContent;
