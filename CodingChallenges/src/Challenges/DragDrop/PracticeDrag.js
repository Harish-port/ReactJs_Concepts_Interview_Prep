import React, { useState } from 'react';

function PracticeDrag() {
  const initialTasks = [
    { id: 1, name: 'Task One' },
    { id: 2, name: 'Task Two' },
  ];
  const [availableTasks, setAvailablesTaks] = useState(initialTasks);
  const [completedTaksj, setCompletedTaksj] = useState([]);
  const [draggedItem, setDraggedItem] = useState([]);
  const handleDragStart = (draggedtask) => {
    setDraggedItem(draggedtask)
  }
  const handleOnDrop = (targetListSetter, setTargetListSetter, sourceListSetter, setSourceListSetter) => {
    if (!draggedItem) return;
    if (targetListSetter.find(task => task.id === draggedItem.id)) return;
    setTargetListSetter([...targetListSetter, draggedItem]);
    setSourceListSetter(sourceListSetter.filter((tasks) => tasks.id !== draggedItem.id))
  }
  return (
    <div>
      <h1>Practice Drop</h1>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <div onDragOver={(e) => e.preventDefault()} onDrop={() => handleOnDrop(availableTasks, setAvailablesTaks, completedTaksj, setCompletedTaksj)} style={{ border: "1px solid grey", padding: "15px" }}>
          <h4>Available Tasks</h4>
          {availableTasks.map((tasks) => (
            <div draggable onDragStart={() => handleDragStart(tasks)} key={tasks.id} style={{ backgroundColor: "aqua", padding: "10px", display: "flex", flexDirection: 'column', marginBottom: "10px" }}>
              {tasks.name}
            </div>
          ))}
        </div>
        <div onDragOver={(e) => e.preventDefault()} onDrop={() => handleOnDrop(completedTaksj, setCompletedTaksj, availableTasks, setAvailablesTaks,)} style={{ border: "1px solid grey", padding: "15px" }}>
          <h4>Completed Tasks</h4>
          {completedTaksj.map((tasks) => (
            <div draggable key={tasks.id} onDragStart={() => handleDragStart(tasks)} style={{ backgroundColor: "green", color: "white", padding: "10px", display: "flex", flexDirection: 'column', marginBottom: "10px" }}>
              {tasks.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PracticeDrag;