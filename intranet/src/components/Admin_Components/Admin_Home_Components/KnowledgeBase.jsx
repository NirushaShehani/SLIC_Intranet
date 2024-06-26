import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import DrawerMenu from '../Sub_Components/DrawerMenu';
import Chip from "@mui/material/Chip";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { styled } from "@mui/material/styles";
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
      <DrawerMenu/>
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
    padding: "1px",
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
