import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './AdminStyles/AdminSalesLead.css';
import { BASE_URL, ENDPOINTS } from "../../../Services/ApiConfig";

function AdminSalesLead() {
    const [salesLeads, setSalesLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('active');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody = {
                    p_ID: "",
                    p_ACTIVE: filter === 'removed' ? "0" : "1"
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
    }, [filter]); 

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this sales lead?");
        if(confirmDelete){
            try{
                const requestBody = {
                    p_ID: id,         
                    p_ACTIVE: "0"     
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
        
        XLSX.writeFile(workbook, `${filter === 'removed' ? 'RemovedSalesLeads' : 'ActiveSalesLeads'}.xlsx`);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // Filter sales leads based on the search input
    const filteredSalesLeads = salesLeads.filter(lead => 
        (lead.contactno1 || '').toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Sales Leads</h1>
            <div className="button-group">
                <button 
                    className={`filter-button ${filter === 'removed' ? 'active' : ''}`} 
                    onClick={() => handleFilterChange('removed')}
                >
                    Removed Leads
                </button>
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search Contact No 1"
                    value={search}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>
            <center>
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
                        {filteredSalesLeads.map((lead) => (
                            <tr key={lead.id}>
                                <td>{lead.clientName}</td>
                                <td>{lead.contactno1}</td>
                                <td>{lead.contactno2}</td>
                                <td>{lead.slicRequirement}</td>
                                <td>{lead.staffmembername}</td>
                                <td>{lead.staffcontactno}</td>
                                <td>{lead.slicExtension}</td>
                                <td>{lead.slicDepartment}</td>
                                <td>
                                    {filter === 'active' && (
                                        <button onClick={() => handleDelete(lead.id)} className="delete-button">
                                            DELETE
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
            <div className="button-container">
                <button className="download-button" onClick={handleDownload}>
                    Download
                </button>
            </div>
        </div>
    );
}

export default AdminSalesLead;
