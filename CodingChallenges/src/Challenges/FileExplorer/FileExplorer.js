import React, { useState } from 'react'
import json from './data.json';
import './style.css';
import List from './List';

function FileExplorer() {
    const [data, setData] = useState(json)
    return (
        <div>
            <h1>File Explorer</h1>
            <List list={data} />
        </div>
    )
}

export default FileExplorer