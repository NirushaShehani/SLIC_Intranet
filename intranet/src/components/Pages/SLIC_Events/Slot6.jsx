import React, { useState, useEffect } from 'react';
import DrawerMenu from '../../Sub_Components/DrawerMenu';
import '../../../Styles/FullNoticesPage.css';
import { Link } from 'react-router-dom';
import '../../../Styles/CompanyEventscard.css';
import { BASE_URL, ENDPOINTS } from "../../../Services/ApiConfig"; 
import { Find_And_Replace} from "../../../Services/ApiConfig";
import axios from 'axios';

const eventsData = [
  {
    id: 1,
    image: `${Find_And_Replace}/Images/Events/slot6/1.jpg`,
    likes: 26,
  },
  {
    id: 2,
    image: `${Find_And_Replace}/Images/Events/slot6/2.jpg`,
    likes: 85,
  },
  {
    id: 3,
    image: `${Find_And_Replace}/Images/Events/slot6/3.jpg`,
    likes: 85,
  },
  {
    id: 4,
    image: `${Find_And_Replace}/Images/Events/slot6/4.jpg`,
    likes: 85,
  },
  {
    id: 5,
    image: `${Find_And_Replace}/Images/Events/slot6/5.jpg`,
    likes: 85,
  },
  {
    id: 6,
    image: `${Find_And_Replace}/Images/Events/slot6/6.jpg`,
    likes: 85,
  }
];

const EventCard = ({ id, image, likes, onLike }) => {
  return (
    <div className="event-card">
      <img src={image} alt={`Event ${id}`} className="event-image" />
    </div>
  );
};

const CompanyEvents = () => {
  const [events, setEvents] = useState(eventsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDesc, setEventDesc] = useState('');

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.EventGallery}`, {
          p_id: '006',
          p_active: 'Y'
        });

        if (response.status === 200 && response.data.length > 0) {
          const eventData = response.data[0];
          setEventTitle(eventData.e_title);
          setEventDesc(eventData.e_desc);
        } else {
          setError('No event data found');
        }
      } catch (error) {
        setError('Error fetching event data');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, []);

  const handleLike = (id) => {
    const updatedEvents = events.map(event => event.id === id ? { ...event, likes: event.likes + 1 } : event);
    setEvents(updatedEvents);
  };

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="company-events-page">
      {/* Centered Header Section */}
      <div className="event-details-header">
        <h1 className="event-title">{eventTitle}</h1>
        <p className="event-description">{eventDesc}</p>
      </div>

      <div className="company-events">
        {events.map(event => (
          <EventCard
            key={event.id}
            {...event}
            onLike={() => handleLike(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyEvents;