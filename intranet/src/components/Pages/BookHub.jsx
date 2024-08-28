import React from 'react'
import Quote from '../Sub_Components/BookHub_Components/Quote';
import BookCard from '../Sub_Components/BookHub_Components/BookCard';
import '../../Styles/BookHub.css';

const books = [
  {
    image: '/path/to/on-managing-yourself.jpg',
    title: 'On Managing Yourself',
    author: 'Clayton M. Christensen',
  },
  {
    image: '/path/to/leading-change.jpg',
    title: 'Leading Change',
    author: 'John P. Kotter',
  },
  {
    image: '/path/to/playing-to-win.jpg',
    title: 'Playing to Win',
    author: 'A. G. Lafley',
  },
  {
    image: '/path/to/the-outsiders.jpg',
    title: 'The Outsiders',
    author: 'Will Thorndike',
  },
  {
    image: '/path/to/love-work.jpg',
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
