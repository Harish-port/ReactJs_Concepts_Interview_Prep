const List = ({ list }) => {
    return (
        <div className="container">
            {list.map(node => (
                <>
                    <div key={node.id}>{node.name}</div>
                    {node?.children && <List list={node.children} />}
                </>
            ))}
        </div>
    )
}

export default List;