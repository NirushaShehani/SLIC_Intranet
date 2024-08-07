import React from 'react';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import '../../Styles/CompanyEvents.css';
import { Link } from 'react-router-dom';

const CompanyEvents = () => {
  return (
    <div className="CompanyEvents">
      <h2 className="notice-hd">Events Gallery</h2>
      <div className="image-container">
        <Link to="/full-events">
          <img src={image1} alt="Image 1" className="image image1" />
        </Link>
        <Link to="/full-events">
          <img src={image2} alt="Image 2" className="image image2" />
        </Link>
        <div className="image image3-container">
          <Link to="/full-events">
            <img src={image3} alt="Image 3" className="image image3" />
          </Link>
        </div>
        <Link to="/full-events">
          <img src={image1} alt="Image 1" className="image image1" />
        </Link>
        <Link to="/full-events">
          <img src={image2} alt="Image 2" className="image image2" />
        </Link>
      </div>
      <h2 className="notice-head">Company Notices</h2>
      <p className="sub-notice-hd">SLICL Suba Pathum scholarship awards 2023</p>
      <p className='notice'>Lorem Ipsum has been the industry's standard when it dummy text ever since 1500s when an unknown have took a galley of type.</p>
      <hr />
      <p className="sub-notice-hd">SLICL Suba Pathum scholarship awards 2023</p>
      <p className='notice'>Lorem Ipsum has been the industry's standard car van dummy text ever since 1500s when an unknown when took a galley of type.</p>
      <hr />
      <div className="link-container">
        <Link to="/full-notices" className="read-more-link">Read more...</Link>
      </div>
    </div>
  );
};

export default CompanyEvents;
