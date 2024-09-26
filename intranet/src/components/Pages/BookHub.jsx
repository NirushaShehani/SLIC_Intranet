import React from 'react'
import Quote from '../Sub_Components/BookHub_Components/Quote';
import BookCard from '../Sub_Components/BookHub_Components/BookCard';
import '../../Styles/BookHub.css';
//image urls
import image1 from '../../assets/BookHub/On_Managing_Yourself.png';
import image2 from '../../assets/BookHub/Leading_Change.png';
import image3 from '../../assets/BookHub/Playing_To_Win.png';
import image4 from '../../assets/BookHub/The_Outsiders.png';
import image5 from '../../assets/BookHub/Love+Work.png';

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
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    image: image2,
    title: 'Bee News',
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
    image: image5,
    title: 'The Innovators Dilemma',
    author: 'Clayton M. Christensen',
  },
  {
    image: image5,
    title: 'The Power of Your Subconscious Mind',
    author: 'CJoseph Murphy',
  },
  {
    image: image5,
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
