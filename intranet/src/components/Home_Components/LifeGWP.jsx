import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CardContent, Typography, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { BASE_URL, ENDPOINTS } from "../../Services/apiConfig"; // Adjust this path according to your project structure

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

const LifeGWP = () => {
  const [dataLife, setDataLife] = useState(null);
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

        const response = await axios.get(`${BASE_URL}${ENDPOINTS.GWPMONTH}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setDataLife({
          labels: ['Current month', 'Last month', 'Cumulative'],
          datasets: [{
            data: [30, 10, 60],
            backgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
            hoverBackgroundColor: ['#FFB74D', '#4DB6AC', '#42A5F5'],
          }],
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

  return (
    <Box sx={{ width: 300, padding: 2, marginTop: '-35px' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ textAlign: 'center', marginBottom: 2 }}>
          LIFE GWP
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', marginLeft: '-25px'}}>
          <Doughnut data={dataLife} options={{ cutout: '70%', plugins: { legend: { display: false } } }} plugins={[customLabelsPlugin]} />
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Typography variant="body2" color="textSecondary">
            GWP Meter
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};

export default LifeGWP;
