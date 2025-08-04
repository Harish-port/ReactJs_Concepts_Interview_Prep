import React, { useState } from 'react'
import list from './data.json';
import List from './List';

function PraticeFileExpolo() {
    const [data, setData] = useState(list);

    const addListToNode = (parentId) => {
        try {
            const getFolderName = prompt("Enter Folder Name");
            const updatedList = (listOfNodes) => {
                console.log(listOfNodes, "listOfNodes");

                return listOfNodes?.map((node) => {
                    if (node.id === parentId) {
                        return {
                            ...node, children: [...node.children, {
                                id: Date.now().toString(),
                                name: getFolderName,
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
            setData((prev) => updatedList(prev))

        } catch (error) {
            console.log(error);

        }
    }

    const addNodeToList = (parentId) => {
        try {
            const getFolderName = prompt("Enter Folder Name");
            const updatedList = (listOfNodes) => {
                console.log(listOfNodes, "listOfNodes");

                return listOfNodes?.map((node) => {
                    if (node.id === parentId) {
                        return {
                            ...node, children: [...node.children, {
                                id: Date.now().toString(),
                                name: getFolderName,
                                isFolder: false,
                            }]
                        }
                    }
                    if (node.children && node.children.length > 0) {
                        return { ...node, children: updatedList(node.children) }
                    }
                    return node;
                })
            }
            setData((prev) => updatedList(prev))

        } catch (error) {
            console.log(error);

        }
    };

    const deleteANodeFromList = (parentId) => {
        try {
            const updatedList = (listOfNodes) => {
                return listOfNodes?.filter((node) => node.id !== parentId).map((item) => {
                    if (item.children) {
                        return { ...item, children: updatedList(item.children) }
                    }
                    return item;
                })
            }
            setData((prev) => updatedList(prev))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <List list={data} addListToNode={addListToNode}  addNodeToList={addNodeToList} deleteANodeFromList={deleteANodeFromList} />
        </div>
    )
}

export default PraticeFileExpolo