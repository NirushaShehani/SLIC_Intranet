import React, { useState, useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../Styles/BranchPerformance.css';
import image1 from '../../assets/Event1.jpg';
import image2 from '../../assets/Event2.jpg';
import image3 from '../../assets/Event3.jpg';
import { Link } from 'react-router-dom';
import { BASE_URL, ENDPOINTS } from "../../Services/ApiConfig";

const images = ['http://172.24.90.80:10157/Images/Branches/Event1.jpg', 'http://172.24.90.80:10157/Images/Branches/Event2.jpg', 'http://172.24.90.80:10157/Images/Branches/Event3.jpg'];
const categories = ['a', 'b', 'c', 'd', 'e'];

const strings = [
  { key: "Feb and March", value: "20.0%" },
  { key: "Q 2", value: "30.0%" },
];

const updatedStrings = strings.filter(item => item.value !== "");

const BranchPerformance = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('a');
  const [branchNames, setBranchNames] = useState({ a: [], b: [], c: [], d: [], e: [] });
  const [achPercentages, setAchPercentages] = useState({ a: [], b: [], c: [], d: [], e: [] });
  const performanceListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      fetch(`${BASE_URL}/${ENDPOINTS.BR_PERFORMACE_CT_WISE}?p_cat=${category.toUpperCase()}`)
        .then((response) => response.json())
        .then((data) => {
          const names = data.map((item) => item.branch_name);
          const percentages = data.map((item) => item.achPrecentage);
          setBranchNames((prev) => ({ ...prev, [category]: names }));
          setAchPercentages((prev) => ({ ...prev, [category]: percentages }));
        })
        .catch((error) => console.error('Error fetching data:', error));
    });
  }, []);

  const scrollToTop = () => {
    const list = performanceListRef.current;
    if (list) {
      list.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollToFirstNotAchieved = () => {
    const list = performanceListRef.current;
    if (list) {
      const firstNotAchievedIndex = achPercentages[selectedCategory].findIndex(percentage => percentage < 100);
      if (firstNotAchievedIndex !== -1) {
        const notAchievedElement = list.children[firstNotAchievedIndex];
        if (notAchievedElement) {
          list.scrollTo({
            top: notAchievedElement.offsetTop - list.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  const sortedPerformance = branchNames[selectedCategory]
    .map((name, index) => ({
      name,
      percentage: achPercentages[selectedCategory][index],
    }))
    .sort((a, b) => b.percentage - a.percentage); 


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
      <br></br>
      <div className="branch-performance-container">
        <h2>Branch Performance (FYP)</h2>
        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="achievement-status">
          <button className="status-button achieved" onClick={scrollToTop}>
            Achieved
          </button>
          <button className="status-button not-achieved" onClick={scrollToFirstNotAchieved}>
            Not Achieved
          </button>
        </div>

        <div className="performance-list" ref={performanceListRef}>
          {sortedPerformance.map((item, index) => (
            <div key={index} className="performance-item">
              <div className="branch-name">{item.name}</div>
              <div className="performance-details">
                <span className="percentage">{item.percentage}%</span>
                <div className="performance-bar-container">
                  <div
                    className={`performance-bar ${item.percentage >= 100 ? 'achieved-bar' : 'not-achieved-bar'}`}
                    style={{ width: `${Math.min(item.percentage, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="branch-event">
        <h2>Branch Events</h2>
        <div className="images-container">
          <img src={images[currentImageIndex]} alt={`Event ${currentImageIndex + 1}`} />
        </div>
      </div>
    </div>
  );
};

export default BranchPerformance;
