import { useState } from 'react'
import json from './data.json'
import List from './List'
import './demo.css';

const DemoFile = () => {
    const [data, setData] = useState(json);

    const addListToNode = (parentId) => {
        try {
            const name = prompt("Enter Folder Name");
            const updatedList = (listOfNodes) => {
                // eslint-disable-next-line array-callback-return
                return listOfNodes.map((node) => {
                    if (node.id === parentId) {
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
            };
            setData((prev) => updatedList(prev))
        } catch (error) {
            console.log(error);
        }
    }

    const addAnodeToList = (parentId) => {
        try {
            const name = prompt("Enter File Name");
            const updatedList2 = (list) => {
                return list.map(node => {
                    if (node.id === parentId && node.isFolder) {
                        return {
                            ...node,
                            children: [
                                ...(node.children || []),
                                {
                                    id: Date.now().toString(),
                                    name,
                                    isFolder: false
                                }
                            ]
                        };
                    }
                    if (node.children && node.children.length > 0) {
                        return { ...node, children: updatedList2(node.children) };
                    }
                    return node;
                });
            };
            setData(prev => updatedList2(prev));
        } catch (error) {
            console.log(error);
        }
    };

    const deleteNodeFromList = (itemId) => {
        const updatedList = (list) => {
            return list.filter((node) => node.id !== itemId).map(node => {
                if (node.children) {
                    return { ...node, children: updatedList(node.children) }
                }
                return node;
            })
        }
        setData(prev => updatedList(prev))
    }

    return (
        <>
            <h1>Demo session 1</h1>
            <List list={data} addListToNode={addListToNode} deleteNodeFromList={deleteNodeFromList} addAnodeToList={addAnodeToList} />
        </>
    )
}

export default DemoFile