import React, { useState, useEffect } from 'react';
import '../BookHub_Components/Component_styles/Quote.css';
const quotes = [
  {
    
    text: "Books were my pass to personal freedom.",
    author: "Oprah Winfrey",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "The only thing that you absolutely have to know is the location of the library.",
    author: "Albert Einstein",
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
    author: "Dr. Seuss",
  },
];

const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-container" >
      <p className="quote-text">“{quotes[currentQuoteIndex].text}” </p>
      <p className="quote-author" style={{marginLeft: "10px"}}> {quotes[currentQuoteIndex].author}  </p>
    </div>
  );
};

export default Quote;