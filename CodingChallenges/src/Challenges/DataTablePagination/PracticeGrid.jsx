import React, { useState } from 'react'
import { sampleData } from './SampleData';

function PracticeGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3)
    const totalPages = Math.ceil(sampleData.length / rowsPerPage);
    const startIndex = (currentPage - 1) & rowsPerPage;
    const handleRowsPerChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }
    const currentData = sampleData.slice(startIndex, startIndex + rowsPerPage);
    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
    }
    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }
    return (
        <div>
            <h1>Practice Grid</h1>
            <div>
                <table border='1' cellPadding='10' style={{ borderCollapse: "collapse", width: "98vw" }} >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((data) => (
                            <><tr>
                                <td>
                                    {data.id}
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>
                                    {data.age}
                                </td>
                            </tr></>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ display: "flex" }}>
                <div>
                    <button disabled={currentPage === 1} onClick={handlePrevious}>
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button disabled={currentPage === totalPages} onClick={handleNext}>
                        Next
                    </button>
                </div>
                <div style={{ marginLeft: "auto", paddingRight: "20px" }}>
                    Rows per page
                    <select value={rowsPerPage} onChange={(e) => handleRowsPerChange(e)}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default PracticeGrid