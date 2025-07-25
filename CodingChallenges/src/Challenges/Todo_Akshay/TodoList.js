import { useState } from "react"
import './style.css';

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([])

    const handleSubmit = () => {
        if (inputValue.trim() === '') return;
        const item = {
            id: todos.length + 1,
            text: inputValue,
            completed: false
        }
        setTodos(prev => [...prev, item])
        setInputValue("");
    };
    const handleCheckbox = (selectedId) => {
        setTodos(todos.map((todo) => {
            if (selectedId === todo.id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        }))

    }
    const handleDelete = (selectedId) => {
        setTodos(
            todos.filter((todo) => (
                (todo.id !== selectedId)
            ))
        )
    }
    return (
        <div>
            <input type="text" placeholder='Enter Todo' value={inputValue} onChange={(e) => setInputValue(e.target.value)} required />
            <button onClick={() => handleSubmit()}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" onChange={() => handleCheckbox(todo.id)} />
                        <span className={todo.completed ? "completed" : ""}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList