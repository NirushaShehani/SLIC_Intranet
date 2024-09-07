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
          const requestBody = {
            p_ID: "",
            p_ACTIVE: "1"
          };
    
          const response = await axios.post(
            `${BASE_URL}/${ENDPOINTS.GetSalesLeads}`, 
            requestBody,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
    
          if (response.status === 200) {
            setSalesLeads(response.data); 
            setLoading(false); 
          } else {
            console.error("API responded with a status:", response.status);
            setError('Failed to fetch sales leads');
            setLoading(false);
          }
        } catch (err) {
          console.error('Error fetching sales leads:', err);
          setError('An error occurred while fetching sales leads');
          setLoading(false); 
        }
      };
    
      fetchData(); 
    }, []); 
    
  
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this sales lead?");
      if(confirmDelete){
        try{
          const requestBody = {
            p_ID: id,         
            p_ACTIVE: ""     
          };
          const response = await axios.put(
            `${BASE_URL}/${ENDPOINTS.SalesLeadActive}`,
            requestBody,
            {
              headers: {
                'Content-Type': 'application/json',
                'x-api-version': '1.0'
            }
          }
          );

          if(response.status === 200 && response.data === 1){
            setSalesLeads(salesLeads.filter(lead => lead.id !== id));
            console.log(response.data)
            alert('Sales lead deleted successfully');
          } else{
            console.error("Failed to delete sales lead. Status:", response.status);
            alert('Failed to delete sales lead');
          }
        }
        catch{
          console.error('Error deleting sales lead:', error);
          alert('An error occurred while deleting the sales lead');
        }
      }
    };
    
    const handleDownload = () => {
      const worksheet = XLSX.utils.json_to_sheet(salesLeads);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Leads');
      
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
            console.log('Lead:',lead); 
            return (
              <tr key={lead.id}>
                <td>{lead.clientName}</td>
                <td>{lead.contact1}</td>
                <td>{lead.contact2}</td>
                <td>{lead.slicRequirement}</td>
                <td>{lead.staffmembername}</td>
                <td>{lead.staffcontactno}</td>
                <td>{lead.slicExtension}</td>
                <td>{lead.slicDepartment}</td>
                <td>
                  <button onClick={() => handleDelete(lead.id)} className="delete-button">
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
