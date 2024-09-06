import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './AdminStyles/AdminIdeaHub.css';

function IdeaHub() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the new API endpoint
        const response = await axios.post('http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Working/GetIdeaHubData', {
          p_ID: '',      // Optionally pass ID if needed, empty string for all
          p_ACTIVE: '',  // Optionally pass ACTIVE status if needed, empty string for all
          p_READ: ''     // Optionally pass READ status if needed, empty string for all
        });

        // Assume response.data is an array of idea objects
        const ideasWithStatus = response.data.map(idea => ({
          ID: idea.ID,
          USEREPF: idea.USEREPF,
          DEPTORBRANCH: idea.DEPTORBRANCH,
          IDEADATE: idea.IDEADATE,
          NAME: idea.NAME,
          USERIDEA: idea.USERIDEA,
          read: idea.READ_STATUS === 1 // Assuming READ_STATUS is provided and 1 means read
        }));
        setIdeas(ideasWithStatus);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this idea?');
    if (!isConfirmed) return;

    try {
      await axios.post('http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Working/IdeaRemoveorNot', {
        p_ID: id,
        p_ACTIVE: 0 // Assuming 0 means inactive or delete
      });
      setIdeas(prevIdeas => prevIdeas.filter(idea => idea.ID !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCheckboxChange = async (id) => {
    try {
      const idea = ideas.find(idea => idea.ID === id);
      if (!idea) return;

      const updatedReadStatus = !idea.read;

      await axios.post('http://192.168.101.21:10155/LifeIntranetAPI/api/v1/Working/IdeaReadorNot', {
        p_ID: id,
        p_ACTIVE: updatedReadStatus ? 1 : 0
      });

      setIdeas(prevIdeas =>
        prevIdeas.map(idea =>
          idea.ID === id ? { ...idea, read: updatedReadStatus } : idea
        )
      );
    } catch (err) {
      setError('Failed to update read status. Please try again later.');
    }
  };

  const handleDownload = () => {
    // Convert ideas data to a format suitable for Excel
    const worksheet = XLSX.utils.json_to_sheet(ideas);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Ideas');

    // Generate the Excel file
    XLSX.writeFile(workbook, 'IdeaHubData.xlsx');
  };

  const sortedIdeas = [...ideas].sort((a, b) => a.read - b.read);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Idea Hub</h1>
      <table className="idea-hub-table">
        <thead>
          <tr>
            <th className="small-column">User EPF</th>
            <th className="small-column">Dept or Branch</th>
            <th className="small-column">Idea Date</th>
            <th className="medium-column">Name</th>
            <th className="large-column">User Idea</th>
            <th className="small-column">Read</th>
            <th className="small-column">Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedIdeas.length === 0 ? (
            <tr>
              <td colSpan="7">No ideas available</td>
            </tr>
          ) : (
            sortedIdeas.map((idea) => (
              <tr
                key={idea.ID}
                className={idea.read ? '' : 'bold-text'}
              >
                <td className="small-column">{idea.USEREPF}</td>
                <td className="small-column">{idea.DEPTORBRANCH}</td>
                <td className="small-column">{idea.IDEADATE}</td>
                <td className="medium-column">{idea.NAME}</td>
                <td className="large-column">{idea.USERIDEA}</td>
                <td className="small-column">
                  <input
                    type="checkbox"
                    checked={idea.read}
                    onChange={() => handleCheckboxChange(idea.ID)}
                  />
                </td>
                <td className="small-column">
                  <button className="delete-button" onClick={() => handleDelete(idea.ID)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="button-container">
        <button className="download-button" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );  
}

export default IdeaHub;
