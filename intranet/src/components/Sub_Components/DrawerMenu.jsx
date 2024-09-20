import React from "react";
import usericon from "../../assets/slicLIfe_New_1.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SvgIcon from '@mui/material/SvgIcon';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import 'intranet/src/font.css';

const DrawerMenu = () => {
  const [state, setState] = React.useState({
    left: false,
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
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "lightblue", // Background color
        height: "100vh", // Full screen height
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* User Details */}
      <List>
        <ListItem>
          <img
            src={usericon}
            alt="Logo"
            style={{
              width: "90%",
              height: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </ListItem>
      </List>
      <Divider />
      {/** Dashboard */}
      <List>
        <ListItem disablePadding>
          <ListItemButton style={styles.Button}>
            <ListItemIcon style={styles.btnsizeup}>
              <SvgIcon sx={{ color: 'black' }}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </SvgIcon>
            </ListItemIcon>
            <ListItemText
              primary={
                <Link to="/" style={{ cursor: "pointer", textDecoration: 'none' }}>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                    fontSize="16px"
                    color="black"
                    fontFamily={"Oxygen"}
                  >
                    Dashboard
                  </Typography>
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/** Dashboard */}
      <Divider />

      {/* Idea Hub Admin Login */}
      <List>
        <ListItem disablePadding>
          <ListItemButton style={styles.Button}>
            <ListItemIcon style={styles.btnsizeup}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="8" x2="12" y2="12" />
              </svg>

            </ListItemIcon>
            <ListItemText
              primary={
                <Link to="/login?redirect=/Idea_Hub_Admin_View" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                    fontSize="16px"
                    color={"black"}
                    fontFamily={"Oxygen"}
                  >
                    Admin Login
                  </Typography>
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {/* Additional Links */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={styles.btnsizeup}>
              <HelpOutlineOutlinedIcon style={styles.iconColor} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link to="/login?redirect=/Admin_Sales_Lead" style={{ cursor: "pointer", textDecoration: 'none' }}>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                    fontSize="16px"
                    color="black"
                    fontFamily={"Oxygen"}
                  >
                    Help
                  </Typography>
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <SvgIcon 
          sx={{ color: 'white' }} 
          onClick={toggleDrawer("left", true)}
          style={styles.btnsize}
        >
           <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
        </SvgIcon>
  
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
  
  
};

const styles = {
  btnsize: {
    fontSize: "30px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  btnsizeup: {
    fontSize: "20px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
  },
  Button: {
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: "#1C86EE", // Slightly darker blue on hover
    }
  },
  iconColor: {
    color: "black",
  },
};

export default DrawerMenu;
