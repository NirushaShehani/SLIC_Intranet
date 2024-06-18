import React, { useState } from 'react';
import '../../Styles/Performance.css';

const salesData = [
  { name: 'Ann Culhane', target: 478000, achieve: 500000 },
  { name: 'Kadin Herwitz', target: 350000, achieve: 300000 },
  { name: 'Ann Culhane', target: 600000, achieve: 790000 },
  { name: 'Kadin Herwitz', target: 450000, achieve: 350000 },
  { name: 'Ann Culhane', target: 348000, achieve: 348000 },
  { name: 'Kadin Herwitz', target: 575000, achieve: 570000 },
  { name: 'Ann Culhane', target: 460000, achieve: 500000 },
  { name: 'Kadin Herwitz', target: 470000, achieve: 450000 },
  { name: 'Ann Culhane', target: 480000, achieve: 478000 },
  { name: 'Kadin Herwitz', target: 380000, achieve: 378000 },
  { name: 'Ann Culhane', target: 450000, achieve: 450000 },
  { name: 'Kadin Herwitz', target: 548000, achieve: 400000 },
  { name: 'Ann Culhane', target: 358000, achieve: 470000 },
  { name: 'Kandy', target: 4500000, achieve: 600000 },
  { name: 'Panadura', target: 4000000, achieve: 4600000 },
  { name: 'Galle', target: 3000000, achieve: 4000000 },
  { name: 'Bandarawela', target: 3500000, achieve: 3000000 },
  { name: 'Aluthgama', target: 2000000, achieve: 2500000 },
  { name: 'Akurassa', target: 1800000, achieve: 1700000 },
  { name: 'Dehiwala', target: 1200000, achieve: 1000000 },
  { name: 'Ann Culhane', target: 478000, achieve: 500000 },
  { name: 'Kadin Herwitz', target: 350000, achieve: 300000 },
  { name: 'Ann Culhane', target: 600000, achieve: 790000 },
  { name: 'Kadin Herwitz', target: 450000, achieve: 350000 },
  { name: 'Ann Culhane', target: 348000, achieve: 348000 },
  { name: 'Kadin Herwitz', target: 575000, achieve: 570000 },
  { name: 'Ann Culhane', target: 460000, achieve: 500000 },
  { name: 'Kadin Herwitz', target: 470000, achieve: 450000 },
  { name: 'Ann Culhane', target: 480000, achieve: 478000 },
];

const Performance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filteredSalesData = salesData.filter(data =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSalesData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSalesData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getStatusBox = (target, achieve) => {
    if (achieve >= target) {
      return <span className="achieve-box">Achieve</span>;
    } else {
      return <span className="not-achieve-box">Not Achieve</span>;
    }
  };

  return (
    <div>
      <h2 className="performance-head">Branch Performance</h2>
      <div className="full-branch">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Branch Name</th>
                <th>Target</th>
                <th>Achieve</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>Rs. {data.target.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                  <td>Rs. {data.achieve.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                  <td>{getStatusBox(data.target, data.achieve)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            &#60;
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Performance;
