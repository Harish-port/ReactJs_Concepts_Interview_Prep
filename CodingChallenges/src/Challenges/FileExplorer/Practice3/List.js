import React, { useState } from 'react'

function List({ list, addListToNode, deleteANodeFromList ,addNodeToList}) {
    const [expanded, setExpanded] = useState({});
    return (
        <div>
            {
                list?.map((node) => (
                    <div key={node.id} style={{ paddingLeft: "10px" }}>
                        {node.isFolder && <span onClick={() => setExpanded((prev) => ({
                            ...prev, [node.name]: !prev[node.name]
                        }))} style={{ cursor: "pointer" }}> {expanded?.[node.name] ? "- " : "+ "} </span>}
                        {node.name}
                        {
                            node.isFolder &&
                            <span><img style={{ cursor: "pointer" }} onClick={() => addListToNode(node.id)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s" alt="NA" /></span>
                        }
                        <span ><img style={{ cursor: "pointer" }} onClick={() => addNodeToList(node.id)} src="https://cdn-icons-png.flaticon.com/512/1091/1091916.png" alt="NA" /></span>
                        <span ><img style={{ cursor: "pointer" }} onClick={() => deleteANodeFromList(node.id)} src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png" alt="NA" /></span>
                        {node.isFolder && expanded?.[node.name] && <List list={node.children} addNodeToList={addNodeToList} addListToNode={addListToNode} deleteANodeFromList={deleteANodeFromList} />}
                    </div>
                ))
            }
        </div >
    )
}

export default List