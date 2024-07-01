import React from 'react';
import '../../Styles/CompanyEventscard.css';

const eventsData = [
  {
    id: 1,
    image: 'path-to-image1.jpg',
    title: 'A heartfelt congratulations to all our MDRT Achievers and Producers of SLICLife!',
    likes: 26,
  },
  {
    id: 2,
    image: 'path-to-image2.jpg',
    title: 'Any mechanical keyboard enthusiasts in design?',
    likes: 85,
  },
  {
    id: 3,
    image: 'path-to-image3.jpg',
    title: 'Understanding color theory: the color wheel and finding',
    likes: 85,
  },
  {
    id: 4,
    image: 'path-to-image4.jpg',
    title: 'How to design a product that can grow itself 10x in year:',
    likes: 85,
  },
  {
    id: 5,
    image: 'path-to-image5.jpg',
    title: 'The More Important the Work, the More Important the Rest',
    likes: 85,
  },
  {
    id: 6,
    image: 'path-to-image6.jpg',
    title: 'Far far away, behind the word mountains, far from the countries Vokalia',
    likes: 85,
  },
  {
    id: 7,
    image: 'path-to-image7.jpg',
    title: 'How to design a product that can grow itself 10x in year:',
    likes: 85,
  },
  {
    id: 8,
    image: 'path-to-image8.jpg',
    title: 'The key to surviving this new industrial revolution is leading it.',
    likes: 85,
  },
  // Add more event data here...
];

const EventCard = ({ image, title, likes }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-info">
        <p className="event-title">{title}</p>
        <div className="event-likes">
          <span className="like-icon">👍</span>
          <span className="like-count">{likes}</span>
        </div>
      </div>
    </div>
  );
};

const CompanyEvents = () => {
  return (
    <div className="company-events">
      {eventsData.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default CompanyEvents;
