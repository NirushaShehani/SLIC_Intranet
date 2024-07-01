import React, { useState, useEffect } from 'react';
import '../../Styles/Media.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import uploadSuccessImage from '../../assets/Success.PNG'; 
import uploadErrorImage from '../../assets/error popup.png'; 

const Media = () => {
    const [branch, setBranch] = useState('Kandy');
    const [date, setDate] = useState('');
    const [uploaderName, setUploaderName] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    const handleFileChange = (event) => {
        setFiles(Array.from(event.target.files));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPreview(true);
    };

    const handleCancel = () => {
        setBranch('Kandy');
        setDate('');
        setUploaderName('');
        setDescription('');
        setFiles([]);
        setShowPreview(false);
    };

    const handleEdit = () => {
        setShowPreview(false);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        // Adjust the height of the textarea based on the content
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };

    const handleFinalSubmit = () => {
        
        const isSuccess = Math.random() > 0.5; 
        if (isSuccess) {
            setShowSuccessPopup(true);
        } else {
            setShowErrorPopup(true);
        }
    };

    const handleContinue = () => {
        // Navigate to the dashboard page
        window.location.href = './Components/Home';
    };

    const handleTryAgain = () => {
        // Hide the error popup
        setShowErrorPopup(false);
    };

    return (
        <div>
            <h2 className="media-head-xx">Branch Event Upload</h2>
            <div className="branch-event-upload-box-xx">
                <h1 className="media-upload-title-xx">Media Upload</h1>
                <p className="media-upload-subtitle-xx">Add your Files and details here</p>
                <div className="close-icon-xx" onClick={handleCancel}>&times;</div>
                {showPreview ? (
                    <div className="media-preview-xx">
                        <div className="form-row-xx">
                            <div className="form-group-xx">
                                <label>Branch</label>
                                <div className="preview-box-xx">{branch}</div>
                            </div>
                            <div className="form-group-xx form-group-date-xx">
                                <div className='date-xx'>
                                    <label>Date</label>
                                </div>
                                <div className="preview-box-xx">{date}</div>
                            </div>
                        </div>
                        <div className="form-group-xx">
                            <label>Uploader Name</label>
                            <div className="preview-box-xx">{uploaderName}</div>
                        </div>
                        <div className="form-group-xx">
                            <label>Description</label>
                            <div className="preview-box-xx">{description}</div>
                        </div>
                        <div className="form-group-xx">
                            <label>Files</label>
                            <div className="preview-box-xx">
                                <ul>
                                    {files && files.length > 0 ? (
                                        files.map((file, index) => (
                                            <li key={index}>
                                                <i className="fas fa-file"></i> {file.name}
                                            </li>
                                        ))
                                    ) : (
                                        <li>No files uploaded</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="form-buttons-xx">
                            <button type="button" onClick={handleEdit} className="edit-button-xx">Back</button>
                            <button type="button" onClick={handleFinalSubmit} className="submit-button-xx">Submit</button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="media-upload-form-xx">
                        <div className="form-row-xx">
                            <div className="form-group-xx">
                                <label htmlFor="branch">Branch</label>
                                <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
                                    <option value="Kandy">Kandy</option>
                                    <option value="Colombo">Colombo</option>
                                </select>
                            </div>
                            <div className="form-group-xx form-group-date-xx">
                                <div className='date-xx'>
                                    <label htmlFor="date">Date</label>
                                </div>
                                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group-xx">
                            <label htmlFor="uploaderName">Uploader Name</label>
                            <input type="text" id="uploaderName" value={uploaderName} onChange={(e) => setUploaderName(e.target.value)} placeholder="John Doe" />
                        </div>
                        <div className="form-group-xx">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                className="description-xx"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Write something here about the event"
                                rows="1"
                                style={{ overflow: 'hidden' }}
                            />
                        </div>
                        <div className="file-upload-section-xx">
                            <label htmlFor="fileUpload" className="file-upload-label-xx">
                                <i className="fas fa-cloud-upload-alt file-upload-icon"></i>
                                <div className="file-upload-text-xx">Drag your file(s) to start uploading</div>
                                <input type="file" id="fileUpload" multiple onChange={handleFileChange} className="file-input-xx" />
                                <div className="file-upload-or-xx">-------OR-------</div>
                                <button type="button" onClick={() => document.getElementById('fileUpload').click()} className="file-upload-button-xx">Browse files</button>
                            </label>
                        </div>
                        <div className="file-upload-info-xx">
                            <p>Only support .jpg, .png and .svg and zip files</p>
                        </div>
                        <div className="form-buttons-xx">
                            <button type="button" onClick={handleCancel} className="cancel-button-xx">Cancel</button>
                            <button type="submit" className="submit-button-xx">Next</button>
                        </div>
                    </form>
                )}
            </div>
            {showSuccessPopup && (
                <div className="popup-overlay-xx">
                    <div className="popup-box-xx">
                        <img src={uploadSuccessImage} alt="Success" />
                        <button onClick={handleContinue} className="continue-button-xx">Continue</button>
                    </div>
                </div>
            )}
            {showErrorPopup && (
                <div className="popup-overlay-xx">
                    <div className="popup-box-xx">
                        <img src={uploadErrorImage} alt="Error" />
                        <button onClick={handleTryAgain} className="try-again-button-xx">Try Again</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;

