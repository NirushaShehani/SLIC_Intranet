import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../../Styles/HRNotices.css';
import { BASE_URL, ENDPOINTS } from '../../Services/ApiConfig'; // Ensure this path is correct based on your setup

const HRNotices = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  // Fetch all active notices
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
    <div>
      <h2 className="hr-notice-head">Active Notices</h2>
      <Container className="transparent-container">
        <Box className="box-content">
          <ul className="notice-list">
            {notices.map((notice) => (
              <li key={notice.p_id} className="notice-item">
                <button className="notice-button">
                  <h3 className="notice-topic">{notice.n_title}</h3>
                  <p className="notice-content">{notice.n_desc}</p>
                  <p className="notice-date" style={{ color: "black" }}>{new Date(notice.n_date).toLocaleDateString()}</p>
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
