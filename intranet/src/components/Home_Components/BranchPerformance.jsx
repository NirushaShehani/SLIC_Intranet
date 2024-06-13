import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../Styles/BranchPerformance.css';
import image1 from '../../assets/Event1.jpg';
import image2 from '../../assets/Event2.jpg';
import image3 from '../../assets/Event3.jpg';

const branches = [
  { name: 'Kandy', value: 5000000 },
  { name: 'Panadura', value: 4600000 },
  { name: 'Galle', value: 4000000 },
  { name: 'Bandarawela', value: 3000000 },
  { name: 'Aluthgama', value: 2500000 },
  { name: 'Akurassa', value: 1700000 },
  { name: 'Dehiwala', value: 1000000 },
];

branches.sort((a, b) => b.value - a.value);

const BranchPerformance = () => {
  return (
    <div>
      <div className="branch-performance">
        <h2>Branch Performance</h2>
        {branches.map((branch, index) => (
          <div key={index} className="branch-item">
            <span>{branch.name}</span>
            <span>Rs. {branch.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        ))}
        <div className="read-more">Read more...</div>
      </div>
      <div className="branch-event">
        <h2>Branch Event</h2>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={image1} alt="Event 1" />
          </div>
          <div>
            <img src={image2} alt="Event 2" />
          </div>
          <div>
            <img src={image3} alt="Event 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BranchPerformance;
