import React from 'react';

function ToDoList({tasks}) {
    return (
        <div>
            <h2>Tasks:</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;