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

// Useable plugins for doughnut chart
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
// Useable plugins for doughnut chart

// Flipping card components for GWP Charts
const FlippingCard = styled(Box)(({ showBack }) => ({
  width: 250,
  height: 375,
  perspective: 800,
  transition: 'transform 1s ease-in-out', // Smooth transition effect
  '& .inner': {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 1s ease-in-out', // Smooth transition effect
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
// Flipping card components for GWP Charts
// Digital number component
const DigitalNumber = styled(Typography)(({ theme }) => ({
  fontFamily: 'Digital-7, monospace',
  fontSize: '5rem',
  textAlign: 'center',
  color: '#000',
}));
// Digital number component

// GWP Chart component 
const GWPChart = ({ title, data, customLabels }) => (
  <Box sx={{ width: 250, padding: 1, marginTop: '-30px' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 1.5 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', marginLeft: '-20px'}}>
        <Doughnut 
          data={data} 
          options={{ 
            cutout: '70%', 
            plugins: { legend: { display: false } } 
          }} 
          plugins={[customLabelsPlugin, centerTextPlugin]} 
        />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 1.5 }}>
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
// GWP Chart component 

// Achievers card component
const AchieversCard = ({ achievers }) => (
  <Box sx={{ width: 250, padding: 1, marginTop: '-30px' }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 1.5 }}>
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
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', marginBottom: 1.5 }}>
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
// Achievers card component

// Event details card component
const EventCard = () => {
  const [currentImage, setCurrentImage] = useState(rec1);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === rec1 ? rec2 : rec1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const eventInfo = currentImage === rec1 
    ? { date: 'June 9-12, 2024', location: 'Vancouver, BC, Canada' }
    : { date: 'June 22-25, 2025', location: 'Miami Beach, FL, USA' };

  return (
    <Box sx={{ width: 250, padding: 2, marginTop: '-32px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', height: '300px', overflow: 'hidden', borderRadius: 2, width: '-200px', marginLeft: '-32px'}} onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
          <img src={currentImage} alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
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
// Event details card component
// -----------------------------------------------------------------------Backend Data fetching------------------------------------------------------
//MDRT Achievers/ COT Achievers/ TOT achievers/ Life Member card
//Cumulative GWP/ Monthly GWP dougnut chart components
const GWPChartsContainer = () => {
  const [MontlyDataBranch, setMontlyDataBranch] = useState(null);
  const [MontlyCumalativeDataBranch, setMontlyCumalativeDataBranch] = useState(null);
  const [achieverList, setAchieverList] = useState([
    { title: 'MDRT Achievers', list: [] },
    { title: 'Life Members', list: [] },
    { title: 'TOT Achievers', list: [] },
    { title: 'COT Achievers', list: [] }
  ]);
  const [isHovering, setIsHovering] = useState(false);
  const [achieverIndex, setAchieverIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0); // New state to track the slideshow index
  const [showBranch, setShowBranch] = useState(false); // State to control chart flipping

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  // Fetch Life GWP data for doughnut charts
  useEffect(() => {
    const fetchLifeMonthlyData = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Gwp/GetMonthlyGWP?p_month=${currentMonth}`);
        const data = response.data;

        if (data && data.length > 0) {
          const lifeData = data[0];
          const achievement = parseFloat(lifeData.achievement);
          const target = parseFloat(lifeData.target);
          const ach_percentage = target > 0 ? ((achievement / target) * 100).toFixed(2) : '0.00';

          setMontlyDataBranch({
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
          console.error('Monthly Cumulative GWP data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Monthly Cumulative GWP data from API:', error);
      }
    };

    const fetchLifeMonthlyCumulativeData = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Gwp/GetMonthlyCumalative?p_month=${currentMonth}`);
        const data = response.data;

        if (data && data.length > 0) {
          const branchData = data[0];
          const achievement = parseFloat(branchData.achievement);
          const target = parseFloat(branchData.target);
          const ach_percentage = target > 0 ? ((achievement / target) * 100).toFixed(2) : '0.00';

          setMontlyCumalativeDataBranch({
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
          console.error('Monthly GWP data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Monthly GWP data from API:', error);
      }
    };

    fetchLifeMonthlyData();
    fetchLifeMonthlyCumulativeData();
  }, [currentMonth]);

  // Fetch Achievers data
  useEffect(() => {
    const fetchAllMDRTAchievers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetIslandRankMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList(prev => [
            { title: 'MDRT Achievers', list: data.map(item => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) },
            prev[1],
            prev[2],
            prev[3]
          ]);
        } else {
          console.error('Top Achievers data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Top Achievers data from API:', error);
      }
    };

    const fetchLifeMembers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetLifeMemberMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList(prev => [
            prev[0],
            { title: 'Life Members', list: data.map(item => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) },
            prev[2],
            prev[3]
          ]);
        } else {
          console.error('Life Members data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching Life Members data from API:', error);
      }
    };

    const fetchTOTAchievers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetTOTRankMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList(prev => [
            prev[0],
            prev[1],
            { title: 'TOT Achievers', list: data.map(item => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) },
            prev[3]
          ]);
        } else {
          console.error('TOT Achievers data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching TOT Achievers data from API:', error);
      }
    };

    const fetchCOTAchievers = async () => {
      try {
        const response = await axios.get(`http://203.115.11.236:10155/LifeIntranetAPI/api/v1/Mdrt/GetCOTRankMDRT?p_year=${currentYear}`);
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList(prev => [
            prev[0],
            prev[1],
            prev[2],
            { title: 'COT Achievers', list: data.map(item => ({
              agent_name: item.agent_name,
              branch_name: item.branch_name,
              national_rank: item.national_rank,
              image: item.image || defaultImage // Use default image if no image is provided
            })) }
          ]);
        } else {
          console.error('COT Achievers data not available or empty');
        }
      } catch (error) {
        console.error('Error fetching COT Achievers data from API:', error);
      }
    };

    fetchAllMDRTAchievers();
    fetchLifeMembers();
    fetchTOTAchievers();
    fetchCOTAchievers();
  }, [currentYear]);

  // Slideshow Effect with Pause on Hover
  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setSlideIndex(prev => (prev + 1) % (achieverList.length + 1)); // Cycle through achievers and the event card
        if (slideIndex < achieverList.length) {
          setAchieverIndex(slideIndex); // Update achieverIndex to match slideIndex
        }
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval); // Clear the interval on cleanup
  }, [isHovering, slideIndex, achieverList.length]);

  // Flipping effect for GWP charts
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setShowBranch(prev => !prev);
    }, 5000); // Change chart side every 5 seconds

    return () => clearInterval(flipInterval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleCardClick = () => {
    setSlideIndex(prev => (prev + 1) % (achieverList.length + 1)); // Manually change slides
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} 
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
        <FlippingCard showBack={showBranch}>
          <div className="inner">
            <div className="front">
              {MontlyDataBranch && <GWPChart title="Monthly GWP" data={MontlyDataBranch} />}
            </div>
            <div className="back">
              {MontlyCumalativeDataBranch && <GWPChart title="Cumulative GWP" data={MontlyCumalativeDataBranch} />}
            </div>
          </div>
        </FlippingCard>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleCardClick}>
        <FlippingCard showBack={false}>
          <div className="inner">
            <div className="front">
              {slideIndex === achieverList.length 
                ? <EventCard /> 
                : <AchieversCard achievers={achieverList[achieverIndex]} />}
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
  );
};

export default GWPChartsContainer;
