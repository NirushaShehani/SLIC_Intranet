import React, { useState } from 'react';
import '../../Styles/UploadEvents.css';

const MediaUpload = () => {
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [uploaderName, setUploaderName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      department,
      date,
      uploaderName,
      subject,
      description,
      file,
    });
  };

  return (
    <div className="media-upload-container">
      <h2>Media Upload</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Department</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="ICT">ICT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
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
        <div className="form-group">
          <label>File Upload</label>
          <input type="file" onChange={handleFileChange} />
          <div className="file-upload-info">
            <p>Drag your file(s) to start uploading</p>
            <button type="button" onClick={() => document.querySelector('input[type="file"]').click()}>Browse Files</button>
            <p>Only support jpg, png, svg and zip files</p>
          </div>
        </div>
        <button type="submit" className="next-button">Next</button>
      </form>
    </div>
  );
};

export default MediaUpload;
