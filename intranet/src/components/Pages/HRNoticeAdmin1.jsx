import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Styles/HRNoticeAdmin1.css'; // Ensure to create and link this CSS file

function HRNoticeAdmin1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    date: '',
    subject: '',
    description: '',
    files: []
  });

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      files: e.target.files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hr-notice-admin2', { state: { formData } });
  };

  return (
    <div className="hr-notice-admin">
      <h2>Media Upload</h2>
      <p className="form-description">Add your Files and details here</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" className="date-input" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="A MESSAGE FROM SRI LANKA INSURANCE" value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Write something here about event..." value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group upload-group">
          <div className="upload-area">
            <img src="upload-icon.png" className="upload-icon" /> {/* Use an appropriate icon */}
            <p>Drag your file(s) to start uploading</p>
            <p>----- OR -----</p>
            <button type="button" onClick={() => document.getElementById('file-upload').click()}>Browse files</button>
            <input type="file" id="file-upload" name="file-upload" multiple style={{ display: 'none' }} onChange={handleFileChange} />
          </div>
        </div>
        <div className="form-group file-support">
          <p>Only support .jpg, .png, .svg and .zip files</p>
        </div>
        <div className="form-footer">
          <button type="submit" className="submit-button">Next</button>
        </div>
      </form>
    </div>
  );
}

export default HRNoticeAdmin1;