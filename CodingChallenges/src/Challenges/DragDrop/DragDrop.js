import React, { useState } from 'react';
export default function DragDropTasks() {
    const initialTasks = [
        { id: 1, name: 'Task One' },
        { id: 2, name: 'Task Two' },
    ];

    const [available, setAvailable] = useState(initialTasks);
    const [completed, setCompleted] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    const handleDrop = (targetListSetter, targetList, sourceListSetter, sourceList) => {
        if (!draggedItem) return;
        // Avoid duplicates
        if (targetList.find(t => t.id === draggedItem.id)) return;
        targetListSetter([...targetList, draggedItem]);
        sourceListSetter(sourceList.filter(t => t.id !== draggedItem.id));
        setDraggedItem(null);
    };
 console.log(draggedItem,"draggedItem");
 
    return (
        <div style={{ display: 'flex', gap: 20, padding: 20 }}>
            {/* Available Tasks */}
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(setAvailable, available, setCompleted, completed)}
                style={{ border: '1px solid #ccc', padding: 10, width: 200 }}
            >
                <h3>Available Tasks</h3>
                {available.map(task => (
                    <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task)}
                        style={{ padding: 8, margin: 4, background: '#e0f7fa', borderRadius: 4 }}
                    >
                        {task.name}
                    </div>
                ))}
            </div>
            {/* Completed Tasks */}
            <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(setCompleted, completed, setAvailable, available)}
                style={{ border: '1px solid #ccc', padding: 10, width: 200 }}
            >
                <h3>Completed Tasks</h3>
                {completed.map(task => (
                    <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task)}
                        style={{ padding: 8, margin: 4, background: '#dcedc8', borderRadius: 4 }}
                    >
                        {task.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
