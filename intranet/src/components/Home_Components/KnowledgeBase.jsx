import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import Chip from "@mui/material/Chip";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled } from "@mui/material/styles";
import logo from '../../assets/IntranetLogo.png';
import '../../Styles/logo.css';
//Image Imports
const imageUrl1 = require('../../assets/Services.png');
const imageUrl2 = require('../../assets/Ideahub.png');
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

  //Custom chip design for Services
  const CustomChip2 = styled(Chip)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#795548",
    color: "white",
    borderRadius: "5px",
    paddingRight: theme.spacing(1),
    margin: "30px 11px",
    height: "80px",
    width: "300px",
    // backgroundImage: `url(${imageUrl1})`, 
    // backgroundSize: "cover", 
    // backgroundPosition: "center", 
    // backgroundRepeat: "no-repeat" 
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
    width: "300px",
    backgroundImage: `url(${imageUrl2})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat" 
  }));

  //Custom chip design for Book Hub
  const CustomChip4 = styled(Chip)(({ theme }) => ({
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

  return (
    <div>
      <div className="Navbar" style={styles.navbar}>
        <DrawerMenu/>
        <div className="logo" style={styles.logo}>
         <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
      
      <div style={styles.chipContainer}>
        {/*Services Chip*/}
        <Link to="/services-page" style={{ cursor: 'pointer' }}>
        <CustomChip style={styles.label}
          label="Policies/Services/Forms"
          deleteIcon={<BookmarkIcon style={{ color: "white" }} />}
          onDelete={() => {}}
        />
        </Link>
        {/*Knowledge Base Chip*/}
        <Link to="/Knowledge-Base" style={{ cursor: 'pointer' }}>
        <CustomChip style={styles.label}
          label="Our Knowledge Base"
          deleteIcon={<BookmarkIcon style={{ color: "white" }} />}
          onDelete={() => {}}
        />
        </Link>
        {/*Sales Lead Chip*/}
        <Link to="/sales-Lead" style={{ cursor: 'pointer' }}>
        <CustomChip style={styles.label}
          label="Introduce a New Customer"
          deleteIcon={<BookmarkIcon style={ { color: "white" }} />}
          onDelete={() => {}}
        />
        </Link>
        {/*Contact List Chip*/}
        <Link to="/contact-list" style={{ cursor: 'pointer' }}>
        <CustomChip style={styles.label}
          label="Contact List"
          deleteIcon={<BookmarkIcon style={{ color: "white" }} />}
          onDelete={() => {}}
        />
        </Link>
        {/*Idea Hub Chip*/}
        <Link to="/Idea-Hub" style={{ cursor: 'pointer' }}>
        <CustomChip3 style={styles.label}
          label="Idea Hub"
        />
        </Link>
        {/*Book Hub Chip*/}
        <Link to="/Book-Hub" style={{ cursor: 'pointer' }}>
        <CustomChip4 style={styles.label}
          label="Book Hub"
        />
        </Link>
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
            <div key={index}  style={styles.imageContainer}> 
              <img src={image} alt={`Slide ${index + 1}`} style={styles.image} />
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
    fontSize: "19px"
  },
  slideshow: {
    width: "100%",
    maxWidth:"600px",
    margin: "15px auto 10px"
  },

  imageContainer: {
     width: '290px', 
     height: '400px', 
     borderRadius: '15px'
  },

  image: {
    width : "100%",
    height: "auto",
    borderRadius: "15px"
  }
  
};
