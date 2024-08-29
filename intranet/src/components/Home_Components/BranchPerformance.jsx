import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../Styles/BranchPerformance.css';
import image1 from '../../assets/Event1.jpg';
import image2 from '../../assets/Event2.jpg';
import image3 from '../../assets/Event3.jpg';
import { Link } from 'react-router-dom';



const images = [image1, image2, image3];

const strings = [
  { key: "Feb and March", value: "20.0%" },
  { key: "Q 2", value: "30.0%" },
];

const updatedStrings = strings.filter(item => item.value !== "");

const BranchPerformance = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="incentive-criteria">
        <div className="table-container">
          <div className="incentive-container">
            <h2>Life Incentive</h2>
            <table>
              <tbody>
                <tr className="incentive-container-content">
                  {updatedStrings.map((item, index) => (
                    <td key={index}>{item.key}</td>
                  ))}
                </tr>
                <tr className="incentive-container-content">
                  {updatedStrings.map((item, index) => (
                    <td key={index}>{item.value}</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <div className="link-contain">
              <Link to="/Incentive-Criteria-page" className="read-more">Read more...</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="branch-performance">
        <h2>Branch Performance</h2>
        
      </div>

      

      <div className="branch-event">
        <h2>Branch Event</h2>
        <div className="images-container">
          <Link to="/full-branch-events">
            <img src={images[currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BranchPerformance;