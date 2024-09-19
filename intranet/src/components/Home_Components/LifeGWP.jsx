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
const FlippingCard = styled(Box)(({ showBack, cardType }) => ({
  width: 350,
  height: cardType === "achievers" ? 510 : 250, // Conditional height
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
    backgroundColor: "#c1dff5",
    borderRadius: 8,
  },
  "& .back": {
    transform: "rotateY(180deg)",
  },
}));

// Flipping card components for GWP Charts
// Digital number component for Achievers cards
const DigitalNumber = styled(Typography)(({ theme }) => ({
  fontFamily: "Oxygen",
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
      padding: 0,
      marginTop: "10px",
    }}
  >
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
          color: "#fff", // Text color for visibility
          borderRadius: "4px", // Rounded corners
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Align items vertically
          width: "100%",
        }}
      >
        {/* Doughnut Chart */}
        <Box
          sx={{
            position: "relative", // Make this Box relative so the percentage can be positioned inside it
            width: 150, // Set the size of the doughnut chart
            height: 150,
          }}
        >
          {/* Doughnut Chart */}
          <Doughnut
            data={data}
            options={{
              cutout: "70%", // Adjust cutout to give room for text
              responsive: true,
              maintainAspectRatio: false, // Ensure it resizes properly
              plugins: {
                legend: { display: false }, // Hide the legend
                tooltip: { enabled: true }, // Disable tooltips to avoid interference
              },
            }}
          />

          {/* Centered Percentage */}
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: "50%", // Center vertically
              left: "50%", // Center horizontally
              transform: "translate(-50%, -50%)", // Ensure text stays centered
              color: "#4db6ac", // Color matching achievement color
              fontWeight: "bold",
              marginBottom: "0px",
            }}
          >
            {ach_presentage}%
          </Typography>
        </Box>

        {/* Information */}
        <Box
          sx={{
            marginLeft: 2, // Space between chart and information
            flex: 1, // Take up the remaining space
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#fff", // White background color
            borderRadius: 2, // Optional: adds rounded corners
            padding: 0, // Adds padding inside the box
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#42a5f5",
                padding: "2px 4px",
                borderRadius: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Target
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#42a5f5",
                padding: "2px 4px",
                borderRadius: 1,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {target}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#4db6ac",
                padding: "2px 4px",
                borderRadius: 1,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Achievement
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#4db6ac",
                padding: "2px 4px",
                borderRadius: 1,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {achievement}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Box>
);

// Achievers card component
const AchieversCard = ({ achievers }) => (
  <Box sx={{ width: 350, padding: 1, marginTop: "-30px" }}>
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", marginTop: 1, marginBottom: 1.5 }}
      >
        {achievers.title}
      </Typography>
      <DigitalNumber
        component="div"
        sx={{
          color: "#ffffff", // Text color
          backgroundColor: "#1976d2", // Background color (blue)
          padding: "4px 8px", // Padding around the text
          borderRadius: "4px", // Rounded corners
          textAlign: "center", // Center the text
          margin: 0,
        }}
      >
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
            maxHeight: "400px", // Set a fixed height
            maxWidth: "350px",
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
          {/* 1st way   */}

          {/* {achievers.list.map((achiever, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 1.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row", // Align items in a row
                  alignItems: "center", // Vertically center items
                  justifyContent: "center", // Center the content within the row
                  position: "relative", // To position the avatar properly
                }}
              >
                <Avatar
                  alt={achiever.agent_name}
                  src={achiever.image || defaultImage}
                  sx={{
                    position: "absolute", // Keep the avatar in a fixed position
                    left: 10, // Align it to the left
                    top: 10,
                  }}
                />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  fontSize={14}
                  sx={{
                    fontFamily: "Oxygen",
                    marginLeft: "auto", // Automatically center the text
                    marginRight: "auto", // Automatically center the text
                    fontFamily: "Oxygen",
                  }}
                >
                  {achiever.agent_name}
                </Typography>
              </Box>

              <Typography variant="body2" color="textSecondary">
                Branch: {achiever.branch_name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Rank: {achiever.national_rank}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  backgroundColor:
                    achiever.achievment === "Achieved"
                      ? "#00b300"
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
          ))} */}

          {/* other way to show achievers */}

          {achievers.list.map((achiever, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 1.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center", // Center the agent name
                  position: "relative", // Allows positioning the rank circle
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 40, // Fixed width for the circle
                    maxWidth: 40,
                    height: 40, // Fixed height for the circle
                    borderRadius: "50%", // Makes the box circular
                    backgroundColor: "#1976d2", // Background color of the circle
                    color: "#fff", // Text color inside the circle
                    fontWeight: "bold",
                    fontSize: 20, // Text size inside the circle
                    textAlign: "center", // Centers text horizontally
                    position: "absolute", // Keeps the circle fixed
                    left: 0, // Aligns the circle to the left
                    top: -1.5,
                  }}
                >
                  {achiever.national_rank}
                </Box>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  fontSize={14}
                  sx={{
                    marginLeft: "auto", // Automatically centers the text
                    marginRight: "auto", // Automatically centers the text
                    fontFamily: "Oxygen",
                  }}
                >
                  {achiever.agent_name}
                </Typography>
              </Box>

              <Typography variant="body2" color="textSecondary">
                Branch: {achiever.branch_name}
              </Typography>


              <Typography
                variant="body2"
                color="textSecondary"
                
                sx={{
                  backgroundColor:
                    achiever.achievment === "Achieved"
                      ? "#00b300"
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
            fontSize: "15px",
          }}
        >
          On the way to success...
        </Typography>
      )}
      {/* Animated Arrow */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          bottom: 10, // Adjust this to position the arrow
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4px",
          borderRadius: "4px",
          zIndex: 1, // Ensure it's on top of other content
        }}
      >
        <Box
          sx={{
            width: 0,
            height: 0,
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderTop: "30px solid rgba(0, 0, 0, 0.7)", // Arrow color
            animation: "bounce 3s infinite",
          }}
        />
        {/* Add the CSS animation */}
        <style>
          {`
              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(-10px);
                }
                60% {
                  transform: translateY(-5px);
                }
              }
            `}
        </style>
      </Box>
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
    { title: "COT Achievers", list: [] },
    { title: "TOT Achievers", list: [] },
  ]);
  const [isHovering, setIsHovering] = useState(false);
  const [achieverIndex, setAchieverIndex] = useState(0);

  // Get the current month as a number (1-12)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const currentMonthInText = months[currentMonth];
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

          // Ensure achievement is not greater than target to avoid negative remaining
          const remaining = Math.max(target - achievement, 0);

          setMontlyDataBranch({
            labels: ["Achievement", "Remaining"],
            datasets: [
              {
                data: [achievement, remaining],
                backgroundColor: ["#4DB6AC", "#42A5F5"],
                hoverBackgroundColor: ["#4DB6AC", "#42A5F5"],
              },
            ],
            ach_presentage, // Set the achievement percentage
            target, // Set the target
            achievement, // Set the achievement value
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
          const remaining = target - achievement;

          setMontlyCumalativeDataBranch({
            labels: ["Achievement", "Remaining"],
            datasets: [
              {
                data: [achievement, remaining],
                backgroundColor: ["#4DB6AC", "#42A5F5"],
                hoverBackgroundColor: ["#4DB6AC", "#42A5F5"],
              },
            ],
            text: "showData",
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
              title: "MDRT",
              list: data.map((item) => ({
                agent_name: item.agent_name,
                branch_name: item.branch_name,
                national_rank: item.national_rank,
                image: item.image || defaultImage, // Use default image if no image is provided
                achievment: item.achievment,
                over: item.fyp - item.target,
                due: item.balanceDue,
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

    // Fetch COT Achievers data
    const fetchCOTAchievers = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/${ENDPOINTS.COTRANK}?p_year=${currentYear}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            prev[0],
            {
              title: "COT Achievers",
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
          console.error("COT Achievers data not available or empty");
        }
      } catch (error) {
        console.error("Error fetching COT Achievers data from API:", error);
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
    fetchCOTAchievers();
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
    setAchieverIndex((prev) => (prev + 1) % 3); // Cycle through Top, COT, TOT achievers
  };
  //GWP Monthly and cumalative target dougnut chart view component
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FlippingCard showBack={GWPFlipping} cardType="gwp">
          <div className="inner">
            <div className="front">
              {MontlyDataBranch && (
                <>
                  <div
                    style={{
                      marginTop: 0,
                      paddingTop: 5,
                      fontSize: "20px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {`Life GWP ${currentMonthInText}`}
                  </div>
                  <GWPChart
                    data={MontlyDataBranch}
                    ach_presentage={MontlyDataBranch.ach_presentage}
                    target={MontlyDataBranch.target}
                    achievement={MontlyDataBranch.achievement}
                  />
                </>
              )}
            </div>
            <div className="back">
              {MontlyCumalativeDataBranch && (
                <>
                  <div
                    style={{
                      marginTop: 0,
                      paddingTop: 5,
                      fontSize: "20px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {`Life Cumulative ${currentYear}`}
                  </div>
                  <GWPChart
                    data={MontlyCumalativeDataBranch}
                    ach_presentage={MontlyCumalativeDataBranch.ach_presentage}
                    target={MontlyCumalativeDataBranch.target}
                    achievement={MontlyCumalativeDataBranch.achievement}
                  />
                </>
              )}
            </div>
          </div>
        </FlippingCard>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        onClick={handleCardClick}
      >
        <FlippingCard
          showBack={false}
          cardType="achievers"
          onClick={handleAchieverClick}
        >
          <div className="inner">
            <div className="front">
              <AchieversCard achievers={achieverList[achieverIndex]} />
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
  );
};

export default GWPChartsContainer;
