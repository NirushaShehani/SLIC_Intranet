import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminStyles/AdminIdeaHub.css'; 

function IdeaHub() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/ideaHub/fetchideas');
        const ideasWithStatus = response.data.map(idea => ({
          ...idea,
          read: false  // Add a read status, initially false
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
      
    if (!isConfirmed) {
      console.log('Deletion canceled');
      return;
    }

    console.log('Deleting idea with ID:', id);
    
    if (!id) {
      console.error('No ID provided for deletion');
      return;
    }
    
    try {
      await axios.delete(`http://localhost:3000/api/ideaHub/deleteIdeaHub/${id}`);
      setIdeas(prevIdeas => prevIdeas.filter((idea) => idea[0] !== id));
      console.log('Idea deleted successfully');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCheckboxChange = (id) => {
    // Update the read status locally
    setIdeas(prevIdeas => 
      prevIdeas.map(idea =>
        idea[0] === id ? { ...idea, read: !idea.read } : idea
      )
    );
  };

  // Sort ideas: unread first, then read
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
          {sortedIdeas.map((idea) => (
            <tr 
              key={idea[0]} 
              className={idea.read ? '' : 'bold-text'}  // Apply bold-text class if not read
            >
              <td className="small-column">{idea[1]}</td>
              <td className="small-column">{idea[2]}</td>
              <td className="small-column">{idea[3]}</td>
              <td className="medium-column">{idea[4]}</td>
              <td className="large-column">{idea[5]}</td>
              <td className="small-column">
                <input 
                  type="checkbox" 
                  checked={idea.read} 
                  onChange={() => handleCheckboxChange(idea[0])}
                />
              </td>
              <td className="small-column">
                <button className="delete-button" onClick={() => handleDelete(idea[0])}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IdeaHub;
