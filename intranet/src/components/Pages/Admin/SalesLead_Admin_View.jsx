import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
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
          console.log('API response:', response.data); 
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
      // Confirm before deleting
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
        await axios.delete(`http://localhost:3000/api/salesLead/deleteSalesLead/${id}`);
        // Optionally, update the salesLeads state to remove the deleted item from the list
        setSalesLeads(salesLeads.filter(lead => lead.ID !== id && lead.id !== id));
        console.log(id, 'Sales lead deleted successfully');
      } catch (error) {
        console.error('Error deleting sales lead:', error);
      }
    };
    
    const handleDownload = () => {
      // Convert salesLeads data to a format suitable for Excel
      const worksheet = XLSX.utils.json_to_sheet(salesLeads);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Leads');
      
      // Generate the Excel file
      XLSX.writeFile(workbook, 'SalesLeadsData.xlsx');
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {salesLeads.map((lead) => {
            console.log('Lead:',lead); // Check the structure of each lead object
            return (
              <tr key={lead.ID || lead.id}>
                <td>{lead.CLIENTNAME}</td>
                <td>{lead.CONTACTNO1}</td>
                <td>{lead.CONTACTNO2}</td>
                <td>{lead.SLICREQUIREMENT}</td>
                <td>{lead.STAFFMEMBERNAME}</td>
                <td>{lead.STAFFCONTACTNO}</td>
                <td>{lead.EXTENSION}</td>
                <td>{lead.DEPARTMENT}</td>
                <td>
                  <button onClick={() => handleDelete(lead.ID || lead.id)} className="delete-button">
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
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

export default AdminSalesLead;
