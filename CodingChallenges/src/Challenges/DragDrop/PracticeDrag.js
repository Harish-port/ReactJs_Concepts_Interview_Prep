import { useState } from "react"
import DragDropTasks from "./DragDrop";

function PracticeDrag() {
    const initialTasks = [
        { id: 1, name: 'Task 1' },
        { id: 2, name: 'Task 2' },
        { id: 3, name: 'Task 3' },
    ]
    const [availableTasks, setavailableTasks] = useState(initialTasks)
    const [completedTasks, setCompletedTasks] = useState([]);
    const [draggedItem, setDraggedItem] = useState(null);
    const handleDragStart = (item) => {
        setDraggedItem(item)
    }
    console.log(draggedItem, "|draggedItem");
    const handleDrop = (targetListSetter, targetList, sourceListSetter, sourceList) => {
        if (!draggedItem) return;
        if (targetList.find(t => t.id === draggedItem.id)) return;
        targetListSetter([...targetList, draggedItem]);
        sourceListSetter(sourceList.filter((item => item.id !== draggedItem.id)));
        setDraggedItem(null);
    }
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Practice Drag and Drop</h1>
                <p>This is a practice component for drag and drop functionality.</p>
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(setavailableTasks, availableTasks, setCompletedTasks, completedTasks)}
                    style={{ display: 'flex', justifyContent: 'center', gap: 20, padding: 20 }}>
                    <div style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
                        <h3>Available Tasks</h3>
                        {
                            availableTasks.map((tasks) => (
                                <div key={tasks.id}
                                    onDragStart={() => handleDragStart(tasks)}
                                    draggable style={{ background: '#e0f7fa', padding: 8, margin: 4, borderRadius: 4 }}>
                                    {tasks.name}
                                </div>
                            ))
                        }
                    </div>
                    {/* //Completed tasks */}
                    <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(setCompletedTasks, completedTasks, setavailableTasks, availableTasks,)}
                        style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
                        <h3>Completed Tasks</h3>
                        {
                            completedTasks.map((tasks) => (
                                <div key={tasks.id}
                                    onDragStart={() => handleDragStart(tasks)}
                                    draggable style={{ background: '#dcedc8', padding: 8, margin: 4, borderRadius: 4 }}>
                                    {tasks.name}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <>
                <DragDropTasks />
            </>
        </>
    )
}

export default PracticeDrag