import React, { useState } from 'react'

const List = ({ list, addListToNode, addNodeToList, deleteNodeFromList }) => {
    const [isExpanded, setIsExpanded] = useState({});
    console.log(isExpanded);

    return (
        <div>
            {list.map((node) => (
                <div key={node.id} style={{ paddingLeft: "10px" }}>
                    {node.isFolder && node.children && <span onClick={() => setIsExpanded(prev => ({
                        [node.name]: !prev[node.name]
                    }))} style={{ cursor: "pointer" }}> {isExpanded?.[node.name] ? "- " : "+ "}</span>}
                    {node.name}
                    {node.isFolder && <span style={{ cursor: 'pointer' }} onClick={() => addListToNode(node)} ><img src="https://img.icons8.com/ios7/512w/add-folder.png" alt="NA" /></span>}
                    <span onClick={() => addNodeToList(node)} style={{ cursor: 'pointer' }} ><img src="https://cdn-icons-png.flaticon.com/512/1091/1091916.png" alt="NA" /></span>
                    <span onClick={() => deleteNodeFromList(node)} style={{ cursor: 'pointer' }} ><img src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png" alt="NA" /></span>
                    {
                        node.isFolder && isExpanded?.[node.name] &&
                        <List list={node.children} addListToNode={addListToNode} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
                    }
                </div>
            ))}
        </div>
    )
}

export default List