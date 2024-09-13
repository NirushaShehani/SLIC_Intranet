import React from 'react';

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
          <Link to="/Slot1" >
          <img src="http://localhost:3001/images/slot1/1.jpg" className="img img-big" alt="Event Slot 1" />
          </Link>
          <Link to="/Slot2" >
          <img src="http://localhost:3001/images/slot2/1.jpg" className="img img-big img-last" alt="Event Slot 2" />
          </Link>
          </div>
          <div class="responsive-container-block img-cont">
          <Link to="/Slot3" >
          <img src="http://localhost:3001/images/slot3/1.png" className="img img-big" alt="Event Slot 3" />
            </Link>
            <Link to="/Slot4" >
            <img src="http://localhost:3001/images/slot4/1.png" className="img img-big img-last" alt="Event Slot 4" />
            </Link>
          </div>
          <div class="responsive-container-block img-cont">
          <Link to="/Slot5" >
          <img src="http://localhost:3001/images/slot5/1.jpg" className="img" alt="Event Slot 5" />
          </Link>
          <Link to="/Slot6" >
          <img src="http://localhost:3001/images/slot6/1.jpg" className="img img-big" alt="Event Slot 6" />
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
