import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CardContent, Typography, Box, Avatar } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { styled } from '@mui/system';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const rec1 = require('../../assets/Rectangle1.png');
const rec2 = require('../../assets/Rectangle2.png');
const defaultImage = require('../../assets/default-user.png'); // Path to default user image

const customLabelsPlugin = {
  id: 'customLabels',
  afterDatasetsDraw(chart) {
    const { ctx, data, chartArea: { top, bottom, left, right } } = chart;
    ctx.save();

    const labels = data.labels;
    const colors = data.datasets[0].backgroundColor;

    const labelBoxSize = 10;
    const labelPadding = 5;
    const labelFontSize = 12;

    const positionX = right + 20;
    let positionY = top + 20;

    labels.forEach((label, index) => {
      const yPos = positionY + index * (labelBoxSize + labelPadding);
      ctx.fillStyle = colors[index];
      ctx.fillRect(positionX, yPos, labelBoxSize, labelBoxSize);
      ctx.font = `${labelFontSize}px Arial`;
      ctx.fillStyle = '#000';
      ctx.fillText(label, positionX + labelBoxSize + labelPadding, yPos + labelBoxSize);
    });

    ctx.restore();
  }
};

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: (chart) => {
    const { ctx, width, height } = chart;
    const data = chart.data;

    ctx.restore();
    const fontSize = (height / 150).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';

    const text = data.ach_percentage ? `${data.ach_percentage}%` : 'N/A';
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

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

const GWPChart = ({ title, data, customLabels }) => (
  <Box sx={{ width: 300, padding: 2, marginTop: '-35px' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', marginLeft: '-25px'}}>
        <Doughnut 
          data={data} 
          options={{ 
            cutout: '70%', 
            plugins: { legend: { display: false } } 
          }} 
          plugins={[customLabelsPlugin, centerTextPlugin]} 
        />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant="body2" color="textSecondary">
          GWP Meter
        </Typography>
        {customLabels && customLabels.map((label, index) => (
          <Typography key={index} variant="body2" color="textSecondary">
            {label}
          </Typography>
        ))}
      </Box>
    </CardContent>
  </Box>
);

const AchieversCard = ({ achievers }) => (
  <Box sx={{ width: 300, padding: 2, marginTop: '-35px' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        {achievers.title}
      </Typography>
      <DigitalNumber component="div">
        {achievers.list.length}
      </DigitalNumber>
      <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
        Achieved
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'left', 
        marginTop: 2, 
        maxHeight: '150px', // Set a fixed height
        overflowY: 'auto',  // Enable vertical scrolling
      }}>
        {achievers.list.map((achiever, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 1 }}>
            <Avatar alt={achiever.agent_name} src={achiever.image || defaultImage} />
            <Typography variant="body1" fontWeight="bold">{achiever.agent_name}</Typography>
            <Typography variant="body2" color="textSecondary">Branch: {achiever.branch_name}</Typography>
            <Typography variant="body2" color="textSecondary">Rank: {achiever.national_rank}</Typography>
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
  const [dataLife, setDataLife] = useState(null);
  const [dataBranch, setDataBranch] = useState(null);
  const [showBranch, setShowBranch] = useState(false);
  const [currentCard, setCurrentCard] = useState('achievers'); // Initialize with 'achievers'
  const [achieverList, setAchieverList] = useState([
    { title: 'Top Ten Achievers', list: [] },
    { title: 'Life Members', list: [] },
    { title: 'TOT Achievers', list: [] }
  ]);
  const [isHovering, setIsHovering] = useState(false);
  const [achieverIndex, setAchieverIndex] = useState(0);

  // Get the current month as a number (1-12)
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Fetch LIFE GWP data from the API
    const fetchLifeData = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Gwp/GetMonthlyGWP?p_month=${currentMonth}`);
        const data = response.data;

        if (data && data.length > 0) {
          const lifeData = data[0];
          const achievement = parseFloat(lifeData.achievement);
          const target = parseFloat(lifeData.target);
          const ach_percentage = target > 0 ? ((achievement / target) * 100).toFixed(2) : '0.00';

          setDataLife({
            labels: ['Achievement', 'Target'],
            datasets: [
              {
                data: [achievement, target],
                backgroundColor: ['#FFB74D', '#42A5F5'],
                hoverBackgroundColor: ['#FFB74D', '#42A5F5'],
              },
            ],
            ach_percentage, // Add calculated percentage here
          });
        } else {
          console.error('LIFE GWP data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching LIFE GWP data from API:', error);
      }
    };

    // Fetch Branch GWP data from the API
    const fetchBranchData = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Gwp/GetMonthlyCumalative?p_month=${currentMonth}`);
        const data = response.data;

        if (data && data.length > 0) {
          const branchData = data[0];
          const achievement = parseFloat(branchData.achievement);
          const target = parseFloat(branchData.target);
          const ach_percentage = target > 0 ? ((achievement / target) * 100).toFixed(2) : '0.00';

          setDataBranch({
            labels: ['Achievement', 'Target'],
            datasets: [
              {
                data: [achievement, target],
                backgroundColor: ['#4DB6AC', '#42A5F5'],
                hoverBackgroundColor: ['#4DB6AC', '#42A5F5'],
              },
            ],
            ach_percentage, // Add calculated percentage here
          });
        } else {
          console.error('Branch GWP data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Branch GWP data from API:', error);
      }
    };

    fetchLifeData();
    fetchBranchData();
  }, [currentMonth]);

  useEffect(() => {
    // Fetch Top Achievers data
    const fetchTopAchievers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetIslandRankMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            { title: 'Top Ten Achievers', list: data.map((item) => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) },
            prev[1],
            prev[2],
          ]);
        } else {
          console.error('Top Achievers data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Top Achievers data from API:', error);
      }
    };

    // Fetch Life Members data
    const fetchLifeMembers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetLifeMemberMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            prev[0],
            { title: 'Life Members', list: data.map((item) => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) },
            prev[2],
          ]);
        } else {
          console.error('Life Members data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Life Members data from API:', error);
      }
    };

    // Fetch TOT Achievers data
    const fetchTOTAchievers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetTOTRankMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            prev[0],
            prev[1],
            { title: 'TOT Achievers', list: data.map((item) => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) },
          ]);
        } else {
          console.error('TOT Achievers data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching TOT Achievers data from API:', error);
      }
    };

    fetchTopAchievers();
    fetchLifeMembers();
    fetchTOTAchievers();
  }, [currentYear]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setShowBranch(prev => !prev);
      }
    }, 3000); // Flip every 3 seconds if not hovering

    return () => clearInterval(interval);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleCardClick = () => {
    setCurrentCard(prev => (prev === 'achievers' ? 'event' : 'achievers')); // Toggle between 'achievers' and 'event'
  };

  const handleAchieverClick = () => {
    setAchieverIndex(prev => (prev + 1) % 3); // Cycle through Top, Life Members, TOT achievers
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} 
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
        <FlippingCard showBack={showBranch}>
          <div className="inner">
            <div className="front">
              {dataLife && <GWPChart title="LIFE GWP" data={dataLife} />}
            </div>
            <div className="back">
              {dataBranch && <GWPChart title="Branch GWP" data={dataBranch}  />}
            </div>
          </div>
        </FlippingCard>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} onClick={handleCardClick}>
        <FlippingCard showBack={false} onClick={handleAchieverClick}>
          <div className="inner">
            <div className="front">
              {currentCard === 'achievers' ? <AchieversCard achievers={achieverList[achieverIndex]} /> : <EventCard />}
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
  );
};

export default GWPChartsContainer;
