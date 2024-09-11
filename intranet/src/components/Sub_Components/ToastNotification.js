import React, { useState, useEffect } from 'react';

const ToastNotification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Display the message for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const toastStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '15px 25px',
    borderRadius: '8px',
    fontSize: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
  };

  return (
    <div style={toastStyle}>
      {message}
    </div>
  );
};

export default ToastNotification;
