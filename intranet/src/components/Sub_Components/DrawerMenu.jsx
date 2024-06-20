import React from 'react';
import usericon from '../../assets/person.jpg';
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
    color: 'white',
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