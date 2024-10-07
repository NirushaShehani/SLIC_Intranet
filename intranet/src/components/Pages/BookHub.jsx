import React from 'react'
import Quote from '../Sub_Components/BookHub_Components/Quote';
import BookCard from '../Sub_Components/BookHub_Components/BookCard';
import '../../Styles/BookHub.css';
//image urls
import image1 from '../../assets/BookHub/bookhub1.png';
import image2 from '../../assets/BookHub/bookhub2.png';
import image3 from '../../assets/BookHub/bookhub3.png';
import image4 from '../../assets/BookHub/bookhub4.png';
import image5 from '../../assets/BookHub/bookhub5.png';
import image6 from '../../assets/BookHub/bookhub6.png';
import image7 from '../../assets/BookHub/bookhub7.png';
import image8 from '../../assets/BookHub/bookhub8.jpg';

// ../../assets/BookHub
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
    title: 'Life Marketing NEWSLETTER',
    author: 'volume II 2024',
  },
  {
    image: image2,
    title: 'Bee News',
    author: 'volume I 2024',
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
    author: 'CJoseph Murphy',
  },
  {
    image: image8,
    title: 'The Toyota Way',
    author: 'Jeffrey K. Licker',
  },
];

const BookHub = () => {
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
  )
}

export default BookHub
