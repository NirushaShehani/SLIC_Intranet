import React from 'react';
import '../BookHub_Components/Component_styles/BookCard.css';

const BookCard = ({ image, title, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-image" />
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
    </div>
  );
};

export default BookCard;
