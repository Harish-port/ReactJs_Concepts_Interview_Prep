import { useState } from "react"
import json from './demo.json';
import './demostyle.css'
const FileDemo = () => {
    const [data, setData] = useState(json);

    const List = ({ list }) => {
        return (
            <div className="container3">
                {list.map((node, index) => (
                    <div key={index}>
                        <span>
                            {node.name}
                        </span>
                        {node?.children && <List list={node.children} />}
                    </div>
                ))}
            </div>
        )
    }
    return (
        <>
            <h1>File Explorer Demo practice sesion</h1>
            <List list={data} />
        </>
    )
}

export default FileDemo