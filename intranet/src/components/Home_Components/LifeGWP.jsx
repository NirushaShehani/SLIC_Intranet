import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CardContent, Typography, Box, Avatar } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { styled } from '@mui/system';

const rec1 = require('../../assets/Rectangle1.png');
const rec2 = require('../../assets/Rectangle2.png');

ChartJS.register(ArcElement, Tooltip, Legend);

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
        <Doughnut data={data} options={{ cutout: '70%', plugins: { legend: { display: false } } }} plugins={[customLabelsPlugin]} />
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

const AchieversCard = () => (
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
        Top Achievers
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="A. R. C. Perera" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Box sx={{ marginLeft: 2, textAlign: 'left' }}>
            <Typography variant="body1">A. R. C. Perera</Typography>
            <Typography variant="body2" color="textSecondary">Bandarawela</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="K. Dhanushka Silva" src="https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg" />
          <Box sx={{ marginLeft: 2, textAlign: 'left' }}>
            <Typography variant="body1">K. Dhanushka Silva</Typography>
            <Typography variant="body2" color="textSecondary">Dehiwala</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="N. K. Wijesiri" src="https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=" />
          <Box sx={{ marginLeft: 2, textAlign: 'left' }}>
            <Typography variant="body1">N. K. Wijesiri</Typography>
            <Typography variant="body2" color="textSecondary">Colombo 04</Typography>
          </Box>
        </Box>
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

  const handleClickBranch = () => {
    setShowBranch(prev => !prev);
  };

  const handleCardClick = () => {
    setCurrentCard(prev => (prev === 'achievers' ? 'event' : 'achievers')); // Toggle between 'achievers' and 'event'
  };

  const dataLife = {
    labels: ['Current month', 'Last month', 'Cumulative'],
    datasets: [
      {
        data: [30, 10, 60],
        backgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
        hoverBackgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
      },
    ],
  };

  const dataBranch = {
    labels: ['Current month', 'Last month', 'Cumulative'],
    datasets: [
      {
        data: [10, 30, 60],
        backgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
        hoverBackgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
      },
    ],
  };

  const branchLabels = [
    'NOP: 485',
    'AMP: 150',
    'FYP: Rs.15000'
  ];

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} onClick={handleClickBranch}>
        <FlippingCard showBack={showBranch}>
          <div className="inner">
            <div className="front">
              <GWPChart title="LIFE GWP" data={dataLife} />
            </div>
            <div className="back">
              <GWPChart title="Branch GWP" data={dataBranch} customLabels={branchLabels} />
            </div>
          </div>
        </FlippingCard>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }} onClick={handleCardClick}>
        <FlippingCard showBack={false}>
          <div className="inner">
            <div className="front">
              {currentCard === 'achievers' ? <AchieversCard /> : <EventCard />}
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
  );
};

export default GWPChartsContainer;
