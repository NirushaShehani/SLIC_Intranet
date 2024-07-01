import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/HRNoticeAdmin1.css'; // Ensure to create and link this CSS file

function HRNoticeAdmin1() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/hr-notice-admin2');
      };
  return (
    <div className="hr-notice-admin">
      <h2>Media Upload</h2>
      <p className="form-description">Add your Files and details here</p>
      <form>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="A MESSAGE FROM SRI LANKA INSURANCE" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Write something here about event..."></textarea>
        </div>
        <div className="form-group upload-group">
          <div className="upload-area">
            <img src="upload-icon.png" className="upload-icon" /> {/* Use an appropriate icon */}
            <p>Drag your file(s) to start uploading</p>
            <p>----- OR -----</p>
            <button type="button" onClick={() => document.getElementById('file-upload').click()}>Browse files</button>
            <input type="file" id="file-upload" name="file-upload" multiple style={{ display: 'none' }} />
          </div>
        </div>
        <div className="form-group file-support">
          <p>Only support .jpg, .png, .svg and .zip files</p>
        </div>
        <div className="form-footer">
          <button type="submit" className="submit-button" onClick={handleSubmit}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default HRNoticeAdmin1;
