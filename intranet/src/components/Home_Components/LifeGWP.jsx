import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
//import { Chart } from 'chart.js';
import { CardContent, Typography, Box, Avatar } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "@mui/system";
import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";

ChartJS.register(ArcElement, Tooltip, Legend);

const rec1 = require("../../assets/Rectangle1.png"); // MDRT Event Image record 1
const rec2 = require("../../assets/Rectangle2.png"); // MDRT Event Image record 2
const defaultImage = require("../../assets/default-user.png"); // Path to default user image

// Flipping card component design for GWP Charts
const FlippingCard = styled(Box)(({ showBack }) => ({
  width: 250,
  height: 375,
  perspective: 800,
  "& .inner": {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 1s",
    transformStyle: "preserve-3d",
    transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
  },
  "& .front, & .back": {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
  },
  "& .back": {
    transform: "rotateY(180deg)",
  },
}));
// Flipping card components for GWP Charts
// Digital number component for Achievers cards
const DigitalNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "Digital-7, monospace",
  fontSize: "20px",
  textAlign: "center",
  color: "#000",
}));
// Digital number component for Achievers cards
// GWP Chart component
const GWPChart = ({
  title,
  data,
  customLabels,
  ach_presentage,
  target,
  achievement,
}) => (
  <Box
    sx={{
      width: 25,
      padding: -80,
      marginTop: "10px",
    }}
  >
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
          marginBottom: 1.5,
          backgroundColor: "ad28bb",
        }}
      >
        {title}
      </Typography>
      {/* //GWP chart */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 200, // Adjust width according to the container
          height: 200, // Adjust height according to the container
          backgroundColor: "ad28bb",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginRight: -10,
            width: 150,
            height: 150,
            marginTop: 1,
          }}
        >
          <Doughnut
            data={data}
            options={{
              cutout: "70%", // Reduce cutout size to give more room for text
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
            }}
          />
        </Box>
        {/* Achievement percentage */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 2,
            paddingX: 1,
          }}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              backgroundColor: "orange",
              padding: "2px 4px",
              borderRadius: 1,
            }}
          >
            Achievement presentage
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              backgroundColor: "orange",
              padding: "1px 2px",
              borderRadius: 1,
              marginRight: -3,
            }}
          >
            {ach_presentage}%
          </Typography>
        </Box>
        {/* Achievement percentage */}
        {/* Achievement Value*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 2,
            paddingX: 1,
          }}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              backgroundColor: "yellow",
              padding: "2px 4px",
              borderRadius: 1,
            }}
          >
            Achievement
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              backgroundColor: "yellow",
              padding: "2px 4px",
              borderRadius: 1,
              marginRight: -3,
            }}
          >
            {achievement}
          </Typography>
        </Box>
        {/* Achievement Value*/}
        {/* Target Value*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 2,
            paddingX: 1,
          }}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              backgroundColor: "red",
              color: "white",
              padding: "2px 4px",
              borderRadius: 1,
            }}
          >
            Target
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            sx={{
              backgroundColor: "red",
              color: "white",
              padding: "2px 4px",
              marginRight: -3,
              borderRadius: 1,
            }}
          >
            {target}
          </Typography>
        </Box>
        {/* Target Value*/}
      </Box>

      {/* //GWP chart */}
    </CardContent>
  </Box>
);
// GWP Chart component

// Achievers card component
const AchieversCard = ({ achievers }) => (
  <Box sx={{ width: 250, padding: 1, marginTop: "-30px" }}>
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", marginTop: 1, marginBottom: 1.5 }}
      >
        {achievers.title}
      </Typography>
      <DigitalNumber component="div">
        {
          achievers.list.filter(
            (achiever) => achiever.achievment === "Achieved"
          ).length
        }{" "}
        Achievers
      </DigitalNumber>

      {/* Achievers and Non-Achievers List */}
      {achievers.list.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginTop: 1,
            marginRight: -1.5,
            marginLeft: -1.5,
            maxHeight: "270px", // Set a fixed height
            maxWidth: "300px",
            overflowY: "auto", // Enable vertical scrolling
            border: "2px solid #000", // Add border around the component
            borderRadius: "8px", // Optional: to make the corners rounded
            padding: "8px", // Optional: Add some padding inside the box
            // Hide scrollbar but allow scrolling
            scrollbarWidth: "none", // For Firefox
            "&::-webkit-scrollbar": {
              display: "none", // For Chrome, Safari, and Edge
            },
          }}
        >
          {achievers.list.map((achiever, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 1.5,
              }}
            >
              <Avatar
                alt={achiever.agent_name}
                src={achiever.image || defaultImage}
              />
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 0.5,
                  marginLeft: 1,
                }}
              >
                {achiever.agent_name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="bold"
              >
                Branch: {achiever.branch_name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="bold"
              >
                Rank: {achiever.national_rank}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  backgroundColor:
                    achiever.achievment === "Achieved"
                      ? "green"
                      : achiever.achievment === "Not_achieved"
                      ? "red"
                      : "transparent", // Green if achieved, red if not achieved
                  color:
                    achiever.achievment === "Achieved" ||
                    achiever.achievment === "Not_achieved"
                      ? "white"
                      : "inherit", // White text for both states
                  padding: "2px 4px",
                  borderRadius: 1,
                }}
              >
                {achiever.achievment === "Achieved"
                  ? "Achieved"
                  : achiever.achievment === "Not_achieved"
                  ? "Not Achieved"
                  : "Unknown Status"}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            textAlign: "center",
            marginTop: 15,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          No data available
        </Typography>
      )}
    </CardContent>
  </Box>
);

// Achievers card component

// Event details card component

// Event details card component
// -----------------------------------------------------------------------Backend Data fetching------------------------------------------------------
//MDRT Achievers/ TOT achievers/ Life Member card
//Cumulative GWP/ Monthly GWP dougnut chart components
const GWPChartsContainer = () => {
  const [MontlyDataBranch, setMontlyDataBranch] = useState(null);
  const [MontlyCumalativeDataBranch, setMontlyCumalativeDataBranch] =
    useState(null);
  const [GWPFlipping, setGWPFlipping] = useState(false);
  const [currentCard, setCurrentCard] = useState("achievers"); // Initialize with 'achievers'
  const [achieverList, setAchieverList] = useState([
    { title: "MDRT Achievers", list: [] },
    { title: "Life Members", list: [] },
    { title: "TOT Achievers", list: [] },
  ]);
  const [isHovering, setIsHovering] = useState(false);
  const [achieverIndex, setAchieverIndex] = useState(0);

  // Get the current month as a number (1-12)
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  // Fetch Life GWP data for doughnut charts
  useEffect(() => {
    // Fetch LIFE GWP data from the API
    const fetchLifeMonthlyData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${ENDPOINTS.MONTHLYGWP}?p_month=${currentMonth}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          const lifeData = data[0];
          const achievement = parseFloat(lifeData.achievement);
          const target = parseFloat(lifeData.target);
          const ach_presentage = parseFloat(lifeData.ach_presentage);

          setMontlyDataBranch({
            labels: ["Achievement", "Target"],
            datasets: [
              {
                data: [achievement, target - achievement],
                backgroundColor: ["#FFB74D", "#42A5F5"],
                hoverBackgroundColor: ["#FFB74D", "#42A5F5"],
              },
            ],
            ach_presentage,
            target,
            achievement, // Set the achievement percentage here
          });
        }
      } catch (error) {
        console.error("Error fetching LIFE GWP data from API:", error);
      }
    };

    // Fetch Branch GWP data from the API
    const fetchLifeMonthlyCumulativeData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${ENDPOINTS.MONTHLYCUMALATIVE}?p_month=${currentMonth}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          const branchData = data[0];
          const achievement = parseFloat(branchData.achievement);
          const target = parseFloat(branchData.target);
          const ach_presentage = parseFloat(branchData.ach_presentage);

          setMontlyCumalativeDataBranch({
            labels: ["Achievement", "Target"],
            datasets: [
              {
                data: [achievement, target],
                backgroundColor: ["#4DB6AC", "#42A5F5"],
                hoverBackgroundColor: ["#4DB6AC", "#42A5F5"],
              },
            ],
            ach_presentage,
            target,
            achievement, // Add calculated percentage here
          });
        }
      } catch (error) {
        console.error("Error fetching Branch GWP data from API:", error);
      }
    };

    fetchLifeMonthlyData();
    fetchLifeMonthlyCumulativeData();
  }, [currentMonth]);
  // Fetch Achievers data
  useEffect(() => {
    const fetchAllMDRTAchievers = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${ENDPOINTS.ISLANDRANKMDRT}?p_year=${currentYear}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            {
              title: "Top 500 Island Ranks",
              list: data.map((item) => ({
                agent_name: item.agent_name,
                branch_name: item.branch_name,
                national_rank: item.national_rank,
                image: item.image || defaultImage, // Use default image if no image is provided
                achievment: item.achievment,
              })),
            },
            prev[1],
            prev[2],
          ]);
        } else {
          console.error("Top Achievers data not available or empty");
        }
      } catch (error) {
        console.error("Error fetching Top Achievers data from API:", error);
      }
    };

    // Fetch Life Members data
    const fetchLifeMembers = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${ENDPOINTS.LIFEMEMBER}?p_year=${currentYear}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            prev[0],
            {
              title: "Life Members",
              list: data.map((item) => ({
                agent_name: item.agent_name,
                branch_name: item.branch_name,
                national_rank: item.national_rank,
                image: item.image || defaultImage, // Use default image if no image is provided
                achievment: item.achievment,
              })),
            },
            prev[2],
          ]);
        } else {
          console.error("Life Members data not available or empty");
        }
      } catch (error) {
        console.error("Error fetching Life Members data from API:", error);
      }
    };

    // Fetch TOT Achievers data
    const fetchTOTAchievers = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${ENDPOINTS.TOTRANK}?p_year=${currentYear}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            prev[0],
            prev[1],
            {
              title: "TOT Achievers",
              list: data.map((item) => ({
                agent_name: item.agent_name,
                branch_name: item.branch_name,
                national_rank: item.national_rank,
                image: item.image || defaultImage, // Use default image if no image is provided
                achievment: item.achievment,
              })),
            },
          ]);
        } else {
          console.error("TOT Achievers data not available or empty");
        }
      } catch (error) {
        console.error("Error fetching TOT Achievers data from API:", error);
      }
    };

    fetchAllMDRTAchievers();
    fetchLifeMembers();
    fetchTOTAchievers();
  }, [currentYear]);
  // Flipping Effect Pause on Hover on GWP Monthly and cumalative
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setGWPFlipping((prev) => !prev);
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
    setCurrentCard((prev) => (prev === "achievers" ? "event" : "achievers")); // Toggle between 'achievers' and 'event'
  };

  const handleAchieverClick = () => {
    setAchieverIndex((prev) => (prev + 1) % 3); // Cycle through Top, Life Members, TOT achievers
  };
  //GWP Monthly and cumalative target dougnut chart view component
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FlippingCard showBack={GWPFlipping}>
          <div className="inner">
            <div className="front">
              {MontlyDataBranch && (
                <GWPChart
                  title="GWP Month"
                  data={MontlyDataBranch}
                  ach_presentage={MontlyDataBranch.ach_presentage}
                  target={MontlyDataBranch.target}
                  achievement={MontlyDataBranch.achievement}
                />
              )}
            </div>
            <div className="back">
              {MontlyCumalativeDataBranch && (
                <GWPChart
                  title="Cumalatiuve Year"
                  data={MontlyCumalativeDataBranch}
                  ach_presentage={MontlyCumalativeDataBranch.ach_presentage}
                  target={MontlyCumalativeDataBranch.target}
                  achievement={MontlyCumalativeDataBranch.achievement}
                />
              )}
            </div>
          </div>
        </FlippingCard>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        onClick={handleCardClick}
      >
        <FlippingCard showBack={false} onClick={handleAchieverClick}>
          <div className="inner">
            <div className="front">
              <AchieversCard achievers={achieverList[achieverIndex]} />
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
    //GWP Monthly and cumalative target dougnut chart view component
  );
};

export default GWPChartsContainer;
