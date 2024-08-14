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
        setIdeas(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    // Confirm before deleting
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
      
      // Refetch data to update the UI
      const response = await axios.get('http://localhost:3000/api/ideaHub/fetchideas');
      setIdeas(response.data);
      
      console.log('Idea deleted successfully');
    } catch (error) {
      console.error('Error deleting idea:', error);
    }
  };
  
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
            <th className="small-column">Action</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea, index) => (
            <tr key={index}>
              <td className="small-column">{idea[1]}</td>
              <td className="small-column">{idea[2]}</td>
              <td className="small-column">{idea[3]}</td>
              <td className="medium-column">{idea[4]}</td>
              <td className="large-column">{idea[5]}</td>
              <td className="small-column">
                <button className="delete-button" onClick={() => handleDelete(index)}>
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