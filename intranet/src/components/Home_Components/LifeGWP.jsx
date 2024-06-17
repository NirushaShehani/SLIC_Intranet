import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CardContent, Typography, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { styled } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);

const FlippingCard = styled(Box)(({ showBack }) => ({
  width: 300,
  height: 400,
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

const GWPChart = ({ title, data }) => (
  <Box sx={{ width: 300, padding: 2 }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Doughnut data={data} options={{ cutout: '70%' }} />
      </Box>
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant="body2" color="textSecondary">
          GWP Meter
        </Typography>
      </Box>
    </CardContent>
  </Box>
);

const GWPChartsContainer = () => {
  const [showBranch, setShowBranch] = useState(false);

  const handleClick = () => {
    setShowBranch(prev => !prev);
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

  return (
    <Box
      sx={{ textAlign: 'center', padding: 2, display: 'flex', justifyContent: 'center' }}
      onClick={handleClick}
    >
      <FlippingCard showBack={showBranch}>
        <div className="inner">
          <div className="front">
            <GWPChart title="LIFE - GWP" data={dataLife} />
          </div>
          <div className="back">
            <GWPChart title="Branch - GWP" data={dataBranch} />
          </div>
        </div>
      </FlippingCard>
    </Box>
  );
};

export default GWPChartsContainer;
