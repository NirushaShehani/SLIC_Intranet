import React, { useState, useEffect } from 'react';
import '../../Styles/ImageSlider.css';
import { Find_And_Replace } from '../../Services/ApiConfig';

const MAX_IMAGES = 20;

const BranchEvents = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];
      for (let i = 1; i <= MAX_IMAGES; i++) {
        const imageUrl = `${Find_And_Replace}/Images/Branches/Event${i}.jpg?cacheBust=${Date.now()}`;

        // Create an Image instance to check if the URL is accessible
        const img = new Image();
        img.src = imageUrl;

        // Wrap onload and onerror in a Promise to handle async behavior
        const imageLoaded = await new Promise((resolve) => {
          img.onload = () => resolve(imageUrl);
          img.onerror = () => resolve(null);
        });

        // If the image is successfully loaded, add to list; stop on first null
        if (imageLoaded) {
          loadedImages.push(imageLoaded);
        } else {
          break;
        }
      }
      setImages(loadedImages); // Set all loaded images to state once complete
    };

    loadImages();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (images.length === 0) {
    return <div>Loading images...</div>; // Display a loader while images load
  }

  return (
    <div className='imageSlider-MainContainer'>
      <button className="slider-button left" onClick={prevSlide}>
        ❮
      </button>
      <button className="slider-button right" onClick={nextSlide}>
        ❯
      </button>
      <div className="slider-container" style={{ width: "100vh", height: "80vh" }}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      </div>
    </div>
  );
};

export default BranchEvents;
