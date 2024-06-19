import React from "react";
import usericon from "../../assets/person.jpg";
import { Text, View } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
//MUI Imports
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Chip from "@mui/material/Chip";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled } from "@mui/material/styles";
//Image Imports
const imageUrl1 = require('../../assets/image2.jpg');
const imageUrl2 = require('../../assets/image3.jpg');
//For image slider
const imageUrl01 = require('../../assets/sliderimgs/img1.jpg');
const imageUrl02 = require('../../assets/sliderimgs/img2.jpg');
const imageUrl03 = require('../../assets/sliderimgs/img3.jpg');

const images = [imageUrl01, imageUrl02, imageUrl03];

  const settings = {
    dots: true,                
    infinite: true,            
    speed: 500,                
    slidesToShow: 1,           
    slidesToScroll: 1,         
    autoplay: true,            
    autoplaySpeed: 3000,     
    arrows: false,  
  };

const KnowledgeBase = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/** User Details */}
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Vikashini" src={usericon} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  color="#00bfff"
                >
                  Vikashini
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Vikashini@gmail.com
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      {/** User Details */}
      <Divider />
      {/** Dashboard */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={styles.btnsizeup}>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="text.primary"
                >
                  Dashboard
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/** Dashboard */}
      {/** Upload Branch Event */}
      <List>
        <ListItem disablePadding>
        <ListItemButton component={Link} to="/full-media">
            <ListItemIcon style={styles.btnsizeup}>
              <FileUploadOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="text.primary"
                >
                  Upload Branch Event
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/** Upload Branch Event */}
      {/** Help */}
      <List style={styles.container}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={styles.btnsize}>
              <HelpOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  color="text.primary"
                >
                  Help
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        {/** Help */}
        {/** Logout */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={styles.btnsize}>
              <LogoutOutlinedIcon fontSize="small" sx={{ color: "#ff0000" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.8rem"
                  color="#ff0000"
                >
                  Logout Account
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        {/** Logout */}
      </List>
    </Box>
  );
  //Custom chip design for Knowledge Base,Sales Leads,Contact lists
  const CustomChip = styled(Chip)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#795548",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    margin: "8px 11px",
    height: "40px",
    width: "290px",
  }));

  //Custom chip design for Services
  const CustomChip2 = styled(Chip)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    margin: "30px 11px",
    height: "80px",
    width: "290px",
    backgroundImage: `url(${imageUrl1})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }));

   //Custom chip design for Idea Hub
   const CustomChip3 = styled(Chip)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    margin: "8px 11px",
    height: "80px",
    width: "290px",
    backgroundImage: `url(${imageUrl2})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }));

  return (
    <div>
      <div className="Navbar" style={styles.navbar}>
        <MenuIcon
          style={styles.menuIcon}
          onClick={toggleDrawer("left", true)}
        />
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
      <div style={styles.chipContainer}>
        {/*Knowledge Base Chip*/}
        <CustomChip style={styles.label}
          label="Knowledge base"
          deleteIcon={<BookmarkIcon style={{ color: "white" }} />}
          onDelete={() => {}}
        />
        {/*Sales List Chip*/}
        <CustomChip style={styles.label}
          label="Sales List"
          deleteIcon={<BookmarkIcon style={ { color: "white" }} />}
          onDelete={() => {}}
        />
        {/*Contact List Chip*/}
        <Link to="/contact-list" style={{ cursor: 'pointer' }}>
        <CustomChip style={styles.label}
          label="Contact List"
          deleteIcon={<BookmarkIcon style={{ color: "white" }} />}
          onDelete={() => {}}
        />
        </Link>
        {/*Services Chip*/}
        <CustomChip2 style={styles.label}
          label="Services"
        />
        {/*Idea Hub Chip*/}
        <CustomChip3 style={styles.label}
          label="Idea Hub"
        />
      </div>
      <div >
      <style>
      {`
        .slick-dots li button:before {
          color: grey; 
          font-size: 8px;
        }

        .slick-dots li.slick-active button:before {
          color: white; 
          font-size: 8px;
        }
      `}
    </style>
      <Slider {...settings} style={styles.slideshow}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '290px', height: '400px', borderRadius: '15px' }} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default KnowledgeBase;

const styles = {
  navbar: {
    position: "relative",
    backgroundColor: "transparent",
    padding: "10px",
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
  menuIcon: {
    color: 'white',
    backgroundColor: 'transparent',
    marginBottom: '-10px',
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'column', 
  },
  container: {
    display: "flex",
    height: "600px",
    flexWrap: "wrap",
    alignContent: "flex-end",
  },
  btnsize: {
    minHeight: "15px",
    minWidth: "32px",
  },
  btnsizeup: {
    minHeight: "25px",
    minWidth: "32px",
  },
  label: {
    fontSize: "19px"
  },
  slideshow: {
    width: "290px",
    margin: "15px 10px 10px"
  }
  
};
