import React, { useEffect, useState } from 'react';
import '../../Styles/CompanyEvents.css';
import '../../Styles/Event_Gallery.css';
import '../../Styles/Responsive_Event_Gallery_css.module.css';
import { Link } from 'react-router-dom';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";
import { Find_And_Replace} from "../../Services/ApiConfig";
import axios from 'axios';

const CompanyEvents = () => {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingNotices, setLoadingNotices] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);

  // Fetch both notices and events data from the API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.CompanyNotices}`, {
          p_id: "",
          p_active: "Y",
          n_title: "",
          n_desc: "",
          n_date: ""
        });

        if (response.status === 200) {
          const sortedNotices = (response.data || []).sort((a, b) => new Date(b.n_date) - new Date(a.n_date));
          setNotices(sortedNotices);
        } else {
          console.error('Failed to fetch notices');
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      } finally {
        setLoadingNotices(false); // Set loading to false even on error
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.EventGallery}`, {
          p_id: '',
          p_active: 'Y'
        });

        if (response.status === 200) {
          setEvents(response.data);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoadingEvents(false); // Set loading to false even on error
      }
    };

    // Call both fetch functions
    fetchNotices();
    fetchEvents();
  }, []);

  // Helper function to find the event title based on slot_no
  const getEventTitleBySlot = (slotNo) => {
    const event = events.find((event) => event.slot_no.trim() === slotNo);
    return event ? event.e_title : 'Event Title Not Available';
  };

  // Check if data is still loading
  if (loadingNotices || loadingEvents) {
    return <p style={{ color: 'white', fontFamily: "Oxygen" }}>Loading Data...</p>;
  }

  return (
    <div className="CompanyEvents">
      {/* Events Gallery */}
      <h2 className="notice-hd">Events Gallery</h2>
      <div className="album">
        <div className="responsive-container-block bg">
          <div className="responsive-container-block img-cont">
            <Link to="/Slot1">
              <img
                src={`${Find_And_Replace}/Images/Events/slot1/1.jpg?cacheBust=${Date.now()}`}
                className="img img-big"
                alt="Event Slot 1"
                title={getEventTitleBySlot('001')}
              />
            </Link>
            <Link to="/Slot2">
              <img
                src={`${Find_And_Replace}/Images/Events/slot2/1.png?cacheBust=${Date.now()}`}
                className="img img-big img-last"
                alt="Event Slot 2"
                title={getEventTitleBySlot('002')}
              />
            </Link>
          </div>
          <div className="responsive-container-block img-cont">
            <Link to="/Slot3">
              <img
                src={`${Find_And_Replace}/Images/Events/slot3/1.jpg?cacheBust=${Date.now()}`}
                className="img img-big"
                alt="Event Slot 3"
                title={getEventTitleBySlot('003')}
              />
            </Link>
            <Link to="/Slot4">
              <img
                src={`${Find_And_Replace}/Images/Events/slot4/1.jpg?cacheBust=${Date.now()}`}
                className="img img-big img-last"
                alt="Event Slot 4"
                title={getEventTitleBySlot('004')}
              />
            </Link>
          </div>
          <div className="responsive-container-block img-cont">
            <Link to="/Slot5">
              <img
                src={`${Find_And_Replace}/Images/Events/slot5/1.png?cacheBust=${Date.now()}`}
                className="img"
                alt="Event Slot 5"
                title={getEventTitleBySlot('005')}
              />
            </Link>
            <Link to="/Slot6">
              <img
                src={`${Find_And_Replace}/Images/Events/slot6/1.jpg?cacheBust=${Date.now()}`}
                className="img img-big"
                alt="Event Slot 6"
                title={getEventTitleBySlot('006')}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Company Notices */}
      <br />
      <h2 className="notice-head">Company Notices</h2>
      {notices.slice(0, 3).map((notice) => (
        <div key={notice.p_id}>
          <p className="sub-notice-hd">{notice.n_title}</p>
         
          <p className="notice-date">{new Date(notice.n_date).toLocaleDateString()}</p>
          <hr />
        </div>
      ))}
      <div className="link-container">
        <Link to="/full-notices" className="read-more-link">Read more...</Link>
      </div>
    </div>
  );

};

export default CompanyEvents;
