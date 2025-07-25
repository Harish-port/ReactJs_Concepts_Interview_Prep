// DataTable.jsx
import React, { useState } from 'react';
import { sampleData } from './SampleData';

const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const totalPages = Math.ceil(sampleData.length / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = sampleData.slice(startIndex, startIndex + rowsPerPage);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handleRowsChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };

    return (
        <div>
            <h2>Data Table</h2>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '98vw' }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <button onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
                    <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                </div>

                <div>
                    Rows per page:{' '}
                    <select value={rowsPerPage} onChange={handleRowsChange}>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
