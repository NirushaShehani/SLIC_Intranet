import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Navigate } from 'react-router-dom';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import Chip from "@mui/material/Chip";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled } from "@mui/material/styles";
import logo from '../../assets/IntranetLogo.png';
import '../../Styles/logo.css';
import { Find_And_Replace} from "../../Services/ApiConfig";
//Image Imports
const imageUrl2 = require('../../assets/Ideahub.jpg');
const imageUrl3 = require('../../assets/BookHub/IconImage.jpg');
const imageUrl4 = require('../../assets/BrEvents.png');
const imageUrl5 = require('../../assets/News.png');
const imageUrl6 = require('../../assets/Products.png');



const KnowledgeBase = () => {

  const handleNavigate_newsletter = () => {
    window.open(`${Find_And_Replace}/Newsletters/newsletter.pdf`, '_blank'); // Opens PDF in a new tab
  };

  const openInNewWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
    width: "300px",
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
    height: "70px",
    width: "300px",
    backgroundImage: `url(${imageUrl2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }));

  //Custom chip design for Book Hub
  const CustomChip5 = styled(Chip)(({ theme }) => ({

    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    height: "70px",
    width: "300px",
    backgroundImage: `url(${imageUrl3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }));
  //Custom chip design for Book Hub
  const CustomChip6 = styled(Chip)(({ theme }) => ({

    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    height: "70px",
    width: "300px",
    backgroundImage: `url(${imageUrl5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }));
  //Custom chip design for Book Hub
  const CustomChip7 = styled(Chip)(({ theme }) => ({

    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    height: "70px",
    width: "300px",
    backgroundImage: `url(${imageUrl6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }));
  
  const CustomChip8 = styled(Chip)(({ theme }) => ({

    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    height: "70px",
    width: "300px",
    backgroundImage: `url(${imageUrl4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }));
  return (
    <div>
      <div className="Navbar" style={styles.navbar}>
        <DrawerMenu />
        <div className="logo" style={styles.logo}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>

      <div style={styles.chipContainer}>
        {/*Contact List Chip*/}
        <Link onClick={() => openInNewWindow('http://blife-app.slic1.com/secworks/signin.asp')} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip style={styles.label}
            label="b-Life"
          />
        </Link>

    
        {/*Contact List Chip*/}
        <Link to="/contact-list" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip style={styles.label}
            label="Contact List"
            />
        </Link>
        {/*Services Chip*/}
        <Link to="/services-page" style={{ cursor: 'pointer', textDecoration: 'none', margin: 0 }}>
          <CustomChip style={styles.label}
            label="Policies/Services/Forms"
            />
        </Link>
        {/*Knowledge Base Chip*/}
        <Link to="/Knowledge-Base" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip style={styles.label}
            label="Our Knowledge Base"
            />
        </Link>
        {/*Sales Lead Chip*/}
        <Link to="/sales-Lead" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip style={styles.label}
            label="Introduce a New Customer"
            />
        </Link>
        {/*Sales Lead Chip*/}
        <Link  onClick={() => window.open("http://172.24.60.89/lifecms/")} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip style={styles.label}
            label="Customer Complaints"
            />
        </Link>

       
        {/*Idea Hub Chip*/}
        <Link to="/Idea-Hub" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip3 style={styles.label}
            label="Idea Hub"
          />
        </Link>
        {/*Book Hub Chip*/}
        <Link to="/Book-Hub" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip5 style={styles.label}
            label="Book Hub"
          />
        </Link>

        <Link onClick={(handleNavigate_newsletter)} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip6 style={styles.label}
            label="Latest NewsLetter"
          />
        </Link>

        <Link to="/NewProducts" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip7 style={styles.label}
            label="New Products"
          />
        </Link>

        <Link to="/BranchEvents" style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <CustomChip8 style={styles.label}
            label="Branch Events"
          />
        </Link>
      </div>
    </div>
  );
};

export default KnowledgeBase;

const styles = {
  navbar: {
    position: "relative",
    backgroundColor: "transparent",
    padding: "5px",
    display: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: "19px",
    margin: "0 0 10px 0",
    padding: 0,

  },
  slideshow: {
    width: "100%",
    maxWidth: "600px",
    margin: "15px auto 10px"
  },

  imageContainer: {
    width: '290px',
    height: '400px',
    borderRadius: '15px'
  },

  image: {
    width: "100%",
    height: "340px",
    borderRadius: "15px"
  }

};
