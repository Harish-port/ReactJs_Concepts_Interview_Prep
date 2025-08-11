import React, { useState } from 'react'
import mockData from './data.json';
import List from './List';

function DemoMainFileExplorer() {
    const [currentData, setCurrentData] = useState(mockData)
    const addListToNode = (parentId) => {
        try {
            const name = prompt("Enter the Folder name");
            const updatedList = (listOfNodes) => {
                return listOfNodes.map((node) => {
                    if (node.id === parentId.id) {
                        return {
                            ...node, children: [...node.children, {
                                id: Date.now().toString(),
                                name,
                                isFolder: true,
                                children: []
                            }]
                        }
                    }
                    if (node.children && node.children.length > 0) {
                        return { ...node, children: updatedList(node.children) }
                    }
                    return node;
                })
            }
            setCurrentData(prev => updatedList(prev))
        } catch (error) {
            console.log(error);
        }
    }
    const addNodeToList = (parentId) => {
        try {
            const name = prompt("Enter the Folder name");
            const updatedList = (listOfNodes) => {
                return listOfNodes.map((node) => {
                    if (node.id === parentId.id) {
                        return {
                            ...node, children: [...node.children, {
                                id: Date.now().toString(),
                                name,
                                isFolder: false,
                                children: []
                            }]
                        }
                    }
                    if (node.children && node.children.length > 0) {
                        return { ...node, children: updatedList(node.children) }
                    }
                    return node;
                })
            }
            setCurrentData(prev => updatedList(prev))
        } catch (error) {
            console.log(error);
        }
    }
    const deleteNodeFromList = (parentId) => {
        try {
            const updateList = (listOfNodes) => {
                return listOfNodes.filter((node) => node.id !== parentId.id).map((item) => {
                    if (item.children) {
                        return { ...item, children: updateList(item.children) }
                    }
                    return item;
                })
            }
            setCurrentData(prev => updateList(prev))
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <h1>Demo file</h1>
            <List list={currentData} addListToNode={addListToNode} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
        </>
    )
}

export default DemoMainFileExplorer