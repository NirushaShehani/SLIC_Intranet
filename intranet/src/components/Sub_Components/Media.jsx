import React, { useState } from 'react';
import '../../Styles/Media.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Media = () => {
    const [branch, setBranch] = useState('Kandy');
    const [date, setDate] = useState('');
    const [uploaderName, setUploaderName] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
  
    const handleFileChange = (event) => {
      setFiles(event.target.files);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
    };
  
    const handleCancel = () => {
      setBranch('Kandy');
      setDate('');
      setUploaderName('');
      setDescription('');
      setFiles([]);
    };
  
    return (
        <div>
            <h2 className="media-head">Branch Event Upload</h2>
            <div className="branch-event-upload-box">
                <h1 className="media-upload-title">Media Upload</h1>
                <p className="media-upload-subtitle">Add your Files and details here</p>
                <form onSubmit={handleSubmit} className="media-upload-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="branch">Branch</label>
                            <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
                                <option value="Kandy">Kandy</option>
                                <option value="Colombo">Colombo</option>
                                
                            </select>
                        </div>
                        <div className="form-group form-group-date">
                            <div className='date'>
                            <label htmlFor="date">Date</label>
                            </div>
                            <input type="date" id="date" className="date-date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="uploaderName">Uploader Name</label>
                        <input type="text" id="uploaderName" value={uploaderName} onChange={(e) => setUploaderName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="file-upload-section">
                        <label htmlFor="fileUpload" className="file-upload-label">
                            <i className="fas fa-cloud-upload-alt file-upload-icon"></i>
                            <div className="file-upload-text">Drag your file(s) to start uploading</div>
                            <input type="file" id="fileUpload" multiple onChange={handleFileChange} className="file-input" />
                            <div className="file-upload-or">-------OR-------</div>
                            <button type="button" onClick={() => document.getElementById('fileUpload').click()} className="file-upload-button">Browse files</button>
                        </label>
                    </div>
                    <div className="file-upload-info">
                        <p>Only support .jpg, .png and .svg and zip files</p>
                    </div>
                    <div className="form-buttons">
                        <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                        <button type="submit" className="submit-button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Media;
