import React, { useState, useEffect } from 'react';
import DrawerMenu from '../../Sub_Components/DrawerMenu';
import '../../../Styles/FullNoticesPage.css';
import { Link } from 'react-router-dom';
import '../../../Styles/CompanyEventscard.css';
import { BASE_URL, ENDPOINTS } from "../../../Services/ApiConfig"; // Importing API config
import axios from 'axios'; // Importing axios

const eventsData = [
  {
    id: 1,
    image: 'http://172.24.90.80:10157/Images/Events/slot1/1.jpg',
    likes: 26,
  },
  {
    id: 2,
    image: 'http://172.24.90.80:10157/Images/Events/slot1/2.jpg',
    likes: 85,
  },
  {
    id: 3,
    image: 'http://172.24.90.80:10157/Images/Events/slot1/3.jpg',
    likes: 85,
  },
  {
    id: 4,
    image: 'http://172.24.90.80:10157/Images/Events/slot1/4.jpg',
    likes: 85,
  },
  {
    id: 5,
    image: 'http://172.24.90.80:10157/Images/Events/slot1/5.jpg',
    likes: 85,
  },
  {
    id: 6,
    image: 'http://172.24.90.80:10157/Images/Events/slot1/6.jpg',
    likes: 85,
  }
];

// EventCard Component
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

// CompanyEvents Component
const CompanyEvents = () => {
  const [events, setEvents] = useState(eventsData); // Keep your event cards as it is
  const [loading, setLoading] = useState(true); // Loading state for API
  const [error, setError] = useState(null); // Error state
  const [eventTitle, setEventTitle] = useState(''); // State to hold the event title from API
  const [eventDesc, setEventDesc] = useState(''); // State to hold the event description from API

  useEffect(() => {
    // Fetch title and description from the API for slot_no: "001"
    const fetchEventDetails = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.EventGallery}`, {
          p_id: '001', // Request body for fetching event with slot_no: "001"
          p_active: 'Y'
        });

        if (response.status === 200 && response.data.length > 0) {
          const eventData = response.data[0]; // Assuming the first item in the response is the event we need
          setEventTitle(eventData.e_title); // Set event title
          setEventDesc(eventData.e_desc); // Set event description
        } else {
          console.error('No event data found');
          setError('No event data found');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Error fetching event data');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, []);

  // Define handleLike function to increment the like count
  const handleLike = (id) => {
    const updatedEvents = events.map(event => {
      if (event.id === id) {
        return { ...event, likes: event.likes + 1 };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="company-events">
      {/* Display the event title and description at the top */}
      <div className="event-details-header">
        <h1>{eventTitle}</h1>
        <p>{eventDesc}</p>
      </div>

      {/* Display the 6 EventCards as they are */}
      {events.map(event => (
        <EventCard
          key={event.id}
          {...event}
          onLike={() => handleLike(event.id)} // Passing handleLike to EventCard
        />
      ))}
    </div>
  );
};

export default CompanyEvents;
