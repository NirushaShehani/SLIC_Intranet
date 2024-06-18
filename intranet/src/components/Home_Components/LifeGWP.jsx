import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CardContent, Typography, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { styled } from '@mui/system';

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to render labels within the chart box
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
    const labelTotalHeight = labels.length * (labelBoxSize + labelPadding);

    const positionX = (left + right) / 2;
    let positionY = bottom + 20;

    if (positionY + labelTotalHeight > chart.canvas.height) {
      positionY = bottom - labelTotalHeight - 20;
    }

    labels.forEach((label, index) => {
      const yPos = positionY + index * (labelBoxSize + labelPadding);
      ctx.fillStyle = colors[index];
      ctx.fillRect(positionX - 50, yPos, labelBoxSize, labelBoxSize);
      ctx.font = `${labelFontSize}px Arial`;
      ctx.fillStyle = '#000';
      ctx.fillText(label, positionX - 50 + labelBoxSize + labelPadding, yPos + labelBoxSize);
    });

    ctx.restore();
  }
};

const FlippingCard = styled(Box)(({ showBack }) => ({
  width: 300,
  height: 450, // Increase height to accommodate labels
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

const GWPChart = ({ title, data, customLabels }) => (
  <Box sx={{ width: 300, padding: 2 }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <Doughnut data={data} options={{ cutout: '70%' }} plugins={[customLabelsPlugin]} />
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

  const branchLabels = [
    'NOP: 485',
    'AMP: 150',
    'FYP: Rs.15000'
  ];

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
            <GWPChart title="Branch - GWP" data={dataBranch} customLabels={branchLabels} />
          </div>
        </div>
      </FlippingCard>
    </Box>
  );
};

export default GWPChartsContainer;
