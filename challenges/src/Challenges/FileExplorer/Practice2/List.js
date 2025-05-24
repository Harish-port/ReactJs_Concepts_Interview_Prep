import { useState } from "react";

const List = ({ list, addListToNode, deleteNodeFromList }) => {
    const [expanded, setExpanded] = useState({});
    console.log(list, "cjesju");

    return (
        <div className="container">
            {list.map((node) => {
                return <div key={node.id}>
                    {node.isFolder && <span onClick={() => setExpanded(prev => ({
                        [node.name]: !prev[node.name]
                    }))}>{expanded?.[node.name] ? "- " : "+ "}  </span>
                    }
                    <span>
                        {node.name}
                    </span>
                    {node.isFolder && <span><img onClick={() => addListToNode(node.id)} src="https://img.icons8.com/ios7/512w/add-folder.png" alt="NA" /></span>}
                    <span ><img onClick={() => deleteNodeFromList(node.id)} src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png" alt="NA" /></span>
                    {node?.children && expanded?.[node.name] && <List list={node.children} addListToNode={addListToNode} deleteNodeFromList={deleteNodeFromList} />}
                </div>
            })}
        </div >
    )
}

export default List;
