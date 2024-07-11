import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box'; 
import Button from '@mui/material/Button';
import '../../../Styles/CompanyEventscard.css';
import deleteIcon from '../../../assets/delete-icon.png';

const eventsData = [
  {
    id: 1,
    image: require('../../../assets/evnt1.jpg'),
    title: 'A heartfelt congratulations to all our MDRT Achievers and Producers of SLICLife!',
    likes: 26,
  },
  {
    id: 2,
    image: require('../../../assets/image1.jpg'),
    title: 'Any mechanical keyboard enthusiasts in design?',
    likes: 85,
  },
  {
    id: 3,
    image: require('../../../assets/image3.jpg'),
    title: 'Understanding color theory: the color wheel and finding',
    likes: 85,
  },
  {
    id: 4,
    image: require('../../../assets/Services.png'),
    title: 'How to design a product that can grow itself 10x in year:',
    likes: 85,
  },
  {
    id: 5,
    image: require('../../../assets/image 18.png'),
    title: 'The More Important the Work, the More Important the Rest',
    likes: 85,
  },
  {
    id: 6,
    image: require('../../../assets/image2.jpg'),
    title: 'Far far away, behind the word mountains, far from the countries Vokalia',
    likes: 85,
  },
  {
    id: 7,
    image: require('../../../assets/image1.jpg'),
    title: 'How to design a product that can grow itself 10x in year:',
    likes: 85,
  },
  {
    id: 8,
    image: require('../../../assets/image2.jpg'),
    title: 'The key to surviving this new industrial revolution is leading it.',
    likes: 85,
  },
  // Add more event data here...
];

const EventCard = ({ id, image, title, likes, onLike, onDeleteClick }) => {
  return (
    <div className="event-card">
      <Link to={`/detailed-events-admin/${id}`}>
        <img src={image} alt={title} className="event-image" />
      </Link>
      <div className="event-info">
        <p className="event-title">{title}</p>
        <div className="event-likes">
          <span className="like-icon" onClick={onLike}>👍</span>
          <span className="like-count">{likes}</span>
          <img 
            src={deleteIcon} 
            className="delete-icon" 
            onClick={onDeleteClick} 
          />
        </div>
      </div>
    </div>
  );
};

const CompanyEventsAdmin = () => {
  const [events, setEvents] = useState(eventsData);
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleLike = (id) => {
    const updatedEvents = events.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDeleteConfirm = () => {
    const updatedEvents = events.filter(event => event.id !== selectedId);
    setEvents(updatedEvents);
    setOpen(false);
    setSuccessOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  return (
    <div className="company-events">
      {events.map(event => (
        <EventCard
          key={event.id}
          {...event}
          onLike={() => handleLike(event.id)}
          onDeleteClick={() => handleDeleteClick(event.id)}
        />
      ))}

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this event?
          </DialogContentText>
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
              The event has been successfully deleted.
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

export default CompanyEventsAdmin;
