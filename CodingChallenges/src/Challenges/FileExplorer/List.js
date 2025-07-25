import { useState } from "react";

const List = ({ list }) => {
    const [isExpanded, setIsExpanded] = useState({})
    return (
        <div className="container">
            {list.map(node => (
                <div key={node.id}>
                    {node.isFolder && <span onClick={() => setIsExpanded((prev) => ({
                        ...prev, [node.name]: !prev[node.name]
                    }))}>{isExpanded?.[node.name] ? "- " : "+ "}</span>}
                    <span>{node.name}</span>
                    {
                        node.isFolder &&
                        <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s" alt="NA" /></span>
                    }
                    {isExpanded?.[node.name] && node?.children && <List list={node.children} />}
                </div>
            ))}
        </div>
    )
}

export default List;