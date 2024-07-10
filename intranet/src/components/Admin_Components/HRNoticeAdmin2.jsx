import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../Styles/HRNoticeAdmin2.css'; // Ensure to create and link this CSS file
import uploadIcon1 from '../../assets/upload_icon.png';

function HRNoticeAdmin2() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { formData } = state || {};

  const handleBack = () => {
    navigate('/hr-notice-admin1', { state: { formData } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/full-notices', { state: { formData } });
  };

  return (
    <div className="hr-notice-admin">
      <h2>Review Your Submission</h2>
      <p className="form-description">Review your Files and details here</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={formData?.date} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" value={formData?.subject} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" readOnly>{formData?.description}</textarea>
        </div>
        <div className="form-group upload-group">
          <div className="upload-area">
            <img src={uploadIcon1} className="upload-icon" /> {/* Use an appropriate icon */}
            <p>Files uploaded:</p>
            {formData?.files && Array.from(formData.files).map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
        </div>
        <div className="form-group file-support">
          <p>Only support .jpg, .png, .svg and .zip files</p>
        </div>
        <div className="form-footer">
          <button type="button" className="back-button" onClick={handleBack}>Back</button>
          <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HRNoticeAdmin2;
