import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Styles/FullNotices.css'; // Ensure this path is correct

function FullNotices() {
  const location = useLocation();
  const { state } = location;
  const { formData } = state || {};

  return (
    <div className="full-notices">
      <h2>Notice Details</h2>
      <p>Date: {formData?.date}</p>
      <p>Subject: {formData?.subject}</p>
      <p>Description: {formData?.description}</p>
      <div>
        <h3>Files uploaded:</h3>
        {formData?.files && Array.from(formData.files).map((file, index) => (
          <p key={index}>{file.name}</p>
        ))}
      </div>
    </div>
  );
}

export default FullNotices;
