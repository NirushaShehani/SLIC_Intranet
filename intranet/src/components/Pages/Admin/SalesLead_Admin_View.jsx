import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminStyles/AdminSalesLead.css';

function AdminSalesLead() {
    const [salesLeads, setSalesLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetch data from backend
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/salesLead/fetchSalesLeads');
          setSalesLeads(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this useEffect runs once when the component mounts
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/api/salesLead/deleteSalesLead/${id}`);
        setSalesLeads(salesLeads.filter(lead => lead.ID !== id));
      } catch (err) {
        console.error("Error deleting sales lead:", err);
        setError('Failed to delete sales lead');
      }
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h1>Sales Leads</h1>
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Contact No 1</th>
              <th>Contact No 2</th>
              <th>SLIC Requirement</th>
              <th>Staff Member Name</th>
              <th>Staff Contact No</th>
              <th>Extension</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {salesLeads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.CLIENTNAME}</td>
                <td>{lead.CONTACTNO1}</td>
                <td>{lead.CONTACTNO2}</td>
                <td>{lead.SLICREQUIREMENT}</td>
                <td>{lead.STAFFMEMBERNAME}</td>
                <td>{lead.STAFFCONTACTNO}</td>
                <td>{lead.EXTENSION}</td>
                <td>{lead.DEPARTMENT}</td>
                <td>
                  <button onClick={() => handleDelete(lead.ID)} className="delete-button">
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

export default AdminSalesLead;
