import React, { useState } from 'react';
import DrawerMenu from '../../Sub_Components/DrawerMenu';
import '../../../Styles/FullNoticesPage.css';
import { Link } from 'react-router-dom';
import '../../../Styles/CompanyEventscard.css'
const eventsData = [
  {
    id: 1,
    image: 'http://172.24.90.80:10157/Images/Events/EasyClaim.jpg',
    likes: 26,
  },
  {
    id: 2,
    image: 'http://localhost:3001/images/slot5/2.jpg',
    likes: 85,
  },
  {
    id: 3,
    image: 'http://localhost:3001/images/slot5/3.jpg',
    likes: 85,
  },
  {
    id: 4,
    image: 'http://localhost:3001/images/slot5/4.jpg',
    likes: 85,
  },
  {
    id: 5,
    image: 'http://localhost:3001/images/slot5/5.jpg',
    likes: 85,
  },
  {
    id: 6,
    image: 'http://localhost:3001/images/slot5/6.jpg',
    likes: 85,
  }
];

const EventCard = ({ id, image, title, likes, onLike }) => {
  return (
    <div className="full-notices-page">
      
      <div className="company-events-container">
      <div className="event-card">
        <img src={image} alt={title} className="event-image" />
      <div className="event-info">
        <div className="event-likes">
          <span className="like-icon" onClick={onLike}>👍</span>
          <span className="like-count">{likes}</span>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

const CompanyEvents = () => {

  const [events, setEvents] = useState(eventsData);

  const handleLike = (id) => {
    const updatedEvents = events.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="company-events">
      {events.map(event => (
        <EventCard
          key={event.id}
          {...event}
          onLike={() => handleLike(event.id)}
        />
      ))}
    </div>
  );
};

export default CompanyEvents;

