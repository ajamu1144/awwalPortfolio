import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
// import "./TodoApp.css";

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() === "") return;
        setTasks([...tasks, input]);
        setInput("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1>My To-Do List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={input}
                    placeholder="Enter a task..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <span>{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
