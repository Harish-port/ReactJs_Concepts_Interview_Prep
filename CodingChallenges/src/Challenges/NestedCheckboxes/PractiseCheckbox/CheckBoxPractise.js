import React, { useState } from 'react';
import mockdata from './data.json';

const CheckBoxes = ({ data, setChecked, checked }) => {
    const handleCheckBoxChange = (isChecked, node) => {
        setChecked(prev => {
            const newState = { ...prev, [node.id]: isChecked };
            const updateChildren = (node) =>{
                 node.children.forEach((child)=> {
                    
                 })
            }

        })
    }
    return (
        <>
            {data.map(node => (
                <div key={node.id} style={{ paddingLeft: "10px" }}>
                    <input type="checkbox" value={checked} onChange={(e) => handleCheckBoxChange(e.target.checked, node)} />
                    {node.name}
                    {
                        node.children &&
                        <CheckBoxes data={node.children} />
                    }
                </div>
            ))}
        </>
    )
}

function CheckBoxPractise() {
    const [checked, setChecked] = useState({});

    return (
        <div>
            <h1>CheckBoxPractise</h1>
            <CheckBoxes data={mockdata} checked={checked} setChecked={setChecked} />
        </div>
    )
}

export default CheckBoxPractise