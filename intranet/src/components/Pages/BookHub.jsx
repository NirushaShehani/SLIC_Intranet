import React, { useState, useEffect } from 'react';
import Quote from '../Sub_Components/BookHub_Components/Quote';
import BookCard from '../Sub_Components/BookHub_Components/BookCard';
import '../../Styles/BookHub.css';
import image1 from '../../assets/BookHub/bookhub1.png';
import image2 from '../../assets/BookHub/bookhub2.png';
import image3 from '../../assets/BookHub/bookhub3.png';
import image4 from '../../assets/BookHub/bookhub4.png';
import image5 from '../../assets/BookHub/bookhub5.png';
import image6 from '../../assets/BookHub/bookhub6.png';
import image7 from '../../assets/BookHub/bookhub7.png';
import image8 from '../../assets/BookHub/bookhub8.jpg';

const pdfUrls = [
  'http://172.24.90.80:10157/BookHub/1.pdf', 
  'http://172.24.90.80:10157/BookHub/2.pdf',
  'http://172.24.90.80:10157/BookHub/3.pdf',
  'http://172.24.90.80:10157/BookHub/4.pdf',
  'http://172.24.90.80:10157/BookHub/5.pdf',
  'http://172.24.90.80:10157/BookHub/6.pdf',
  'http://172.24.90.80:10157/BookHub/7.pdf',
  'http://172.24.90.80:10157/BookHub/8.pdf',
];

const books = [
  {
    image: image1,
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    image: image2,
    title: 'Life Marketing NEWSLETTER',
    author: 'volume II 2024',
  },
  {
    image: image3,
    title: 'Hit Refresh',
    author: 'Satya Nadella',
  },
  {
    image: image4,
    title: 'Originals',
    author: 'Adam Grant',
  },
  {
    image: image5,
    title: 'SUPERINTELLIGENCE',
    author: 'NICK BOSTROM',
  },
  {
    image: image6,
    title: 'The Innovators Dilemma',
    author: 'Clayton M. Christensen',
  },
  {
    image: image7,
    title: 'The Power of Your Subconscious Mind',
    author: 'Joseph Murphy',
  },
  {
    image: image8,
    title: 'The Toyota Way',
    author: 'Jeffrey K. Licker',
  },
];

const BookHub = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to check if the current time is within the allowed reading hours
  const isBookAccessible = () => {
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    
    // Define allowed time ranges (7:00 - 8:30 AM, 12:30 - 2:00 PM)
    const isMorningAllowed = (currentHour === 7 || (currentHour === 8 && currentMinutes <= 30));
    const isAfternoonAllowed = (currentHour === 12 && currentMinutes >= 30) || (currentHour === 13) || (currentHour === 14 && currentMinutes <= 0);

    return isMorningAllowed || isAfternoonAllowed;
  };

  // Function to check if the current time is restricted (8:30 AM - 12:30 PM or 2:00 PM - 4:45 PM)
  const isTimeRestricted = () => {
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    
    return (currentHour === 8 && currentMinutes > 30) ||
           (currentHour >= 9 && currentHour < 12) ||
           (currentHour === 12 && currentMinutes < 30) ||
           (currentHour === 14 && currentMinutes > 0) ||
           (currentHour > 14 && currentHour < 16) ||
           (currentHour === 16 && currentMinutes <= 45);
  };

  // Update the current time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleBookClick = (e) => {
    if (!isBookAccessible() && isTimeRestricted()) {
      e.preventDefault();
      alert('This book can be read from 7:00 A.M to 8:30 A.M or 12:30 P.M to 2:00 P.M');
    }
  };

  return (
    <div className="book-hub-container">
      <Quote />
      <div className="book-list">
        {books.map((book, index) => (
          pdfUrls[index] ? (
            <a 
              key={index} 
              href={pdfUrls[index]} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="book-link"
              onClick={handleBookClick}
            >
              <BookCard 
                image={book.image} 
                title={book.title} 
                author={book.author} 
              />
            </a>
          ) : (
            <BookCard 
              key={index} 
              image={book.image} 
              title={book.title} 
              author={book.author} 
            />
          )
        ))}
      </div>
    </div>
  );
};

export default BookHub;
