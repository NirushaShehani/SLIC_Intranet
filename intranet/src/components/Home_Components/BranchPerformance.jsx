import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../Styles/BranchPerformance.css';
import image1 from '../../assets/Event1.jpg';
import image2 from '../../assets/Event2.jpg';
import image3 from '../../assets/Event3.jpg';
import { Link } from 'react-router-dom';

const branches = [
  { name: 'Kandy', value: 5000000, target: 4500000 },
  { name: 'Panadura', value: 4600000, target: 4000000 },
  { name: 'Galle', value: 4000000, target: 3000000 },
  { name: 'Bandarawela', value: 3000000, target: 3500000 },
  { name: 'Aluthgama', value: 2500000, target: 2000000 },
  { name: 'Akurassa', value: 1700000, target: 1800000 },
  { name: 'Dehiwala', value: 1000000, target: 1200000 },
];

const achievedBranches = branches.filter(branch => branch.value >= branch.target).sort((a, b) => b.value - a.value);
const notAchievedBranches = branches.filter(branch => branch.value < branch.target).sort((a, b) => b.value - a.value);

const images = [image1, image2, image3];

const strings = [
  { key: "Q 1", value: "10%" },
  { key: "Q 2", value: "10%" },
  { key: "Q 3", value: "10%" },
  { key: "Q 4", value: "10%" }
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
      <div className="branch-performance">
        <h2>Branch Performance</h2>
        <div className="branch-list">
          {achievedBranches.map((branch, index) => (
            <div key={index} className="branch-item achieved">
              <span>{branch.name}</span>
              <span>Rs. {branch.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
          ))}
        </div>
        <div className="branch-list">
          {notAchievedBranches.map((branch, index) => (
            <div key={index} className="branch-item">
              <span>{branch.name}</span>
              <span>Rs. {branch.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>
          ))}
        </div>
        <div className="link-contain">
          <Link to="/full-branch-performance" className="read-more">Read more...</Link>
        </div>
      </div>

      <div className="branch-event">
        <h2>Branch Event</h2>
        <div className="images-container">
          <Link to="/full-branch-events">
            <img src={images[currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
          </Link>
        </div>
      </div>

      <div className="incentive-criteria">
        <div className="table-container">
          <div className="incentive-container">
            <h2>Life Total Incentive</h2>
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
    </div>
  );
};

export default BranchPerformance;