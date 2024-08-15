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
    const isConfirmed = window.confirm('Are you sure you want to delete this sales lead?');
      
      if (!isConfirmed) {
        console.log('Deletion canceled');
        return;
      }
    
      console.log('Deleting sales lead with ID:', id);
      
      if (!id) {
        console.error('No ID provided for deletion');
        return;
      }
    
    try {
        await axios.delete(`http://localhost:3000/api/ideaHub/deleteIdeaHub/${id}`);
        
        setIdeas(ideas.filter((idea) => idea[0] !== id));
        console.log(id, 'Sales lead deleted successfully');
    } catch (err) {
      setError(err.message);
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