import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/CompanyEventscard.css';

// Sample event data
const eventsData_FloodDonation = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    likes: 85,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    likes: 85,
  },
  // Add more event data here...
];

const eventsData_Life_Congress_2024 = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    likes: 85,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    likes: 85,
  },
  // Add more event data here...
];

const eventsData_Poson_Poya_CSR_Initiatives = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    likes: 85,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    likes: 85,
  },
  // Add more event data here...
];

const eventsData_SLIC_Life_Call_Center = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    likes: 85,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    likes: 85,
  },
  // Add more event data here...
];

const eventsData_subha_pathum = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    likes: 85,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    likes: 85,
  },
  // Add more event data here...
];

const eventsData_Super_woman_awards = [
  {
    id: 1,
    image: require('../../assets/SLIC_Events/Life congress/themenight/1.JPG'),
    likes: 85,
  },
  {
    id: 2,
    image: require('../../assets/SLIC_Events/Life congress/Day1/1.JPG'),
    likes: 85,
  },
  {
    id: 3,
    image: require('../../assets/SLIC_Events/Life congress/1.JPG'),
    likes: 85,
  },
  {
    id: 4,
    image: require('../../assets/SLIC_Events/poson poya/1-min.png'),
    likes: 85,
  },
  {
    id: 5,
    image: require('../../assets/SLIC_Events/suba pathum/1-min.jpg'),
    likes: 85,
  },
  {
    id: 6,
    image: require('../../assets/SLIC_Events/super woman/1.jpg'),
    likes: 85,
  },
  {
    id: 7,
    image: require('../../assets/SLIC_Events/life call center/1-min.png'),
    likes: 85,
  },
  {
    id: 8,
    image: require('../../assets/SLIC_Events/flood donation/1-min.jpg'),
    likes: 85,
  },
  // Add more event data here...
];

const EventCard = ({ id, image, likes, onLike }) => (
  <div className="event-card">
    <Link to={`/detailed-events/${id}`}>
      <img src={image} alt={`Event ${id}`} className="event-image" />
    </Link>
    <div className="event-info">
      <div className="event-likes">
        <span className="like-icon" onClick={onLike}>👍</span>
        <span className="like-count">{likes}</span>
      </div>
    </div>
  </div>
);

const CompanyEvents = () => {
  const [eventsFloodDonation, setEventsFloodDonation] = useState(eventsData_FloodDonation);
  const [eventsLifeCongress2024, setEventsLifeCongress2024] = useState(eventsData_Life_Congress_2024);
  const [eventsPosonPoyaCSRInitiatives, setEventsPosonPoyaCSRInitiatives] = useState(eventsData_Poson_Poya_CSR_Initiatives);
  const [eventsSLICLifeCallCenter, setEventsSLICLifeCallCenter] = useState(eventsData_SLIC_Life_Call_Center);
  const handleLike_FloodDonation = (id) => {
    const updatedEvents = eventsFloodDonation.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEventsFloodDonation(updatedEvents);
  };

  const handleLike_LifeCongress2024 = (id) => {
    const updatedEvents = eventsLifeCongress2024.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEventsLifeCongress2024(updatedEvents);
  };

  const handleLike_PosonPoyaCSRInitiatives = (id) => {
    const updatedEvents = eventsPosonPoyaCSRInitiatives.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEventsPosonPoyaCSRInitiatives(updatedEvents);
  };

  const handleLike_SLICLifeCallCenter = (id) => {
    const updatedEvents = eventsPosonPoyaCSRInitiatives.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEventsSLICLifeCallCenter(updatedEvents);
  };


  return (
    <div className="company-events">
      <h1>Flood Donation</h1>
      <div className="event-container">
        {eventsFloodDonation.map(event => (
          <EventCard
            key={event.id}
            {...event}
            onLike={() => handleLike_FloodDonation(event.id)}
          />
        ))}
      </div>
      <h1>Life Congress 2024</h1>
      <div className="event-container">
        {eventsLifeCongress2024.map(event => (
          <EventCard
            key={event.id}
            {...event}
            onLike={() => handleLike_LifeCongress2024(event.id)}
          />
        ))}
      </div>

      <h1>Poson Poya CSR Initiatives</h1>
      <div className="event-container">
        {eventsLifeCongress2024.map(event => (
          <EventCard
            key={event.id}
            {...event}
            onLike={() => handleLike_PosonPoyaCSRInitiatives(event.id)}
          />
        ))}
      </div>

      <h1>SLIC Life Call Center</h1>
      <div className="event-container">
        {eventsLifeCongress2024.map(event => (
          <EventCard
            key={event.id}
            {...event}
            onLike={() => handleLike_SLICLifeCallCenter(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyEvents;
