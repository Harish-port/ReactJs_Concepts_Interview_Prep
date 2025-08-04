import React, { useState } from 'react'

function PracticeDrag() {
  const intialTasks = [
    { id: 1, name: 'Task One', },
    { id: 2, name: 'Task Two', }
  ];
  const [availableTasks, setAvailableTasks] = useState(intialTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (draggedItem) => {
    setDraggedItem(draggedItem)
  };

  const handleDrop = (targetListSetter, targetList, sourceListSetter, sourceList) => {
    if (!draggedItem) return;
    if (targetList.find((list) => list.id === draggedItem.id)) return;
    targetListSetter([...targetList, draggedItem]);
    sourceListSetter(sourceList.filter((list) => list.id !== draggedItem.id));
    setDraggedItem(null)
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <div onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(setAvailableTasks, availableTasks, setCompletedTasks, completedTasks)} style={{ width: 250, border: "1px solid grey", padding: "10px" }}>
        <h4>Avaialable Tasks</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {availableTasks.map((tasks) => (
            <div key={tasks.id} draggable onDragStart={() => handleDragStart(tasks)} style={{ padding: "10px", backgroundColor: "aqua" }} >
              {tasks.name}
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: 250, border: "1px solid grey", padding: "10px" }} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(setCompletedTasks, completedTasks, setAvailableTasks, availableTasks)}>
        <h4>Completed Tasks</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {completedTasks.map((tasks) => (
            <div key={tasks.id} draggable onDragStart={() => handleDragStart(tasks)} style={{ padding: "10px", backgroundColor: "green", color: 'white' }} >
              {tasks.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PracticeDrag