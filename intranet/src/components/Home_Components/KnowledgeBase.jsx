import React from 'react';
//MUI Imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
const KnowledgeBase = () => {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
};


const list = (anchor) => (
    <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <TouchableOpacity
          onPress={() => navigation.navigate("My Profile")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../../../components/user.jpg")}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16 }}>Michael Smith</Text>
            <Text style={{ fontSize: 12 }}>michalsmitch12@gmail.com</Text>
          </View>
        </TouchableOpacity>
                    </ListItemIcon>
                    <ListItemText primary={"Contact"} />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"DashBoard"} />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
);

  return (
    <div className="KnowledgeBase">
      <div className='Navbar'>
            <MenuIcon onClick={toggleDrawer("left", true)}/>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>

        </div>
            <h2>KnowledgeBase</h2>
            {/* Add your content here */}
            <p>we are going to develop an intranet for our office. there are five members in our developing group. we divided the four sections among us as the image i provide . we decided to make four components for each other and after that call all components in home page. can you help me for this . i don't know how to call those four components  in home page . can you give me home page code and other four component</p>
           
        </div>
  );
};

export default KnowledgeBase;
