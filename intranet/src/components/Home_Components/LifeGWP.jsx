
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GWPChart = () => {
  // Data for the chart
  const data = {
    labels: ['Current month', 'Last month', 'Cumulative'],
    datasets: [
      {
        data: [30, 10, 60], // Example data
        backgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'], // Colors matching the chart
        hoverBackgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
      },
    ],
  };

  // Options for the chart
  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    cutout: '70%', // This will make the doughnut chart hollow in the center
  };

  // Legend data
  const legendItems = [
    { label: 'Current month', color: '#FFB74D' },
    { label: 'Last month', color: '#4DB6AC' },
    { label: 'Cumulative', color: '#42A5F5' },
  ];

  return (
    <Card sx={{ width: 300, backgroundColor: '#E3F2FD' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
          LIFE - GWP
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Doughnut data={data} options={options} />
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Typography variant="body2" color="textSecondary">
            GWP Meter
          </Typography>
        </Box>
        <Grid container spacing={1} sx={{ marginTop: 2 }}>
          {legendItems.map((item, index) => (
            <Grid item xs={4} key={index} sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar
                  sx={{ bgcolor: item.color, width: 24, height: 24, marginRight: 1 }}
                  variant="rounded"
                />
                <Typography variant="body2">{item.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GWPChart;
