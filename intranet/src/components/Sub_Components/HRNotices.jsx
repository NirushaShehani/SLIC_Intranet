import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../../Styles/HRNotices.css';
import { BASE_URL, ENDPOINTS, Find_And_Replace } from '../../Services/ApiConfig';
import brokenImageUrl from '../../assets/brokenImage.png'

const HRNotices = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);
  
  // Placeholder image for broken images
  //const brokenImageUrl = ''; 

  // Fetch notices data
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
          setError('Failed to fetch notices');
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
        setError('Error fetching notices');
      }
    };

    fetchNotices();
  }, []);

  // Dynamic Image URL pattern based on index
  const getImageUrl = (index) => `${Find_And_Replace}/Images/Notices/${index + 1}.jpg`;

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="hr-notice-head">Active Notices</h2>
      <Container className="transparent-container">
        <Box className="box-content">
          <ul className="notice-list">
            {notices.map((notice, index) => (
              <li key={notice.p_id} className="notice-item">
                <button className="notice-button">
                  <h3 className="notice-topic">{notice.n_title}</h3>
                  
                  {/* Image with custom placeholder for broken images */}
                  <img
                    style={{ marginLeft: "20%", maxWidth: "50%" }}
                    src={getImageUrl(index)}
                    className="notice-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = brokenImageUrl; }} // Set the placeholder image on error
                  />
                  
                  <pre className="notice-content">{notice.n_desc}</pre>
                  <p className="notice-date" style={{ color: "black" }}>
                    {new Date(notice.n_date).toLocaleDateString()}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </div>
  );
};

export default HRNotices;
