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

      {/* Idea Hub Admin Login */}
      <List>
        <ListItem disablePadding>
          <ListItemButton style={styles.blueButton}>
            <ListItemIcon style={styles.btnsizeup}>
              <DashboardOutlinedIcon style={styles.iconColor} />
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
                    color="white"
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
              <HelpOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link to="/login?redirect=/Admin_Sales_Lead" style={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    fontWeight="bold"
                    fontSize="16px"
                    color="text.primary"
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
        <DashboardOutlinedIcon
          onClick={toggleDrawer("left", true)}
          style={styles.btnsize}
        />
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
    fontSize: "25px",
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
  blueButton: {
    backgroundColor: "#1E90FF", // Dodger Blue color
    color: "white",
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: "#1C86EE", // Slightly darker blue on hover
    }
  },
  iconColor: {
    color: "white",
  },
};

export default DrawerMenu;
