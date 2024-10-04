import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './AdminStyles/AdminIdeaHub.css';
import { BASE_URL, ENDPOINTS } from "../../../Services/ApiConfig";
import DrawerMenu from '../../Sub_Components/DrawerMenu';
import backgroundImage from '../../../assets/bgimage.png'; 

function IdeaHub() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('unread'); // 'unread', 'read', 'removed'
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const pageSize = 20; // Number of rows per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/${ENDPOINTS.IdeaHubData}`, {
          p_ID: '',
          p_ACTIVE: filter === 'removed' ? '0' : '1', // Active ideas or removed ideas
          p_READ: filter === 'read' ? '1' : '0' // Read or unread ideas
        });

        const ideasWithStatus = response.data.map(idea => ({
          ID: idea.id,
          USEREPF: idea.userEPF,
          DEPTORBRANCH: idea.deptOrBranch,
          IDEADATE: idea.ideadate,
          NAME: idea.name,
          USERIDEA: idea.userIdea,
          read: idea.read_status === 1
        }));

        setIdeas(ideasWithStatus);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 400) {
          // Handle case where no data is available by setting ideas to an empty array
          setIdeas([]);
        } else {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [filter]);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this idea?');
    if (!isConfirmed) return;

    try {
      await axios.put(`${BASE_URL}/${ENDPOINTS.IdeaRemoveorNot}`, {
        p_ID: id,
        p_ACTIVE: '0'
      });
      setIdeas(prevIdeas => prevIdeas.filter(idea => idea.ID !== id));
      console.log('Idea deleted successfully.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCheckboxChange = async (id) => {
    try {
      const idea = ideas.find(idea => idea.ID === id);
      if (!idea) return;

      const updatedReadStatus = !idea.read;

      await axios.put(`${BASE_URL}/${ENDPOINTS.IdeaReadorNot}`, {
        p_ID: id,
        p_ACTIVE: updatedReadStatus ? '1' : '0'
      });

      setIdeas(prevIdeas =>
        prevIdeas.filter(idea => idea.ID !== id)
      );
      console.log('Read status updated successfully.');
    } catch (err) {
      setError('Failed to update read status. Please try again later.');
    }
  };

  const handleDownload = () => {
    const ideasWithoutRead = ideas.map(({ read, ...rest})=> rest);
    const worksheet = XLSX.utils.json_to_sheet(ideasWithoutRead );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Ideas');
    XLSX.writeFile(workbook, 'IdeaHubData.xlsx');
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (direction) => {
    setCurrentPage(prevPage => prevPage + direction);
  };

  // Filter ideas based on the search query
  const filteredIdeas = ideas.filter(idea =>
    idea.USEREPF.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentIdeas = filteredIdeas.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredIdeas.length / pageSize);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='full-page'>
      <div>
        <DrawerMenu/>
        <h1>Idea Hub</h1>
        <div className="button-group">
          <button
            className="filter-button green"
            onClick={() => handleFilterChange('unread')}
          >
            Unread
          </button>
          <button
            className="filter-button orange"
            onClick={() => handleFilterChange('read')}
          >
            Read
          </button>
          <button
            className="filter-button red"
            onClick={() => handleFilterChange('removed')}
          >
            Removed
          </button>
        </div>
        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search by User EPF"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </div>
        <table className="idea-hub-table">
          <thead>
            <tr>
              <th className="small-column">User EPF</th>
              <th className="small-column">Dept or Branch</th>
              <th className="small-column">Idea Date</th>
              <th className="medium-column">Name</th>
              <th className="large-column">User Idea</th>
              {filter !== 'read' && filter !== 'removed' && <th className="small-column">Read</th>}
              <th className="small-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentIdeas.length === 0 ? (
              <tr>
                <td colSpan="7">No ideas available</td>
              </tr>
            ) : (
              currentIdeas.map((idea) => (
                <tr key={idea.ID} className={idea.read ? '' : 'bold-text'}>
                  <td className="small-column">{idea.USEREPF}</td>
                  <td className="small-column">{idea.DEPTORBRANCH}</td>
                  <td className="small-column">{idea.IDEADATE}</td>
                  <td className="medium-column">{idea.NAME}</td>
                  <td className="large-column">{idea.USERIDEA}</td>
                  {filter !== 'read' && filter !== 'removed' && (
                    <td className="small-column">
                      <input
                        type="checkbox"
                        checked={idea.read}
                        onChange={() => handleCheckboxChange(idea.ID)}
                        disabled={filter === 'removed'}
                      />
                    </td>
                  )}
                  <td className="small-column">
                    {filter === 'removed' ? (
                      <span className="removed-text">Removed</span>
                    ) : filter === 'read' ? (
                      <span className="read-text">Read</span>
                    ) : (
                      <button className="delete-button" onClick={() => handleDelete(idea.ID)}>
                        DELETE
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="pagination-controls">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(-1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            className="pagination-button"
            onClick={() => handlePageChange(1)}
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
    </div>
  );
}

export default IdeaHub;
