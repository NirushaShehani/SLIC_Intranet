import React from 'react';
import image2 from '../../assets/SLIC_Events/poson poya/2-min.png';
import image3 from '../../assets/SLIC_Events/suba pathum/1-min.jpg';
import image4 from '../../assets/SLIC_Events/super woman/1.jpg';
import image5 from '../../assets/SLIC_Events/life call center/1-min.png';
import image6 from '../../assets/image3.jpg';
import '../../Styles/CompanyEvents.css';
import '../../Styles/Event_Gallery.css';
import '../../Styles/Responsive_Event_Gallery_css.module.css'
import { Link } from 'react-router-dom';

const CompanyEvents = () => {
  return (
    <div className="CompanyEvents">
      <h2 className="notice-hd">Events Gallery</h2>
      {/* Events Galery */}
      <div className="album">
        <div class="responsive-container-block bg">
          <div class="responsive-container-block img-cont">
          <Link to="/full-events" >
            <img src={image2} class="img img-big" />
            <img src={image5} class="img img-big img-last" />
            
          </Link>
          </div>
          <div class="responsive-container-block img-cont">
          <Link to="/full-events" >
            <img src={image4} class="img img-big" />
            <img src={image5} class="img img-big img-last" />
            </Link>
          </div>
          <div class="responsive-container-block img-cont">
          <Link to="/full-events" >
            <img src={image6} class="img img-big" />
            <img src={image6} class="img" />
          </Link>
          </div>
        </div>
    </div>
    <br></br>
    <br></br>
      {/* Events Galery */}
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
