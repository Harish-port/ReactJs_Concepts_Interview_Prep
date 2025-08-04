import React, { useState } from "react"
import json from './demo.json';
import List from './renderList'
import './demostyle.css'
const FileDemo = () => {
    const [data, setData] = useState(json);
    const addNodeToList = (parentId) => {
        const name = prompt("Enter Name");
        if (!name || name.trim() === "") return;
        try {
            const updatedTree = (listOfnodes) => {
                return listOfnodes.map(node => {
                    if (node.id === parentId) {
                        return {
                            ...node,
                            children: [...node.children, {
                                id: Date.now().toString(),
                                name,
                                isFolder: true,
                                children: []
                            }]
                        };
                    }
                    if (node.children && node.children.length > 0) {
                        return { ...node, children: updatedTree(node.children) };
                    }
                    return node;
                });
            };
            setData((prev) => updatedTree(prev));
        } catch (e) {
            console.error("Failed to update tree", e);
        }
    };

    const deleteNodeFromList = (itemId) => {
        try {
            const updateTree = (list) => {
                return list.filter((node) => node.id !== itemId).map((node) => {
                    if (node.children) {
                        return { ...node, children: updateTree(node.children) }
                    }
                    return node;
                });
            }
            setData((prev) => updateTree(prev));
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <h1>File Explorer Demo practice sesion</h1>
            <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
        </>
    )
}

export default FileDemo