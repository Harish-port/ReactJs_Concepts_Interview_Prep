import React, { useState } from 'react'
import { sampleData } from './SampleData'
function PracticeGrid() {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const totalPages = Math.ceil(sampleData.length / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = sampleData.slice(startIndex, startIndex + rowsPerPage);
    const handleRowsPerPage = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1)
    }
    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };
    console.log(currentData, "v");
    let obj = {
        firstName: "John",
        lastName: "Doe",
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        }
    }
    const [updateObj, setupdateObj] = useState(obj)
    const handleClicks = () => {
        let res = Object.assign(obj);
        res.address.city = "India";
        setupdateObj(res)
        console.log(obj, "click");
    }
    console.log(obj, "unclick");

    return (
        <div>
            <h2>
                Practice Grid Data Table
            </h2>
            <div>
                <table border='1' cellPadding='10' style={{ width: '98vw' }} >
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                name
                            </th>
                            <th>
                                age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((row) => (
                            <tr>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: "space-between" }}>
                <div>
                    <button onClick={handlePrev}>Previous</button>
                    <span> Page {currentPage} of {totalPages} </span>
                    <button onClick={handleNext}>Next</button>
                </div>
                <div>
                    <span>Rows per page</span>
                    <select value={rowsPerPage} onChange={handleRowsPerPage}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
            <div>
                <p>
                    {updateObj.firstName}
                </p>
                <p>
                    {updateObj.lastName}
                </p>
                <p>
                    {updateObj.address.city}
                </p>
                <button onClick={handleClicks}>Click here!!</button>
            </div>
        </div>
    )
}

export default PracticeGrid