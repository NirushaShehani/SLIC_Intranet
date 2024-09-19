import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/CompanyEvents.css';
import '../../Styles/Event_Gallery.css';
import '../../Styles/Responsive_Event_Gallery_css.module.css';
import { BASE_URL, ENDPOINTS } from '../../Services/ApiConfig'; // Ensure this path is correct

const CompanyEvents = () => {
  const [notices, setNotices] = useState([]);

  // Fetch latest active notices
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.CompanyNotices}`, {
          p_id: "",
          p_active: "Y", // Fetch only active notices
          n_title: "",
          n_desc: "",
          n_date: "",
        });

        if (response.status === 200) {
          // Sort notices by date, assuming `n_date` is a valid date string
          const sortedNotices = (response.data || []).sort((a, b) => new Date(b.n_date) - new Date(a.n_date));
          setNotices(sortedNotices);
        } else {
          console.error('Failed to fetch notices');
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="CompanyEvents">
      <h2 className="notice-hd">Events Gallery</h2>
      {/* Events Gallery */}
      <div className="album">
        <div className="responsive-container-block bg">
          <div className="responsive-container-block img-cont">
            <Link to="/Slot1">
              <img src="http://localhost:3001/images/slot1/1.jpg" className="img img-big" alt="Event Slot 1" />
            </Link>
            <Link to="/Slot2">
              <img src="http://localhost:3001/images/slot2/1.jpg" className="img img-big img-last" alt="Event Slot 2" />
            </Link>
          </div>
          <div className="responsive-container-block img-cont">
            <Link to="/Slot3">
              <img src="http://localhost:3001/images/slot3/1.png" className="img img-big" alt="Event Slot 3" />
            </Link>
            <Link to="/Slot4">
              <img src="http://localhost:3001/images/slot4/1.png" className="img img-big img-last" alt="Event Slot 4" />
            </Link>
          </div>
          <div className="responsive-container-block img-cont">
            <Link to="/Slot5">
              <img src="http://localhost:3001/images/slot5/1.jpg" className="img" alt="Event Slot 5" />
            </Link>
            <Link to="/Slot6">
              <img src="http://localhost:3001/images/slot6/1.jpg" className="img img-big" alt="Event Slot 6" />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Company Notices */}
      <h2 className="notice-head">Company Notices</h2>
      {notices.slice(0, 3).map((notice) => ( // Display the top 3 latest notices
        <div key={notice.p_id}>
          <p className="sub-notice-hd">{notice.n_title}</p>
          <p className="notice">{notice.n_desc}</p>
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
