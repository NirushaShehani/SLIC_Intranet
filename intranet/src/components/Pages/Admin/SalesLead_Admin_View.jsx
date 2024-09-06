import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './AdminStyles/AdminSalesLead.css';
import { BASE_URL, ENDPOINTS } from "../../../Services/ApiConfig";

function AdminSalesLead() {
    const [salesLeads, setSalesLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Define the request body as per the provided format
          const requestBody = {
            p_ID: "",
            p_ACTIVE: ""
          };
    
          // Use backticks for template literals
          const response = await axios.post(
            `${BASE_URL}/${ENDPOINTS.GetSalesLeads}`, // Correct template string usage
            requestBody,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
    
          // Assuming the response contains the array of sales leads
          if (response.status === 200) {
            setSalesLeads(response.data); // Update the state with fetched sales leads
            setLoading(false); // Turn off loading once data is fetched
          } else {
            console.error("API responded with a status:", response.status);
            setError('Failed to fetch sales leads');
            setLoading(false);
          }
        } catch (err) {
          console.error('Error fetching sales leads:', err);
          setError('An error occurred while fetching sales leads');
          setLoading(false); // Turn off loading if there's an error
        }
      };
    
      fetchData(); // Call the fetchData function
    }, []); // Empty dependency array ensures this runs only on component mount
    
  
    const handleDelete = async (id) => {
      
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
