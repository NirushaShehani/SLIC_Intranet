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

const books = [
  {
    image: image1,
    title: 'On Managing Yourself',
    author: 'Clayton M. Christensen',
  },
  {
    image: image2,
    title: 'Leading Change',
    author: 'John P. Kotter',
  },
  {
    image: image3,
    title: 'Playing to Win',
    author: 'A. G. Lafley',
  },
  {
    image: image4,
    title: 'The Outsiders',
    author: 'Will Thorndike',
  },
  {
    image: image5,
    title: 'Love + Work',
    author: 'Marcus Buckingham',
  },
];

const BookHub = () => {
  return (
    <div className="book-hub-container">
      <Quote />
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard 
            key={index} 
            image={book.image} 
            title={book.title} 
            author={book.author} 
          />
        ))}
      </div>
    </div>
  )
}

export default BookHub
