import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../Styles/MediaUploadDetails.css';
import uploadIcon from '../../assets/upload_icon.png';
import removeIcon from '../../assets/remove_icon.png'; // Make sure you have this icon in your assets

const MediaUploadDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { department, date, uploaderName, subject, description, files: initialFiles } = location.state || {};
  const [files, setFiles] = useState(Array.isArray(initialFiles) ? initialFiles : []);

  const handleBackClick = () => {
    navigate('/upload-event', {
      state: {
        department,
        date,
        uploaderName,
        subject,
        description,
        files,
      },
    });
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate('/full-events'); // Navigate to the desired URL
  };

  return (
    <div className="media-upload-details-container">
      <h2>Media Upload</h2>
      <form className="media-upload-form">
        <div className="inline-group">
          <div className="form-group">
            <label>Department</label>
            <input type="text" value={department} readOnly />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="text" value={date} readOnly />
          </div>
        </div>
        <div className="form-group">
          <label>Uploader Name</label>
          <input type="text" value={uploaderName} readOnly />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" value={subject} readOnly />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={description} readOnly />
        </div>
        {files.length > 0 && (
          <div className="file-list">
            {files.map((file, index) => (
              <div key={index} className="file-item">
                <img src={uploadIcon} alt="file icon" className="file-icon" />
                <p>{file.name}</p>
                <img 
                  src={removeIcon} 
                  alt="remove icon" 
                  className="remove-icon" 
                  onClick={() => handleRemoveFile(index)} 
                />
              </div>
            ))}
          </div>
        )}
        <div className="action-buttons">
          <button type="button" className="back-button" onClick={handleBackClick}>Back</button>
          <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MediaUploadDetails;
