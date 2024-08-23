import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/CompanyEventscard.css';

const eventsData = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    title: 'A heartfelt congratulations to all our MDRT Achievers and Producers of SLICLife!',
    likes: 26,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    title: 'Any mechanical keyboard enthusiasts in design?',
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    title: 'Understanding color theory: the color wheel and finding',
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    title: 'How to design a product that can grow itself 10x in year:',
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    title: 'The More Important the Work, the More Important the Rest',
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    title: 'Far far away, behind the word mountains, far from the countries Vokalia',
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    title: 'How to design a product that can grow itself 10x in year:',
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    title: 'The key to surviving this new industrial revolution is leading it.',
    likes: 85,
  },
  // Add more event data here...
];

const EventCard = ({ id, image, title, likes, onLike }) => {
  return (
    <div className="event-card">
      <Link to={`/detailed-events/${id}`}>
        <img src={image} alt={title} className="event-image" />
      </Link>
      <div className="event-info">
        <p className="event-title">{title}</p>
        <div className="event-likes">
          <span className="like-icon" onClick={onLike}>👍</span>
          <span className="like-count">{likes}</span>
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
