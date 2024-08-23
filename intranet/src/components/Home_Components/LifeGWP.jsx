import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { CardContent, Typography, Box, Avatar } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { styled } from "@mui/system";
import axios from "axios";

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
  fontSize: "5rem",
  textAlign: "center",
  color: "#000",
}));
// Digital number component for Achievers cards

// GWP Chart component
const GWPChart = ({ title, data, customLabels }) => (
  <Box sx={{ width: 250, padding: 1, marginTop: "-30px" }}>
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", marginBottom: 1.5 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginLeft: "-20px",
        }}
      >
        <Doughnut
          data={data}
          options={{
            cutout: "60%", // Reduce cutout size to give more room for text
            plugins: {
              legend: { display: false },
              beforeDraw: (chart) => {
                const { ctx, width, height } = chart;
                const data = chart.config.data;

                console.log("Before Draw:", data); // Logging data for visibility

                ctx.save();
                ctx.font = "24px Arial"; // Increase the font size for visibility
                ctx.textBaseline = "middle";
                ctx.textAlign = "center";

                const ach_presentage =
                  data.ach_presentage !== undefined
                    ? `${data.ach_presentage}%`
                    : "N/A";

                const textX = width / 2;
                const textY = height / 2;

                console.log(
                  "Drawing text:",
                  ach_presentage,
                  "at",
                  textX,
                  textY
                ); // Logging for confirmation

                ctx.fillText(ach_presentage, textX, textY);

                ctx.restore();
              },
            },
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center", marginTop: 1.5 }}>
        <Typography variant="body2" color="textSecondary">
          GWP Meter
        </Typography>
        {customLabels &&
          customLabels.map((label, index) => (
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
  <Box sx={{ width: 250, padding: 1, marginTop: "-30px" }}>
    <CardContent>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", marginBottom: 1.5 }}
      >
        {achievers.title}
      </Typography>
      <DigitalNumber component="div">{achievers.list.length}</DigitalNumber>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ textAlign: "center" }}
      >
        Achieved
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          marginTop: 2,
          maxHeight: "150px", // Set a fixed height
          overflowY: "auto", // Enable vertical scrolling
        }}
      >
        {achievers.list.map((achiever, index) => (
          <Box
            key={index}
            sx={{ display: "flex", flexDirection: "column", marginBottom: 1.5 }}
          >
            <Avatar
              alt={achiever.agent_name}
              src={achiever.image || defaultImage}
            />
            <Typography variant="body1" fontWeight="bold">
              {achiever.agent_name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Branch: {achiever.branch_name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rank: {achiever.national_rank}
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Box>
);
// Achievers card component

// Event details card component
const EventCard = () => {
  const [currentMDRTImage, setCurrentMDRTImage] = useState(rec1);
  //Event card slide show time setting
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMDRTImage((prevImage) => (prevImage === rec1 ? rec2 : rec1));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  //Event card slide show time setting
  //MDRT Event Details Store
  const MDRTeventInfo =
    currentMDRTImage === rec1
      ? { date: "June 9-12, 2024", location: "Vancouver, BC, Canada" }
      : { date: "June 22-25, 2025", location: "Miami Beach, FL, USA" };
  //MDRT Event Details Store
  return (
    //MDRT Event Photo showing view section
    <Box sx={{ width: 250, padding: 2, marginTop: "-32px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            height: "300px",
            overflow: "hidden",
            borderRadius: 2,
            width: "-200px",
            marginLeft: "-32px",
          }}
        >
          <img
            src={currentMDRTImage}
            alt="Event"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ textAlign: "center", marginTop: 2 }}>
          <Typography variant="body2" color="textSecondary" fontWeight={"bold"}>
            {MDRTeventInfo.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" fontWeight={"bold"}>
            {MDRTeventInfo.location}
          </Typography>
        </Box>
      </CardContent>
    </Box>
    //MDRT Event Photo showing view section
  );
};
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
          `http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Gwp/GetMonthlyGWP?p_month=${currentMonth}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          const lifeData = data[0];
          const achievement = parseFloat(lifeData.achievement);
          const target = parseFloat(lifeData.target);
          const ach_presentage = parseFloat(lifeData.ach_presentage);

          const chartData = {
            labels: ["Achievement", "Target"],
            datasets: [
              {
                data: [achievement, target - achievement],
                backgroundColor: ["#FFB74D", "#42A5F5"],
                hoverBackgroundColor: ["#FFB74D", "#42A5F5"],
              },
            ],
            ach_presentage :50, // Set the achievement percentage here
          };

          console.log("Chart Data:", chartData); // Debugging log

          setMontlyDataBranch(chartData);
        } else {
          console.error("LIFE GWP data not available or empty");
        }
      } catch (error) {
        console.error("Error fetching LIFE GWP data from API:", error);
      }
    };

    // Fetch Branch GWP data from the API
    const fetchLifeMonthlyCumulativeData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Gwp/GetMonthlyCumalative?p_month=${currentMonth}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          const branchData = data[0];
          const achievement = parseFloat(branchData.achievement);
          const target = parseFloat(branchData.target);
          const ach_presentage =
            target > 0 ? ((achievement / target) * 100).toFixed(2) : "0.00";

          setMontlyCumalativeDataBranch({
            labels: ["Achievement", "Target"],
            datasets: [
              {
                data: [achievement, target],
                backgroundColor: ["#4DB6AC", "#42A5F5"],
                hoverBackgroundColor: ["#4DB6AC", "#42A5F5"],
              },
            ],
            ach_presentage, // Add calculated percentage here
          });
        } else {
          console.error("Branch GWP data not available or empty");
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
          `http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Mdrt/GetIslandRankMDRT?p_year=${currentYear}`
        );
        const data = response.data;

        if (data && data.length > 0) {
          setAchieverList((prev) => [
            {
              title: "Top Ten Achievers",
              list: data.map((item) => ({
                agent_name: item.agent_name,
                branch_name: item.branch_name,
                national_rank: item.national_rank,
                image: item.image || defaultImage, // Use default image if no image is provided
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
          `http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Mdrt/GetLifeMemberMDRT?p_year=${currentYear}`
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
          `http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Mdrt/GetTOTRankMDRT?p_year=${currentYear}`
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
                <GWPChart title="LIFE GWP" data={MontlyDataBranch} />
              )}
            </div>
            <div className="back">
              {MontlyCumalativeDataBranch && (
                <GWPChart
                  title="Branch GWP"
                  data={MontlyCumalativeDataBranch}
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
              {currentCard === "achievers" ? (
                <AchieversCard achievers={achieverList[achieverIndex]} />
              ) : (
                <EventCard />
              )}
            </div>
          </div>
        </FlippingCard>
      </Box>
    </Box>
    //GWP Monthly and cumalative target dougnut chart view component
  );
};

export default GWPChartsContainer;
