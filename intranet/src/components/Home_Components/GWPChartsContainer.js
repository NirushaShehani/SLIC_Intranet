import React, { useState, useEffect } from 'react';
import { CardContent, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { BASE_URL, ENDPOINTS } from "../services/apiConfig"; // Adjust this path according to your project structure
import LifeGWP from './Home_Components/LifeGWP';

const rec1 = require('../../assets/Rectangle1.png');
const rec2 = require('../../assets/Rectangle2.png');

const FlippingCard = styled(Box)(({ showBack }) => ({
  width: 300,
  height: 450,
  perspective: 1000,
  '& .inner': {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 1s',
    transformStyle: 'preserve-3d',
    transform: showBack ? 'rotateY(180deg)' : 'rotateY(0deg)',
  },
  '& .front, & .back': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  '& .back': {
    transform: 'rotateY(180deg)',
  },
}));

const DigitalNumber = styled(Typography)(({ theme }) => ({
  fontFamily: 'Digital-7, monospace',
  fontSize: '5rem',
  textAlign: 'center',
  color: '#000',
}));

const AchieversCard = ({ achievers }) => (
  <Box sx={{ width: 300, padding: 2, marginTop: '-35px' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        MDRT Achievers
      </Typography>
      <DigitalNumber component="div">
        165
      </DigitalNumber>
      <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
        Achieved
      </Typography>
      <Typography variant="h6" component="div" sx={{ textAlign: 'left', marginTop: 2 }}>
        {achievers.title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: 2 }}>
        {achievers.list.map((achiever, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Avatar alt={achiever.name} src={achiever.image} />
            <Box sx={{ marginLeft: 2, textAlign: 'left' }}>
              <Typography variant="body1">{achiever.name}</Typography>
              <Typography variant="body2" color="textSecondary">{achiever.location}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Box>
);

const EventCard = () => {
  const [currentImage, setCurrentImage] = useState(rec1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === rec1 ? rec2 : rec1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const eventInfo = currentImage === rec1 
    ? { date: 'June 9-12, 2024', location: 'Vancouver, British Columbia, Canada' }
    : { date: 'June 22-25, 2025', location: 'Miami Beach, Florida, USA' };

  return (
    <Box sx={{ width: 300, padding: 2, marginTop: '-35px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '390px' }}>
          <img src={currentImage} alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8, margin: '2px', width: '300px', marginLeft: '-66px', marginRight: '-34px' }} />
        </Box>
        <Box sx={{ textAlign: 'left', marginTop: 2 }}>
          <Typography variant="body2" color="textSecondary" fontWeight={'bold'}>
            {eventInfo.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight={'bold'}>
            {eventInfo.location}
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};

const GWPChartsContainer = () => {
  const [showBranch, setShowBranch] = useState(false);
  const [currentCard, setCurrentCard] = useState('achievers'); // Initialize with 'achievers'
  const [achieverList, setAchieverList] = useState(0); // 0 for Top, 1 for Branch, 2 for Regional
  const [isHovering, setIsHovering] = useState(false);
  const [topAchievers, setTopAchievers] = useState(null);
  const [cotAchievers, setCotAchievers] = useState(null);
  const [totAchievers, setTotAchievers] = useState(null);
  const [regionalAchievers, setRegionalAchievers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem('accessToken');

        if (!token) {
          // Set a default token or handle the absence of the token here
          token = 'default-token';  // This should be replaced with an actual default or handled appropriately
          localStorage.setItem('accessToken', token);
        }

        const axiosConfig = {
          headers: { Authorization: `Bearer ${token}` },
          timeout: 5000 // Set a 5 seconds timeout
        };

        const responseTop = await axios.get(`${BASE_URL}${ENDPOINTS.NationalAchievers}`, axiosConfig);
        const responseCot = await axios.get(`${BASE_URL}${ENDPOINTS.COTRANK}`, axiosConfig);
        const responseTot = await axios.get(`${BASE_URL}${ENDPOINTS.TOTRANK}`, axiosConfig);
        const responseRegional = await axios.get(`${BASE_URL}${ENDPOINTS.LIFE_MEMBER_MDRT}`, axiosConfig);

        setTopAchievers({
          title: 'National Top Achievers',
          list: responseTop.data.map(item => ({
            name: item.agent_name.trim(),
            location: item.branch_name,
            image: 'https://via.placeholder.com/150',
          })),
        });
        setCotAchievers({
          title: 'COT Achievers',
          list: responseCot.data.map(item => ({
            name: item.agent_name.trim(),
            location: item.branch_name,
            image: 'https://via.placeholder.com/150',
          })),
        });
        setTotAchievers({
          title: 'TOT Achievers',
          list: responseTot.data.map(item => ({
            name: item.agent_name.trim(),
            location: item.branch_name,
            image: 'https://via.placeholder.com/150',
          })),
        });
        setRegionalAchievers({
          title: 'Regional Top Achievers',
          list: responseRegional.data.map(item => ({
            name: item.agent_name.trim(),
            location: item.branch_name,
            image: 'https://via.placeholder.com/150',
          })),
        });

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setShowBranch(prev => !prev);
      }
    }, 3000); // Flip every 30 seconds if not hovering

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClickBranch = () => {
    setShowBranch(prev => !prev);
  };

  const handleCardClick = () => {
    setCurrentCard(prev => (prev === 'achievers' ? 'event' : 'achievers')); // Toggle between 'achievers' and 'event'
  };

  const handleAchieverClick = () => {
    setAchieverList(prev => (prev + 1) % 4); // Cycle through Top, Branch, Regional, COT, TOT achievers
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">Error loading data</Typography>
      </Box>
    );
  }

  const achieversList = [topAchievers, cotAchievers, totAchievers, regionalAchievers];

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} 
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
        <FlippingCard showBack={showBranch}>
          <div className="inner">
            <div className="front">
              <LifeGWP />
            </div>
            <div className="back">
              <LifeGWP />
            </div>
          </div>
        </FlippingCard>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} onClick={handleCardClick}>
        <FlippingCard showBack={false} onClick={handleAchieverClick}>
          <div className="inner">
            <div className="front">
              {currentCard === 'achievers' ? <AchieversCard achievers={achieversList[achieverList]} /> : <EventCard />}
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
  );
};

export default GWPChartsContainer;
