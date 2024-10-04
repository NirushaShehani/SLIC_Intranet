import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './AdminStyles/AdminSalesLead.css';
import { BASE_URL, ENDPOINTS } from "../../../Services/ApiConfig";
import DrawerMenu from '../../Sub_Components/DrawerMenu';

function AdminSalesLead() {
    const [salesLeads, setSalesLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('active');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(20); // Number of rows per page

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
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
                    setSalesLeads([]);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Error fetching sales leads:', err);
                setError('An error occurred while fetching sales leads');
                //setLoading(false); 
            }finally {
                setLoading(false); // Set loading to false after the request is completed
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
            catch(err){
                console.error('Error deleting sales lead:', err);
                alert('An error occurred while deleting the sales lead');
            }
        }
    };

    const handleDownload = () => {
        const salesLeadsWithoutActive = salesLeads.map(({ is_active, ...rest }) => rest);
        const worksheet = XLSX.utils.json_to_sheet(salesLeadsWithoutActive);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Leads');
        XLSX.writeFile(workbook, `${filter === 'removed' ? 'RemovedSalesLeads' : 'ActiveSalesLeads'}.xlsx`);
    };
    

    const handleFilterChange = (newFilter) => {
        if (filter !== newFilter) {
            setFilter(newFilter); // Change filter if it's different
            setSalesLeads([]); // Reset sales leads when filter changes
            setCurrentPage(1); // Reset to the first page when filter changes
        }
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1); // Reset to the first page when search changes
    };

    // Filter sales leads based on the search input
    const filteredSalesLeads = salesLeads.filter(lead => 
        (lead.contactno1 || '').toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const indexOfLastLead = currentPage * rowsPerPage;
    const indexOfFirstLead = indexOfLastLead - rowsPerPage;
    const currentLeads = filteredSalesLeads.slice(indexOfFirstLead, indexOfLastLead);
    const totalPages = Math.ceil(filteredSalesLeads.length / rowsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>

    return (
        <div className="admin-sales-lead-container">
            <DrawerMenu/>
            <h1>Sales Leads</h1>
            <div className="button-group">
                <button 
                    className={`filter-button ${filter === 'removed' ? 'active-removed' : ''}`} 
                    onClick={() => handleFilterChange('removed')}
                >
                    Removed Leads
                </button>
                <button 
                    className={`filter-button ${filter === 'active' ? 'active-active' : ''}`} 
                    onClick={() => handleFilterChange('active')}
                    style={{ backgroundColor: filter === 'removed' ? '#28a745' : '#4CAF50' }}
                >
                    Active Leads
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
                        {currentLeads.length > 0 ? (
                            currentLeads.map((lead) => (
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
                                        {filter === 'active' ? (
                                            <button onClick={() => handleDelete(lead.id)} className="delete-button">
                                                DELETE
                                            </button>
                                        ) : (
                                            <span style={{ color: 'red' }}>Removed</span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" style={{ textAlign: 'center' }}>
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </center>
            <div className="pagination-controls">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
            <div className="button-container">
                <button className="download-button" onClick={handleDownload}>
                    Download
                </button>
            </div>
        </div>
    );
}

export default AdminSalesLead;
