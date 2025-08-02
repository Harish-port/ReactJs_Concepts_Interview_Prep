import React, { useState } from 'react'
import { sampleData } from './SampleData';

function PracticeGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const totalPages = Math.ceil(sampleData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = sampleData.slice(startIndex, startIndex + rowsPerPage);

    const handleRowsPerPage = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1)
    }

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1))
    }

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    }
    console.log(currentPage);

    return (
        <div>
            <h1>Practise Grid</h1>
            <table border={1} cellPadding='10' style={{ borderCollapse: "collapse", padding: "10px", width: "98vw" }}>
                <thead>
                    <th>
                        id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                </thead>
                <tbody>
                    {currentData.map((tData) => (
                        <tr>
                            <td>
                                {tData.id}
                            </td>
                            <td>
                                {tData.name}
                            </td>
                            <td>
                                {tData.age}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ padding: "10px 0", display: "flex" }}>
                <div>
                    {

                        <button disabled={currentPage === 1 ? true : false} onClick={handlePrevious}>Previous</button>
                    }
                    <span> Page {currentPage} of {totalPages} </span>
                    {

                        <button disabled={currentPage === totalPages ? true : false} onClick={handleNext}>Next</button>

                    }
                </div>
                <div style={{ marginLeft: "auto" }}>
                    <span>Rows per page </span>
                    <select value={rowsPerPage} onChange={handleRowsPerPage}>
                        <option value='3'>3</option>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default PracticeGrid