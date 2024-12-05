import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../../Styles/HRNotices.css';
import { BASE_URL, ENDPOINTS, Find_And_Replace } from '../../Services/ApiConfig';
import brokenImageUrl from '../../assets/brokenImage.png';
import ReactPlayer from 'react-player';

const HRNotices = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [videoState, setVideoState] = useState({}); // Object to manage video state for each notice
  const [error, setError] = useState(null);

  // Fetch notices data
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${ENDPOINTS.CompanyNotices}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            p_id: "",
            p_active: "Y",
            n_title: "",
            n_desc: "",
            n_date: ""
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const sortedNotices = (data || []).sort((a, b) => new Date(b.n_date) - new Date(a.n_date));
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

  const getImageUrl = (index) => `${Find_And_Replace}/Images/Notices/${index + 1}.jpg`;
  const getVideoUrl = (index) => `${Find_And_Replace}/Video/Notices/${index + 1}.mp4`;

  const toggleVideo = (index) => {
    // Toggle video state for the specific notice
    setVideoState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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

                  {/* Image for the notice */}
                  <img
                    style={{ marginLeft: "20%", maxWidth: "50%" }}
                    src={getImageUrl(index)}
                    className="notice-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = brokenImageUrl; }}
                    alt={`Notice ${index + 1}`}
                  />

                  <pre className="notice-content">{notice.n_desc}</pre>
                  <p className="notice-date" style={{ color: "black" }}>
                    {new Date(notice.n_date).toLocaleDateString()}
                  </p>

                  {/* Show video player for the first two notices */}
                  {index < 2 && (
                    <>
                      {!videoState[index] ? (
                        <p
                          onClick={() => toggleVideo(index)}
                          style={{ cursor: 'pointer', color: 'blue' }}
                        >
                          Watch Video...
                        </p>
                      ) : (
                        <ReactPlayer
                          url={getVideoUrl(index)}
                          controls
                          width="92%"
                          style={{ marginTop: "20px" }}
                        />
                      )}
                    </>
                  )}
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
