import React from 'react';
// eslint-disable-next-line
import Container from '@mui/material/Container';
// eslint-disable-next-line
import Box from '@mui/material/Box';
import '../../Styles/HRNotices.css';

const HRNotices = () => {
    return (
        <div>
        <h2 className="notice-head">HR Notices</h2>
        <Container className="transparent-container">
          <Box className="box-content">
            <div className="aa">
              <h2 className="sub-notice-head">Today :</h2>
              <h2 className="sub-notice-head">Rest of Week :</h2>
              <h2 className="sub-notice-head">Last Week :</h2>
            </div>
          </Box>
        </Container>
        </div>
      );
};

export default HRNotices;
