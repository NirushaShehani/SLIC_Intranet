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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Vikashini" src={usericon} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography component="span" variant="body1" color="#00bfff" display="block">
                Vikashini
              </Typography>
            }
            secondary={
              <Typography component="span" variant="body2" color="text.primary" display="block">
                Vikashini@gmail.com
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography component="span" variant="body1" fontWeight="bold" fontSize="0.9rem" color="text.primary">
                  Dashboard
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FileUploadOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography component="span" variant="body1" fontWeight="bold" fontSize="0.9rem" color="text.primary">
                  Upload Branch Event
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <MenuIcon style={{ color: 'black', marginBottom: '-10px' }} onClick={toggleDrawer('left', true)} />
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
