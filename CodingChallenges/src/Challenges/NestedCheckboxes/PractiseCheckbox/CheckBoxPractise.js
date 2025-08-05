import React, { useState } from 'react';
import sampleData from './data.json';

const Checkboxes = ({ list, setChecked, checked }) => {
    const handleChecboxChange = (isChecked, node) => {
        setChecked((prev) => {
            const newState = { ...prev, [node.id]: isChecked }
            const updateChildren = (node) => {
                node.children.forEach((child) => {
                    newState[child.id] = isChecked;
                    child.children && updateChildren(child)
                })
            }
            updateChildren(node)
            return newState;
        })
    }
    return (
        <>
            {list?.map(data => (
                <div key={data.id} style={{ paddingLeft: "10px" }}>
                    <input type="checkbox" checked={checked[data.id] || 0} onChange={(event) => handleChecboxChange(event.target.checked, data)} />
                    {data.name}
                    {data.children && <Checkboxes list={data.children} checked={checked} setChecked={setChecked} />}
                </div>
            ))}
        </>)
}

function CheckBoxPractise() {
    const [checked, setChecked] = useState({})
    return (
        <div>
            <h1>CheckBoxPractise</h1>
            <Checkboxes list={sampleData} checked={checked} setChecked={setChecked} />
        </div>
    )
}

export default CheckBoxPractise;