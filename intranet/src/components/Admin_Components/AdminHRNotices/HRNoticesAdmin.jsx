import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import '../../../Styles/HRNoticesAdmin.css';
import deleteIcon from '../../../assets/delete-icon2.png'; // Adjust the path as necessary
import Vector from '../../../assets/Vector.png';

const HRNoticesAdmin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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

  const handleNoticeClick = (id) => {
    navigate(`/detailed-notice/${id}`);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log(`Delete notice with id: ${selectedId}`);
    setOpen(false);
    setSuccessOpen(true);
    // Add your deletion logic here
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  return (
    <div>
      <h2 className="hr-notice-head">HR Notices</h2>
      <Container className="transparent-container">
        <Box className="box-content">
          <div className="aa">
            <h2 className="sub-notice-head">Today :</h2>
            <ul className="notice-list">
              {todayNotices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <button className="notice-button" onClick={() => handleNoticeClick(notice.id)}>
                    <h3 className="notice-topic">{notice.topic}</h3>
                    <p className="notice-content">{notice.content}</p>
                  </button>
                  <img 
                    src={deleteIcon} 
                    className="delete-icon" 
                    alt="Delete" 
                    onClick={() => handleDeleteClick(notice.id)}
                  />
                </li>
              ))}
            </ul>

            <h2 className="sub-notice-head">Rest of Week :</h2>
            <ul className="notice-list">
              {restOfWeekNotices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <button className="notice-button" onClick={() => handleNoticeClick(notice.id)}>
                    <h3 className="notice-topic">{notice.topic}</h3>
                    <p className="notice-content">{notice.content}</p>
                  </button>
                  <img 
                    src={deleteIcon} 
                    className="delete-icon" 
                    alt="Delete" 
                    onClick={() => handleDeleteClick(notice.id)}
                  />
                </li>
              ))}
            </ul>

            <h2 className="sub-notice-head">Last Week :</h2>
            <ul className="notice-list">
              {lastWeekNotices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <button className="notice-button" onClick={() => handleNoticeClick(notice.id)}>
                    <h3 className="notice-topic">{notice.topic}</h3>
                    <p className="notice-content">{notice.content}</p>
                  </button>
                  <img 
                    src={deleteIcon} 
                    className="delete-icon" 
                    alt="Delete" 
                    onClick={() => handleDeleteClick(notice.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <Box sx={{ textAlign: 'center' }}>
          <img src={Vector} style={{ width: '50px', height: '50px', margin: '0 auto 10px auto', display: 'block' }} />
          <DialogContentText>
            Are you sure you want to delete this notice?
          </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleClose} sx={{ backgroundColor: 'red', color: 'white', mx: 4, '&:hover': { backgroundColor: 'red' } }}>
            No
          </Button>
          <Button onClick={handleDeleteConfirm} sx={{ backgroundColor: 'blue', color: 'white', mx: 4, '&:hover': { backgroundColor: 'blue' } }}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={successOpen}
        onClose={handleSuccessClose}
      >
         <DialogContent>
          <Box sx={{ textAlign: 'center' }}>
            <DialogContentText>
              Thank you for your request.
            </DialogContentText>
            <DialogContentText>
              The task has been successfully deleted.
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleSuccessClose} sx={{ backgroundColor: 'blue', color: 'white', mx: 10, '&:hover': { backgroundColor: 'blue' } }}>
            Continue
          </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

export default HRNoticesAdmin;
