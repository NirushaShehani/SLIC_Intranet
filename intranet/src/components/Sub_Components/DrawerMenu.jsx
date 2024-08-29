import React from 'react';
import usericon from '../../assets/Sri_Lanka_Insurance_new_logo.jpg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from 'react-router-dom';
const DrawerMenu = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
          <img src={usericon} alt="Logo" style={{ width: '90%', height: '90%', alignItems: 'center', justifyContent: 'center' }} />
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
                <Link to="/" style={{ cursor: 'pointer' }}>
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
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/** Dashboard */}
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
                <Link to="/" style={{ cursor: 'pointer' }}>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="text.primary"
                >
                  Idea Hub Admin
                </Typography>
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/** Dashboard */}
      {/** Dashboard */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={styles.btnsizeup}>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link to="/" style={{ cursor: 'pointer' }}>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body1"
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="text.primary"
                >
                  Sales Lead Admin
                </Typography>
                </Link>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      {/** Dashboard */}
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
      </List>
    </Box>
  );

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
    </div>
  );
};

export default DrawerMenu;

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
    color: 'black',
    backgroundColor: 'transparent',
    marginBottom: '-10px',
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
  
}