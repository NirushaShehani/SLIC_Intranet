import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/UploadEvents.css';
import uploadIcon from '../../assets/upload_icon.png';

const MediaUpload = () => {
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [uploaderName, setUploaderName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the details page
    navigate('/media-upload-details', {
      state: {
        department,
        date,
        uploaderName,
        subject,
        description,
        file,
      },
    });
  };

  return (
    <div className="media-upload-container">
      <h2>Media Upload</h2>
      <p className="form-description">Add your Files and details here</p>
      <form onSubmit={handleSubmit} className="media-upload-form">
        <div className="form-group-row">
          <div className="form-group">
            <label>Department</label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">Select Department</option>
              <option value="ICT">ICT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group date-group">
            <label style={{ marginBottom: '2px', marginRight:'-50px' }}>Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Uploader Name</label>
          <input type="text" value={uploaderName} onChange={(e) => setUploaderName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="form-group upload-group">
          <div className="upload-area">
            <img src={uploadIcon} className="upload-icon" alt="upload icon" /> {/* Use an appropriate icon */}
            <p>Drag your file(s) to start uploading</p>
            <p>----- OR -----</p>
            <button type="button" onClick={() => document.getElementById('file-upload').click()}>Browse files</button>
            <input type="file" id="file-upload" name="file-upload" multiple style={{ display: 'none' }} onChange={handleFileChange} />
          </div>
        </div>
        <div className="form-group file-support">
          <p>Only support .jpg, .png, .svg and .zip files</p>
        </div>
        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
};

export default MediaUpload;
