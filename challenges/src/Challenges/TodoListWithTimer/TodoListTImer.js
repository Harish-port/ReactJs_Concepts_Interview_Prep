import React, { useState, useEffect, useRef } from 'react';

export default function TodoWithTimer() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const timersRef = useRef({}); // Keep track of interval IDs per todo

    const formatTime = (secs) => {
        const min = Math.floor(secs / 60);
        const sec = secs % 60;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    };

    const addTodo = () => {
        if (!input.trim()) return;
        const newTodo = {
            id: Date.now(),
            text: input,
            time: 0,
            isRunning: false,
        };
        setTodos([...todos, newTodo]);
        setInput('');
    };

    const startTimer = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isRunning: true } : todo
            )
        );
        timersRef.current[id] = setInterval(() => {
            setTodos(prev =>
                prev.map(todo =>
                    todo.id === id ? { ...todo, time: todo.time + 1 } : todo
                )
            );
        }, 1000);
    };

    const pauseTimer = (id) => {
        clearInterval(timersRef.current[id]);
        timersRef.current[id] = null;
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isRunning: false } : todo
            )
        );
    };

    const resetTimer = (id) => {
        clearInterval(timersRef.current[id]);
        timersRef.current[id] = null;
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, time: 0, isRunning: false } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        clearInterval(timersRef.current[id]);
        delete timersRef.current[id];
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
            <h2>Todo with Timer</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ marginTop: 20, border: '1px solid #ddd', padding: 10 }}>
                        <div>{todo.text}</div>
                        <div>{formatTime(todo.time)}</div>
                        <div style={{ marginTop: 10, display: 'flex', gap: 10 }}>
                            {todo.isRunning ? (
                                <button onClick={() => pauseTimer(todo.id)}>Pause</button>
                            ) : (
                                <button onClick={() => startTimer(todo.id)}>Start</button>
                            )}
                            <button onClick={() => resetTimer(todo.id)}>Reset</button>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
